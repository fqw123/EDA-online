import React, { Component } from 'react';
import style from './style.module.scss';
import {Icon, Table, Pagination } from 'antd';
import GoBack from '../../common/goBack/index';

export default class view extends Component {
    constructor(props){
        super(props);
    }
     dataSource = [{
         key: '1',
         time: '2018-09-10'
       
     }, {
         key: '2',
         time: '2018-09-11'
     }, {
         key: '1',
         time: '2018-09-10'
      
     }, {
         key: '2',
         time: '2018-09-11'
     }, {
         key: '1',
         time: '2018-09-10'
      
     }, {
         key: '2',
         time: '2018-09-11'
     }];
     columns = [{
         title: '序号',
         dataIndex: 'order',
         render: (text, record, index)=>{
             return index; 
         }
     }, {
         title: '时间',
         dataIndex: 'time',
         key: 'time'
     },
     {
         title: '操作',
         dataIndex: 'caozuo',
         key: 'caozuo',
         render: ()=>{
             return <a>下载实验结果</a>;
         }
     }]
     render() {
         const {data, currentPage, onChange} = this.props;
         return (
             <div className={style.ubox}  >
                 <div  className={style.titp}><span  className={style.txt}>个人中心</span>   <GoBack {...this.props}/>    </div>
                 <div  className="clearfix">
                     <div className={style.imgBox}><img/></div>
                     <div  className={style.user}><Icon type="user" />&emsp;用户名：user</div>
                     <div  className={style.user}><Icon type="contacts" />&emsp;年级：2015级6班</div>
                     <div  className={style.user}><Icon type="mail" />&emsp;邮箱：1452342890@163.com</div>
                     <div  className={style.user}><Icon type="edit" />&emsp;个人简介：红豆生南国，春来发几枝</div>
                 </div>
                 <div>
                     <p className={style.pline + '  clearfix'}><span className={style.tet}>实验记录</span>   <span className={style.num}>共10条记录</span></p>
                 </div>
                 <Table dataSource={this.dataSource}  pagination={false}  columns={this.columns} />
                 <div className={style.page + ' fr '}  >
                     {
                         this.dataSource  instanceof Array && this.dataSource.length > 0 ?

                             <Pagination showQuickJumper  current={currentPage} total={500} onChange={onChange} />
                             :
                             ''
                     }
                 </div>
                
             </div>
         );
     }
   
}
