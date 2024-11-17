import React, { useState, useRef, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import "./Quote.css";
import $ from "jquery";
import formatCurrency from "../../assets/jQuery";

const Quote = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // const label = document.createElement("LABEL");
    // const content = document.createTextNode("Téléphone *");
    // label.appendChild(content);
    // document.querySelector(".PhoneInput").appendChild(label);
    $("input[data-type='currency']").on({
      keyup: function () {
        formatCurrency($(this));
      },
      blur: function () {
        formatCurrency($(this), "blur");
      },
    });
  }, []);

  return (
    <div className="quote">
      <form className="quote-form">
        <div className="qf-title"> Vos Coordonnées</div>
        {/* <div className="qf-radio-container-flex">
          <div className="qf-radio-container">
            <div className="qfr-title">Votre sexe</div>
            <div className="qf-radio">
              <input
                className="qfr-radio"
                type="radio"
                value="homme"
                name="sex"
                id="sex1"
                defaultChecked
              />
              <label className="qfr-label" for="sex1">
                Homme
              </label>
              <input
                className="qfr-radio"
                type="radio"
                value="femme"
                name="sex"
                id="sex2"
              />
              <label className="qfr-label" for="sex2">
                Femme
              </label>
            </div>
          </div>
          <div className="qf-radio-container">
            <div className="qfr-title">Etes vous fumeur</div>
            <div className="qf-radio">
              <input
                className="qfr-radio"
                type="radio"
                value="non"
                name="fumeur"
                id="fumeur2"
                defaultChecked
              />
              <label className="qfr-label" for="fumeur2">
                Non
              </label>
              <input
                className="qfr-radio"
                type="radio"
                value="oui"
                name="fumeur"
                id="fumeur1"
              />
              <label className="qfr-label" for="fumeur1">
                Oui
              </label>
            </div>
          </div>
        </div>
        <div className="qf-date">
          <div className="qfr-title">votre date de naissance</div>
          <input type="date" className="qfd-input" />
        </div>
        <div className="qf-money">
          <div className="qfr-title">capital a couvrir</div>
          <input
            type="text"
            className="qfd-input"
            placeholder="$100 000"
            pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
            data-type="currency"
          />
        </div> */}
        <div className="qf-input">
          <label>Nom Complet</label>
          <input
            type="text"
            required={true}
            id="nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ex: Jean Dupont"
          />
        </div>
        <div className="qf-input">
          <label>Courriel</label>
          <input
            type="email"
            id="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ex: Jean@Dupont.com"
          />
        </div>
        <div className="qf-input">
          <label>Numero de telephone</label>
          <PhoneInput
            id="phone"
            required={true}
            value={phone}
            onChange={setPhone}
            placeholder="(555) 555-555"
            defaultCountry="CA"
          />
        </div>
        <button className="">Obtenir ma Soumission</button>
      </form>
    </div>
  );
};
export default Quote;
