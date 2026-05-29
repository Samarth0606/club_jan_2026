// import React from 'react'
// import Counter from './components/Counter';

// export default class App extends React.Component{
//     constructor(){
//       super();
//       this.state = {
//         count: 0,
//       }
//     }

//   componentDidMount(){
//     console.log("hello trigerred");
//   }

//   decrement(){ //local method
//     this.setState({count: this.state.count-1})
//   }
  
//   render(){
//     return(
//       <div>
//         <button onClick={this.decrement.bind(this)}>-</button>
//         <Counter count={this.state.count} />
//         <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
//       </div>
//     )
//   }
// }

// // export default App


import React from 'react'
import Counterrr from './components/Counterrr'

function App() {
  return (
    <div>
      <Counterrr />
    </div>
  )
}

export default App