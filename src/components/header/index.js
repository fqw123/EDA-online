import React, { Component, } from 'react';
import {Link,} from 'react-router-dom';
import style from './style.scss';
// import './style.scss';

export default class index extends Component {
  render() {
    return (
      <div  className={style.box +'  head'}>
        {console.log('style',style)}
        <div></div>
        <ul className={style.intUl+'  clearfix'}>
          <li  className={style.ili}><Link to="/home">首页</Link></li>
          <li  className={style.ili}><Link to="/study">学习</Link></li>
          <li  className={style.ili}><Link to="/teach">教程</Link></li>
          <li  className={style.ili}><Link to="/Labor">实验室概况</Link></li>
        </ul>
        <div>
          <span><Link to="/login" />登录</span>
          <span><Link to="/logout" />退出</span>
        </div>
      </div>
    );
  }
}
