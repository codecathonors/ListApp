import { useEffect, useState } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [percentNumber, setPercentNumber] = useState(0);
  const [tip, setTip] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const options = [
    { value: .2, label: 'Average (20%)'},
    { value: .3, label: 'Above Average (30%)' },
    { value: .1, label: 'Grat Already Included (10%)' }
  ]

  useEffect(() => {
    if (selectedOption === '30%') {
      setPercentNumber(.3)
    } else if (selectedOption === '20%') {
      setPercentNumber(.2)
    } else if (selectedOption === '10%') {
      setPercentNumber(.1)
    }
    console.log('testing on useEffect', percentNumber)
  }, [percentNumber])
  
  useEffect(() => {
    setFinalTotal(Math.round((+total + +tip)*100)/100)
  }, [tip])

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Option selected:`, selectedOption);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTip(Math.round((total * selectedOption.value)*100)/100)
  }
 
  return (
    <div class="card w-25 mx-auto text-dark bg-info position-absolute top-50 start-50 translate-middle">
      <div class="card-body ">
      <header className="App-header">
          <h1 class="text-center display-4">Tip Calculator</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="totalOfBill">Bill total</label>
          <input type="number" class="form-control" placeholder="$0.00" id="totalOfBill" value={total} onChange={e => setTotal(e.target.value)}/>
        </div>
        <div class="form-group">
          <label for="tipPercentage">Service quality</label>
          <Select options={options} onChange={handleChange} />
          <button type="submit" class="btn btn-primary mb-2" >Calculate</button>
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
