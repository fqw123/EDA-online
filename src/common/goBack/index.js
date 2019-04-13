import React, {Component} from 'react';
import {Icon } from 'antd';
import './style.scss';

export default class Index extends Component{
    constructor(props){
        super(props);
  
    }
    goback(){
        // console.log('11', this);
        this.props.history.goBack();
    }
    render(){
        return(
            <span className={'spand'}  onClick={this.goback.bind(this)} >  <i className={'iconn'}> <Icon type="rollback" /></i>  返回</span>
        );
    }
}
