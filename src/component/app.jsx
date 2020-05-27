import React, { Component } from "react";
import Todo from './todo';



export default class App extends Component {
  state = {
    text:"",
    todos: [
      {
        id:1,
        name:"Do Homework"
      }
    ],
  };


  handleChange = event => {
    this.setState({
      text:event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      name:this.state.text
    };
    this.setState(state => (
      {
        text:"",
        todos: state.todos.concat(newTodo)
      }
    ));

  }

  render() {
    return (
      <div>
        <h4 className="card-title">TO-DO-LIST</h4>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" className="form-control" placeholder="What do you need to do today?" onChange= {this.handleChange}></input>
          <button className="btn btn-primary m-2" type="submit">Add</button>
        </form>
        {this.state.todos.map((item) => ( 
          <Todo name={item.name} key={item.id} />
        ))}
      </div>
    );
  }
}
