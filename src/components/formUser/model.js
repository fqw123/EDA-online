import React, { Component } from 'react';
import bind from 'react-autobind';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: ''
        };
        bind(this);
    }
    login(){
        this.props.history.push('/Login');
    }
    static getDerivedStateFromProps(nextProps, preProps){
        console.log('nextProps', nextProps, nextProps.history.location.search.indexOf('2'));
        if(nextProps.history.location.search.indexOf('2') > 0){
            return({
                title: '找回密码'
            });
        }else{
            return({
                title: '注册用户'
            });
        }
    }
    render() {
       
        return (
            this.props.children({
                ...this.props,
                ...this.state,
                login: this.login
            })
        );
    }
}
