import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, path, imageSrc }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <img src={imageSrc} alt='service' className='ser_img'/>
      <p>{description}</p>
      <Link to={path} className="service-card-link">OUR SERVICES</Link>
    </div>
  );
};

export default ServiceCard;
