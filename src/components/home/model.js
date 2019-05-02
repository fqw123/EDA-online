import React, { Component, } from 'react';
import bind from 'react-autobind';
export default class model extends Component {
  constructor(props){
    super(props);
    this.state={

    }
    bind(this)
  }
  clickJump(){
      window.open("http://localhost:3001/form")
  }
  render() {
    return (
      this.props.children({
        ...this.props,
        ...this.state,
        clickJump:this.clickJump

      })
      
    );
  }
}
