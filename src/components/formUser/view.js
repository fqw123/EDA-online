import React from 'react';
import style  from  '../login/style.module.scss';
import {Icon} from 'antd';

export default function(props) {
    const {

        title, login
    } = props;
     
    return (
        <div>
         
            <div  className={style.hbox}>
                <div  className={style.htext}>
                    EDA|川师物电
                </div>
            </div>
            <div  className={style.login}>
                <div  className={style.logCen}  style={{height: '346px'}}>
                     
                    <p className={style.ltit}>{title}</p>  
                    <div  className={style.intcen}>
                        <p  className={style.pline} >
                            <input   className={style.pint}    placeholder="请输入邮箱帐号"  />
                        </p>
                        <p  className={style.pline} >
                            <input   className={style.yanheng}    placeholder="请输入验证码"  /><button   className="fr">获取验证码</button>
                        </p>
                        <p  className={style.pline} >
                            <input    className={style.pint}     placeholder="请输入密码"    />
                        </p>
                        <p  className={style.pline} >
                            <input    className={style.pint}     placeholder="请再次输入密码"    />
                        </p>
                       
                        <button  className={style.btnBox}>确认</button>
                        <p   onClick={login} className={style.forget + '  fl  '}>{title.indexOf('密码') > 0 ? <span><Icon type="rollback" /> 返回</span> : <span><Icon type="form"/>已有账号去登陆</span>}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

