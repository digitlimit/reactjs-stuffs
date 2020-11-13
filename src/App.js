/* eslint-disable */ 

import React, { Component } from 'react';
import Todo from './components/todo/Todo';

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

  render(){
    return (
      <div className="App">
        <Todo markComplete={ this.markComplete } todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
