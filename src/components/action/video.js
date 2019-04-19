import React, { Component } from 'react';
import ReEditor from 're-editor';
import {Link} from 'react-router-dom';
import {Icon, Tabs, Input, Button} from 'antd';
import  style from './style.module.scss';
import 're-editor/lib/styles/index.css';
// https://github.com/wowlusitong/re-editor
import Goback from '../../common/goBack';
const Search = Input.Search;
const TabPane = Tabs.TabPane;
export default class view extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorValue: {},
            value: JSON.parse(localStorage.getItem('re-editor-value'))
        };
    }
    handleChange = value => {
        localStorage.setItem('re-editor-value', JSON.stringify(value.toJS()));
        console.log('value', value.document.text);
        this.setState({
            editorValue: value.document.text
        });
    };
    render() {
        const { value } = this.state;
        return (
            <div className="container">
                <h1>QuartesII代码编辑</h1>
                <ReEditor
                    
                    onChange={this.handleChange}
                    placeholder="请输入内容"
                    
                />
            </div>
        );
    }
}

