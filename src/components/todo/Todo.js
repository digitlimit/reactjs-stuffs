/* eslint-disable */ 
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {

    render(){

        let todos = this.props.todos.map((todo) => {
            return <TodoItem 
                markComplete={this.props.markComplete} 
                key={todo.id} 
                todo={todo}
            />
        });

        return (
            <div className="Todo">
                {todos}
            </div>
        );
   }
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo;