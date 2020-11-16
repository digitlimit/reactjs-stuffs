/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';

function Header(props){

    const allStyle = {
        paddingTop:'35px', 
        paddingLeft: '15px',
        color: '#333'
    };

    const pendingStyle = {
        paddingTop:'35px', 
        paddingLeft: '15px',
        color: 'red'
    };

    const completedStyle = {
        paddingTop:'35px', 
        paddingLeft: '15px',
        color: 'green'
    };

    
    const {completed, pending} = props;

    return  (
        <header style={{display: 'flex', justifyContent: 'left'}}>
            <h1>Todo</h1>
            <Link to="/" style={allStyle}>All: {completed.length + pending.length} </Link>
            <Link to="/completed" style={completedStyle}>Completed: {completed.length}</Link>
            <Link to="/pending" style={pendingStyle}>Pending: {pending.length}</Link>
        </header>
    );
}

export default Header;