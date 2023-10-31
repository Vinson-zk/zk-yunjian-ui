/*
* @Author: Vinson
* @Date:   2022-10-20 21:05:19
* @Last Modified by:   Vinson
* @Last Modified time: 2022-11-13 21:45:40
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
// import { injectIntl } from 'react-intl';
// import { Scrollbars } from 'react-custom-scrollbars';
import { DownOutlined } from '@ant-design/icons';


import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';
const { ZKIcon, ZKPopoverPanel } = ZKCustomComponents;
const { ZKSpin, ZKInput, ZKDivider, ZKTree } = ZKOriginalComponents;
const { zkToolsUtils, zkToolsAjax, zkToolsMsg } = zkTools;
const { Search } = ZKInput;
const { PanelButton } = ZKPopoverPanel;

// import { Tree as ZKTree } from 'antd';


import zkFileStyles from '../file.styles.less';

class CInitDirTree extends Component {

	thisRef = {current:null};

    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            treeData: undefined,
            expandedKeys: [],
            popoverPanelIsShow: false,
            position: {"x": 0, "y": 0},
            optData: undefined,
        };
        this.thisRef = props.ref?props.ref:React.createRef();
    };

    /**
     * 查询公司列表，非树形
     */
    f_filter = (treeData, filterValue, findKeys)=>{
        if(zkJsUtils.isEmpty(filterValue)){
        	return treeData;
        }
        if(zkJsUtils.isEmpty(treeData)){
        	return [];
        }

        let res = [];
        let resItem = undefined;
        let _this = this;

        treeData.forEach(item=>{
        	resItem = {};
        	resItem.children = _this.f_filter(item.children, filterValue, findKeys);
        	if(resItem.children.length > 0 
        		|| zkToolsMsg.getInternationInfo(item.name).indexOf(filterValue) > -1 
        		|| item.code.indexOf(filterValue) > -1){
        		resItem.name = item.name;
        		resItem.code = item.code;
        		resItem.pkId = item.pkId;
        		resItem.parentId = item.parentId;
        		res.push(resItem);
        		findKeys.push(item.pkId);
        	}
        });
        return res;
    };
    // 选择节点
    f_onSelect = (selectedKeys, info) => {
    	// 点击展开效果
    	let expandedKeys = this.state.expandedKeys;
    	let index = expandedKeys.indexOf(info.node.pkId);
    	if(index < 0){
    		expandedKeys.push(info.node.pkId);
    	}else{
    		expandedKeys.splice(index, 1);
    	}
    	this.setState({expandedKeys: [].concat(expandedKeys)});

    	// 选择节点
    	let { onSelect } = this.props;
    	if(onSelect){
    		onSelect.call(this, info.node);
    	}
    };
    // 树形展开
    f_onExpand = (expandedKeys)=>{
    	// console.log(" --- ", expandedKeys);
        this.setState({expandedKeys: expandedKeys});
    };
    // 查询
    f_onSearch = e=>{
    	// console.log("[^_^:2022-1024-001] ---- ", e.target.value);
    	let expandKeys = [];
    	let datas = this.f_filter(this.props.treeData, e.target.value, expandKeys);
    	this.setState({"treeData" : datas, "expandedKeys" : expandKeys});
    }
    // 右键
    f_onRightClick = ({event, node})=>{
    	// screenY  {x:360, y:280}
    	// console.log("[^_^:20221111-1014-001] X: ", event.pageX, event.screenX, event.movementX, event.clientX);
    	// console.log("[^_^:20221111-1014-001] Y: ", event.pageY, event.screenY, event.movementY, event.clientY);
    	// console.log("[^_^:20221111-1014-001] f_onRightClick: ", event, node);
    	this.setState({"popoverPanelIsShow": true, position: {"x": event.clientX,"y": event.clientY}, optData: node});
    }

    static getDerivedStateFromProps(props, state) {
    	if(state.treeData === undefined && props.treeData != undefined){
    		state.treeData = props.treeData;
        }
        return true;
    }

    f_editDir = (data, key)=>{
    	console.log("---- ", key, data);
    }

    f_dropDir = ({node, dragNode, dropPosition, dragNodesKeys, dropToGap})=>{ // event, node, dragNode, dropPosition, dragNodesKeys, dropToGap
    	console.log("--------- f_dropDir ", dragNode.pkId, node.pkId, dropToGap);
    	// 这是修改 目录排序或移到另一目录中
    }

	// style={{marginBottom: 8}} placeholder="Search"
    render() {
        let { treeData, optDir, onSelect, intl, ...otherProps } = this.props;
        let spinning = treeData == undefined;

        return (treeData != undefined)&&(
            <ZKSpin spinning={spinning === true} style = {{'width':'100%', 'height':'100%'}} >
            	<ZKPopoverPanel isShow = {this.state.popoverPanelIsShow} position = {this.state.position} data = {this.state.optData} >
            		<PanelButton onClick = {(e, optData)=>{this.f_editDir(optData, "add")}} >
            			{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}
            		</PanelButton>
            		<ZKDivider style = {{"padding":"1px 0 0 0", "margin":"0px 0px"}} />
            		<PanelButton onClick = {(e, optData)=>{this.f_editDir(optData, "edit")}} >
            			{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
            		</PanelButton>
            		<ZKDivider style = {{"padding": "1px 0 0 0", "margin":"0px 0px"}} />
            		<PanelButton onClick = {(e, optData)=>{this.f_editDir(optData, "delete")}} >
            			{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
            		</PanelButton>
            	</ZKPopoverPanel>
            	<Search onChange = {this.f_onSearch} style = {{'width':'100%'}} />
                <ZKTree {...otherProps} forwardRef = {this.thisRef}
                	// defaultExpandAll = {!zkJsUtils.isEmpty(this.state.filterValue)}
                	// expandedKeys = {zkJsUtils.isEmpty(this.state.filterValue)?this.state.expandedKeys:undefined}
                    // treeData = { this.f_filter(treeData, this.state.filterValue) }
                    // 
                    treeData = {this.state.treeData}
                    titleRender = { nodeData=>{return `${zkToolsMsg.getInternationInfo(nodeData.name)}(${nodeData.code})`} }
                    expandedKeys = { this.state.expandedKeys }
                    selectedKeys = { optDir?[optDir.pkId] : [] }
                    onExpand = { this.f_onExpand }
                    onSelect = { this.f_onSelect }
                    onRightClick = { this.f_onRightClick }
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
            </ZKSpin>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        // window docment
        zkJsEvent.eventBinding(document, "click", e=>{
        	// console.log("[^_^:20221111-0848-001] CInitDirTree.componentDidMount eventBinding", this.thisRef);
        	if(this.thisRef.current != null){
        		this.setState({"popoverPanelIsShow": false});
        	}
        });
    }

    componentWillUnmount(){
    	zkJsEvent.eventRemove(document, "click", e=>{
    		zkJsEvent.eventCancelPropagation(e); // 冒泡
    		zkJsEvent.eventCancelDefault(e);
    	});
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
	// icon: props=>{
	// 	if(props.isLeaf){
	// 		return <span></span>;
	// 	}
	// 	if(props.expanded){
	// 		return <ZKIcon icon = "FolderOpenOutlined" />;
	// 	}else{
	// 		return <ZKIcon icon = "FolderOutlined" /> ;
	// 	}
	// },
	// switcherIcon: props=>{
	// 	if(props.expanded){
	// 		return <ZKIcon icon = "FolderOpenOutlined" />;
	// 	}else{
	// 		return <ZKIcon rotate = {360}  icon = "FolderOutlined" />;
	// 	}
	// },
	switcherIcon: <DownOutlined />,
	// switcherIcon: <span></span>,
	showLine: {"showLeafIcon":false},
}

// export default injectIntl(CInitDirTree);
export default CInitDirTree;


