import React, { Component } from 'react';
import bind from 'react-autobind';

export default class model extends Component {
  constructor(props){
    super(props)
    this.state={

    }
    bind(this)
  }
  render() {
    {console.log(this)}
    return (
      {...this.props.children}
    )
  }
}
