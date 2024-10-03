import React from "react";
import "./ActionCards.scss";
import { PiStudentFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMailUnread } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeoplePulling } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";

const ActionCards = () => {
  return (
    <div className="action-cards-container">
      <div className="action-cards">
        <div className="card">
          <div className="head">
            <FaPeopleGroup className="icon" />
            <p className="title">Une expertise en immigration</p>
          </div>
          <div className="bottom">
            <p className="desc">
              Nous sommes une équipe d'expert en immigration fort de plus de 10
              ans d'expérience.
            </p>

            <div className="actions">
              <a href="#contact-us">
                <IoMailUnread className="action-icon" />
              </a>
              <a href="https://wa.me/237698533669">
                <RiWhatsappFill className="action-icon" color="green" />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="head">
            <FaPeoplePulling className="icon" />
            <p className="title">Accompagnement en temps réel</p>
          </div>
          <div className="bottom">
            <p className="desc">
              Nous sommes une équipe d'expert en immigration fort de plus de 10
              ans d'expérience.
            </p>

            <div className="actions">
              <a href="#contact-us">
                <IoMailUnread className="action-icon" />
              </a>
              <a href="https://wa.me/237698533669">
                <RiWhatsappFill className="action-icon" color="green" />
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="head">
            <FaHandshakeSimple className="icon" />
            <p className="title">Prendre rendez-vous</p>
          </div>
          <div className="bottom">
            <p className="desc">
              Nous sommes une équipe d'expert en immigration fort de plus de 10
              ans d'expérience.
            </p>

            <div className="actions">
              <a href="#contact-us">
                <IoMailUnread className="action-icon" />
              </a>
              <a href="https://wa.me/237698533669">
                <RiWhatsappFill className="action-icon" color="green" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;
