import React, { useContext } from "react";
import { Context } from "../../App";
import letter from "../../assets/letter-cropped-svg.svg";

const NousJoindre = () => {
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  let message;
  let setMessage;
  const position = useContext(Context)[16];

  return (
    <div
      className={`nousjoindre position-${position[4]}`}
      style={{ background: "#bdb8fa" }}
    >
      {window.innerWidth < 1000 ? (
        <div className="njr-title">Nous Joindre</div>
      ) : null}
      <div className="nj-left">
        <img src={letter} alt="letter" />
      </div>
      <div className="nj-right">
        {window.innerWidth > 1000 ? (
          <div className="njr-title">Nous Joindre</div>
        ) : null}
        <div className="njr-form">
          <div className="qf-input">
            <label
              style={{
                color: "#0c0654",
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
                color: "#0c0654",
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
