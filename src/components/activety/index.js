import React, { Component } from 'react';
import View from './view';
import Model from './model';
import {Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class index extends Component {
    render() {
        return (
            <Model  {...this.props}>
                {prop => <View {...prop}/>}
            </Model>
        );
    }
}
