import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Icon } from 'antd';
import  style from './style.module.scss';

import Goback from '../../common/goBack';

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
                    <span className={style.spand}>选择服务器</span>
                    <Goback  {...this.props} />
                </p>
                <div  className={style.botIm + '  clearfix'}>
                    嗲嗲
                </div>
            </div>
        );
    }
}

