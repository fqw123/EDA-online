import React, { Component } from 'react';
import {Icon} from 'antd';
import style from './style.module.scss';

export default class view extends Component{
    render() {
        const  {name, password,
            clickJump, userName, pWord} = this.props;
        return (
            <div>
         
                <div  className={style.hbox}>
                    <div  className={style.htext}>
                        EDA|川师物电
                    </div>
                </div>
                <div  className={style.login}>
                    <div  className={style.logCen}>
                         
                        <p className={style.ltit}>远程实验室</p>  
                        <div  className={style.intcen}>
                            <p  className={style.pline} >
                                <input   className={style.pint} onChange={userName}  value={name} placeholder="请输入用户名"  />
                            </p>
                            <p  className={style.pline} >
                                <input    className={style.pint}  onChange={pWord}   placeholder="请输入密码"    />
                            </p>
                           
                            <button onClick={clickJump} className={style.btnBox}>登录</button>
                            <p  className={style.forget}><Icon type="question-circle"></Icon>忘记密码</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
  
}

