import React, { Component } from 'react';
import bind from 'react-autobind';
import {message} from 'antd';
import 'whatwg-fetch';
import axios  from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            tabkey: 1,
            userNum: '',
            userNumB: false,
            password: '',
            yanZhen: '',
            rePassword: '',
            // 信息完善
            fillemail1: '',
            username1: '',
            password1: '',
            rePassword1: '',
            grade1: '',
            introduct1: ''
        };
        bind(this);
    }
    login(){
        console.log('1111');
        this.props.history.push('/Login');
    }
    static getDerivedStateFromProps(nextProps, preProps){
        // console.log('nextProps', nextProps, nextProps.history.location.search.indexOf('2'));
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
    usernum(e){
        e.persist();
        this.setState({
            userNum: e.target.value
        });

    }
    callback(k){
        console.log('tab', k);
        this.setState({
            tabkey: k
        });
    }
    componentDidMount(){
        this.setState({

        });
           
    }
    inputOnBlur(){
        this.setState({
            userNumB: true
        });
    }
    //   /user/signupverify    email，verifycode
    getYanheng(){
        let params = {'email': this.state.userNum};
        
        axios.post('http://localhost:80/user/signupemail', 
            params, {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        ).then(
            rem=>{
                console.log(rem, rem.data.code
                );
                let code = rem.data.code;
                if(!this.state.userNum){
                    message.error('请填写邮箱账号');
                }else if(code === 399){
                    message.error('未知错误');
                }else if(code === 301){
                    message.error('邮箱不存在,请重新填写');
                    this.setState({
                        userNum: ''
                    });
                }else if(code === 302){
                    message.error('邮箱已存在');
                    this.setState({
                        userNum: ''
                    });
                }
              
            }
        ).catch(
            error=>{
                console.log('error');
            }
        );
         
    }
    inptword(e){
        e.persist();
        this.setState({
            password: e.target.value
        });
    }
    clickyanZheng(e){
        e.persist();
        this.setState({
            yanZhen: e.target.value
        });
    }
    reminput(e){
        e.persist();
        this.setState({
            rePassword: e.target.value
        });
        if(e.target.value !== this.state.password){
            // message.error('密码输入不一致，请重新输入');
        }
    }
    reform(){
       
        if(!this.state.userNum){
            message.warning('请输入邮箱账号');
        }else if(!this.state.yanZhen){
            message.warning('请输入验证码');
        }else if(this.state.userNum && this.state.yanZhen){
            let para = {email: this.state.userNum, verifycode: this.state.yanZhen};
            axios.post('http://localhost:80/user/signupverify', para, { headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }}).then(
                rem=>{
                    console.log('确定-rem', rem);
                    let code = rem.data.code;
                    if(code === 399){
                        message.error('未知错误');
                    }else if(code === 304){
                        message.error('验证码错误');
                    }else if(code === 200){
                        message.success('注册成功');
                    }
                }     
            ); 
        }
        
    }
    // 信息完善
    fillemail(e){
        e.persist();
        this.setState({
            fillemail1: e.target.value
        });
    }
    username(e){
        e.persist();
        this.setState({
            username1: e.target.value
        });
    }
    password(e){
        e.persist();
        this.setState({
            password1: e.target.value
        });
    }
    rePassword(e){
        e.persist();
        this.setState({
            rePassword1: e.target.value
        });
    }
    grade(e){
        if(this.state.rePassword1 !== this.state.password1){
            message.error('两次密码输入不一致，请重新填写');
        }else{
            this.setState({
                grade1: e.target.value
            });
        }
       
    }
    introduct(e){
        e.persist();
        this.setState({
            introduct1: e.target.value
        });
    }
    // /user/signupinfo  <userinfo>，password
    msgreform(e){
        if(this.state.fillemail1 && this.state.username1 && this.state.password1 && this.state.rePassword1 && this.state.grade1 && this.state.introduct1)
        {
            let params = {
                'password': this.state.password1
            };
            params['userinfo'] = {
                'email': this.state.fillemail1,
                'name': this.state.username1,
                'grade': this.state.grade1,
                'info': this.state.introduct1
            };
            axios.post('http://localhost:80/user/signupinfo', params).then(
                rem=>{
                    let code = rem.data.code;
                    console.log('录入信息', rem, code);
                    if(code === 399){
                        message.error('未知错误');
                    }else if(code === 200){
                        message.success('信息录入成功');
                    }else if(code === 300){
                        message.error('信息录入失败');
                    }else if(code === 305){
                        message.error('基本信息不合法');
                    }else if(code === 301){
                        message.error('邮箱不存在');
                    }
                    
                }
            );
        }else{
            message.warning('每一项都必填哦');
        }
   
    }

    render(e){
       
        return (
            this.props.children({
                ...this.props,
                ...this.state,
                callback: this.callback,
                login: this.login,
                usernum: this.usernum,
                inptword: this.inptword,
                clickyanZheng: this.clickyanZheng,
                reform: this.reform,
                fillemail: this.fillemail,
                username: this.username,
                password: this.password,
                rePassword: this.rePassword,
                grade: this.grade,
                introduct: this.introduct,
                msgreform: this.msgreform,
                reminput: this.reminput,
                getYanheng: this.getYanheng,
                inputOnBlur: this.inputOnBlur,
                inputOnFocus: this.inputOnFocus
            })
        );
    }
}
