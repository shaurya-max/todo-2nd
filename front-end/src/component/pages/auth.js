import { createContext, useContext,useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token , setToken] = useState(localStorage.getItem('token'))
  const storeTokenInLs = (serverToken) => {
    return localStorage.setItem('token', serverToken);
  };
 let isLoggedIn = !!token;

  //logout
const LogoutUser =()=>{
    setToken("");
    return localStorage.removeItem('token')
}

  return (
    <AuthContext.Provider value={{ isLoggedIn,storeTokenInLs , LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);

  if (!AuthContextValue) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return AuthContextValue;
};
