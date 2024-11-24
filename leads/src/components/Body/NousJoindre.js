import React, { useEffect, useContext } from "react";
import { Context } from "../../App";
import letter from "../../assets/letter-cropped.svg";

const NousJoindre = () => {
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  let message;
  let setMessage;

  return (
    <div className="nousjoindre" style={{ background: "#f77162" }}>
      <div className="nj-left">
        <img src={letter} alt="letter" />
      </div>
      <div className="nj-right">
        <div className="njr-title">Nous Joindre</div>
        <div className="njr-form">
          <div className="qf-input">
            <label
              style={{
                color: "white",
              }}
            >
              Courriel
            </label>
            <input
              type="email"
              id="email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: Jean@Dupont.com"
            />
          </div>
          <div className="qf-input stetch">
            <label
              style={{
                color: "white",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="ex: Bonjour !"
            />
          </div>
          <button
            className="hr-button"
            style={{
              // background: "#f77162",
              fontSize: "1rem",
              padding: "12px 18px",
            }}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};
export default NousJoindre;
