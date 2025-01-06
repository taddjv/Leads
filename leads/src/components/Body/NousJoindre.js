import React, { useContext } from "react";
import { Context } from "../../App";
import letter from "../../assets/letter-cropped-svg.svg";

const NousJoindre = () => {
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  let message;
  let setMessage;

  return (
    <section>
      <div className="nj-container">
        {" "}
        <div className="njr-title">Nous Joindre</div>
        <div className={`nousjoindre`} style={{ background: "#DDE8FD" }}>
          <div className="nj-left">
            <img src={letter} alt="letter" />
          </div>
          <div className="nj-right">
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
      </div>
    </section>
  );
};
export default NousJoindre;
