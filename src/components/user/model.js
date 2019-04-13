import React, { Component } from 'react';
import bind from 'react-autobind';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        bind(this);
    }
    componentDidMount(){
        const data = [];
        for(let i = 0; i < 6; i++){
            data[i] = {
                order: i,
                time: 2018 - 10 - 12

            };
        }
    }
    render() {
        {console.log('user-model', this);}
        return(
            this.props.children({
                ...this.state,
                ...this.props

            }) 
        );
    }
}
