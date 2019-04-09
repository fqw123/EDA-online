import React, { Component } from 'react';
import  styles from './style.module.scss';

export default class View extends Component {
    render() {
        return (
            <div >
                <div   className={styles.titleBox}><span   className={styles.titleTxt}>实验室概况</span></div>
                <div className={styles.centerTxt}>
                    物理与电子实验室以现代通信理论和技术为学科发展方向，以培养具有坚实理论基础、广博学识、
                    独立见解和高度创新能力、善于理论与实践相结合的通信领域高层次专门人才为目标，紧密结合国防与国家建设的迫切需求以及未来技术发展趋势，
                    电子与通信专业相关实验室有电子测量实验室、信号与系统实验室、高频电路实验室、综合电子系统实验室、EDA/DSP/数字信号处理实验室、单片机实验室、通信原理实验室。
               
                    <img  className={styles.titImg} src={require('../../images/quartes.jpg')}/>
                    &emsp;&emsp;对于FPGA、CPLD以及结构化ASIC设计，quartus ii是性能和效能首屈一指的设计软件。软件支持Altera名为Qsys的系统级集成工具新产品，实现了对Stratix® V FPGA系列的扩展支持，并且采用增强后的调试方案加快了电路板开发。<br></br>
                    对于FPGA、CPLD以及结构化ASIC设计，quartus ii是性能和效能首屈一指的设计软件。软件支持Altera名为Qsys的系统级集成工具新产品，实现了对Stratix® V FPGA系列的扩展支持，并且采用增强后的调试方案加快了电路板开发。
                    <img  className={styles.titImg} src={require('../../images/quartes1.jpg')}/>
                </div>
                
            </div>
        );
    }
}
