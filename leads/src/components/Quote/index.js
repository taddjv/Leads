import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { validData } from "../../assets/helpers";
import { Context } from "../../App";
import Quote1 from "./Quote1";
import Quote2 from "./Quote2";
import "./Quote copy.css";
import arrow from "../../assets/arrow.svg";

const Quote = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const name = useContext(Context)[0];
  const setName = useContext(Context)[1];
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  const number = useContext(Context)[4];
  const setNumber = useContext(Context)[5];
  const type = useContext(Context)[6];
  const age = useContext(Context)[8];
  const setAge = useContext(Context)[9];
  const sex = useContext(Context)[10];
  const setSex = useContext(Context)[11];
  const smoke = useContext(Context)[12];
  const setSmoke = useContext(Context)[13];
  const money = useContext(Context)[14];
  const setMoney = useContext(Context)[15];

  const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = "service_4sn6l6j";
    const templateId = "template_2fqpcut";
    const publicKey = "vktr9vYp-nh4im-e9";

    const templateParams = {
      name,
      email,
      number,
      type,
      age,
      sex,
      smoke,
      money,
    };

    const info = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    };

    try {
      // const res = axios.post(
      //   "https://api.emailjs.com/api/v1.0/email/send",
      //   info
      // );
      setName("");
      setEmail("");
      setNumber("");
      setAge("");
      setSex("homme");
      setSmoke(true);
      setMoney("");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    validData(name, email, number, type, age, sex, smoke, money);
  }, [useContext(Context)]);

  return (
    <div className="quote">
      <div className="quote-progress">
        <div className="qp-set">
          <div className={step === 1 ? "qps-t" : "qfr-title"}>Description</div>
          <div
            className="qps-bar"
            style={{ background: step === 1 ? "#0c0961" : "#888b8c" }}
          ></div>
        </div>
        <div className="qp-set">
          <div className={step === 2 ? "qps-t" : "qfr-title"}>Coordonnées</div>
          <div
            className="qps-bar"
            style={{ background: step === 2 ? "#0c0961" : "#888b8c" }}
          ></div>
        </div>
      </div>
      <form className="quote-form" onSubmit={handleSubmit}>
        {/* {step === 1 ? (
          <div className="qf-title">Votre Description</div>
        ) : (
          <div className="qf-title"> Vos Coordonnées</div>
        )} */}

        {step === 1 ? <Quote1 /> : <Quote2 />}
        <div className="qf-buttons">
          <div
            onClick={() => {
              setStep(1);
            }}
            className={step === 2 ? "qf-button-active" : "qf-button"}
          >
            <img src={arrow} alt="arrow" />
          </div>
          {/* <div className="qf-bar">
            <div className="qf-bar-prog"></div>
          </div> */}
          <div
            onClick={() => {
              setStep(2);
            }}
            className={step === 1 ? "qf-button-active" : "qf-button"}
          >
            {/* Suivant */}
            <img className="qf-button-flip" src={arrow} alt="arrow" />
          </div>
        </div>
        {validData(name, email, number, type, age, sex, smoke, money) ? (
          <button className="qf-submit">Obtenir ma Soumission</button>
        ) : null}
        <div className="qf-notice">
          Vos informations sont protégées et confidentielles.
        </div>
      </form>
    </div>
  );
};
export default Quote;
