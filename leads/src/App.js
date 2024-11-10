import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import QuotePage from "./components/QuotePage";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <QuotePage />
    </div>
  );
}
