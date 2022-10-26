// import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListItems from './ListItems';


function App() {
  const [items, setItems] = useState([])
  const [isAddNewItemVisible, setNewItemVisible] = useState(false)


  // function onClick() {
  //   setItems(...items, e.target.value)
  // }

  function handleClick() {
    setNewItemVisible(isAddNewItemVisible => !isAddNewItemVisible)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>my list</h1>
        <button onClick={handleClick}>+</button>
        <div class="form-group">
          <label>Item</label>
          <input type="text" class="form-control" placeholder="what are you adding?"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </header>



    </div>
  );
}

export default App;
