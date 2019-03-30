import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Icon } from 'antd';
import  style from './style.module.scss';
import bind from 'react-autobind';

import Goback from '../../common/goBack';

export default class view extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{use: true, id: '123456' }, {use: true, id: '123456' }, {use: true, id: '123456' }, {use: true, id: '123456' }, {use: true, id: '123456' }, {use: false, id: '123456' }, {use: true, id: '123456' } ]
        };
        bind(this);
    }

    render() {
        const {newData} = this.props;
        return (
            <div className={style.active}>
                <p className={style.pLine + '  clearfix'}>
                    <span className={style.spand}>选择服务器</span>
                    {console.log(this.props, newData)}
                    <Goback  {...this.props} />
                    <span className={style.spand}  onClick={newData}><i className={style.iconn}><Icon type="reload" /></i>刷新</span>
                </p>
                <div  className={style.botIm + '  clearfix'}>
                    {
                        this.state.data.map(
                            (p, index)=>{
                                // console.log(p, index);
                                return  <div className={style.imgbox}
                                    key={`${index}key`}
                                > 
                                    <Link to= {p.use ? '/action' : '#'}>
                                        <img className={style.comp}
                                            src={require('../../images/comp.jpg')}
                                        >
                                        </img>
                                        {p.use ? <p >可使用</p> : <p style={{color: 'red' }}>已占用</p>}
                                    </Link>  
                                </div>;

                            }
                        )
                    }
                </div>
            </div>
        );
    }
}

