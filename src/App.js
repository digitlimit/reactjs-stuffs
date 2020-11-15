/* eslint-disable */ 

import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

import Todo from './components/todo/Todo';
import Header from './components/todo/Header';
import AddForm from './components/todo/Add';
import About from './pages/About';

class App extends Component {

  state = {
    todos : []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
          todos: res.data
      }));
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

  //completed items
  completed = () => {
    return this.state.todos.filter(item => item.completed === true);
  }

  //pending items
  pending = () => {
    return this.state.todos.filter(item => item.completed === false);
  }

  render(){
    return (
      <Router>
        <div className="App">

          <Header  />

          <AddForm onSubmit={this.add} />
          
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Todo 
                markComplete={this.markComplete} 
                delete={this.delete}
                todos={this.state.todos} 
              />
            </React.Fragment>
          )} />

          <Route path="/about" component={About}/>

          <Route path="/completed" render={props => (
            <React.Fragment>
              <Todo 
                markComplete={this.markComplete} 
                delete={this.delete}
                todos={this.completed()} 
              />
            </React.Fragment>
          )} />

          <Route path="/pending" render={props => (
            <React.Fragment>
              <Todo 
                markComplete={this.markComplete} 
                delete={this.delete}
                todos={this.pending()} 
              />
            </React.Fragment>
          )} />

        </div>
      </Router>
    );
  }
}

export default App;
