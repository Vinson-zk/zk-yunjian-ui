/*
* @Author: Vinson
* @Date:   2022-05-09 14:20:36
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-09 18:57:16
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
const { ZKModal, ZKSelect, ZKInput, ZKDivider, ZKSpin, ZKSwitch } = ZKOriginalComponents;
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

class CInitGrantAuthToCompany extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	isInit: false,
        	isChange: false,
            spinningListDatas: false,
            spinningOwnerIds: false,
            selectedKeys:[],
            // selectedObjs: undefined,
            allOwnerKeys: undefined, // 初始化为 undefined; 以实现查出数据后更新权限的默认拥有状态
            listDatas:[],
            filter: {},
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
	            	throw new Error("[>_<:20220509-1426-002] request url:[" + this.props.url + "] exception: " + res.code);
	            	this.setState({spinningListDatas: false});
	            } 
		    });		    	
	    }catch(err){
	    	this.setState({spinningListDatas: false});
	    }
    };
    // 查询已拥有的 ID 列表
    f_findOwnerIds=(companyId)=>{
    	if(zkJsUtils.isEmpty(companyId)){
    		return [];
    	}else{
    		try{
	        	this.setState({spinningOwnerIds: true});
	        	let params = {'companyId': companyId}; 
		        f_doingSearch(this.props.urlOwnerIds, params).done(res=>{
			    	if (res.code == 'zk.0') {
			    		let selectedKeys = res.data['0']||[];
			    		let allOwnerKeys = res.data['1']||[];
			    		selectedKeys = selectedKeys.concat(allOwnerKeys);
		            	this.setState({ selectedKeys: selectedKeys, allOwnerKeys:allOwnerKeys, spinningOwnerIds: false });	
		            }else{
		            	throw new Error("[>_<:20220509-1426-003] request url:[" + this.props.urlOwnerIds + "] exception: " + res.code);
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
		this.setState({selectedKeys:selRowKeys, isChange: true});
	};
	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        let lists = this.f_findListDatas(this.state.filters, sorter, pagination);
        this.setState({listDatas: lists});
    };
    /**  保存 */
    f_handleOk = ()=>{
    	if(this.state.isChange === false){
    		// 没有改变过，直接关闭
    		this.f_close();
    		return;
    	}
    	// 查出所有选择的节点数据对象
    	let selectedObjs = [];
    	this.state.selectedKeys.forEach(key=>{
    		this.state.listDatas.forEach(item=>{
    			if(item.pkId === key){
    				selectedObjs.push(item);
    			}	
    		});
    	});

    	let { dispatch } = this.props;
		dispatch({ 
		  type: 'mSysOrgCompanyAdmin/grantAuth', 
		  companyId: this.props.targetId,
		  auths: selectedObjs, 
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
    	this.setState({ isInit:false, isChange: false, filter:{}, selectedKeys:[],  listDatas:[], allOwnerKeys:undefined});
    	if(this.props.onShowModal instanceof Function){
    		this.props.onShowModal.call(this, false, {});
    	}
    };
    
	render(){
		let { intl, loading, mApp, isShow, descName } = this.props;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
		let tableColumns = [
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.name'),
				textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
				render: (text, record, index) => {
					return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
				}
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.code'),
				textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.systemCode'),
				textAlign: 'center', dataIndex: 'systemCode', key: 'systemCode', width: 100
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.status'),
				textAlign: 'status', dataIndex: 'status', key: 'systemCode', width: 100,
				render: (text, record, index) => {
					return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.status.' + text);
				}
			},
	        {
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.ownerType.isAll'),
				dataIndex: 'allotType', key: 'allotType', width: 50, textAlign: 'center',
				render: (text, record, index) => {
					// let allotType = record.allotType?record.allotType:0;
					if(this.state.allOwnerKeys != undefined && zkJsUtils.isEmpty(record.allotType)){
						record.allotType = 0;
						if(this.state.allOwnerKeys.indexOf(record.pkId) != -1){
							record.allotType = 1;
						}
						// allotType = record.allotType;
					}
					return <ZKSwitch size="small" 
						disabled = {this.state.selectedKeys.indexOf(record.pkId)===-1?true:false} 
						// defaultChecked={record.allotType == 1?true:false}
						checked={record.allotType===1?true:false}
						onChange={(checked, e)=>{
							if(checked){
								record.allotType=1;
							}else{
								record.allotType=0;
							}
							// 触发刷新
							this.setState({isChange:true});
						}}
					/>
				}
			},
		]

		let spinning = loading.effects['mSysOrgCompanyAdmin/grantAuth'];
		let gridSpinning = this.state.spinningListDatas || this.state.spinningOwnerIds;

	    return (
			<ZKModal title={`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.grant.modal.title.company')}[${descName}]`} visible={isShow}
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
		                <ZKSearchItem name = "searchValue" label = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.code')}`} >
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
							getCheckboxProps: record=>{
								return {
									disabled: record.status == 0?false:true,
								}
							}
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
	  			throw new Error("[>_<:2020504-1658-001] 分配权限时，当前操作权限 [targetId] 必传入", nextProps.targetId);
	  		}
	  	}
	  	return true;
	  }

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }
}

// 定义属性
CInitGrantAuthToCompany.propTypes = {
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	url: PropTypes.string.isRequired, 
	// 查询用户已有权限ID 的 url
	urlOwnerIds: PropTypes.string.isRequired, 
	isShow: PropTypes.bool.isRequired, 
	targetId: PropTypes.string, 
	descName: PropTypes.string
}
// 定义属性默认值
CInitGrantAuthToCompany.defaultProps = {
	url: `/${globalAppConfig.apiPrefixSys}/auth/sysAuthCompany/sysAuthDefinedsPage`,
	urlOwnerIds: `/${globalAppConfig.apiPrefixSys}/auth/sysAuthCompany/findAuthIdsByCompanyId`,
	isShow: false,
	targetId: undefined, // 操作对象ID
	descName: "", // 操作对象说明名称
}

export default injectIntl(connect(({ mApp, loading }) => ({ mApp, loading }))(CInitGrantAuthToCompany));




