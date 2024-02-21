import React, { useState } from "react";
import "./style.css";

function Carousel({ data }) {
  const [slide, setSlide] = useState(0);
  return (
    <div className="carousel">
      {data.map((item, idx) => {
        return (
          <img
            key={item.alt}
            src={item.src}
            alt={item.alt}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}

      <span className="indicators">
        {data.map((indicator, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
