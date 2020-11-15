/* eslint-disable */
import React from 'react';

function Header(){

    const total = {
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
            <div style={total}>Total: 0 </div>
            <div style={completed}>Completed: 0</div>
            <div style={pending}>Pending: 0</div>
        </header>
    );
}

export default Header;