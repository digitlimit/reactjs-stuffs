/* eslint-disable */ 

import React, { Component } from 'react';
import Todo from './components/todo/Todo';
import Header from './components/todo/Header';
import AddForm from './components/todo/Add';

class App extends Component {

  state = {
    todos : [
      {
          id: 1,
          title: 'Call Mum',
          completed: true
      },
      {
          id: 2,
          title: 'Call Dad',
          completed: false
      },
      {
          id: 3,
          title: 'Call Wife',
          completed: false
      }
  ]
  }

  markComplete = (id) => {
    
    let newTodos = this.state.todos.map((todo) => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    });

    this.setState({todos: newTodos });
  }

  delete = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
  }

  render(){
    return (
      <div className="App">

        <Header />

        <AddForm />

        <Todo 
          markComplete={ this.markComplete } 
          delete={this.delete}
          todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
