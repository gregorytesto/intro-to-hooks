import { useState, Component, useEffect } from 'react';
import './App.css';

function App() {
  const [ shows, setShows ] = useState([]);

  useEffect(()=>{
    handleFetch();
  }, []);

  const handleFetch=()=>{
    fetch("https://pursuit-tv-show.herokuapp.com/api/shows")
      .then(res=>res.json())
      .then(data=>{
        let limitShows = data.filter((shows, index)=>{
          return index < 20;
        })
        setShows(limitShows);
      })
  }

  let showsElArr = shows.map((show, index)=>{
    return <div key={index}>{ show.title }</div>
  })

  return (
    <div>
      <h1>Functional Component</h1>
      { showsElArr }
    </div>
  );
}

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       shows: []
//     }
//   }

//   componentDidMount(){
//     this.handleFetch();
//   }

//   handleFetch=()=>{
//     fetch("https://pursuit-tv-show.herokuapp.com/api/shows")
//       .then(res=>res.json())
//       .then(data=>{
//         let limitShows = data.filter((show, index)=>{
//           return index < 20;
//         })
//         this.setState({
//           shows: limitShows
//         })
//       })
//   }
  
//   render(){
//     let showsElArr = this.state.shows.map((show)=>{
//       return <div>{ show.title }</div>
//     })
//     return(
//       <div>
//         <h1>Class Component</h1>
//         { showsElArr }
//       </div>
//     )
//   }
// }

export default App;
