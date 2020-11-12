/* eslint-disable */ 

import React, {Component} from 'react';

class Todo extends Component {

    state = {
        todos: [
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
        ]
    }

    render(){
        return (
            <div className="Todo">
                <h1>Todo</h1>
            </div>
        );
   }
}

export default Todo;