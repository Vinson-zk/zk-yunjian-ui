/*
* @Author: Vinson
* @Date:   2022-05-09 14:20:36
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 19:41:33
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

import zkStyles from 'zkFramework/style/zk.styles.less';
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
        	spinning: false, 
        	toCompanyId: undefined, // 当前被分配权限的公司ID
            selectedKeys:[],
            authDatas: [],
            filter: {},
            pagination:{
	            current:1,    // 当前行
	            pageSize: zkToolsUtils.getPageSize(),  // 当前行数量
	            total:0,      // 总行数
				showQuickJumper:true, // 是否可以快速跳转至某页
	        },                // 分页器对象
	        allotRowsMap: {}, // 授权和取消授权的行映射，行主键为 key {pkId: obj}
        };
        // console.log("[^_^:20220504-1739-001] CInitGrantAuthToCompany.constructor: ", props);
    };

    // 查询授权公司可分配的权限及被授权公司是否拥有权限
    f_findAuthDatas = (toCompanyId, params={}, sorter, pagination={})=>{
    	try{
        	this.setState({spinning: true});
        	params = zkToolsUtils.convertSortParam(params, sorter); 
	        params = { ...params, ...zkToolsUtils.convertPageParam(pagination)};
	        params['toCompanyId'] = toCompanyId;
	        f_doingSearch(this.props.url, params).done(res=>{
        		// console.log("[^_^:20220504-1739-003] CInitGrantAuthToCompany.f_findAuthDatas: ", res);
		    	if (res.ok) {
		    		let state = {
		    			"filter": params,
		    			"selectedKeys": [],
		    			"authDatas": res.data.result,
	                    "pagination": zkToolsUtils.convertResPage(res.data)
		    		}
					for(let item of res.data.result){
						if(item.authRelation && item.authRelation.pkId){
							state.selectedKeys.push(item.pkId);
						}
					}
					// console.log("[>_<:20220509-1426-008] state: ", state);
		    		this.setState(state);
	            }else{
                	zkToolsMsg.alertMsg(null, null, {type:"error", msg:res.msg});
                	if(console)console.error("[>_<:20220509-1426-002] request url:[" + this.props.url + "] exception: " + res.code);
                	// this.f_close();
	            } 
		    });		    	
	    }catch(err){
	    	this.setState({spinning: false});
	    }
	    this.setState({spinning: false});
    }

    /** 选择/取消授权：记录所有选择的权限; 不记录取消的未授权的权限；*/
    f_allotAuth = (selected, changeRows)=>{
    	let allotRowsMap = this.state.allotRowsMap;
    	if(selected){
    		// 新增授权
    		for(let item of changeRows){
    			allotRowsMap[item.pkId] = item;
    			if(allotRowsMap[item.pkId].authRelation){
    				// 防止已授权的行，取消选择后重新选择
    				allotRowsMap[item.pkId].authRelation.delFlag = 0;
    			}
    		}
    	}else{
    		// 取消授权
    		for(let item of changeRows){
    			allotRowsMap[item.pkId] = item;
    			if(allotRowsMap[item.pkId].authRelation && allotRowsMap[item.pkId].authRelation.pkId){
    				// 取消的已授权的权限
    				allotRowsMap[item.pkId].authRelation.delFlag = 1;
    			}else{
    				// 取消的未授权的权限 
    				// allotRowsMap[item.pkId] = undefined;
    				delete allotRowsMap[item.pkId];
    			}
    		}
    	}
    	this.setState({"allotRowsMap": allotRowsMap});
    }
    
    /** 保存 */
    f_handleOk = ()=>{
    	// console.log("[^_^:20220509-1426-003] allotRowsMap: ", this.state.allotRowsMap);
    	let allotRows = [];
    	for(let index in this.state.allotRowsMap){
    		if(this.state.allotRowsMap[index]){
    			allotRows.push(this.state.allotRowsMap[index]);
    		}
    	}

    	if(allotRows.length < 1){
    		// 没有改变授权，直接关闭
    		this.f_close();
    		return;
    	}

    	let { saveFunc } = this.props;
    	saveFunc.call(this, this.props.toTargetId, allotRows, dataObj=>{this.f_close();} );
    };
    /**  关闭 */
    f_close = ()=>{  
	    let pagination = {
            current:1,    // 当前行
            pageSize: zkToolsUtils.getPageSize(),  // 当前行数量
            total:0,      // 总行数
			showQuickJumper:true, // 是否可以快速跳转至某页
        }
    	this.setState({ 
    		toCompanyId: undefined, 
    		filter:{}, 
    		selectedKeys:[],  
    		authDatas:[], 
    		delKeys:[], 
    		pagination: pagination,
    		allotRowsMap: {}
    	});
    	if(zkJsUtils.assertObjType(this.props.onShowModal, Function)){
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
					let disabled = true;
					if(record.status === 0){// 未禁用
						disabled = this.state.selectedKeys.indexOf(record.pkId)===-1?true:false;
					}
					return <ZKSwitch size="small" 
						disabled = {disabled}
						defaultChecked = {()=>{
							if(record.authRelation && record.authRelation.ownerType){
								return record.authRelation.ownerType === 1?true:false;
							}
							return false;
						}}
						onChange={(checked, e)=>{
							if(!record.authRelation){
								record.authRelation = {};
							}
							if(checked){
								record.authRelation.ownerType = 1;
							}else{
								record.authRelation.ownerType = 0;
							}
							let allotRowsMap = this.state.allotRowsMap;
							allotRowsMap[record.pkId] = record;
							this.setState({"allotRowsMap": allotRowsMap});
						}}
					/>
				}
			},
		]

		let spinning = loading.effects['mSysOrgCompanyAdmin/grantAuth'];

	    return (
			<ZKModal title={`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.grant.modal.title.company')}[${descName}]`} open={isShow}
			  onOk={this.f_handleOk}
			  onCancel={this.f_close}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {860}
			  // height = {140 }
			>
				<ZKSpin spinning={spinning === true} >
					<ZKSearchRow 
		                initialValues={this.state.filter} 
		                filter={this.state.filter} 
		                resetFunc={values => {}}
		                searchFunc={values => {
		                	let pagination = this.state.pagination;
		                	pagination.current = 1;
		                	this.f_findAuthDatas(this.state.toCompanyId, values, null, pagination);
		                }}
		            >    
		                <ZKSearchItem name = "searchValue" label = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.code')}`} >
		                    <ZKInput style = {{width:"180px"}}  />
		                </ZKSearchItem>         
		            </ZKSearchRow>
		            <ZKDivider />
				    <ZKScrollTable loading = { this.state.spinning }
						autoHeight = {false}
						rowSelection = {{
							columnWidth: '20px',
							selectedRowKeys: this.state.selectedKeys||[], 
							getCheckboxProps: record=>{return { disabled: record.status == 0?false:true}},
							// defaultSelectedRowKeys: ()=>{
							// 	let selKeys = [];
							// 	for(let item of this.state.authDatas){
							// 		if(item.authRelation && item.authRelation.pkId){
							// 			selKeys.push(item.pkId);
							// 		}
							// 	}
							// 	return selKeys;
							// },
							onChange: (selRowKeys, selRows) => { this.setState({selectedKeys:selRowKeys}); }, // 选择行改变
							onSelect: (record, selected, selectedRows, nativeEvent)=>{ // 用户手动选择/取消选择某行的回调
								// console.log("[^_^:20230907-0102-003] rowSelection.onSelect: ", record, selected, selectedRows, nativeEvent);
								// let rs = [record];
								this.f_allotAuth(selected, [record]);
							},
							onSelectAll: (selected, selectedRows, changeRows)=>{ // 用户手动选择/取消选择所有行的回调
								// console.log("[^_^:20230907-0102-004] rowSelection.onSelectAll: ", selected, selectedRows, changeRows);
								this.f_allotAuth(selected, changeRows);
							},
							onSelectMultiple: (selected, selectedRows, changeRows)=>{ // 用户使用键盘 shift 选择多行的回调
								// console.log("[^_^:20230907-0102-007] rowSelection.onSelectMultiple: ", selected, selectedRows, changeRows);
								this.f_allotAuth(selected, changeRows);
							},
							// onSelectInvert: (selectedRowKeys)=>{ // 用户手动选择反选的回调
							// 	console.log("[^_^:20230907-0102-005] rowSelection.onSelectInvert: ", selectedRowKeys);
							// },
							// onSelectNone: ()=>{ // 用户清空选择的回调
							// 	console.log("[^_^:20230907-0102-006] rowSelection.onSelectNone: ");
							// },
						}}
						rowKey = "pkId"
						rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 20}}
						columns = {tableColumns}
						scroll = {{ y: 480 }}
						pagination = {this.state.pagination}
						// pagination = {{position: ['topRight'], ...page}}
		                dataSource = {this.state.authDatas||[]}
		                onChange = { (pagination, filters, sorter, extra)=>{ // 列表改变
		                	// 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        					this.f_findAuthDatas(this.state.toCompanyId, this.state.filters, sorter, pagination);
		                }}
						className = {zkStyles.zk_f_flex_auto_1}
					></ZKScrollTable>
				</ZKSpin>
			</ZKModal>
		)
	}

	// 3、更新时调用，此方法仅作为性能优化存在。不要依赖它来“防止”渲染
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.isShow){
			if(nextProps.toTargetId != this.state.toCompanyId){
				// console.log("[^_^:20220504-1739-002] CInitGrantAuthToCompany.shouldComponentUpdate:", nextState);
				nextState.toCompanyId = nextProps.toTargetId;
				if(nextProps.toTargetId){
					this.f_findAuthDatas(this.state.toCompanyId, this.state.filters, null, this.state.pagination);
				}else{
					throw new Error("[>_<:2020504-1658-001] 分配权限时，当前操作权限 [toTargetId] 必传入", nextProps.targetId);
				}
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
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, zkPage:}; code 不为 zk.0 时，为返回数据异常;
	url: PropTypes.string.isRequired, 
	isShow: PropTypes.bool.isRequired, 
	toTargetId: PropTypes.string, 
	descName: PropTypes.string
}
// 定义属性默认值
CInitGrantAuthToCompany.defaultProps = {
	url: `/${globalAppConfig.apiPrefixSys}/auth/sysAuthCompany/findAllotAuthPage`,
	isShow: false,
	toTargetId: undefined, // 操作对象ID
	descName: "", // 操作对象说明名称
}

export default injectIntl(connect(({ mApp, loading }) => ({ mApp, loading }))(CInitGrantAuthToCompany));




