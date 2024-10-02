import React from "react";
import "./Services.scss";
import { MdOutlineSchool } from "react-icons/md";
import product from "../../assets/images/1.jpg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import students from "../../assets/images/offers/students.jpg";
import workers from "../../assets/images/offers/workers.jpg";
import interview from "../../assets/images/offers/interview.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <div className="right">
          <div className="head">
            <div className="title-container">
              <div className="slash">
                <span className="one"></span>
                <span className="two"></span>
              </div>
              <div className="title">Faites vous assister</div>
            </div>
            <h1 className="sub-title">Nos services</h1>
          </div>
          <div className="bottom">
            <p className="detail">
              AIDE CONSULTING a pour objectif unique de vous accompagner dans
              vos différents projets d'immigration, que vous soyez étudiant ou
              travailleur.
            </p>
            <p className="detail-two">
              Vous avez accès un suivi personnalisé selon votre profil et ce
              dans le respect des lois d'immigration en vigueur.
            </p>
          </div>
        </div>
        <div className="left">
          <div className="item">
            <div className="image-container">
              <img src={students} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineSchool className="icon" />
                </div>
                <div className="detail">Etudes</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={workers} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineWorkOutline className="icon" />
                </div>
                <div className="detail">Travail</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={interview} alt="" />
              <div className="info">
                <div className="icon-container">
                  <FaRegHandshake className="icon" />
                </div>
                <div className="detail">Entretien</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={workers} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineSchool className="icon" />
                </div>
                <div className="detail">Etudes</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={students} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineSchool className="icon" />
                </div>
                <div className="detail">Etudes</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={interview} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineSchool className="icon" />
                </div>
                <div className="detail">Etudes</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={workers} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineSchool className="icon" />
                </div>
                <div className="detail">Etudes</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={product} alt="" />
              <div className="info">
                <div className="icon-container">
                  <MdOutlineSchool className="icon" />
                </div>
                <div className="detail">Etudes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
