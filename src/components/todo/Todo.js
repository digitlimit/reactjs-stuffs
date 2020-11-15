/* eslint-disable */ 
import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {

    render(){

        let todos = this.props.todos.map((todo) => {
            return <TodoItem 
                markComplete={this.props.markComplete} 
                delete={this.props.delete}
                key={todo.id} 
                todo={todo}
            />
        });

        return (
            <div>
                {todos}
            </div>
        );
   }
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo;