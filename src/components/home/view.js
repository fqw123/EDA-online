import React, { Component, } from 'react';
import styles from './style.scss';

export default class view extends Component {
  render() {
    return (
      <div  stylename={styles.homePage}>
        {console.log('style home',styles)}
        <span>12344</span>
      </div>
    );
  }
}
