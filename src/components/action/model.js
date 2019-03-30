import React, { Component } from 'react';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            this.props.children({
                ...this.props,
                ...this.state

            })
        );
    }
}
