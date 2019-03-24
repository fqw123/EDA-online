import React, { Component, } from 'react';
import View from './view';
import Model from './model';

export default class index extends Component {
  render() {
    return (
      <div>
        <Model  {...this.props}><View   {...this.props}/></Model>
      </div>
    );
  }
}
