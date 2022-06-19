/*
* @Author: Vinson
* @Date:   2022-05-06 17:14:32
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-09 17:26:11
* 
* 
* 
*/


import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { DownOutlined } from '@ant-design/icons';
// import * as uuid from 'uuid';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";
const { ZKModal, ZKSelect, ZKInput, ZKDivider, ZKSpin } = ZKOriginalComponents;
const { ZKScrollTable, ZKSearchRow } = ZKCustomComponents;
const { ZKApplicationSystemSelect, ZKDeptSelect } = ZKBusinessComponents;
const { zkToolsMsg, zkToolsAjax, zkToolsUtils } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

import zkStyles from 'zkFramework/css/styles.less';
/**
 * 执行查询 非树形/分页
 */
function f_doingSearch(url, params) {
    // return zkToolsAjax.reqData(url, {method:'GET', async:false, data:params});
    // return zkToolsAjax.reqPretreatment(url, {method:'GET', async:false, data:params});
	return zkToolsAjax.req(url, {method:'GET', async:true, data:params});
}

class CInitGrantFuncApi extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	isInit: false,
            spinningListDatas: false,
            spinningOwnerIds: false,
            filter: {},
            selectedKeys:[],
            selectedObjs:undefined,
            listDatas:[],
        };
    };
    
    // 查询列表数据
    f_findListDatas = (params={}, sorter=[], pagination={})=>{
        try{
        	this.setState({spinningListDatas: true});
        	params = zkToolsUtils.convertSortParam(params, sorter); 
	        params = { ...params, ...zkToolsUtils.convertPageParam(pagination)};
	        f_doingSearch(this.props.url, params).done(res=>{
		    	if (res.code == 'zk.0') {
	            	this.setState({listDatas: res.data.result||[], spinningListDatas: false});
	            }else{
	            	throw new Error("[>_<:20220504-1532-002] request url:[" + this.props.url + "] exception: " + res.code);
	            	this.setState({spinningListDatas: false});
	            } 
		    });		    	
	    }catch(err){
	    	this.setState({spinningListDatas: false});
	    }
    };
    // 查询已拥有的 ID 列表
    f_findOwnerIds=(authId)=>{
    	if(zkJsUtils.isEmpty(authId)){
    		return [];
    	}else{
    		try{
	        	this.setState({spinningOwnerIds: true});
	        	let params = {'authId': authId}; 
		        f_doingSearch(this.props.urlOwnerIds, params).done(res=>{
			    	if (res.code == 'zk.0') {
		            	this.setState({ selectedKeys: res.data||[], spinningOwnerIds: false });	
		            }else{
		            	throw new Error("[>_<:20220504-1532-003] request url:[" + this.props.urlOwnerIds + "] exception: " + res.code);
		            	this.setState({spinningOwnerIds: false});
		            } 
			    });		        
		    }catch(err){
		    	this.setState({spinningOwnerIds: false});
		    	throw err;
		    }
    	}
    };
    // 查询 
    f_onSearch = values=>{
        this.f_findListDatas(values);
    };
    /** 选择行改变 */
	f_changeSelKeys = (selRowKeys, selRows) => {
		this.setState({selectedKeys:selRowKeys, selectedObjs:selRows});
	};
	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        let lists = this.f_findListDatas(this.state.filters, sorter, pagination);
        this.setState({listDatas: lists});
    };
    /**  保存 */
    f_handleOk = ()=>{
    	if(this.state.selectedObjs === undefined){
    		// 没有选择过，直接关闭
    		this.f_close();
    		return;
    	}

    	let { dispatch } = this.props;
		dispatch({ 
		  type: 'mSysAuthDefined/grantFuncApis', 
		  authId: this.props.targetId,
		  funcApis: this.state.selectedObjs, 
		  callback: dataObj=>{
		    this.f_close();
		  } 
		});
    };
    /**  取消 */
    f_handleCancel = ()=>{
    	this.f_close();
    };
    /**  关闭 */
    f_close = ()=>{
    	this.setState({ isInit:false, filter:{}, selectedKeys:[], selectedObjs: undefined, listDatas:[] });
    	if(this.props.onShowModal instanceof Function){
    		this.props.onShowModal.call(this, "grantFuncApiModal", false, {});
    	}
    };
    
	render(){
		let { intl, loading, mApp, isShow, descName } = this.props;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
		let tableColumns = [
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.name'),
				textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
				render: (text, record, index) => {
					return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
				}
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.code'),
				textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.systemCode'),
				textAlign: 'center', dataIndex: 'systemCode', key: 'systemCode', width: 100, 
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.agentUri'),
				textAlign: 'center', dataIndex: 'agentUri', key: 'agentUri', width: 100, 
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqDesc'),
				textAlign: 'center', dataIndex: 'reqDesc', key: 'reqDesc', width: 100, 
				render: (text, record, index) => {
					return zkToolsMsg.getInternationInfo(record.reqDesc?record.reqDesc:{}, lang);
				}
			}
		]

		let spinning = loading.effects['mSysAuthDefined/grantFuncApis'];
		let gridSpinning = this.state.spinningListDatas || this.state.spinningOwnerIds;

	    return (
			<ZKModal title={`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.opt.grantFuncApi')}[${descName}]`} visible={isShow}
			  onOk={this.f_handleOk}
			  onCancel={this.f_handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {860}
			>
				<ZKSpin spinning={spinning === true} >
					<ZKSearchRow 
		                initialValues={this.state.filter} 
		                filter={this.state.filter} 
		                resetFunc={values => {}}
		                searchFunc={values => {
		                    this.f_onSearch.call(this, values);
		                }}
		            >    
		                <ZKSearchItem name = "searchValue" label = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.code')}`} >
		                    <ZKInput style = {{width:"180px"}}  />
		                </ZKSearchItem>       
		                <ZKSearchItem name = "systemCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.systemCode')} >
		                    <ZKApplicationSystemSelect valueKey="code" />
		                </ZKSearchItem>       
		                <ZKSearchItem name = "originalUri" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.originalUri')} >
		                    <ZKInput style = {{width:"180px"}}  />
		                </ZKSearchItem>       
		                <ZKSearchItem name = "agentUri" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.agentUri')} >
		                    <ZKInput style = {{width:"180px"}}  />
		                </ZKSearchItem>       
		            </ZKSearchRow>
		            <ZKDivider />
				    <ZKScrollTable loading = { gridSpinning }
						autoHeight = {true}
						rowSelection = {{
							onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
							selectedRowKeys: this.state.selectedKeys||[], 
							columnWidth: '32px',
							// getCheckboxProps: record=>{
							// 	return {
							// 		disabled: record.status == 0?false:true,
							// 	}
							// }
						}}
						rowKey = "pkId"
						rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
						columns = {tableColumns}
						scroll = {{ x:850, y: this.state.sh }}
						pagination = {{}}
						// pagination = {{position: ['topRight'], ...page}}
		                dataSource = {this.state.listDatas||[]}
		                onChange = {this.f_changeGrid}
						className = {zkStyles.flex_1_auto}
					></ZKScrollTable>
				</ZKSpin>
			</ZKModal>
		)
	}

	// 3、更新时调用，此方法仅作为性能优化存在。不要依赖它来“防止”渲染
	  shouldComponentUpdate(nextProps, nextState){
	  	// console.log("[^_^:20220504-1739-002] shouldComponentUpdate:", nextState);
	  	if(nextProps.isShow && this.state.isInit == false){
	  		nextState.isInit = true;
	  		if(nextProps.targetId){
		    	this.f_findOwnerIds(nextProps.targetId);
		    	this.f_onSearch();
	  		}else{
	  			throw new Error("[>_<:2020504-1654-001] 分配Api接口时，当前操作权限 [targetId] 必传入", nextProps.targetId);
	  		}
	  	}
	  	return true;
	  }

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }
}

// 定义属性
CInitGrantFuncApi.propTypes = {
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	url: PropTypes.string.isRequired, 
	// 查询目标已有的 Api接口 ID 的 url，会以目标ID参数；
	urlOwnerIds: PropTypes.string.isRequired, 
	isShow: PropTypes.bool.isRequired, 
	targetId: PropTypes.string, 
	descName: PropTypes.string
}
// 定义属性默认值
CInitGrantFuncApi.defaultProps = {
	url: `/${globalAppConfig.apiPrefixSys}/res/sysResFuncApi/sysResFuncApisPage`,
	urlOwnerIds: `/${globalAppConfig.apiPrefixSys}/auth/sysAuthFuncApi/findApiIdsByAuthId`,
	isShow: false,
	targetId: undefined, // 操作对象ID
	descName: "", // 操作对象说明名称
}

export default injectIntl(connect(({ mApp, loading }) => ({ mApp, loading }))(CInitGrantFuncApi));


