import React, { Component } from 'react';
import styles from './style.module.scss';

export default class view extends Component {
    render() {
        return (
            <div  className={styles.centerTxt}>
                <p className={styles.tit}>EDA原理与应用</p>
                <a  className={styles.aaa}  target="_blank"  href="https://baike.baidu.com/item/EDA%E5%8E%9F%E7%90%86%E4%B8%8E%E5%BA%94%E7%94%A8/16322921">https://baike.baidu.com/item/EDA%E5%8E%9F%E7%90%86%E4%B8%8E%E5%BA%94%E7%94%A8</a>

                <p className={styles.tit}>基于Quartus II的FPGA/CPLD设计与应用</p>
                <a  className={styles.aaa}  target="_blank"  href="https://baike.baidu.com/item/%E5%9F%BA%E4%BA%8EQuartus%20II%E7%9A%84FPGA%2FCPLD%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%BA%94%E7%94%A8/12414016">https://baike.baidu.com/item/EDA%E5%8E%9F%E7%90%86%E4%B8%8E%E5%BA%94%E7%94%A8</a>

            </div>
        );
    }
}
