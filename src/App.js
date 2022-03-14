import React from "react";
import "./style.css";
class App1 extends React.Component{
  state={
    counter:0
  };
  increment =()=>{
    this.setState({counter:this.state.counter+1});
  }
  decrement =()=>{
    this.setState({counter:this.state.counter-1});
  }
  
    render(){
      return (
        <>
        <h1>counter is : {this.state.counter}</h1>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
        </>
      );
    }
}
export default function App() {
  return (
    <div>
      <App1 />
      <h3>Creating the user defined component once reuse as many times as we want</h3>
      <App1 />
      <h1>Above is the counter : By using class component</h1>
      <p>Class component having a props as a arguments</p>
      <App1 />
    </div>
  );
}
