/*
* @Author: Vinson
* @Date:   2022-05-02 16:19:50
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-07 17:43:02
* 
* 部门选择器；使用详见使用的属性说明
* 
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
// import { injectIntl } from 'react-intl';
// import { Scrollbars } from 'react-custom-scrollbars';
import { DownOutlined } from '@ant-design/icons';
// import * as uuid from 'uuid';

import { ZKTreeSelect, ZKSpin } from '../../original';
import { zkToolsUtils, zkToolsMsg, zkToolsAjax } from '../../../tools';
const { TreeNode } = ZKTreeSelect;

import zkStyles from '../../../../css/styles.less';

// const f_genUUID = ()=>{
// 	return `zk-dept-sel-node-${uuid.v4()}`;
// }

/**
 * 不分层级的树型查询, 树形/分页
 */
function f_findSysOrgDeptsSelf(url, params) {
	/*
	返回数据详情
	{
  "pkId": "6076504467996410368",
  "parentId": "",
  "code": "test",
  "name": {
    "en-US": "test1",
    "zh-CN": "测试1"
  },
  // 上面的是关键字段
  "createDate": "2022-04-27 09:27:45",
  "updateDate": "2022-04-29 16:56:25",
  "delFlag": 0,
  "version": 0,
  "parentIdIsEmpty": false,
  "depth": "",
  "groupCode": "yunjian",
  "companyId": "6075055662683914752",
  "companyCode": "yunjian",
  "faxNum": "",
  "telNum": "",
  "phoneNum": "",
  "mail": "binary_space@126.com",
  "status": 1,
  "address": {},
  "shortDesc": {},
  "sourceCode": "",
  "sourceId": "",
  "leaf": true,
  "isLeaf": true,
  "isNewRecord": false
}
	*/
	// console.log("[^_^:20220502-1555-001] findSysOrgDeptsSelf: ", url, params);
    // return zkToolsAjax.reqPretreatment(url, {method:'GET', async:false, data:params});
	return zkToolsAjax.req(url, {method:'GET', async:true, data:params});
}

class CInitDeptTreeSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            searchValue: '',
            isInputSearch: false, // 是否有输入查询过；true-有; false-没有；
            deptTrees: [],
            treeLoadedKeys:[],
            expandedKeys: []
        };
        // this.f_getCompany(null);
    };

    /*** 配合 Form.Item 事件函数 ***/
	f_triggerChange = (data)=>{
        // Should provide an event to pass value to Form.
        const { onChange, valueKey } = this.props;
		// console.log("[20220502-1652-001] CInitDeptTreeSelect f_triggerChange:", data, valueKey);
		if (onChange) {

            if(data){
                if(zkJsUtils.isEmpty(valueKey)){
                    onChange(data);
                }else{
                    onChange(data[valueKey]);
                }
            }else{
                onChange(undefined);
            }
		}
	};
    /**
     * 查询树型部门
     */
    f_findDepts = (treeDatas=[], loadData=null, params={})=>{
	    // console.log("[^_^:2022429-2024-001] f_findDepts  params: ", treeDatas, loadData, params, isInputSearch, this.state);
        let { url, dispatch } = this.props;
        try{
        	this.setState({spinning: true});
	        // params = zkToolsUtils.convertSortParam(params, {}); 
	        params = { ...params, ...zkToolsUtils.convertPageParam({'current':1, 'pageSize':999}) };
	        return f_findSysOrgDeptsSelf(url, params).then(res=>{
                if (res.code == 'zk.0') {
                    // let expandedKeys = [];
                    let cTreeData = res.data.result;
                    if(loadData == null){
                        treeDatas = cTreeData;
                    }else{
                        loadData.children = cTreeData;
                    }
                    // console.log("[^_^:2022429-1544-001] f_findDepts result: ", treeDatas, params, this.state);
                    return treeDatas;
                }else{
                    this.setState({spinning: false});
                    throw new Error("[>_<:20220502-1744-001] request url:[" + url + "] exception, " + res.code);
                }   
            });
	    }catch(err){
	    	this.setState({spinning: false});
            throw err;
	    }
    };
    
    // 异步加载数据
    f_loadData = node=>{
    	// console.log("[^_^:2022430-0835-001] f_loadData: ", node, this.state);
    	let treeLoadedKeys = this.state.treeLoadedKeys;
    	treeLoadedKeys.push(node.key);

    	let treeNode = null;
	    let treeDatas = [];
        let params = {};
        if(node == null){
            // 查询顶级部门
            params = {'parentIdIsEmpty':true};
        }else{
            // 查询子公司
            treeDatas = this.state.deptTrees;
            treeNode = node.data;
            params = {'parentId':treeNode.pkId};
        }
        this.f_findDepts(treeDatas, treeNode, params).then(resTreeDatas=>{
            this.setState({deptTrees: resTreeDatas, treeLoadedKeys:treeLoadedKeys, spinning: false});
        });
        return new Promise(function(resolve, reject){
        	resolve();
        });
    };
    // 文本框值变化时回调
    f_onSearch = (value)=>{
    	// console.log("[^_^:20220429-1541-005] f_onSearch:", value, this.state);
    	if(zkJsUtils.isEmpty(value)){
    		// this.f_loadData(null); 
    		this.f_findDepts([], null, {'parentIdIsEmpty': true}).then(resTreeDatas=>{
                this.setState({'searchValue': value, deptTrees:resTreeDatas||[], treeLoadedKeys:[]
                    , expandedKeys:[], isInputSearch:false, spinning: false});
            });
    		
    	}else{
            this.f_findDepts([], null, {'searchValue': value}).then(resTreeDatas=>{
                this.setState({'searchValue': value, deptTrees:resTreeDatas||[], isInputSearch:true, spinning: false});
            });
    	}	
    };
    // 被选中时调用
    f_onSelect = (value, node, extra) => {
    	// console.log("[^_^:20220429-1541-001] f_onSelect:", value, node, extra, this.state);
    	this.f_triggerChange(node.data);
    };
    // 选中树节点时调用此函数
    f_onChange = (value, label, extra)=>{
    	// console.log("[^_^:20220429-1541-002] f_onChange:", value, label, extra, this.state);
        if(!value){
            this.f_triggerChange();
        }
    };
    // 展示节点时调用
    f_onTreeExpand = (expandedKeys)=>{
    	// console.log("[^_^:20220429-1541-003] f_onTreeExpand:", expandedKeys, this.state);
    	this.setState({'expandedKeys':expandedKeys});
    };
    // 展开下拉菜单的回调
    f_onDropdownVisibleChange = (open)=>{
    	// console.log("[^_^:20220429-1541-004] f_onDropdownVisibleChange:", open, this.state);
    	if(open && (this.state.deptTrees.length < 1)){
    		// this.setState({expandedKeys:[], isInputSearch: false});
            this.f_findDepts([], null, {'parentIdIsEmpty': true}).then(resTreeDatas=>{
                this.setState({deptTrees:resTreeDatas, isInputSearch: false, spinning: false});
            });
    	}else{
    		// if(this.state.isInputSearch){
    		// 	this.setState({'isInputSearch':false, deptTrees:[], treeLoadedKeys:[], expandedKeys:[]});
    		// }
    	}
    };

    // 根据 树形部门生成 树形下拉节点
    f_makeTreeNode = (treeDatas)=>{
    	return treeDatas.map(item=>{
    		// let key = f_genUUID();
    		let key = item.pkId;
    		if(item.children && item.children.length > 0){
    			return <TreeNode data={item} key={`${key}`} value={`${key}`} isLeaf={false} 
    				title={`${zkToolsMsg.getInternationInfo(item.name)}(${item.code})`}>{this.f_makeTreeNode(item.children)}</TreeNode>
    		}else{
    			let isLeaf = (item.children && item.children.length<1)?true:false;
    			return <TreeNode data={item} key={`${key}`} value={`${key}`} isLeaf={isLeaf} 
    				title={`${zkToolsMsg.getInternationInfo(item.name)}(${item.code})`}></TreeNode>
    		}
    	});
    };

    render() {
        let { onChange, valueKey, url, ...otherProps } = this.props;
        return (
            <ZKSpin spinning={this.state.spinning === true} style = {{'width':'100%', 'height':'100%'}} >
                <ZKTreeSelect {...otherProps}
                    loadData = {this.state.isInputSearch?null:this.f_loadData}
                    treeLoadedKeys = {this.state.treeLoadedKeys}
                    // treeData = { this.state.deptTrees }
                    onChange = { this.f_onChange }
                    onSelect={ this.f_onSelect }
                    onSearch={ this.f_onSearch }
                    searchValue = {this.state.searchValue}
                    filterTreeNode = {false}
                    onTreeExpand={ this.f_onTreeExpand }
                    treeExpandedKeys={this.state.expandedKeys}
                    onDropdownVisibleChange={ this.f_onDropdownVisibleChange }
                >
                	{
                		this.f_makeTreeNode(this.state.deptTrees)
                	}
                </ZKTreeSelect>
            </ZKSpin>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        // this.f_loadData(null);
    }
}

// 定义属性
CInitDeptTreeSelect.propTypes = {
    ...ZKTreeSelect.propTypes,
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	url: PropTypes.string.isRequired, 
	onChange: PropTypes.func,
	// 返回 value 时，取值的 key，默认返回整个数据对象
	valueKey: PropTypes.string
}
// 定义属性默认值
CInitDeptTreeSelect.defaultProps = {
    ...ZKTreeSelect.defaultProps,
    placeholder: "",
    allowClear: true,
    showSearch: true,
    // treeDefaultExpandAll: false,
    // treeLine: true,
    // treeIcon: true,
    // treeDataSimpleMode,
    // fieldNames: { label: 'label', value: 'value', children: 'children' },
    switcherIcon: <DownOutlined />,
	url: `/${globalAppConfig.apiPrefixSys}/org/sysOrgDept/sysOrgDeptsTreeSelf`,
	// valueKey: 'pkId'
}

// export default injectIntl(CInitDeptTreeSelect);
export default CInitDeptTreeSelect;

// /*****************************************************/
// /***loadData *****************************************/
// /*****************************************************/
// import React, { Component } from 'react';
// import { connect } from 'dva';
// import { injectIntl } from 'react-intl';
// import { Scrollbars } from 'react-custom-scrollbars';
// import { DownOutlined } from '@ant-design/icons';

// // import { Layout } from 'antd';

// import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';
// const { ZKTreeSelect, ZKSpin } = ZKOriginalComponents;
// const { zkToolsUtils, zkToolsMsg } = zkTools;


// import zkStyles from 'zkFramework/css/styles.less';

// import locales from "../../locales/index";

// import { findSysOrgDeptsSelf } from './admin_sysOrgDept/service';

// class CInitDeptTreeSelect extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             spinning: false,
//             deptTrees: [],
//             expandedKeys: []
//         };
//         // this.f_getCompany(null);
//     };

//     /**
//      * 查询树型部门
//      */
//     f_findDepts = (node, params=null)=>{
//         let { dispatch } = this.props;
//         try{
//         	this.setState({spinning: true});
//         	if(params == null){
//         		params = {};
// 		        if(node == null){
// 		            // 查询顶级部门
// 		            params['parentIdIsEmpty'] = true;
// 		        }else{
// 		            // 查询子公司
// 		            params['parentId'] = node.pkId;
// 		        }
//         	}

// 	        params = zkToolsUtils.convertSortParam(params, {}); 
// 	        params = { ...params, ...zkToolsUtils.convertPageParam({'current':1, 'pageSize':999}) };
// 	        let promise = findSysOrgDeptsSelf(params);
// 	        let _this = this;
// 	        promise.then(res=>{
// 	        	if (res.code == 'zk.0') {
// 	            	// let expandedKeys = [];
// 	            	let cTreeData = res.data.result.map(item=>{
// 	            		return {
// 	            			id: item.pkId,
// 	            			pId: item.parentId,
// 	            			title:`${zkToolsMsg.getInternationInfo(item.name)}(${item.code})`,   
// 	            			label: `${zkToolsMsg.getInternationInfo(item.name)}(${item.code})`,            			
// 	            			value: item.pkId,
// 	            			pkId: item.pkId,
// 	            			children:item.children||[],
// 	            			isLeaf: false
// 	            		}
// 	            	});
// 	            	let treeData = [];
// 	            	if(node == null){
// 	            		treeData = cTreeData
// 	            	}else{
// 	            		treeData = _this.state.deptTrees;
// 	            		let pNode = zkJsUtils.findByTree(treeData, node.pkId);
// 	            		if(cTreeData.length < 1){
// 		            		pNode.isLeaf = true;
// 		            	}else{
// 		            		pNode.children = cTreeData;
// 		            	}
// 	            	}
// 	            	console.log("[^_^:2022429-1544-001] f_findDepts: ", node, treeData);
// 	                _this.setState({deptTrees: treeData, spinning: false});
// 	            }
// 	        });
// 	        return promise;

// 	    }catch(err){
// 	    	this.setState({spinning: false});    	
// 	    // }finally{
// 	    // 	this.setState({spinning: false});
// 	    }
//     };

//     // 文本框值变化时回调
//     f_onSearch = (value)=>{
//     	console.log("[^_^:20220429-1541-005] f_onSearch:", value);
//     	if(zkJsUtils.isEmpty(value)){
//     		this.f_findDepts(null);
//     	}else{
//     		this.f_findDepts(null, {'searchValue': value});
//     	}
//     };
//     // 被选中时调用
//     f_onSelect = (value, node, extra) => {
//     	console.log("[^_^:20220429-1541-001] f_onSelect:", value, node, extra);
//     };
//     // 选中树节点时调用此函数
//     f_onChange = (value, label, extra)=>{
//     	console.log("[^_^:20220429-1541-002] f_onChange:", value, label, extra);
//     };
//     // 展示节点时调用
//     f_onTreeExpand = (expandedKeys)=>{
//     	console.log("[^_^:20220429-1541-003] f_onTreeExpand:", expandedKeys);
//     };
//     // 展开下拉菜单的回调
//     f_onDropdownVisibleChange = (open)=>{
//     	console.log("[^_^:20220429-1541-004] f_onDropdownVisibleChange:", open);
//     };

//     render() {
//         let { intl, loading } = this.props;
//         let spinning = this.state.spinning;
//         return (
//             <ZKSpin spinning={spinning === true} style = {{'width':'100%', 'height':'100%'}} >
//                 <ZKTreeSelect 
//                     placeholder = "placeholder"
//                 	allowClear = {true}
//                 	autoClearSearchValue = {true}
//                 	showSearch = {true}
//                 	treeDefaultExpandAll = {false}
//                 	// treeLine = {true}
//                 	// treeIcon = {true}
//                 	// treeDataSimpleMode
//                     fieldNames = {{ label: 'label', value: 'value', children: 'children' }} 
//                 	switcherIcon={<DownOutlined />}
//                     loadData = {this.f_findDepts}
//                     treeData = { this.state.deptTrees }
//                     onChange = { this.f_onChange }
//                     onSelect={ this.f_onSelect }
//                     onSearch={ this.f_onSearch }
//                     filterTreeNode = {false}
//                     onTreeExpand={ this.f_onTreeExpand }
//                     onDropdownVisibleChange={ this.f_onDropdownVisibleChange }

//                     labelInValue = {true}
//                 />
//             </ZKSpin>
//         );
//     }

//     // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
//     componentDidMount() {
//         this.f_findDepts(null);
//     }
// }

// export default injectIntl(connect(({ mApp, loading }) => ({ mApp, loading }))(CInitDeptTreeSelect));





