import { useState } from 'react';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0);
  const [ amount, setAmount ] = useState(1);

  const handleIncrement=()=>{
    setCount(count + amount);
  }
  const handleDecrement=()=>{
    setCount(count - amount);
  }
  const handleChangeAmount=(e)=>{
    setAmount(Number(e.target.value));
  }
  return (
    <div>
      <div>Functional Component</div>
      <input type="number" value={amount} onChange={handleChangeAmount}/>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>{ count }</div>
    </div>
  );
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }

//   handleIncrement=()=>{
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
  
//   render(){
//     return(
//       <div>
//         <button onClick={ this.handleIncrement }>Increment</button>
//         <div>Count: { this.state.count }</div>
//         <div>Class Component</div>
//       </div>
//     )
//   }
// }

export default App;
