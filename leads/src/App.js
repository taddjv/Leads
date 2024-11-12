import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import QuotePage from "./components/QuotePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={   
          <>   <Navigation />
                <Home /> </>}>
          </Route>
          <Route path="/assurance-vie-temporaire"  element={   
          <>   <Navigation />
                <QuotePage /> </>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}
{/* <Navigation /> */}
{/* <Home />  */}
{/* <QuotePage /> */}