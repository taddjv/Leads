import React, { useContext } from "react";
import { Context } from "../../App";
import PhoneInput from "react-phone-number-input";

const Quote2 = () => {
  const name = useContext(Context)[0];
  const setName = useContext(Context)[1];
  const email = useContext(Context)[2];
  const setEmail = useContext(Context)[3];
  const number = useContext(Context)[4];
  const setNumber = useContext(Context)[5];

  return (
    <>
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
          value={number}
          onChange={setNumber}
          placeholder="(555) 555-555"
          defaultCountry="CA"
        />
      </div>
    </>
  );
};

export default Quote2;
