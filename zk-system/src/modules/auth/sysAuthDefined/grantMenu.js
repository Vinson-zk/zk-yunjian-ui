/*
* @Author: Vinson
* @Date:   2022-05-06 17:14:43
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-09 17:26:28
* 
* 
* 
*/


import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { DownOutlined } from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
// import * as uuid from 'uuid';

import { zkTools, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";
const { ZKModal, ZKSelect, ZKInput, ZKDivider, ZKSpin, ZKTree } = ZKOriginalComponents;
// const { ZKScrollTable, ZKSearchRow } = ZKCustomComponents;
const { ZKApplicationSystemSelect, ZKDeptSelect } = ZKBusinessComponents;
const { zkToolsMsg, zkToolsAjax, zkToolsUtils } = zkTools;
// const ZKSearchItem = ZKSearchRow.Item;

import zkStyles from 'zkFramework/css/styles.less';
/**
 * 执行查询 非树形/分页
 */
function f_doingSearch(url, params) {
    // return zkToolsAjax.reqData(url, {method:'GET', async:false, data:params});
    // return zkToolsAjax.reqPretreatment(url, {method:'GET', async:false, data:params});
	return zkToolsAjax.req(url, {method:'GET', async:true, data:params});
}

class CInitGrantMenu extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	isInit: false,
            spinningtreeData: false,
            spinningOwnerIds: false,
            filter: {},
            checkedKeys:[],
            checkedNodes:undefined,
            expandedKeys:[],
            treeData:[],
        };
    };
    
    // 查询列表数据
    f_findtreeData = (params={}, sorter=[], pagination={})=>{
        try{
        	this.setState({spinningtreeData: true});
        	params = zkToolsUtils.convertSortParam(params, sorter); 
	        params = { ...params, ...zkToolsUtils.convertPageParam(pagination)};
	        f_doingSearch(this.props.url, params).done(res=>{
		    	if (res.code == 'zk.0') {
	            	this.setState({treeData: res.data.result||[], spinningtreeData: false});
	            }else{
	            	throw new Error("[>_<:20220504-1535-002] request url:[" + this.props.url + "] exception: " + res.code);
	            	this.setState({spinningtreeData: false});
	            } 
		    });		    	
	    }catch(err){
	    	this.setState({spinningtreeData: false});
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
		            	this.setState({ checkedKeys: res.data||[], expandedKeys: res.data||[], spinningOwnerIds: false });	
		            }else{
		            	throw new Error("[>_<:20220504-1535-003] request url:[" + this.props.urlOwnerIds + "] exception: " + res.code);
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
        this.f_findtreeData(values);
    };
    /** 选择行改变 */
	f_onCheck = (checkedKeys, e) => {
		// console.log("[^_^:20220509-1144-001] ", checkedKeys, this.state.checkedKeys);

		let optCheckedKeys = checkedKeys.checked;
		let newCheckedKeys = optCheckedKeys.notIn(this.state.checkedKeys);
		let delCheckedKeys = this.state.checkedKeys.notIn(optCheckedKeys);
		// console.log("[^_^:20220509-1133-001] ", newCheckedKeys, delCheckedKeys);

		if(delCheckedKeys && delCheckedKeys.length > 0){
			// 删除选择 key ，级联删除子节点选择
			let fDelObjs = [];
			for(let key of delCheckedKeys){
				fDelObjs = fDelObjs.concat(zkJsUtils.findTreeChild(this.state.treeData, key));
			}
			delCheckedKeys = fDelObjs.map(item=>item.pkId);
			delCheckedKeys.removeSameValue();
			newCheckedKeys = optCheckedKeys.notIn(delCheckedKeys);
		}else if(newCheckedKeys && newCheckedKeys.length > 0){
			// 新增选择 key，级联选择父节点选择
			let fSelParentNodes = [];
			// 查父节点
			for(let key of newCheckedKeys){
				// 找出所有父节点以及他自身
				fSelParentNodes = fSelParentNodes.concat(zkJsUtils.findTreeParent(this.state.treeData, key));
			}
			let fSelChildNodes = [];
			// 查子节点
			for(let key of newCheckedKeys){
				fSelChildNodes = fSelChildNodes.concat(zkJsUtils.findTreeChild(this.state.treeData, key));
			}
			newCheckedKeys = fSelParentNodes.map(item=>item.pkId);
			newCheckedKeys = newCheckedKeys.concat(fSelChildNodes.map(item=>item.pkId));
			newCheckedKeys = newCheckedKeys.concat(optCheckedKeys);
			newCheckedKeys.removeSameValue();
		}else{
			if(console)console.error("[>_<:20220509-1139-001] 选择 key 无变法，理论上不应该有些情况");
		}

		// 查出所有选择的节点数据对象
		let newCheckedNodes = [];
		if(newCheckedKeys && newCheckedKeys.length > 0){
			for(let key of newCheckedKeys){
				newCheckedNodes = newCheckedNodes.concat(zkJsUtils.findNodesByTree(this.state.treeData, key));
			}
		}

		// console.log("[^_^:20220509-1133-002] ", newCheckedKeys, delCheckedKeys, newCheckedNodes);
		this.setState({checkedKeys:newCheckedKeys, checkedNodes:newCheckedNodes});
	};
	// 树形展开
    f_onExpand = (expandedKeys)=>{
        this.setState({expandedKeys: expandedKeys});
    };
    /**  保存 */
    f_handleOk = ()=>{
    	if(this.state.checkedNodes === undefined){
    		// 没有选择过，直接关闭
    		this.f_close();
    		return;
    	}

    	let { dispatch } = this.props;
		dispatch({ 
		  type: 'mSysAuthDefined/grantMenus', 
		  authId: this.props.targetId,
		  menus: this.state.checkedNodes, 
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
    	this.setState({ isInit:false, filter:{}, checkedKeys:[], checkedNodes: undefined, treeData:[] });
    	if(this.props.onShowModal instanceof Function){
    		this.props.onShowModal.call(this, "grantMenuModal", false, {});
    	}
    };
    
	render(){
		let { intl, loading, mApp, isShow, descName, ...otherProps } = this.props;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
		
		let spinning = loading.effects['mSysAuthDefined/grantMenus'] || this.state.spinningtreeData || this.state.spinningOwnerIds;

	    return (
			<ZKModal title={`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.opt.grantMenu')}[${descName}]`} visible={isShow}
			  onOk={this.f_handleOk}
			  onCancel={this.f_handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {430}
			>
				<ZKSpin spinning={spinning === true} >
					<Scrollbars className={zkStyles.zk_scroll_border} style={{ height: 560 }} >
						<ZKTree {...otherProps} className={zkStyles.zk_tree_padding}
							// autoExpandParent = { true }
							checkable = {true}
							checkStrictly = {true}
							fieldNames = {{key: 'pkId', children: 'children', title:'code'}}
							expandedKeys = { this.state.expandedKeys }
		                    checkedKeys = { this.state.checkedKeys }
		                    titleRender = { nodeData=>{return `${zkToolsMsg.getInternationInfo(nodeData.name)} [${nodeData.code}] [${nodeData.navCode}] `} }
		                    treeData = { this.state.treeData }
		                    onExpand = { this.f_onExpand }
		                    onCheck={ this.f_onCheck }
						/>
					</Scrollbars>
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
	  			throw new Error("[>_<:2020504-1655-001] 分配菜单时，当前操作权限 [targetId] 必传入", nextProps.targetId);
	  		}
	  	}
	  	return true;
	  }

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }
}

// 定义属性
CInitGrantMenu.propTypes = {
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	url: PropTypes.string.isRequired, 
	// 查询目标已有的菜单ID 的 url，会以目标ID参数；
	urlOwnerIds: PropTypes.string.isRequired, 
	isShow: PropTypes.bool.isRequired, 
	targetId: PropTypes.string, 
	descName: PropTypes.string
}
// 定义属性默认值
CInitGrantMenu.defaultProps = {
	url: `/${globalAppConfig.apiPrefixSys}/res/menu/sysMenusTree`,
	urlOwnerIds: `/${globalAppConfig.apiPrefixSys}/auth/sysAuthMenu/findMenuIdsByAuthId`,
	isShow: false,
	targetId: undefined, // 操作对象ID
	descName: "", // 操作对象说明名称
	showLine: {"showLeafIcon":false},
	switcherIcon: <DownOutlined />,
}

export default injectIntl(connect(({ mApp, loading }) => ({ mApp, loading }))(CInitGrantMenu));



