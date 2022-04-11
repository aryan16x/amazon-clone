import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-83aaace1-3181-47e7-95fd-18a3096a9c6f._CB418072165_QL85_V1_.jpg"
          alt="home-page"
        />

        <div className="homeRow">
          <Product
            id={99999901}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={99999902}
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
            price={99.99}
            image="https://m.media-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="homeRow">
          <Product
            id={99999903}
            title="Noise Air Buds+ Truly Wireless Earbuds with Instacharge & Hypersync Technology, Silicone tip, Superb Calling & 20 Hour Playtime - Pearl White"
            price={32.91}
            image="https://m.media-amazon.com/images/I/51IMKrvd3cL._SX466_.jpg"
            rating={4}
          />
          <Product
            id={99999904}
            title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Pitch Black)"
            price={36.85}
            image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SX466_.jpg"
            rating={4}
          />
          <Product
            id={99999905}
            title="Garmin Forerunner 245, GPS Running Smartwatch with Advanced Dynamics, Slate Gray"
            price={341.99}
            image="https://m.media-amazon.com/images/I/51Wzel4ZD-L._SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="homeRow">
          <Product
            id={99999906}
            title="Sony Bravia 215 cm (85 Inches) 4K Ultra HD Smart LED Google TV KD-85X85J (Black) (2021 Model) | with Alexa Compatibility"
            price={5628.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51CuH8f7A2S._SY300_SX300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
