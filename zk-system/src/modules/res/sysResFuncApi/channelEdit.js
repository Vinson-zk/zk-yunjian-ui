/*
* @Author: Vinson
* @Date:   2022-03-05 10:31:51
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-04 17:45:52
* 
* 
* 
*/
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKModal, ZKTransfer } = ZKOriginalComponents;
// const { ZKEditForm, ZKInputJson, ZKOptRow, ZKEditJsonArray } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

class CInitChannelEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: [],
      dataSource:[],
      filter:"",
      isInit: false
    }
    this.findRequestChannels(this.state.filter, undefined);
  }
  // 关闭渠道编辑对话框
  close = ()=>{
  	this.setState({ selectedKeys:[], isInit: false });
  	this.props.onShowChannelEdit.call(this, false, {});
  };
  // 分配
  handleOk = (e)=>{
  	let selObjs = [];
  	let { dataSource, selectedKeys } = this.state;
  	dataSource.forEach(item=>{
  		if(selectedKeys.indexOf(item.key) != -1){
  			selObjs.push(item.data);
  		}
  	});
  	// console.log("[^_^:20220407-1529-001] handleOk, 本次分配的渠道有:", selObjs, selectedKeys, dataSource);
  	let { editFuncApi, dispatch, onShowChannelEdit } = this.props;
    dispatch({ 
      type: 'mSysResFuncApi/setRelationByFuncApi', 
      funcApi: editFuncApi,
      reqChannels: selObjs, 
      callback: dataObj=>{
        // console.log("[^_^:20220318-1941-002] 可分配的请求渠道：", dataObj);
        this.close();
      } 
    });
  };
  // 取消
  handleCancel = (e)=>{
    // console.log(e);
    this.close();
  };
  // 穿梭框值改变
  onChange = (targetKeys, direction, moveKeys) => {
    // console.log("[^_^:20220116-1936-001] handleChange:", targetKeys, direction, moveKeys);
    this.setState({ selectedKeys: targetKeys });
  };
  // 取所有可分配的渠道
  findRequestChannels = (filter, sorter)=>{
	let { dispatch } = this.props;
    dispatch({ 
      type: 'mSysResFuncApi/findSysResRequestChannels', 
      filter: filter, sorter: sorter, 
      callback: dataObj=>{
        // console.log("[^_^:20220318-1941-002] 可分配的请求渠道：", dataObj);
        let {pagination, sorter, resultList } = dataObj;
        let dataSource = this.convertData(resultList);
        this.setState({dataSource:dataSource, filter:filter});
      } 
    });
  };
  // 数据源格式转换
  convertData = (datas)=>{
  	let { intl, mApp } = this.props;
  	let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
    if(datas && (datas instanceof Array)){
      return datas.map(item=>{
        return {
          key: item.pkId,
          data: item,
          // description: zkToolsMsg.getInternationInfo(item.name?item.name:{}, lang),
          // disabled: i % 3 < 1, // 禁止数据行选择
        }
      });
    }
    if(console){
      console.log("[^_^:20220317-1543-001] 穿输框无数据；");
    }
    return [];
  };
  // 取当前编辑的功能API分配的渠道
  getApiRelation = props=>{
  	let { dispatch, editFuncApi } = props;
    // console.log("[^_^:20220407-1657-001] getApiRelation ", props);
  	// 取当前接口已分配的渠道
  	dispatch({ 
      type: 'mSysResFuncApi/findRelationByFuncApi', 
      filter: {
      	'funcApiId': editFuncApi.pkId
      }, 
      sorter: {}, 
      callback: dataObj=>{
        // console.log("[^_^:20220318-1941-002] 可分配的请求渠道：", dataObj);
        let { resultList } = dataObj;
        if(resultList && resultList instanceof Array){
        	let selectKeys = resultList.map(item=>{
        		return item.channelId;
        	});
    		// console.log("[^_^:20220407-1657-002] getApiRelation.selectedKeys ", selectKeys);
        	this.setState({ selectedKeys: selectKeys||[] });
        }
      } 
    });
  };
  // // 2、调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
  // static getDerivedStateFromProps(props, state) {
  // 	if(props.isShow && state.isInit == false){
  //   	console.log("[^_^:20220329-2345-002] CReactDva:React-Lifecycle getDerivedStateFromProps ", state.isInit);
  // 		state.isInit = true;
  // 	}
  //   return true;
  // }
  // 3、更新时调用，此方法仅作为性能优化存在。不要依赖它来“防止”渲染
  shouldComponentUpdate(nextProps, nextState){
  	if(nextProps.isShow && this.state.isInit == false){
    	// console.log("[^_^:20220407-1704-001] CReactDva:React-Lifecycle shouldComponentUpdate ", nextState.isInit);
  		nextState.isInit = true;
    	this.getApiRelation(nextProps);
  	}else{
    	// console.log("[^_^:20220407-1704-002] CReactDva:React-Lifecycle shouldComponentUpdate ", nextState.isInit);
  	}
  	return true;
  }
  // 4、 类组件中唯一必需的方法, 返回 JSX 元素
  render() {
   	// console.log("[^_^:20220407-1724-001] CReactDva:React-Lifecycle render ", this.state);
    let { intl, mApp, isShow, loading } = this.props;
  	let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
    let transferProps = {
   	  listStyle: {
        // width: 400,
        height: 450,
        textAlign: "left"
      },
      locale: {
        notFoundContent: zkToolsMsg.msgFormatByIntl(intl, "global.message.no.select.data"),
        searchPlaceholder: zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_search")
      },
      dataSource: this.state.dataSource,
      targetKeys:this.state.selectedKeys,
      titles:[zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.opt.channel.source'), zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.opt.channel.selected')],
      render:item => {
      	return <span title = {zkToolsMsg.getInternationInfo(item.name?item.name:{}, lang)} >{zkToolsMsg.getInternationInfo(item.data.name?item.data.name:{}, lang)}({item.data.code})</span>
      },
      onChange: this.onChange
    }

    let spinning = this.state.loading 
    	|| loading.effects['mSysResFuncApi/findSysResRequestChannels'] 
    	|| loading.effects['mSysResFuncApi/findRelationByFuncApi']
    	|| loading.effects['mSysResFuncApi/setRelationByFuncApi'] ;
    return (
		<ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.opt.channel.set')} visible={isShow}
		  onOk={this.handleOk}
		  onCancel={this.handleCancel}
		  okButtonProps = {{loading: spinning}}
		  cancelButtonProps = {{loading: spinning}}
		>
      <ZKSpin spinning={spinning === true} >
		    <ZKTransfer {...transferProps} />
		  </ZKSpin>
		</ZKModal>
    )
  }
  // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
  // componentDidUpdate(){ 
  // 	if(this.props.isShow && this.state.isInit == false){
  //   	console.log("[^_^:20220407-1704-001] CReactDva:React-Lifecycle componentDidUpdate ", this.state.isInit);
  // 		this.setState({ isInit: true });
  //   	this.getApiRelation(this.props);
  // 	}else{
  //   	console.log("[^_^:20220407-1704-002] CReactDva:React-Lifecycle componentDidUpdate ", this.state.isInit);
  // 	}
  // }

  // // 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
  // componentWillUnmount() {
  //   // console.log("[^_^:20220329-2345-001] CReactDva:React-Lifecycle componentWillUnmount ", this.props);
  // }

}

export default injectIntl(connect(({ mApp, mSysResFuncApi, loading }) => ({ mApp, mSysResFuncApi, loading }))(CInitChannelEdit));



