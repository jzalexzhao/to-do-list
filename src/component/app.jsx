import React, { Component } from "react";
import {Todo} from './todo';



export default class App extends Component {
  state = {
    text:"",
    todos: [
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
    if (newTodo.name === '') {
      this.setState(state=>(
        {
          text:""
        }
      ));
    } else {
      this.setState(state => (
        {
          text:"",
          todos: state.todos.concat(newTodo)
        }
      ));
    }
  }
  handleDelete = (id) => {
    const todos = this.state.todos;
    this.setState({
      todos : todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="card-title border justify-content-center row">TO-DO-LIST</h2>
        <form className="row" onSubmit = {this.handleSubmit}>
          <input type="text" className="form-control col-11" placeholder="What do you need to do today?" value={this.state.text} onChange= {this.handleChange}></input>
          <button className="btn btn-primary col-1" type="submit">Add</button>
        </form>
        <ul className = "list-group row">
        {this.state.todos.map((item) => (
          <Todo name={item.name} key={item.id} todo={item} onDelete={this.handleDelete} />
        ))}
        </ul>
      </div>
    );
  }
}
