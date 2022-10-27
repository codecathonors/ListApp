// import './App.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [percentNumber, setPercentNumber] = useState(0);
  const [tip, setTip] = useState(0);

  const options = [
    { value: '20%', label: 'Average (20%)'},
    { value: '30%', label: 'Above Average (30%)' },
    { value: '10%', label: 'Grat Already Included (10%)' }

  ]

 
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }
  // render();{
  //   const { selectedOption } = this.state;
  // }

  const calculateTipValue = () => {
    useEffect(() => {
    if (selectedOption.value === '30%') {
      setPercentNumber(prevPercentNumber => .3)
    } else if (selectedOption.value === '20%') {
      setPercentNumber(prevPercentNumber => .2)
    } else if (selectedOption.value === '10%') {
      setPercentNumber(prevPercentNumber => .1)
    }}, [percentNumber])
  }

  const calculateTipAmount = () => {
    calculateTipValue()

    console.log('testing', percentNumber)
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(total)
    console.log(selectedOption.value)
    
    calculateTipAmount()

  }
 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tip Calculator</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="totalOfBill">Bill total</label>
          <input type="number" class="form-control" placeholder="$0.00" id="totalOfBill" value={total} onChange={e => setTotal(e.target.value)}/>
        </div>
        <div class="form-group">
          <label for="tipPercentage">Service quality</label>
          {/* <select class="form-control" id="tipPercentage">
            <option>Average (20%)</option>
            <option>Above Average (30%)</option>
            <option>Grat already included (10%)</option>
          </select> */}
          <Select options={options} onChange={handleChange} />
          <button type="submit" class="btn btn-primary mb-2" >Calculate</button>
        </div>
      </form>

      <div class="alert alert-primary" role="alert">
        Tip amount is <b>number</b>. Your total is <b>total</b>.
      </div>
    </div>
  );
}

export default App;
