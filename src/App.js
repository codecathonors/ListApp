import { useEffect, useState } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";

function App() {
  const [total, setTotal] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [percentNumber, setPercentNumber] = useState(0);
  const [tip, setTip] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  //options variable for React Select
  const options = [
    { value: 0.2, label: "Average (20%)" },
    { value: 0.3, label: "Above Average (30%)" },
    { value: 0.1, label: "Grat Already Included (10%)" },
  ];

  //useEffect only runs when percentNumber is updated
  useEffect(() => {
    if (selectedOption === "30%") {
      setPercentNumber(0.3);
    } else if (selectedOption === "20%") {
      setPercentNumber(0.2);
    } else if (selectedOption === "10%") {
      setPercentNumber(0.1);
    }
    console.log("testing on useEffect", percentNumber);
  }, [percentNumber]);

  //sets percentage option, this handleChange is connected to React Select
  //selectedOption is determined by above useEffect
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  //calculates tip
  const handleSubmit = (e) => {
    e.preventDefault();
    setTip((Math.round(total * selectedOption.value * 100) / 100).toFixed(2));
  };

  //calculates final total (total + tip) and rounds to 2 decimal places
  useEffect(() => {
    setFinalTotal((Math.round((+total + +tip) * 100) / 100).toFixed(2));
  }, [tip]);

  return (
    <div id="app-container">
      <div id="card-body">
        <header>
          <h1 id="header">Tip Calculator</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="totalOfBill">Bill total</label>
            <input
              type="number"
              class="form-control"
              placeholder="$0.00"
              id="totalOfBill"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="tipPercentage">Service quality</label>
            <Select options={options} onChange={handleChange} />
            <button type="submit" class="btn btn-primary mb-2">
              Calculate
            </button>
          </div>
        </form>
        <div class="alert alert-primary" role="alert">
          Tip amount is $<b>{tip}</b>. Your total is $<b>{finalTotal}</b>.
        </div>
      </div>
    </div>
  );
}

export default App;
