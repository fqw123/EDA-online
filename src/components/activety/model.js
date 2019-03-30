import React, { Component } from 'react';
import {message} from 'antd';
import bind from 'react-autobind';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        bind(this);
    }
    goBack(){
        // console.log("this);
    }
    newData(){
        message.success('This is a message of success');

        message.success('刷新成功');
        alert('刷新成功');
    }

    render() {
        return (
            this.props.children({
                ...this.props,
                ...this.state,
                newData: this.newData

            })
        );
    }
}
