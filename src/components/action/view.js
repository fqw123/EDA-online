import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Icon, Input, Button} from 'antd';
import  style from './style.module.scss';

import Goback from '../../common/goBack';
const Search = Input.Search;

export default class view extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{use: true, id: '123456' }, {use: true, id: '123456' }, {use: true, id: '123456' }, {use: true, id: '123456' }, {use: true, id: '123456' }, {use: false, id: '123456' }, {use: true, id: '123456' } ]
        };
    }

    render() {
        return (
            <div className={style.active}>
                <p className={style.pLine + '  clearfix'}>
                    <span className={style.spand}>操作</span>
                    <Goback  {...this.props} />
                </p>
                <div  className={ style.sealine + ' clearfix'}> 
                    <div  className={style.searchL }>
                        <Search
                            placeholder="请输入按键值0x30~0x3D"
                            enterButton="确认"
                            size="large"
                            onSearch={value => console.log(value)}
                        />  
                    </div>
                    <div   className={'fuwei '}>   <Button type="primary">复位</Button></div>
                </div>
                <div  className="fourBtn">
                    <Button>测频率(DDS)</Button>   <Button>测占空比</Button>   <Button>测幅值</Button>   <Button>测方波</Button>
                </div>
            </div>
        );
    }
}

