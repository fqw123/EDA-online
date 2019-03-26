import React, { Component, } from 'react';
import {Link,} from 'react-router-dom';
import style from './style.module.scss';

export default class index extends Component {
  constructor(props){
    super(props);
    this.state={
      key:1,
    };
  }
  render() {
    return (
      <div  className={style.box +'  head  clearfix'}>
        {console.log('style',style)}
        <div className={style.imgB+' fl'}> <img src={require('../../images/icon_nsmiwta8kfh/dianzi.png')}/> <span className={style.stext}>EAD</span></div>
        <ul className={style.intUl+'  clearfix'}>
          <li className={style.ili}
            onClick={this.pageclick(this,1)}
          ><Link to="/home">首页</Link><i  className={style.ib}
              style={this.state.key==1?{display:'block',}:{display:'none',}}
            ></i></li>
          <li   className={style.ili}
            onClick={this.pageclick(this,2)}
          ><Link to="/study">学习</Link><i   className={style.ib}
            style={this.state.key==2?{display:'block',}:{display:'none',}}
            ></i></li>
          <li  className={style.ili}><Link to="/teach">教程</Link><i    className={style.ib}
            style={this.state.key==3?{display:'block',}:{display:'none',}}
          ></i></li>
          <li  className={style.ili}><Link to="/Labor">实验室概况</Link><i     className={style.ib}></i></li>
        </ul>
        <div className={style.log}>
          <span><Link to="/login" >登录&emsp;</Link></span>|
          <span><Link to="/logout" >&emsp;退出</Link></span>
        </div>
      </div>
    );
  }

  pageclick(k,l){
    console.log('k,l',k,l);

  }
}
