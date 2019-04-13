import React, { Component } from 'react';
import {message} from 'antd';
import bind from 'react-autobind';
import cookie from 'react-cookies';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: ''
        };
        bind(this);
    }
    clickJump(){
        if(this.state.name.length > 1 && this.state.password.length > 1){
            this.props.history.push('/home');
            cookie.save(
                'username', this.state.name);
        }else if(this.state.name.length < 1){
            message.warning('请输入用户名');
        }else {
            message.warning('请输入密码');
        }

    }
    userName(e){
        e.persist();
        this.setState({
            name: e.target.value
        });
    }
    pWord(e){
        e.persist();
        this.setState({
            password: e.target.value
        }, ()=>{
            console.log('password', this.state.password);
        });
       
    }
    render() {
        console.log('this.props.children', this.props);
        return (
            this.props.children({
                ...this.props,
                ...this.state,
                clickJump: this.clickJump,
                userName: this.userName,
                pWord: this.pWord
            }) 
        );
    }
}
