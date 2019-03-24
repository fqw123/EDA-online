import React, { Component, } from 'react';
import styles from './style.scss';

export default class view extends Component {
  render() {
    return (
      <div  styleName={styles.homePage}>
        {console.log('style home',styles)}
        <span>12344</span>
      </div>
    );
  }
}
