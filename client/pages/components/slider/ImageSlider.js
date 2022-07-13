import React, { useState } from "react";
import { ImageData } from "./ImageData";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ImageSlider(sliders) {
  const [current, setCurrent] = useState(0);
  const length = sliders.length;

  return (
    <div className="w-11/12 m-auto">
      <style jsx>{`
        .imageSlider {
          width: 800px;
          height: 500px;
          border-radius: 10px;
        }
      `}</style>
      <h1 className="text-center italic font-serif mb-3 text-4xl text-sky-800">
        Real Estate Library
      </h1>
      <Zoom scale={0.5}>
        {ImageData.map((each, index) => (
          <img
            key={index}
            style={{ width: "100%" }}
            src={each.image}
            className="imageSlider"
          />
        ))}
      </Zoom>
    </div>
  );
}
