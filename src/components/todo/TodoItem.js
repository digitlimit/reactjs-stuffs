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
                    <button onClick={this.props.delete.bind(this, id)} style={deleteStyle} >X</button>
                </p>
            </div>
        )
    }
}

const deleteStyle = {
    float: 'right',
    borderRadius: '50px',
    background: 'red',
    width: '30px',
    height: '30px',
    border: 'none'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired 
}

export default TodoItem;