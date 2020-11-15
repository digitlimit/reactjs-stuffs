/* eslint-disable */
import React, { Component } from 'react';

export class Add extends Component {


    setTitle(value){
        console.log(value);
    }

    render() {
        return (
            <form onSubmit={this.ok} style={{display: 'flex'}}>
                <input 
                    onChange={event => this.setTitle(event.target.value)}
                    type="text"
                    name="title" 
                    style={{flex: 10, padding: '10px'}}
                />

                <button
                    type="submit" 
                    style={{flex: 1, padding: '10px'}}
                >Add new</button>
            </form>
        )
    }
}

export default Add;
