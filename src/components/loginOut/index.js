import React, { Component } from 'react';
import Model from './model';
import View from './view';

export default class index extends Component {
    render() {
        return (
            <div>
                <Model {...this.props}>
                    <View   {...this.props} ></View>
                </Model>
            </div>
        );
    }
}
