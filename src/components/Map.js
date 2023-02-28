import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './css/Cards.css'
import React from 'react'
 
function Map() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

  };


  const slidesData = [
    {
      id: 1,
      src: 'https://www.rd.com/wp-content/uploads/2018/02/30_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_124167640_YamabikaY.jpg?fit=700,467',
      title: 'repellendus id ullam',
      label: 'Dolorem officiis temporibus.'
    }, {
      id: 2,
      src: 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVwcHl8ZW58MHx8MHx8&w=1000&q=80',
      title: 'excepturi consequatur est',
      label: 'Officia non provident dolor esse et neque.'
    }, 
  ];

  return (
    <div className="content">
      This page will show the fortnite mapddd

      <Slider {...settings}>
        {slidesData.map((slide) =>
         <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={slide.src} alt={slide.title} />
              <label className="slick-slide-label">{slide.label}</label>
          </div>
        )}
      </Slider>

    </div>
  );
}

export default Map;