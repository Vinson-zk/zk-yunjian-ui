/*
* @Author: Vinson
* @Date:   2022-05-03 19:57:44
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-07 17:13:49
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
const { ZKDeptSelect } = ZKBusinessComponents;
const { zkToolsMsg, zkToolsAjax, zkToolsUtils } = zkTools;

import zkStyles from 'zkFramework/css/styles.less';
/**
 * 执行查询 非树形/分页
 */
function f_doingSearch(url, params) {

    // return zkToolsAjax.reqData(url, {method:'GET', async:false, data:params});
    // return zkToolsAjax.reqPretreatment(url, {method:'GET', async:false, data:params});

	return zkToolsAjax.req(url, {method:'GET', async:true, data:params});
}

class CInitGrantRole extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	isInit: false,
            spinningListDatas: false,
            spinningUserRoleIds: false,
            filter: {},
            selectedKeys:[],
            selectedObjs:undefined,
            listDatas:[],
        };
        // this.f_onSearch();
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
	            	// if(console)console.error("[>_<:20220504-1531-002] request url:[" + this.props.urlRoleIds + "] exception: " + res.code);
	            	throw new Error("[>_<:20220504-1531-002] request url:[" + this.props.url + "] exception: " + res.code);
	            	this.setState({spinningListDatas: false});
	            } 
		    });		    	
	    }catch(err){
	    	this.setState({spinningListDatas: false});
	    }
    };
    // 查询用户已有角色ID
    f_findUserRoleIds=(userId)=>{
    	if(zkJsUtils.isEmpty(userId)){
    		return [];
    	}else{
    		try{
	        	this.setState({spinningUserRoleIds: true});
	        	let params = {'userId': userId}; 
		        // params = { ...params, ...zkToolsUtils.convertPageParam(pagination)};
		        // console.log("[>_<:20220504-1708-001] f_findUserRoleIds ", params);
		        f_doingSearch(this.props.urlRoleIds, params).done(res=>{
			    	if (res.code == 'zk.0') {
		            	this.setState({ selectedKeys: res.data||[], spinningUserRoleIds: false });	
		            }else{
		            	// if(console)console.error("[>_<:20220504-1531-002] request url:[" + this.props.urlRoleIds + "] exception: " + res.code);
		            	throw new Error("[>_<:20220504-1531-002] request url:[" + this.props.urlRoleIds + "] exception: " + res.code);
		            	this.setState({spinningUserRoleIds: false});
		            } 
			    });		        
		    }catch(err){
		    	this.setState({spinningUserRoleIds: false});
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
		  type: 'mSysOrgUser/grantRoles', 
		  userId: this.props.optUser.pkId,
		  roles: this.state.selectedObjs, 
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
    		this.props.onShowModal.call(this, false, {});
    	}
    	// console.log("[^_^:20220504-1739-003] f_close:", this.state);
    };
    
	render(){
		// console.log("[^_^:20220504-1739-001] render:", this.state);
		let { intl, loading, mApp, isShow, optUser } = this.props;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
		let tableColumns = [
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.code'),
				textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.name'),
				textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
				render: (text, record, index) => {
					return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
				}
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type'),
				textAlign: 'center', dataIndex: 'type', key: 'type', width: 100, 
				render: (text, record, index) => {
					return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type.' + text);
				}
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.deptCode'),
				textAlign: 'center', dataIndex: 'deptCode', key: 'deptCode', width: 100
			},
			{
				title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status'),
				textAlign: 'center', dataIndex: 'status', key: 'status', width: 100, 
				render: (text, record, index) => {
					return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status.' + text);
				}
			},
		]

		let spinning = loading.effects['mSysOrgUser/grantRoles'];
		let gridSpinning = this.state.spinningListDatas || this.state.spinningUserRoleIds;

	    return (
			<ZKModal title={`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.modal.title.grantRole')}[${optUser.account}]`} visible={isShow}
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
		                <ZKSearchRow.Item name = "searchValue" label = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.code')}`} >
		                    <ZKInput placeholder = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.code')}`} />
		                </ZKSearchRow.Item>       
		                <ZKSearchRow.Item name = "type" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type')} >
		                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
		                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type.0')}</ZKSelect.Option>
		                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type.1')}</ZKSelect.Option>
		                    </ZKSelect>
		                </ZKSearchRow.Item>       
		                <ZKSearchRow.Item name = "deptId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.deptId')} >
		                    <ZKDeptSelect style={{'width':'180px'}} valueKey="pkId" />
		                </ZKSearchRow.Item>       
		                <ZKSearchRow.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status')} >
		                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
		                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status.0')}</ZKSelect.Option>
		                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status.1')}</ZKSelect.Option>
		                    </ZKSelect>
		                </ZKSearchRow.Item>       
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
	  		if(nextProps.optUser){
		    	this.f_findUserRoleIds(nextProps.optUser.pkId);
		    	this.f_onSearch();
	  		}else{
	  			// if(console)console.error("[>_<:2020504-1653-001] 分配角色时，当前操作用户ID [optUser] 必传入");
	  			throw new Error("[>_<:2020504-1653-001] 分配角色时，当前操作用户ID [optUser] 必传入")
	  		}
	  	}
	  	return true;
	  }

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }
}

// 定义属性
CInitGrantRole.propTypes = {
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	url: PropTypes.string.isRequired, 
	// 查询用户已有角色ID 的 url
	urlRoleIds: PropTypes.string.isRequired, 
	isShow: PropTypes.bool.isRequired, 
	optUser: PropTypes.object, 
}
// 定义属性默认值
CInitGrantRole.defaultProps = {
	url: `/${globalAppConfig.apiPrefixSys}/org/sysOrgRole/sysOrgRolesPage`,
	urlRoleIds: `/${globalAppConfig.apiPrefixSys}/auth/sysAuthUserRole/findRoleIdsByUserId`,
	isShow: false,
	optUser: undefined
}

export default injectIntl(connect(({ mApp, mSysOrgUser, loading }) => ({ mApp, mSysOrgUser, loading }))(CInitGrantRole));





