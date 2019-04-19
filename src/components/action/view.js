import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Icon, Tabs} from 'antd';
import  style from './style.module.scss';

import Goback from '../../common/goBack';
import  bind from 'react-autobind';
import Video from './video';
import Vision from './vision';
const TabPane = Tabs.TabPane;
export default class view extends Component {
    constructor(props){
        super(props);
        this.state = {
          
        };
        bind(this);
    }
    callback(){
        console.log('111');
    }

    render(){
        console.log(this.props);
        return (
            <div className={style.active + '  clearfix'}>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="编辑" key="1"><Video  {...this.props}/></TabPane>
                    <TabPane tab="操作" key="2"><Vision  {...this.props}  />   </TabPane>
                </Tabs>
            </div>
        );
    }
}

