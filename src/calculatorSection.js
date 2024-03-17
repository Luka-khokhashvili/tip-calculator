import { useState } from "react";
import "./calculatorSection.css";
import dollarIcon from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";

function CalculatorSection() {
  const [selectedTip, setSelectedTip] = useState(0);

  const handleTipSelection = (tip) => {
    setSelectedTip(tip);
  };

  return (
    <div className="calculator-section">
      <InputSection name="Bill" image={dollarIcon} />
      <TipSelection onSelect={handleTipSelection} selectedTip={selectedTip} />
      <InputSection name="Number of People" image={personIcon} />
    </div>
  );
}

function InputSection(props) {
  return (
    <label className="input-section">
      {props.name}
      <div className="input-box">
        <input type="number" name="input" className="input" placeholder="0" />
        <img className="input-icon" src={props.image} alt="input box icon" />
      </div>
    </label>
  );
}

function TipSelection(props) {
  const handleSelectedTip = (tip) => {
    props.onSelect(tip);
  };

  return (
    <div className="tip-selection-body">
      <p className="tip-selection-title">Select Tip %</p>
      <div className="tip-selection-grid">
        <TipButton
          amount={5}
          onClick={() => handleSelectedTip(5)}
          selected={props.selectedTip === 5}
        />
        <TipButton
          amount={10}
          onClick={() => handleSelectedTip(10)}
          selected={props.selectedTip === 10}
        />
        <TipButton
          amount={15}
          onClick={() => handleSelectedTip(15)}
          selected={props.selectedTip === 15}
        />
        <TipButton
          amount={25}
          onClick={() => handleSelectedTip(25)}
          selected={props.selectedTip === 25}
        />
        <TipButton
          amount={50}
          onClick={() => handleSelectedTip(50)}
          selected={props.selectedTip === 50}
        />
        <input
          type="number"
          name="custom-amount"
          className="custom-amount"
          placeholder="Custom"
          onChange={() => handleSelectedTip(0)}
        />
      </div>
    </div>
  );
}

function TipButton({ amount, onClick, selected }) {
  const handleCLick = () => {
    onClick(amount);
  };

  return (
    <button
      className={"tip-button" + (selected ? " selected" : "")}
      onClick={handleCLick}
    >
      {amount}%
    </button>
  );
}

export default CalculatorSection;
