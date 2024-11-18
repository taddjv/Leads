import React, { useEffect, useContext } from "react";
import { Context } from "../../App";
import $ from "jquery";
import formatCurrency from "../../assets/jQuery";

const Quote1 = () => {
  const age = useContext(Context)[8];
  const setAge = useContext(Context)[9];
  const setSex = useContext(Context)[11];
  const money = useContext(Context)[14];
  const setSmoke = useContext(Context)[13];
  const setMoney = useContext(Context)[15];

  useEffect(() => {
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
    <>
      <div className="qf-radio-container-flex">
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
              onChange={(e) => setSex(e.target.value)}
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
              onChange={(e) => setSex(e.target.value)}
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
              value={false}
              name="fumeur"
              id="fumeur2"
              defaultChecked
              onChange={(e) => setSmoke(e.target.value)}
            />
            <label className="qfr-label" for="fumeur2">
              Non
            </label>
            <input
              className="qfr-radio"
              type="radio"
              value={true}
              name="fumeur"
              id="fumeur1"
              onChange={(e) => setSmoke(e.target.value)}
            />
            <label className="qfr-label" for="fumeur1">
              Oui
            </label>
          </div>
        </div>
      </div>
      <div className="qf-date">
        <div className="qfr-title">votre date de naissance</div>
        <input
          type="date"
          className="qfd-input"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </div>
      <div className="qf-money">
        <div className="qfr-title">capital a couvrir</div>
        <input
          type="text"
          className="qfd-input"
          placeholder="$100 000"
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          data-type="currency"
          onChange={(e) => setMoney(e.target.value)}
        />
      </div>{" "}
    </>
  );
};

export default Quote1;
