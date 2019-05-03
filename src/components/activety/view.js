import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Icon, Pagination, Popover} from 'antd';
import  style from './style.module.scss';
import bind from 'react-autobind';
import Websocket from 'react-websocket';

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
        const {newData, dataSource, currentPage, onChange, startAct} = this.props;
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
                        dataSource.map(
                            (p, index)=>{
                                // console.log(p, index);
                                return<Popover    content={<div><p>备注:{p.introduction}  </p><p>网址:{p.address}</p></div>} title="设备信息"    trigger="hover">
                                    <div className={style.imgbox}
                                        key={`${index}key`}
                                    > 
                                     
                                        {/* <Websocket url="ws://localhost:80/localhost/worker/info"
                                        onMessage={this.handleData.bind(this)}/> */}

                                        <div  onClick={startAct.bind(this, p)}  >
                                            <img className={style.comp}
                                                src={require('../../images/comp.jpg')}
                                            >
                                            </img>
                                            <p >{p.name}</p> 
                                        </div>  
                                    </div>
                                </Popover>;

                            }
                        )
                    }
                    
                </div>
                <div className={style.page + ' fr '}  >
                    {

                        <Pagination showQuickJumper  current={currentPage} total={dataSource.length} onChange={onChange} />
                                
                    }
                </div>
            </div>
        );
    }
}

