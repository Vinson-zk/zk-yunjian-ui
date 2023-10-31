/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
 */


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents, ZKCustomComponents } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;
const { ZKDrawer } = ZKOriginalComponents;

const { ZKPopoverPanel } = ZKCustomComponents;
const { PanelButton } = ZKPopoverPanel;

import zkStyles from 'zkFramework/css/styles.less';

import locales from "../../locales/index.js";

// =====================================================

// import SearchItem from "./search.js";
// import GridItem from "./grid.js";
import CEdit from "./edit.js";
import CFileView from '../file/view.js'

import zkFileStyles from '../file.styles.less';
import CDirTree from './dirTree.js';

class CInitDirIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editWindowIsShow: false, 
            optEntity: {},
            popoverPanelIsShow: false,
            position: {"x": 0, "y": 0},
        }
    }

    /*
    <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} />
                <div className={`${zkStyles.display_flex_col} ${zkStyles.flex_1_auto}`} >
    */
    f_onSelectDir = node=>{
        let { dispatch } = this.props;
        dispatch({ type: 'mDir/setState', payload: { optDir: node } });
    };

    // 右键
    f_onRightClick = (event)=>{
        // 关闭右键菜单功能
        self.event.returnValue=false; 
        event.returnValue = false;
        this.setState({"popoverPanelIsShow": true, position: {"x": event.clientX,"y": event.clientY}});
        return false;
    };

    render() {
        let { mApp, mDir, dispatch, intl, loading } = this.props;
        return (
            <div className={ `${zkStyles.content} ${zkStyles.display_flex_row}` } style={{height:'100%'}} >
                <div onContextMenu={this.f_onRightClick} 
                    className={`${zkStyles.zk_left_sider} ${zkFileStyles.zk_left_sider_border} ${zkFileStyles.tree}`} style = {{'width':'200px'}}>
                    <CDirTree intl = {intl} loading = {loading}
                        dispatch = {dispatch}
                        mDir = {mDir}
                        onEdit = {data=>{this.setState({optEntity: data, editWindowIsShow: true, popoverPanelIsShow: false});}}
                        onSelect = {this.f_onSelectDir} 
                        optDir = {mDir.optDir} 
                        treeData = {mDir.treeData} 
                    />
                    <ZKPopoverPanel isShow = {this.state.popoverPanelIsShow} position = {this.state.position} height = {36} >
                        <PanelButton onClick = {(e, optData)=>{ this.setState({optEntity: {}, editWindowIsShow: true, popoverPanelIsShow: false}); }} >
                            {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}
                        </PanelButton>
                    </ZKPopoverPanel>
                </div>
                <ZKDrawer bodyStyle={{'overflow':'hidden', 'padding': '9px'}} open = {this.state.editWindowIsShow} 
                    width = {578} maskClosable = {false} closable = {false} >        
                    { // CEdit 每次都需要重建，因为初始值的问题； Form 要每次重建；
                    this.state.editWindowIsShow?<Scrollbars style={{ height: '100%', background: '#fff' }} >
                        <CEdit dispatch = {dispatch} intl = {intl} loading = {loading} lang = { mApp.lang } 
                            editLeaveConfirm = {this.state.editWindowIsShow} // 编辑离开时，是否提示
                            closeEdit = {()=>{this.setState({editWindowIsShow: false});}}
                            optEntity = {this.state.optEntity} />
                    </Scrollbars>:""}
                </ZKDrawer>
                <CFileView />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mDir } = this.props;
		if (location.pathname != mDir.pathname) {
			dispatch({ type: 'mDir/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mDir/findDirTree", callback: e => { } });
		}

        // window docment
        zkJsEvent.eventBinding(document, "click", e=>{
            this.setState({"popoverPanelIsShow": false});
        });

    }

    componentWillUnmount(){
        zkJsEvent.eventRemove(document, "click", e=>{
            zkJsEvent.eventCancelPropagation(e); // 冒泡
            zkJsEvent.eventCancelDefault(e);
        });
    }
}

export default injectIntl(connect(({ mApp, mDir, loading }) => ({ mApp, mDir, loading }))(CInitDirIndex));



