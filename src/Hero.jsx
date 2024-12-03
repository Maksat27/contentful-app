import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            pariatur, fuga accusantium sunt tempore mollitia ex voluptatibus
            commodi? Corporis ullam quos eum illum illo officia. Excepturi a
            quibusdam nihil explicabo!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
