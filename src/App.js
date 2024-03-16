import "./App.css";
import CalculatorSection from "./calculatorSection";
import mainIcon from "./images/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={mainIcon} alt="main icon" className="main-icon" />
      <div className="main-container">
        <CalculatorSection />
      </div>
    </div>
  );
}

export default App;
