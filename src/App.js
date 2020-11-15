/* eslint-disable */ 

import React, { Component } from 'react';
import Todo from './components/todo/Todo';
import Header from './components/todo/Header';
import AddForm from './components/todo/Add';

class App extends Component {

  state = {
    todos : []
  }

  uuidv4(){
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  markComplete = (id) => {
    
    let newTodos = this.state.todos.map((todo) => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({todos: newTodos });
  }

  //delete 
  delete = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }

  //add
  add = (todo,e) => {

    todo = {...todo, ...{
      id: this.uuidv4(),
      completed: false
    }};

    console.log(todo)

    this.setState({todos : [...this.state.todos, todo]});
    e.target.reset();
  }

  render(){
    return (
      <div className="App">

        <Header  />

        <AddForm onSubmit={this.add} />

        <Todo 
          markComplete={ this.markComplete } 
          delete={this.delete}
          todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
