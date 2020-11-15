/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';

function Header(){

    const all = {
        paddingTop:'35px', 
        paddingLeft: '15px',
        color: '#333'
    };

    const pending = {
        paddingTop:'35px', 
        paddingLeft: '15px',
        color: 'red'
    };

    const completed = {
        paddingTop:'35px', 
        paddingLeft: '15px',
        color: 'green'
    };

    return  (
        <header style={{display: 'flex', justifyContent: 'left'}}>
            <h1>Todo</h1>
            <Link to="/" style={all}>All: 0 </Link>
            <Link to="/completed" style={completed}>Completed: 0</Link>
            <Link to="/pending" style={pending}>Pending: 0</Link>
        </header>
    );
}

export default Header;