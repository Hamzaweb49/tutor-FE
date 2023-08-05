import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Settings } from "components/SlickSettings";

const Banner = () => {
  return (
    <div className="hero_slider relative mx-auto overflow-hidden">
      <Slider {...Settings}>
        <div>
          <Link to="/tutor" className="h-[calc(100vh-18vh)] relative block">
            <div className="bg-black/10 hover:bg-black/20 absolute inset-0 z-50 w-full h-full" />
            <img
              className="object-cover w-full"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHV0b3JzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            />
          </Link>
        </div>
        <div>
          <Link to="/tutor" className="h-[calc(100vh-18vh)] relative block">
            <div className="bg-black/10 hover:bg-black/20 absolute inset-0 z-50 w-full h-full" />
            <img
              className="object-cover w-full"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHV0b3JzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
