import React from "react";
import "./App.css";

class Input extends React.Component {
  state = {
    todos: [],
    ctodo: "",
  };
  addtodo = () => {
    let c = this.state.todos.slice();
    c.push(this.state.ctodo);
    this.setState({
      todos: c,
      ctodo: "",
    });
  };
  deletetodo = (i) => {
    let d = this.state.todos.slice();
    d.splice(i, 1);
    this.setState({
      todos: d,
      ctodo: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      ctodo: e.target.value,
    });
  };
  render() {
    let b = this.state.todos.map((e, i) => {
      return (
        <li key={i}>
          <h1>{e}</h1>
          <button onClick={() => this.deletetodo(i)} className="btn1">
            Delete
          </button>
        </li>
      );
    });
    console.log(this.state.todos);
    return (
      <div>
        <input
          type="text"
          placeholder="Enter list...."
          value={this.state.ctodo}
          onChange={this.handleChange}
          className="Value"
        ></input>
        <button className="btn" onClick={this.addtodo}>
          Add Todo
        </button>
        {this.state.todos.length === 0 ? <h1></h1> : <ol>{b}</ol>}
      </div>
    );
  }
}
export default Input;
