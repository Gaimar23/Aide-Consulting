import React from "react";
import "./Contact.scss";
import about01 from "../../assets/images/about1.jpg";
import team3 from "../../assets/images/team5.jpg";
import team4 from "../../assets/images/team3.jpg";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="sub-contact">
        <div className="contact-head">
          <div className="slash">
            <span className="first"></span>
            <span className="second"></span>
          </div>
          <div className="title">Contact</div>
          <h1 className="sub-title" id="contact-us">
            Envoyez nous un message
          </h1>
        </div>
        <div className="contact">
          <div className="left">
            <form>
              <div className="nom">
                <label>Nom</label>
                <input type="text" />
              </div>
              <div className="email">
                <label>Email</label>
                <input type="email" />
              </div>
              <div className="phone">
                <label>Phone</label>
                <input type="text" />
              </div>
              <div className="message">
                <label>Message</label>
                <textarea rows={5}></textarea>
              </div>
              <div className="button-container">
                <button type="submit">Envoyer</button>
                <a href="https://wa.me/237696429766">
                  <RiWhatsappFill className="icon" />
                </a>
              </div>
            </form>
          </div>
          <div className="right">
            <div className="image-container">
              <img src={team4} alt="" className="first" />
              <img src={team3} alt="" className="second" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
