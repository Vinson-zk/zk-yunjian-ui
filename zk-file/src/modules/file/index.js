/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-26 13:44:04
* @Last Modified by: runoob
* @Last Modified time: 2023-12-27 17:50:08
*/


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';
// import { App } from 'antd';

import { zkTools, ZKOriginalComponents, ZKCustomComponents } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;
const { ZKDrawer } = ZKOriginalComponents;

const { ZKPopoverPanel } = ZKCustomComponents;
const { PanelButton } = ZKPopoverPanel;

import zkStyles from 'zkFramework/style/zk.styles.less';

import fileStyles from './styles.less';

// import locales from "../../locales/index.js";

import CDirTree from './dirTree.js';
import CFileView from './fileView.js'
import CDirEdit from "./dirEdit.js";

// =====================================================


class CInitDirIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inEdit: false, // 是否显示编辑框，true-显示；false-不显示；
            editDir: {}, // 当前编辑的目录，注意，并不是 mFile 中的操作目录；
        }
    }

    eventCartridge = {
        action: obj=>{
            for(let a of obj){
                a.call()
            }
        },
        saveUpdate: []
    }

    // 选择目录
    f_onSelectDir = node=>{
        let { dispatch, mFile } = this.props;
        if(mFile.optFile || node){
            if(mFile.optFile && node && mFile.optFile.pkId === node.pkId){

            }else{
                dispatch({ type: 'mFile/setCurrentOptFile', optFile: node });
            }
        }
    };
    // 文件目录操作
    f_onFileOpt = (optKey, payload)=>{
        // console.log("[^_^:20231006-2332-001] index.f_onDirEdit: ", optKey);
        let { mFile, intl } = this.props;
        let currentOptFile = mFile.optFile;

        let editProps = {
            editDir: undefined,
            inEdit: true
        }
        switch(optKey){
            case '_key_add_dir':
                editProps.editDir = payload.entity;
                break;
            case '_key_edit_dir': 
                editProps.editDir = payload.entity;
                if(!editProps.editDir){
                    editProps = null;
                    zkToolsMsg.alertMsg(null, null, {type:'warning', msg: zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.msg.select')});
                }
                break;
            case '_key_del_dir': 
                editProps = null;
                if(payload.delIds){
                    this.f_onFileDel(payload.delIds);
                }else{
                    zkToolsMsg.alertMsg(null, null, {type:'warning', msg: zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.msg.select')});
                }
                break;
            // case '_key_upload':
            //     return;
            default:
                editProps = null;
                if(console){
                    console.error("[>_<:20231009-0013-001] 不支持的目录操作类型: ", optKey);
                    zkToolsMsg.alertMsg(null, null, {type:'warning', msg: zkToolsMsg.msgFormatByIntl(intl, 'global.app.msg.opt.unknown')});
                }
                break;
        }
        if(editProps != null){
            this.setState(editProps);
        }
    }
    /** 删除，删除的提示等，真正的数据删除是 f_deleteAction 删除执行函数进行 */
    f_onFileDel = (delPkIds, isConfirm=true)=>{
        let _this = this;
        let { mFile } = this.props;
        // 执行删除
        let f_executeDelete = (pkIds) => {
            _this.props.dispatch({
                type: "mFile/delFile", payload: { pkId: pkIds },
                callback: res=> {
                    console.log("[^_^:20231021-1049-001] f_onFileDel.res: ", res);
                    let currentOptFile = {}
                    if(mFile.optFile && pkIds.indexOf(mFile.optFile.pkId) > -1){
                        _this.props.dispatch({ type: 'mFile/setCurrentOptFile', optFile: undefined });
                    }else{
                        this.eventCartridge.action(this.eventCartridge.saveUpdate);
                    }
                }
            });
        };
        if (isConfirm) {
            zkToolsMsg.alertMsgByType(this.props.intl, null, 'delConfirm', () => {
                // ok
                f_executeDelete(delPkIds);
            }, () => {
                // cancel
            })
        } else {
            // 执行删除
            f_executeDelete(delPkIds);
        }
    }

    // // 右键
    // f_onRightClick = (event)=>{
    //     // 关闭右键菜单功能
    //     self.event.returnValue=false; 
    //     event.returnValue = false;
    //     this.setState({"popoverPanelIsShow": true, position: {"x": event.clientX,"y": event.clientY}});
    //     return false;
    // };

    /* 操作key 写话
    新增： _key_add_dir    zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')
    修改： _key_edit_dir   zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')
    上传： _key_upload     zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_upload')
    下载： _key_download   zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_download')
    删除： _key_del_dir    zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')
    详情： _key_detail     zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')
    */

    render() {
        let { mApp, mFile, dispatch, intl, loading } = this.props;
        return (
            <div className={ `${zkStyles.zk_f_content} ${zkStyles.zk_f_display_flex_row}` } style={{height:'100%'}} >
                {/*<div className={`${zkStyles.zk_f_left_sider} ${fileStyles.zk_file_dir_div}`} 
                    style = {{'width':'200px'}}
                    // onContextMenu={this.f_onRightClick}  // 鼠标右键事件
                >
                    <CDirTree intl = {intl} loading = {loading} dispatch = {dispatch}
                        treeData = {mFile.treeData} 
                        optDir = {mFile.optFile} 
                        onDirOpt = {this.f_onFileOpt}
                        onSelect = {this.f_onSelectDir} 
                        eventCartridge = {this.eventCartridge}
                    /> 
                </div>*/}
                <CFileView intl = {intl} loading = {loading} dispatch = {dispatch}
                    optDir = {mFile.optFile} 
                    filesPage = {mFile.childPage}
                    onDirOpt = {this.f_onFileOpt}
                    onSelect = {this.f_onSelectDir} 
                    eventCartridge = {this.eventCartridge}
                />
                <ZKDrawer bodyStyle={{'overflow':'hidden', 'padding': '9px'}} open = {this.state.inEdit} 
                    width = {578} maskClosable = {false} closable = {false} >        
                    { // CDirEdit 每次都需要重建，因为初始值的问题； Form 要每次重建；
                    this.state.inEdit?<Scrollbars style={{height: '100%'}} >
                        <CDirEdit dispatch = {dispatch} intl = {intl} loading = {loading}
                            editLeaveConfirm = {this.state.inEdit} // 编辑离开时，是否提示
                            closeEdit = {()=>{this.setState({inEdit: false});}}
                            optEntity = {this.state.editDir} 
                            onAfterSaving = {this.f_onAfterSaving} 
                            eventCartridge = {this.eventCartridge}
                        />
                    </Scrollbars>:""}
                </ZKDrawer>
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mFile } = this.props;
		if (location.pathname != mFile.pathname) {
			dispatch({ type: 'mFile/setState', payload: { pathname: location.pathname } });
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

export default injectIntl(connect(({ mApp, mFile, loading }) => ({ mApp, mFile, loading }))(CInitDirIndex));


