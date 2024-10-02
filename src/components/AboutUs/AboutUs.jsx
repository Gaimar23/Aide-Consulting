import React from "react";
import "./AboutUs.scss";
import about01 from "../../assets/images/about1.jpg";
import { TbPointFilled } from "react-icons/tb";
import { GoPaperAirplane } from "react-icons/go";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <div className="left">
          <div className="image-container">
            <img src={about01} alt="" className="first" />
            <img src={about01} alt="" className="second" />
            <div className="hours-invested">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#0050d7",
                }}
                className="hours"
              >
                <span
                  style={{
                    backgroundColor: "gray",
                    padding: "3px 5px",
                    borderRadius: "50% 0 0 50%",
                  }}
                >
                  +20
                </span>
                ,000
              </span>
              <p style={{ color: "#0050d7", fontSize: "15px" }}>
                Heures investies
              </p>
            </div>
            <div className="years-of-experience">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "800",
                  color: "#0050d7",
                }}
                className="years"
              >
                <span
                  style={{
                    backgroundColor: "gray",
                    padding: "3px 5px",
                    borderRadius: "50% 0 0 50%",
                  }}
                >
                  +15
                </span>
              </span>
              <p style={{ color: "#0050d7", fontSize: "15px" }}>
                ans d'expérience
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="head">
            <div className="title-container">
              <div className="slash">
                <span className="one"></span>
                <span className="two"></span>
              </div>
              <div className="title">A PROPOS DE AC</div>
            </div>
            <h1 className="sub-title">Notre source d'inspiration</h1>
          </div>
          <div className="bottom">
            <div className="desc">
              <p className="first">
                Parce que vous compter à nos yeux, notre but est vous
                accompagner dans toutes vos démarches, à chaque étape jusqu'à la
                réalisation de votre projet d'immigration
              </p>
              <p className="second">
                Parce que vous compter à nos yeux, notre but est vous
                accompagner dans toutes vos démarches, à chaque étape jusqu'à la
                réalisation de votre projet d'immigration
              </p>
            </div>
            <div className="qualities">
              <div className="item">
                <div className="icon-container">
                  <TbPointFilled className="item-icon" />
                </div>
                <p className="detail">
                  <span className="point">Rapidité: </span> Parce que vous
                  compter à nos yeux, notre but est vous accompagner dans toutes
                  vos démarches, à chaque étape jusqu'à la réalisation de votre
                  projet d'immigration
                </p>
              </div>
              <div className="item">
                <div className="icon-container">
                  <TbPointFilled className="item-icon" />
                </div>
                <p className="detail">
                  <span className="point">Transparence: </span> Parce que vous
                  compter à nos yeux, notre but est vous accompagner dans toutes
                  vos démarches, à chaque étape jusqu'à la réalisation de votre
                  projet d'immigration
                </p>
              </div>
              <div className="item">
                <div className="icon-container">
                  <TbPointFilled className="item-icon" />
                </div>
                <p className="detail">
                  <span className="point">Efficacité: </span> Parce que vous
                  compter à nos yeux, notre but est vous accompagner dans toutes
                  vos démarches, à chaque étape jusqu'à la réalisation de votre
                  projet d'immigration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
