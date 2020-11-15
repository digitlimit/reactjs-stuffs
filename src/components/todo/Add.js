/* eslint-disable */
import React, { Component } from 'react';

export class Add extends Component {

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        title: ''
    });
    
    resetState = () => {
        this.setState(this.getInitialState())
    }  
      
    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});

        if(this.props.onChange){
            this.props.onChange(e.target.value, e);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.props.onSubmit){
            this.props.onSubmit(this.state, e);
            this.resetState();
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    onChange={this.onChange}
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
