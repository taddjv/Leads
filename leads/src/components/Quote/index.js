import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "./Quote.css";

const Quote = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const label = document.createElement("LABEL");
    const content = document.createTextNode("Téléphone *");
    label.appendChild(content);
    document.querySelector(".PhoneInput").appendChild(label);
  }, []);

  return (
    <div className="quote">
      <form className="quote-form">
        <div className="qf-title"> Vos Coordonnées</div>
        <div className="qf-subtitle">
          Pour trouver l'assureur qui vous convient le mieux.
        </div>
        <div className="qf-input">
          <input
            type="text"
            required={true}
            id="nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" "
          />
          <label>Nom Complet *</label>
        </div>
        <div className="qf-input">
          <input
            type="email"
            id="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <label>Courriel *</label>
        </div>
        <div className="qf-input">
          <PhoneInput
            id="phone"
            required={true}
            value={phone}
            onChange={setPhone}
            placeholder=" "
            defaultCountry="CA"
          />
        </div>
      </form>
    </div>
  );
};
export default Quote;
