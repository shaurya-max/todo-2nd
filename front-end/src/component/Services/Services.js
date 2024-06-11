import React from 'react';
import ServiceCard from '../pages/ServiceCard';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-grid">
        <ServiceCard
          title="Food Services"
          description="Review and explore the best food services in your area."
          path="/services/food"
          imageSrc="/images/food.jpg"
        />
        <ServiceCard
          title="Online Shopping"
          description="Share your experiences with various online shopping platforms."
          path="/services/shopping"
          imageSrc="/images/shopping.jpg"
        />
        <ServiceCard
          title="Film Review"
          description="Write and read reviews of the latest films."
          path="/services/film"
          imageSrc="/images/film.jpeg"
        />
        <ServiceCard
          title="TV Series Review"
          description="Discuss and review your favorite TV series."
          path="/services/tv"
          imageSrc="/images/tv.jpg"
        />
        <ServiceCard
          title="Cartoon Review"
          description="Share your thoughts on popular cartoons."
          path="/services/cartoon"
          imageSrc="/images/cartoon.jpg"
        />
        <ServiceCard
          title="Sports Review"
          description="Give reviews on recent sports events and teams."
          path="/services/sports"
          imageSrc="./public/"
        />
      </div>
    </div>
  );
};

export default Services;
