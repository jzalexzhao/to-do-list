import React, { Component } from "react";
import {Todo} from './todo';



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
      <div>
        <h4 className="card-title m-2">TO-DO-LIST</h4>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" className="form-control" placeholder="What do you need to do today?" value={this.state.text} onChange= {this.handleChange}></input>
          <button className="btn btn-primary mt-2" type="submit">Add</button>
        </form>
        <ul className = "list-group">
        {this.state.todos.map((item) => (
          <Todo name={item.name} key={item.id} todo={item} onDelete={this.handleDelete} />
        ))}
        </ul>
      </div>
    );
  }
}
