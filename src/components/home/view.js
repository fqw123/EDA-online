import React, { Component } from 'react';
import {Link } from  'react-router-dom';
import styles from './style.module.scss';

export default function(props){
    const {clickJump} = props;
   
        return (
            <div  className={styles.homePage}>
                <div   className={styles.titleBox}><span   className={styles.titleTxt}>远程实验室</span></div>
                <div   className={styles.line1}>EDAONLINE</div>
                <div    className={styles.line2}> 开放共享&emsp;助力科研</div>
                <img     className={styles.imgb}
                    src={require('../../images/home.jpg')}
                />
                <div>
                    <span  className={styles.labText}
                      onClick={this.clickJump}
                    >开启实验</span>

                </div>
            </div>
        );
    
}
