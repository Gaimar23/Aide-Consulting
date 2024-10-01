import React from "react";
import "./Testimonies.scss";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

const Testimonies = () => {
  return (
    <div className="testimonies-container">
      <div className="sub-container">
        <div className="left">
          <div className="card-container">
            <div className="item">
              <div className="identification">
                <div className="name-country">
                  <span className="name">Frederic Samo</span>
                  <h4 className="country">Cameroun</h4>
                </div>
                <div className="age">35 ans</div>
              </div>
              <div className="message">
                J'ai réussi mon projet d'immigration du cameroun pour le Canada
                il y a 1.5 an grâce à AIDE CONSULTING qui m'a assité à toutes
                les étapes du processus. Alors Un Bravo à l'équipe AIDE
                CONSULTING
              </div>
              <div className="stars">
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
                <IoIosStar className="star-icon" />
              </div>
              <div className="image-container">
                <img src="" alt="" />
              </div>
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
              <div className="title">Ce qu'ils disent de nous</div>
            </div>
            <h1 className="sub-title">Quelques Témoignages</h1>
          </div>
          <div className="bottom">
            <p className="detail">
              Vous hésitez à vous lancer, alors écoutez ce qu'ils disent de
              nous.
            </p>
            {/* <p className="detail-two">
              Vous avez accès un suivi personnalisé selon votre profil et ce
              dans le respect des lois d'immigration en vigueur.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
