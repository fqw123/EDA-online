import React, { Component } from 'react';
import {message} from 'antd';
import bind from 'react-autobind';
import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';
export default class model extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 0,
            dataSource: [1, 2, 3]
        };
        bind(this);
    }
    goBack(){
        // console.log("this);
    }
    newData(){

        message.success('刷新成功');
       
    }
    componentDidMount(){
        let params = {
            'index': this.state.currentPage
        };
        axios.post('http://localhost/worker/info', params).then(
            rem=>{
                console.log('rem-服务器', rem);
                let  da = rem.data;
                if(da.code === 200 && da.subservers){
                    this.setState({
                        dataSource: da.subservers
                    });
                }else{
                    this.setState({
                        dataSource: []
                    });
                }
            }
        );
    }
    startAct(data){
     
        window.open('http://localhost:3001/action');
        let params = {
            servername: data.name
        };
        axios.post('http://localhost:80/worker/link', params ).then(
            rem=>{
                let code = rem.data.code;
                console.log('开启rem', rem, code);
                if(code === 316){
                    message.info('当前子服务器未开机');
                }else if(code === 200){
                    message.info('开启成功');
                }else if(code === 310){
                    message.info('子服务器不存在');
                }else if(code === 308){
                    message.info('您已占用其他子服务器 ');
                }else if(code === 307){
                    message.info('当前子服务器正在被其他人占用  查询分页有误 ');
                }else if(code === 306){
                    message.info(' 查询分页有误 ');
                }else if(code === 305){
                    message.info(' 基本信息不合法  ');
                }else if(code === 315){
                    message.info('用户权限不足  ');
                }
            }
        );
    }
    onChange(v){
        this.setState({
            currentPage: Number(v) - 1
        });
    }

    render() {
        return (
            this.props.children({
                ...this.props,
                ...this.state,
                newData: this.newData,
                onChange: this.onChange,
                startAct: this.startAct

            })
        );
    }
}
