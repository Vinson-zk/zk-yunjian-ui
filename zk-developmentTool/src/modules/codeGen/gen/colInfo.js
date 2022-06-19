/*
* @Author: Vinson
* @Date:   2021-04-01 09:47:49
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-19 20:02:15
* 
* 
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon, Form, Input } from "antd";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKInputNumber, ZKSelect, ZKRadio, ZKModal, ZKButton, ZKPopconfirm, ZKTable, ZKForm } = ZKOriginalComponents;
const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon, ZKScrollTable, ZKOptRow } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import styles from './styles.less';

const f_getEditNode = (intl, itemName)=>{
  let wrapperCol = {
    xs: { span: 24 },
    sm: { span: 24 }
  }

  let labelCol = {
    xs: { span: 24 },
    sm: { span: 0 },
  }

  if(itemName == 'attrIsBaseField' || itemName == 'attrIsInsert'|| itemName == 'attrIsUpdate'){
    return (
      <ZKForm.Item wrapperCol = {wrapperCol} labelCol = {labelCol} name={itemName} className={styles.margin_0_im} rules={[zkToolsValidates.notNull(intl, "boolean")]} >
        <ZKSelect className = { styles.width_100_im } >
                  <ZKSelect.Option value={true}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                  <ZKSelect.Option value={false}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
              </ZKSelect>
      </ZKForm.Item>
    )
  }else if(itemName == 'attrQueryType'){
    return (
      <ZKForm.Item wrapperCol = {wrapperCol} labelCol = {labelCol} name={itemName} className={styles.margin_0_im}  >
        <ZKSelect className = { styles.width_100_im } >
                  <ZKSelect.Option value="">&nbsp;</ZKSelect.Option>
                  <ZKSelect.Option value="EQ">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.EQ')}</ZKSelect.Option>
                  <ZKSelect.Option value="NEQ">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.NEQ')}</ZKSelect.Option>
                  <ZKSelect.Option value="GT">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.GT')}</ZKSelect.Option>
                  <ZKSelect.Option value="GTE">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.GTE')}</ZKSelect.Option>
                  <ZKSelect.Option value="LT">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.LT')}</ZKSelect.Option>
                  <ZKSelect.Option value="LTE">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.LTE')}</ZKSelect.Option>
                  <ZKSelect.Option value="IN">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.IN')}</ZKSelect.Option>
                  <ZKSelect.Option value="LIKE">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.LIKE')}</ZKSelect.Option>
                  <ZKSelect.Option value="NLIKE">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.NLIKE')}</ZKSelect.Option>
                  <ZKSelect.Option value="ISNULL">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.ISNULL')}</ZKSelect.Option>
                  <ZKSelect.Option value="ISNOTNULL">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.ISNOTNULL')}</ZKSelect.Option>
              </ZKSelect>
      </ZKForm.Item>
    )
  }else if(itemName == 'editStrategy'){
    return (
      <ZKForm.Item wrapperCol = {wrapperCol} labelCol = {labelCol} name={itemName} className={styles.margin_0_im}  >
        <ZKSelect className = { styles.width_100_im } >
                  <ZKSelect.Option value="noEdit">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.noEdit')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditString">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditString')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditInt">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditInt')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditFloat">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditFloat')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditJson">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditJson')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditSel">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditSel')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditRadio">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditRadio')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditCheck">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditCheck')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditIcon">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditIcon')}</ZKSelect.Option>
                  <ZKSelect.Option value="EditDate">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditDate')}</ZKSelect.Option>
              </ZKSelect>
      </ZKForm.Item>
    )    
  }else if(itemName == 'searchStrategy'){
    return (
      <ZKForm.Item wrapperCol = {wrapperCol} labelCol = {labelCol} name={itemName} className={styles.margin_0_im}  >
        <ZKSelect className = { styles.width_100_im } >
                  <ZKSelect.Option value="noSearch">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.noSearch')}</ZKSelect.Option>
                  <ZKSelect.Option value="SearchString">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchString')}</ZKSelect.Option>
                  <ZKSelect.Option value="SearchJson">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchJson')}</ZKSelect.Option>
                  <ZKSelect.Option value="SearchSel">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchSel')}</ZKSelect.Option>
                  <ZKSelect.Option value="SearchDate">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchDate')}</ZKSelect.Option>
                  <ZKSelect.Option value="SearchDateRang">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchDateRang')}</ZKSelect.Option>
                  <ZKSelect.Option value="SearchNum">{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchNum')}</ZKSelect.Option>
              </ZKSelect>
      </ZKForm.Item>
    )
  }else{
    let rules = [];
    let nodeType = 0;
    switch(itemName){
      case "colComments":
        rules.push(zkToolsValidates.notNull(intl));
        rules.push(zkToolsValidates.string(intl, 0, 512));
        break;
      case "label":
        rules.push(zkToolsValidates.notNull(intl));
        rules.push(zkToolsValidates.string(intl, 0, 64));
        break;
      case "attrName":
        rules.push(zkToolsValidates.notNull(intl));
        rules.push(zkToolsValidates.string(intl, 0, 64));
        break;
      case "attrType":
        rules.push(zkToolsValidates.notNull(intl));
        rules.push(zkToolsValidates.string(intl, 0, 64));
        break;
      case "colSort":
        rules.push(zkToolsValidates.notNull(intl));
        rules.push(zkToolsValidates.integer(intl, 0, 999999));
        nodeType = 1;
        break;
    }

    return (
      <ZKForm.Item wrapperCol = {wrapperCol} labelCol = {labelCol} name={itemName} className={styles.margin_0_im} rules={rules} >
        {nodeType == 0 ? <ZKInput style = {{width: '100%'}} /> : <ZKInputNumber style = {{width: '100%'}} />}
      </ZKForm.Item>
    )
     
  }
}

const FInitEditTableCell = ({ intl, editing, dataIndex, title, record, index, children, ...restProps }) => {
  return (
    <td {...restProps}>
      { editing ? f_getEditNode(intl, dataIndex) : children }
    </td>
  );
};

const f_getTableColumns = (intl, isRowEditing, onRowEdit, onRowCancelEdit, onRowEditOk) => {
  return [
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.colName'),
      dataIndex: 'colName', key: 'colName', width: 100, textAlign: 'left',
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.colJdbcType'),
      dataIndex: 'colJdbcType', key: 'colJdbcType', width: 80, textAlign: 'left'
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.colIsPK'),
            dataIndex: 'colIsPK', key: 'colIsPK', width: 50, textAlign: 'center',
            render: (text, record, index) => {
        if (record.colIsPK == true) {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
        } else {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
        }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.colIsNull'),
            dataIndex: 'colIsNull', key: 'colIsNull', width: 50, textAlign: 'center',
            render: (text, record, index) => {
        if (record.colIsNull == true) {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
        } else {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
        }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.colSort'),
            dataIndex: 'colSort', key: 'colSort', width: 50, textAlign: 'center'
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.label'),
            dataIndex: 'label', key: 'label', width: 100, textAlign: 'left', editable: true
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.attrName'),
            dataIndex: 'attrName', key: 'attrName', width: 120, textAlign: 'left', editable: true
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.attrType'),
            dataIndex: 'attrType', key: 'attrType', width: 120, textAlign: 'left', editable: true
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.attrIsBaseField'),
            dataIndex: 'attrIsBaseField', key: 'attrIsBaseField', width: 60, textAlign: 'center', editable: true,
            render: (text, record, index) => {
        if (record.attrIsBaseField == true) {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
        } else {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
        }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.attrQueryType'),
            dataIndex: 'attrQueryType', key: 'attrQueryType', width: 100, textAlign: 'center', editable: true,
            render: (text, record, index) => {
              switch(record.attrQueryType){
                case 'EQ':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.EQ');
                case 'NEQ':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.NEQ');
                case 'GT':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.GT');
                case 'GTE':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.GTE');
                case 'LT':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.LT');
                case 'LTE':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.LTE');
                case 'IN':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.IN');
                case 'LIKE':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.LIKE');
                case 'NLIKE':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.NLIKE');
                case 'ISNULL':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.ISNULL');
                case 'ISNOTNULL':
                  return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.QueryType.ISNOTNULL');
              }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.attrIsInsert'),
            dataIndex: 'attrIsInsert', key: 'attrIsInsert', width: 60, textAlign: 'center', editable: true,
            render: (text, record, index) => {
        if (record.attrIsInsert == true) {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
        } else {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
        }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.attrIsUpdate'),
            dataIndex: 'attrIsUpdate', key: 'attrIsUpdate', width: 60, textAlign: 'center', editable: true,
            render: (text, record, index) => {
        if (record.attrIsUpdate == true) {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
        } else {
          return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
        }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy'),
            dataIndex: 'editStrategy', key: 'editStrategy', width: 100, textAlign: 'center', editable: true,
            render: (text, record, index) => {
        switch(text){
          case "EditString": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditString');
          case "EditInt": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditInt');
          case "EditFloat": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditFloat');
          case "EditJson": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditJson');
          case "EditSel": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditSel');
          case "EditRadio": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditRadio');
          case "EditCheck": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditCheck');
          case "EditIcon": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditIcon');
          case "EditDate": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.EditDate');
          default: return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.editStrategy.noEdit');
        }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy'),
            dataIndex: 'searchStrategy', key: 'searchStrategy', width: 100, textAlign: 'center', editable: true,
            render: (text, record, index) => {
        switch(text){
          case "SearchString": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchString');
          case "SearchJson": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchJson');
          case "SearchSel": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchSel');
          case "SearchDate": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchDate');
          case "SearchDateRang": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchDateRang');
          case "SearchNum": return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.SearchNum');
          default: return zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.searchStrategy.noSearch');
        }
      }
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.colComments'),
            dataIndex: 'colComments', key: 'colComments', width: 120, textAlign: 'left', editable: true
    },
    {
      title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
      dataIndex: 'opt', key: 'opt', width: 150, fixed: 'right', 
      render: (text, record, index) => {
        if(isRowEditing(record)){
          return (
            <ZKOptRow key={`grid-${record.pkId}`} >
              <ZKOptRow.OptGroup>
                <ZKOptRow.OptGroup.OptItem onClick={() => { // 保存
                  onRowEditOk(record);
                }}>
                  {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_ok')}
                </ZKOptRow.OptGroup.OptItem>
                <ZKOptRow.OptGroup.OptItem onClick={() => { // 取消
                  onRowCancelEdit(record);
                }}>
                  {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_cancel')}
                </ZKOptRow.OptGroup.OptItem>
              </ZKOptRow.OptGroup>
            </ZKOptRow>
          )
        }else{
          // if(record.attrIsBaseField == true){
          //   return "父字段不能编辑";
          // }
          return (
            <ZKOptRow key={`grid-${record.pkId}`} >
              <ZKOptRow.OptGroup>
                <ZKOptRow.OptGroup.OptItem onClick={() => { // 编辑
                  onRowEdit(record);
                }}>
                  {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
                </ZKOptRow.OptGroup.OptItem>
              </ZKOptRow.OptGroup>
              
            </ZKOptRow>
          )
        }
      }
    },
    // { title: '', dataIndex: '_', key: '_' },
  ]
};

class CInitColInfo extends Component {

  refForm = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
          filterValue: '',
          editData: '',
        }
    }

    static getDerivedStateFromProps(props, state) {
      if(props.mColInfo.tableInfo != undefined && props.mColInfo.tableInfo.pkId != undefined && props.mColInfo.colInfos == undefined){
        // 选择设置列表数据为空；表示，查询过了；防止循环查询；
        props.dispatch({ type: 'mColInfo/setState', payload:{colInfos: []} });
        props.dispatch({ type: 'mColInfo/findColInfos', tableId:  props.mColInfo.tableInfo.pkId });
      }
        return true;
    }

  // 生成代码
  onGenCode = ()=>{
    this.f_confirmGiveUpEdit(()=>{
      this.props.dispatch({ type: 'mGen/genCode', moduleId:this.props.mFuncModule.optEntity.pkId, params: {tableIds:[this.props.mColInfo.tableInfo.pkId]} });
    });
  }
  // 判断行是否是在编辑中；true-是；false-不是；
  isRowEditing = (record) => {
    return (this.state.editData != null) && (record.pkId === this.state.editData.pkId);
  }
  // 取消编辑 
  onRowCancelEdit = () => {
    this.setState({ editData:null });
  }
  // 编辑行
  onRowEdit = (record) => {
    this.refForm.current.setFieldsValue(record);
    this.setState({ editData: record });
  }
  // 行编辑,确认
  onRowEditOk = async ()=>{
    const fData = await this.refForm.current.validateFields();
    // isEdit 表示数据被编辑过，保存时根据这个标识来提交
    const sData = { ...this.state.editData, ...fData, isEdit: true };

    /*** 处理编辑数据，本地修改数据模型 */
    let sourceCols = this.props.mColInfo.colInfos;
    let resCols = [];
    for(let i=0; i<sourceCols.length; ++i){
      if(sourceCols[i].pkId == sData.pkId){
        resCols.push(sData);
      }else{
        resCols.push(sourceCols[i]);
      }
    }
    this.props.dispatch({ type: 'mColInfo/setState', payload:{colInfos: resCols} });
    this.onRowCancelEdit();
  }
  // 取所有编辑过和行
  f_getEditData = ()=>{
    let sourceCols = this.props.mColInfo.colInfos;
    let editCols = [];
    sourceCols.forEach(item=>{
      if(item.isEdit){
        editCols.push(item);
      }
    });
    return editCols;
  }
  // 提交编辑数据保存
  onRowSaveAll = ()=>{
    let editCols = this.f_getEditData();
    if(editCols.length > 0){
      // 需要保存
      try {
        // console.log("[^_^:20210331-1741-001] edit row data：", sData);
        this.props.dispatch({ 
          type: 'mColInfo/editColInfo', 
                payload: editCols, 
                callback: (errors) => {
                  if(errors){
                    this.refForm.current.setFields(errors);
                  }else{
                    this.props.dispatch({ type: 'mColInfo/findColInfos', tableId: this.props.mColInfo.tableInfo.pkId });  
                    this.onRowCancelEdit();  
                  }
                }
        });
        } catch (errInfo) {
          if(console)console.error('[>_<:20211124-1016-001] Validate Failed:', errInfo);
        }
    }else{
      zkToolsMsg.alertMsg(null, null, {type:"warning", msg:zkToolsMsg.msgFormatByIntl(this.props.intl, 'zk.codeGen.colInfo.msg.not.edit.data')});
    }
  }
  // 前端过滤查询
  onSearch = (value, event)=>{
    this.setState({filterValue: value});
  }
  // 增量 更新表字段信息
  updateAddCols = (record, index)=>{
    this.props.dispatch({ type: 'mColInfo/updateAddCols', tableId: this.props.mColInfo.tableInfo.pkId });  
  }
  // 全量 更新表字段信息
  updateAllCols = (record, index)=>{
    this.props.dispatch({ type: 'mColInfo/updateAllCols', tableId: this.props.mColInfo.tableInfo.pkId });  
  }
  // 如果有编辑过的数据未保存，提示，保存
  f_confirmGiveUpEdit = callback=>{
    let editCols = this.f_getEditData();
    if(editCols.length > 0){
      zkToolsMsg.alertModalMsg(this.props.intl, null, {
        type:"confirm", 
        onOk: ()=>{callback.call(this);},
        msg:zkToolsMsg.msgFormatByIntl(this.props.intl, 'zk.codeGen.colInfo.msg.have.edit.data')
      });
    }else{
      callback.call(this);
    }
  }

    render() {
        let { dispatch, mGen, mColInfo, intl, loading, location } = this.props;
        let { tableInfo } = mColInfo;

        // 列表字段 - 可编辑
        let tableColumns = f_getTableColumns(intl, this.isRowEditing, this.onRowEdit, this.onRowCancelEdit, this.onRowEditOk);
        const mergedColumns = tableColumns.map((col) => {
        if (!col.editable) {
           return col;
        }else{
          return {
            ...col,
            onCell: (record) => ({
              record,
              dataIndex: col.dataIndex,
              title: col.title,
              editing: this.isRowEditing(record),
              intl: intl
            }),
          };
      }
    });

    // 列表过滤
    const f_gridFilter = datas=>{
      if(zkJsUtils.isEmpty(this.state.filterValue)){
        return datas;
      }

      let ds = [];
      datas.forEach(item=>{
        // 根据字段名和属性名过滤
        if(item.colName.indexOf(this.state.filterValue) != -1 || item.attrName.indexOf(this.state.filterValue) != -1){
          ds.push(item);
        }
      });
      return ds;
    }

    let spanLoading = loading.effects['mColInfo/findColInfos'] || loading.effects['mColInfo/editColInfo'] || loading.effects["mColInfo/updateAddCols"] || loading.effects["mColInfo/updateAllCols"] || loading.effects["mGen/genCode"];
    // 
        return (tableInfo != undefined && mGen.pathname == location.pathname) && (
          <ZKForm ref = {this.refForm} component={false} >
        <ZKScrollTable id = "_colInfo_table" loading = { spanLoading }
          // autoHeight = {false}
          // rowSelection = {{
          //   onChange: this.onChangeSelKeysFunc,
          //   selectedRowKeys: this.state.selKeys, 
          //   columnWidth: '32px'
          // }}
          rowKey = "pkId"
          rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 30}}
          components={{
                body: {
                  cell: FInitEditTableCell,
                },
              }}
          columns = { mergedColumns }
          scroll = {{ x:1640, y: 600 }}
          pagination = {false}
          // pagination = {{position: ['topRight'], ...pagination}}
                  // dataSource = { f_gridFilter(mColInfo.colInfos) }
                  dataSource = { f_gridFilter(mColInfo.colInfos) }
                  // (pagination, filters, sorter, extra: { currentDataSource: [] })
                  // onChange = {onChange}
          className = {styles.info_section}
          // onRow = {this.onRowClick}
        >
          <div className = {styles.title_row} >
            <div className = {styles.title}>
              <ZKIcon.Antd4Icon icon = "DatabaseOutlined" /> &nbsp; { tableInfo.tableName } &nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.col.info')} 
            </div>
            {mColInfo.tableInfo.pkId?(
              <div className = {styles.title_opt_left}>
                <ZKInput.Search onSearch = {this.onSearch} onChange = {e=>{this.onSearch(e.target.value)}} placeholder = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.colName') + '/' + zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.colInfo.attrName')} enterButton />
              </div>
              ):""}
            {mColInfo.tableInfo.pkId?(
              <div className = {styles.title_opt}>
                <ZKButton onClick={this.onRowSaveAll} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_save')}</ZKButton>
                <ZKButton onClick={this.onGenCode} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.opt._key_genCode')}</ZKButton>
                <ZKButton onClick={this.updateAddCols} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.opt._key_update_colInfo_add')}</ZKButton>
                <ZKPopconfirm title={zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.msg.update_colInfo_all')} placement="left" onConfirm={() => { // 更新表信息
                    this.updateAllCols.call(this);
                  }}>
                  <ZKButton>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.opt._key_update_colInfo_all')}</ZKButton>
                </ZKPopconfirm>              
              </div>
            ):""}
          </div>
        </ZKScrollTable>
      </ZKForm>
    )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        // let { location, dispatch, mGen } = this.props;
        // // 地址栏改变了 
        // if (mGen.pathname != location.pathname) {
        //     dispatch({ type: 'mGen/setState', payload: { pathname: location.pathname} });
        //     dispatch({ type: 'mColInfo/updateAddCols', tableId: this.props.mColInfo.tableInfo.pkId });
        // }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {
      let colInfoElement = document.getElementById("_colInfo_table");
        if (colInfoElement) {
          colInfoElement.scrollIntoView(false);
        }
    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
    // let { mColInfo, dvaApp } = this.props;
    // zkToolsNavAndMenu.unRegisterModel(dvaApp, [mColInfo]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
//   console.log("[^_^:20211124-1008-001] ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mGen, mFuncModule, mColInfo, loading }) => ({ mGen, mFuncModule, mColInfo, loading }))(CInitColInfo));


