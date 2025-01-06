import React, { useState, createContext } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Body from "./components/Body";
import QuotePage from "./components/QuotePage";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import avt from "./assets/AVT.svg";
// import avp from "./assets/AVT.svg";

export const Context = createContext();

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("homme");
  const [smoke, setSmoke] = useState(false);
  const [money, setMoney] = useState("");
  const [postiton, setPosition] = useState("0,-");
  const [active, setActive] = useState(false);

  const scrollEvent = (e) => {
    const before = Number(postiton.split(",")[0]);
    if (before < e.target.scrollTop) {
      setPosition(`${e.target.scrollTop},d`);
    } else {
      setPosition(`${e.target.scrollTop},u`);
    }
  };
  return (
    <Context.Provider
      value={[
        name,
        setName,
        email,
        setEmail,
        number,
        setNumber,
        type,
        setType,
        age,
        setAge,
        sex,
        setSex,
        smoke,
        setSmoke,
        money,
        setMoney,
        postiton,
        setPosition,
        active,
        setActive,
      ]}
    >
      <div className="App" onScroll={scrollEvent}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <Navigation />
                  <Home />
                  <Body />
                  <Footer />
                </>
              }
            ></Route>
            <Route
              path="/soumission"
              element={
                <>
                  <Navigation />
                  <Quote
                    name={
                      <>
                        <div>Assurance Vie</div> Parmanente
                      </>
                    }
                    picture={avt}
                  />{" "}
                </>
              }
            ></Route>
            <Route
              path="/assurance-vie-temporaire"
              element={
                <>
                  <Navigation />
                  <QuotePage
                    name={
                      <>
                        <div>Assurance Vie</div> Temporaire
                      </>
                    }
                    picture={avt}
                  />{" "}
                </>
              }
            ></Route>
            <Route
              path="/assurance-hypothecaire"
              element={
                <>
                  <Navigation />
                  <QuotePage
                    name={
                      <>
                        <div>Assurance</div> Hypothécaire
                      </>
                    }
                    picture={avt}
                  />{" "}
                </>
              }
            ></Route>
            <Route
              path="/assurance-maladie-grave"
              element={
                <>
                  <Navigation />
                  <QuotePage
                    name={
                      <>
                        <div>Assurance</div>Maladie-Grave
                      </>
                    }
                    picture={avt}
                  />{" "}
                </>
              }
            ></Route>
            <Route
              path="/assurance-salaire/soumission"
              element={
                <>
                  <Navigation />
                  {/* <QuotePage
                  name={
                    <>
                      <div>Assurance</div>Salaire
                    </>
                  }
                  picture={avt}
                />{" "} */}
                  <Quote />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}
