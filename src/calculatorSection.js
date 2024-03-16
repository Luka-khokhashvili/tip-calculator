import "./calculatorSection.css";
import dollarIcon from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";

function CalculatorSection() {
  return (
    <div className="calculator-section">
      <InputSection name="Bill" image={dollarIcon} />
      <TipSelection />
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
  return (
    <div className="tip-selection-body">
      <TipButton amount={5} />
      <TipButton amount={10} />
      <TipButton amount={15} />
      <TipButton amount={25} />
      <TipButton amount={50} />
      <input
        type="number"
        name="custom-amount"
        className="custom-amount"
        placeholder="Custom"
      />
    </div>
  );
}

function TipButton(props) {
  return <button className="tip-button">{props.amount}%</button>;
}

export default CalculatorSection;
