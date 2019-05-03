import React, { Component } from 'react';
import bind from 'react-autobind';

import  {message} from 'antd';
import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: Number(),
            userinfo: {}
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
        let email = localStorage.getItem('email');
        console.log('email-localStorage', email);
      
        axios.post('http://localhost:80/user/info').then(
            rem=>{
                console.log('基本信息', rem);
              
                if(rem.status === 200){
                    if(rem.data.userinfo){
                        this.setState({
                            userinfo: rem.data.userinfo
                        });
                    }else if(rem.data.code === 301){
                        message.error('邮箱不存在');
                    }
                   
                }
            }
        );
    }
    onChange(v){
        console.log('vvvvv', v);
        this.setState({
            currentPage: v
        });
    }
    render() {
      
        return(
            this.props.children({
                ...this.state,
                ...this.props,
                onChange: this.onChange

            }) 
        );
    }
}
