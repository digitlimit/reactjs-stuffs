/* eslint-disable */ 
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            background: '#f4f4f4',
            marginBottom: '2px'
        }
    }

    render(){

        const {id, title} = this.props.todo;

        return (
            <div style={this.getStyle()} className="TodoItem">
                <p>
                    <input onChange={this.props.markComplete.bind(this, id)} type="checkbox" /> {' '}
                    { title }
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired 
}

export default TodoItem;