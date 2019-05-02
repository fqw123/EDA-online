import React from 'react';
import style  from  '../login/style.module.scss';
import {Link, Switch, Route}  from 'react-router-dom';
import {Icon, Tabs, Input } from 'antd';
const TabPane = Tabs.TabPane;
export default function(props) {
    const {
        userNum,  yanZhen,  tabkey, fillemail1, username1, password1, rePassword1, grade1, introduct1,
        callback, usernum, inptword, clickyanZheng, reminput, getYanheng, fillemail, username, password, rePassword, grade, introduct, reform, msgreform, inputOnBlur, inputOnFocus, title, login
    } = props;
     
    return (
        <div>
         
            <div  className={style.hbox}>
                <div  className={style.htext}>
                    EDA|川师物电
                </div>
            </div>
            <div  className={style.login}>
                <div  className={style.logCen}  style={Number(tabkey) === 1 ? {height: '346px'} : {height: '460px'}}>
                     
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="注册" key="1">
                            <div  className={style.intcen}>
                                <p  className={style.pline} >
                                    <Input   className={style.pint} value={userNum}  onChange={usernum}  
                                        onBlur={inputOnBlur}
                                        onFocus={inputOnFocus} 
                                        placeholder="请输入邮箱帐号"  />
                                </p>
                                <p  className={style.pline} >
                                    <Input   className={style.yanheng}  value={yanZhen} onChange={clickyanZheng}   placeholder="输入验证码"  /><button  onClick={getYanheng}   className="fr">获取验证码</button>
                                </p>
                                <button  className={style.btnBox}    onClick={reform} >确认</button>
                                <p   onClick={login} className={style.forget + '  fl  '}>{title.indexOf('密码') > 0 ? <span><Icon type="rollback" /> 返回</span> : <span><Icon type="form"/>已有账号去登陆</span>}</p>
                            </div>
                        </TabPane>
                        <TabPane tab="完善信息" key="2">
                            <div  className={style.intcen}>
                                <p  className={style.pline} >
                                    <input    className={style.pint}  value={fillemail1}  onChange={fillemail}    placeholder="请输入邮箱"    />
                                </p>
                                <p  className={style.pline} >
                                    <input    className={style.pint}  value={username1}  onChange={username}    placeholder="请输入用户名"    />
                                </p>
                               
                                <p  className={style.pline} >
                                    <input    className={style.pint}  value={password1}  onChange={password}    placeholder="请输入密码"    />
                                </p>
                                <p  className={style.pline} >
                                    <input    className={style.pint}   value={rePassword1}  onChange={rePassword}   placeholder="请再次输入密码"    />
                                </p>
                                <p  className={style.pline} >
                                    <input    className={style.pint}  value={grade1}  onChange={grade}    placeholder="输入年级"    />
                                </p>
                                <p  className={style.pline} >
                                    <input    className={style.pint}  value={introduct1}  onChange={introduct}    placeholder="自我介绍"    />
                                </p>
                                <button  className={style.btnBox}    onClick={msgreform} >确认</button>
                                <p   onClick={login} className={style.forget + '  fl  '}>{title.indexOf('密码') > 0 ? <span><Icon type="rollback" /> 返回</span> : <span><Icon type="form"/>已有账号去登陆</span>}</p>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
    
}

