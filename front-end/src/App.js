import './App.css';
import Home from './component/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Loging from './component/Loging/Loging';
import Services from './component/Services/Services';
import Register from './component/Register/Register';
import Header from './component/Header/Heager';
import Logout from './component/pages/Logout';
import Error from './component/pages/Error';
import TodoList from './component/to_do/TodoList';
function App() {
  return (
   <>
   <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Loging/>}/>
    <Route path='/signin' element={<Register/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/todo'    element={<TodoList/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
   </>
  );
}

export default App;
