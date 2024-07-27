/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-26 23:49:00
* @Last Modified by: runoob
* @Last Modified time: 2023-12-11 15:59:10
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Space } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';
const { ZKIcon, ZKOptRow } = ZKCustomComponents;
const { ZKSpin, ZKInput, ZKDivider, ZKTree, ZKDropdown } = ZKOriginalComponents;
const { zkToolsUtils, zkToolsAjax, zkToolsMsg } = zkTools;
const { Search } = ZKInput;

import zkStyles from 'zkFramework/style/zk.styles.less';

class CInitDirTree extends Component {

	thisRef = {current:null};

    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            treeData: undefined,
            expandedKeys: [],
            filterValue: undefined, // 过滤条件   
            // optDir: undefined,      // 树形的当前操作目录     
	        // pagination:{
	        //     current:1,    // 当前行
	        //     // pageSize: zkToolsUtils.getPageSize(),  // 当前行数量
	        //     pageSize: 9999,
	        //     total:0,      // 总行数
			// 	// showQuickJumper:true, // 是否可以快速跳转至某页
	        // },  
        };
        this.thisRef = props.ref?props.ref:React.createRef();
        props.dispatch({type: "mFile/findFileTree"});
        // console.log("[^_^:2023-1107-001] constructor: ");
    };

    // static getDerivedStateFromProps(props, state) {
    // 	if(state.treeData === undefined && props.treeData != undefined){
    // 		state.treeData = props.treeData;
    //     }else if(props.treeData === undefined){
    //         state.treeData = props.treeData;
    //     }
    //     return true;
    // };

    shouldComponentUpdate(nextProps, nextState){
    	// console.log("[^_^:20231010-0005-001] shouldComponentUpdate.props: ", this.props, nextProps);
    	// console.log("[^_^:20231010-0005-001] shouldComponentUpdate.=== ", nextProps.treeData === this.props.treeData);
    	// 树开数据源有变化
    	if(nextProps.treeData != this.props.treeData){
    		this.f_onSearch(nextProps.treeData, this.state.filterValue);
    	}
    	// 当前操作目录有变化
    	if (nextProps.optDir != this.props.optDir) {
    		let expandKeys = [];
    		if(nextProps.optDir && nextProps.treeData){
    			expandKeys = zkJsUtils.findTreeParent(nextProps.treeData, nextProps.optDir.pkId);
    			expandKeys = expandKeys.map(item=>item.pkId);
    		}
    		// console.log("[^_^:20231107-0000-001] shouldComponentUpdate: ", expandKeys);
    		nextState.expandedKeys = expandKeys;
    	}
    	return true;
    }

    // 查询
    f_onSearch = (sourceDatas, filterValue)=>{
    	console.log("[^_^:2022-1024-001] filterValue: ", filterValue);
    	let expandKeys = [];
    	let datas = this.f_filter(sourceDatas, filterValue, expandKeys);
    	// if(!zkJsUtils.isEmpty(filterValue)){
     //    	this.setState({"expandedKeys" : expandKeys, "treeData" : datas});
     //    }else{
     //    	this.setState({"treeData" : datas});
     //    }
        this.setState({"treeData" : datas});
    };

    /**
     * 查询公司列表，非树形
     */
    f_filter = (treeData=[], filterValue, findKeys)=>{
        if(zkJsUtils.isEmpty(filterValue)){
        	return treeData;
        }
        if(zkJsUtils.isEmpty(treeData)){
        	return [];
        }

        let res = [];
        let resItem = undefined;
        let _this = this;

        treeData.forEach(item=>{// 这个需要修改掉
        	resItem = {};
        	resItem.children = _this.f_filter(item.children, filterValue, findKeys);
        	if(resItem.children.length > 0 
        		|| item.name.indexOf(filterValue) > -1 
        		|| item.code.indexOf(filterValue) > -1){
        		resItem.name = item.name;
        		resItem.code = item.code;
        		resItem.pkId = item.pkId;
        		resItem.parentId = item.parentId;
                // resItem.parent = item;
        		res.push(resItem);
        		findKeys.push(item.pkId);
        	}
        });
        return res;
    };

    // 树形展开
    f_onExpand = (expandedKeys)=>{
    	// console.log("[^_^:20231007-2310-002] expandedKeys: ", expandedKeys);
        this.setState({expandedKeys: expandedKeys});
    };

    // 选择节点
    f_onSelect = (selectedKeys, info) => {
    	// console.log("[^_^:20231007-2310-006] f_onSelect: ", info);
    	// 点击展开效果
    	// let expandedKeys = this.state.expandedKeys;
    	// let index = expandedKeys.indexOf(info.node.pkId);
    	// if(index < 0){
    	// 	expandedKeys.push(info.node.pkId);
    	// }else{
    	// 	expandedKeys.splice(index, 1);
    	// }
    	// this.setState({expandedKeys: expandedKeys});
    	// this.setState({expandedKeys: [].concat()});

    	// 选择节点
    	let { onSelect } = this.props;
    	if(onSelect){
    		onSelect.call(this, info.node);
    	}
    };

    f_optDir = ({item, key, keyPath, domEvent})=>{
    	// console.log("[^_^:20231007-2310-003] key: ", key);
        if(zkJsUtils.assertObjType(this.props.onDirOpt, Function)){
        	let currentOptFile = this.props.optDir;

        	let payload = {}
        	switch(key){
	            case '_key_add_dir':
	                payload['entity'] = {
	        			parent: currentOptFile,
	        			parentId: (currentOptFile?currentOptFile.pkId:undefined)
	        		};
	                break;
	            case '_key_edit_dir': 
	            	payload['entity'] = currentOptFile;
	            	break;
	            case '_key_del_dir': 
	            	payload['delIds'] = (currentOptFile?[currentOptFile.pkId]:undefined);
	            	break;
	        }
        	this.props.onDirOpt.call(this, key, payload);
        }
    };

    /* event, node, dragNode, dropPosition, dragNodesKeys, dropToGap */
    f_dropDir = ({node, dragNode, dropPosition, dragNodesKeys, dropToGap})=>{ 
    	console.log("[^_^:20231007-2310-004.1] node: ", node);
    	console.log("[^_^:20231007-2310-004.2] dragNode: ", dragNode);
    	console.log("[^_^:20231007-2310-004.3] dropPosition: ", dropPosition);
    	console.log("[^_^:20231007-2310-004.4] dragNodesKeys: ", dragNodesKeys);
    	console.log("[^_^:20231007-2310-004.5] dropToGap: ", dropToGap);
    	// 这是修改 目录排序或移到另一目录中
    };

    // /* 取消选择 */
    // f_cancelSel = e=>{
    // 	// console.log("[^_^:20231007-2310-005] 取消选择: ", e);
    // 	// this.props.dispatch({type: "mFile/setState", payload: { optFile: undefined }});
    // 	if(this.props.onSelect){
    // 		this.props.onSelect.call(this, undefined);
    // 	}
    // }

	// style={{marginBottom: 8}} placeholder="Search"
    render() {
        let { treeData=[], optDir, onSelect, intl, loading, ...otherProps } = this.props;
        let spinning = false;

        let dirOptItems = [
	    	{label: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add'), key: '_key_add_dir', },
	    	{label: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit'), key: '_key_edit_dir', },
	    	{label: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del'), key: '_key_del_dir', },
	    ];

        // console.log("[^_^:2023-1107-002] render: ", this.state);

        spinning = (this.state.treeData == undefined)
        	||loading.effects['mFile/findFileTree']
        	||loading.effects['mFile/setCurrentOptFile']
        	||loading.effects['mFile/getFile']
        	||loading.effects['mFile/delFile']
        	||loading.effects['mFile/editFile'];
        /* DownOutlined BarsOutlined*/
        return (
            <ZKSpin spinning={spinning === true}>
            	<div style = {{'width':'100%', 'height':'100%'}} className={zkStyles.zk_f_display_flex_col} >
	            	<div className={zkStyles.zk_f_display_flex}>
	                    <Search onChange = {e=>{this.f_onSearch(treeData, e.target.value);}} className={zkStyles.zk_f_flex_auto_1}/>
	                    <ZKDropdown menu = {{'items': dirOptItems, onClick: this.f_optDir}} className={zkStyles.zk_f_flex_auto_1} >
	                    	<a style={{ margin: '0px 5px', display: 'flex', fontSize: '18px' }}>
	                            <ZKIcon icon='MoreOutlined' />
	                        </a>
	                    </ZKDropdown>
	                </div>
	                {/*<div className={zkStyles.zk_f_flex_auto_1} onClick = {this.f_cancelSel} >*/}
	                <Scrollbars onClick = {e=>{zkJsEvent.eventCancelPropagation(e);zkJsEvent.eventCancelDefault(e);}} >
		                <ZKTree {...otherProps} forwardRef = {this.thisRef}
		                	// defaultExpandAll = {!zkJsUtils.isEmpty(this.state.filterValue)}
		                	// expandedKeys = {zkJsUtils.isEmpty(this.state.filterValue)?this.state.expandedKeys:undefined}
		                    treeData = { this.state.treeData }
		                    titleRender = { nodeData=>{return `${nodeData.name}(${nodeData.code})`} }
		                    expandedKeys = { this.state.expandedKeys }
		                    selectedKeys = { optDir?[optDir.pkId] : [] }
		                    onExpand = { this.f_onExpand }
		                    onSelect = { this.f_onSelect }
		                    // blockNode = {true}
		                    allowDrop = { info=>{ return !zkJsUtils.isEmpty(info.dropNode.pkId); } } 
		                    draggable = { {icon: false, nodeDraggable: node=>{return !zkJsUtils.isEmpty(node.parentId)}} }
		                    // onDragStart = { ({event, node})=>{console.log("--------- onDragStart: 开始拖拽时调用 ", node.pkId)}}
		                    // onDragEnd = { ({event, node})=>{console.log("--------- onDragEnd: dragend 触发时调用 ", node.pkId)}}
		                    // onDragEnter = { ({event, node, expandedKeys})=>{ console.log("--------- onDragEnter: dragenter 触发时调用 ", node.pkId, expandedKeys) } }
		                    // onDragLeave = { ({event, node})=>{console.log("--------- onDragLeave: dragleave 触发时调用 ", node.pkId)}}
		                    // onDragOver = { ({event, node})=>{console.log("--------- onDragOver: dragover 触发时调用 ", node.pkId)}}
		                    onDrop = { this.f_dropDir }
		                />
		            </Scrollbars>
	                {/*</div>*/}
	            </div>   
            </ZKSpin>
        );
    }

    // componentDidUpdate(prevProps, prevState, snapshot){
    // 	console.log("[^_^:20231010-0005-002] componentDidUpdate.props: ", this.props, prevProps);
    // 	console.log("[^_^:20231010-0005-002] componentDidUpdate.== ", prevProps.treeData === this.props.treeData);
    // 	// if(prevProps.treeData != this.props.treeData){
    // 	// 	this.f_onSearch(this.state.filterValue);
    // 	// }
    // }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
    	this.props.eventCartridge.saveUpdate.push(()=>{
    		this.props.dispatch({type: "mFile/findFileTree"});
    	});
        // // window docment
        // zkJsEvent.eventBinding(document, "click", e=>{
        // 	// console.log("[^_^:20221111-0848-001] CInitDirTree.componentDidMount eventBinding", this.thisRef);
        	
        // });
    }

    componentWillUnmount(){
    	// zkJsEvent.eventRemove(document, "click", e=>{
    	// 	// zkJsEvent.eventCancelPropagation(e); // 冒泡
    	// 	// zkJsEvent.eventCancelDefault(e);
    	// });
    }
}

// 定义属性 DirectoryTree
CInitDirTree.propTypes = {
	...ZKTree.propTypes,
	onSelect: PropTypes.func,
	// 返回 value 时，取值的 key，默认返回整个数据对象
	// valueKey: PropTypes.string
}
// 定义属性默认值 <ZKIcon rotate = {360} icon = "FolderOutlined" /> <ZKIcon icon = "FolderOpenOutlined" />
CInitDirTree.defaultProps = {
	...ZKTree.defaultProps,
	fieldNames: { title: 'pkId', key: 'pkId', children: 'children' },
	showIcon: true,
	icon: props=>{
		if(props.isLeaf){
			return <ZKIcon icon = "FolderOutlined" />;
		}else{
			return <ZKIcon icon = "FolderOpenOutlined" />;
		}
	},
	showLine: {"showLeafIcon":false},
}

// export default injectIntl(CInitDirTree);
export default CInitDirTree;


