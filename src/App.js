/* eslint-disable */ 

import React from 'react';
import './App.css';
import Todo from './components/todo/Todo';

function App() {

    let todos = [
      {
          id: 1,
          title: 'Call Mum',
          completed: false
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
  ];

  return (
    <div className="App">
      <Todo todos={ todos } />
    </div>
  );
}

export default App;
