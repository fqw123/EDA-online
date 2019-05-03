import React, { Component } from 'react';
import {message} from 'antd';
import bind from 'react-autobind';
import cookie from 'react-cookies';
import axios from 'axios';
// import { Fetch } from './Fetch';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            word: ''
        };
        bind(this);
    }
    // /user/login email,password 
    clickJump(){
        if(this.state.name.length > 1 && this.state.word.length > 1){
            let params = {
                email: this.state.name,
                password: this.state.word
            };
            axios.post('http://localhost:80/user/login', params,
                {headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                   
                }
                }
            ).then(
                rem=>{
                    let  code = rem.data.code;
                    console.log('code', rem, code);
                    if(code === 200){
                        message.success('登录成功');
                        this.props.history.push('/home');
                       
                        localStorage.setItem('email', this.state.name);

                    } else if(code === 300){
                        message.error('登录失败');
                    }else if(code === 303){
                        message.error('密码不正确');
                    }else if(code === 314){
                        message.error('用户未注册');
                    }else if(code === 301){
                        message.error('邮箱未注册');
                    }
                }
                
            );
           
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
    password(e){
        e.persist();
        this.setState({
            word: e.target.value
        }, ()=>{
            // console.log('password', this.state.password);
        });
       
    }
    
    render() {
        // console.log('this.props.children', this.props);
        return (
            this.props.children({
                ...this.props,
                ...this.state,
                clickJump: this.clickJump,
                userName: this.userName,
                password: this.password
                
            }) 
        );
    }
}
