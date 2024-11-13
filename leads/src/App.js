import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import QuotePage from "./components/QuotePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import avt from "./assets/AVT.svg";
// import avp from "./assets/AVT.svg";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navigation />
                <Home />{" "}
              </>
            }
          ></Route>
          <Route
            path="/assurance-vie-permanente"
            element={
              <>
                <Navigation />
                <QuotePage
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
            path="/assurance-salaire"
            element={
              <>
                <Navigation />
                <QuotePage
                  name={
                    <>
                      <div>Assurance</div>Salaire
                    </>
                  }
                  picture={avt}
                />{" "}
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
