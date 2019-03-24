import React, { Component, } from 'react';

export default class model extends Component {
  render() {
    return (
      {...this.props.children,}
    );
  }
}
