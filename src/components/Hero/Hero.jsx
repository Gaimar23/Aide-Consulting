import React from "react";
import "./Hero.scss";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuPlaneTakeoff } from "react-icons/lu";
import imageHead from "../../assets/images/1.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero">
        <div className="head">
          <div className="top">
            <h3>Immigration</h3>
          </div>
          <div className="bottom">
            <GiCommercialAirplane className="icon" />
            <h4>Immigrer en toute sérenité</h4>
          </div>
        </div>
        <div className="middle">
          <div className="left">
            <h1 className="title">
              L'assurance d'un projet d'immigration réussie avec aide consulting
            </h1>
            <div className="archievements">
              <div className="counter-container">
                <div className="counter">
                  <div className="percent">
                    <svg>
                      <circle cx="105" cy="105" r="40"></circle>
                      <circle
                        cx="105"
                        cy="105"
                        r="40"
                        style={{ "--percent": 80 }}
                      ></circle>
                    </svg>
                    <div className="number">
                      <h3>
                        99<span>%</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <span>Procédures bouclées</span>
              </div>
              <div className="counter-container">
                <div className="counter">
                  <div className="percent">
                    <svg>
                      <circle cx="105" cy="105" r="40"></circle>
                      <circle
                        cx="105"
                        cy="105"
                        r="40"
                        style={{ "--percent": 80 }}
                      ></circle>
                    </svg>
                    <div className="number">
                      <h3>
                        {/* 99<span>%</span> */}
                        350
                      </h3>
                    </div>
                  </div>
                </div>
                <span>Clients satisfaits</span>
              </div>
            </div>
            <div className="actions">
              <button>Démarrer</button>
              <button>Discuter</button>
            </div>
          </div>
          <div className="right">
            <div className="image-container">
              <div className="item">
                <img src={imageHead} alt="" />
                <div className="text">image 01</div>
              </div>
              <div className="item">
                <img src={imageHead} alt="" />
                <div className="text">image 05</div>
              </div>
              <div className="item">
                <img src={imageHead} alt="" />
                <div className="text">image 08</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
