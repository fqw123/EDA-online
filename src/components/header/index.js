import React, { Component } from 'react';
import {Link, withRouter } from 'react-router-dom';
import cookie  from 'react-cookies';
import style from './style.module.scss';
import bind from 'react-autobind';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            key: '',
            boolen: true
           
        };
        bind(this);
    }
    pageclick(k, l){
        // console.log('k,l', k, l);
        this.setState({
            key: k
        });

    }

    changeLog(){
        cookie.remove('username');
    }
    static getDerivedStateFromProps(nextProps, preProps){
        let str = nextProps.location.pathname;
        console.log('str', str);
        if(str === '/login' || str === '/user'){
            return({
                boolen: false
            });
        }else{
            return({
                boolen: true
            });
        }
    }

    render() {
        const  {location} = this.props;
        const {boolen} = this.state;
        return (
            <div  className={style.box + '  head  clearfix'}   style={boolen ? {display: 'block'} : {display: 'none'}}>
                {/* {console.log('this', this, location.pathname)} */}
                <div className={style.imgB + ' fl'}> <img src={require('../../images/icon_nsmiwta8kfh/dianzi.png')}/> <span className={style.stext}>EDA</span></div>
                <ul className={style.intUl + '  clearfix'}>
                    <li className={style.ili}
                        onClick={this.pageclick.bind(this, 1)}
                    ><Link to="/home">首页</Link><i  className={style.ib}
                            style={this.state.key == 1 ? {display: 'block' } : {display: 'none' }}
                        ></i></li>
                    <li   className={style.ili}
                        onClick={this.pageclick.bind(this, 2)}
                    ><Link to="/study">学习</Link><i   className={style.ib}
                            style={this.state.key == 2 ? {display: 'block' } : {display: 'none' }}
                        ></i></li>
                    <li  className={style.ili}
                        onClick={this.pageclick.bind(this, 3)}
                    ><Link to="/teach">教程</Link><i className={style.ib}
                            style={this.state.key == 3 ? {display: 'block' } : {display: 'none' }}
                        ></i></li>
                    <li  className={style.ili}
                        onClick={this.pageclick.bind(this, 4)}
                    ><Link to="/Labor">实验室概况</Link><i    className={style.ib}
                            style={this.state.key == 4 ? {display: 'block' } : {display: 'none' }}
                        ></i></li>
                </ul>
                <div className={style.log}>
                    <span  onClick={this.changeLog}><Link to="/user" ><img    className={style.imgg} src={require('../../images/user.jpg')}/></Link><Link to="/login" > 退出&emsp;</Link></span>
                   
                </div>
            </div>
        );
    }

}
export default withRouter(Index);
