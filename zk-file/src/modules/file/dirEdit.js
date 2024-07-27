/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-26 23:49:10
* @Last Modified by: runoob
* @Last Modified time: 2024-07-10 10:06:35
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";     
// ZKOriginalComponents
const { ZKSpin, ZKModal, ZKSelect, ZKInput} = ZKOriginalComponents;
// ZKCustomComponents
const { ZKEditForm, ZKInputJson,} = ZKCustomComponents;
// zkTools
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;  

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

class CInitEditDir extends Component {

    formRef = null;

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {};
        this.formRef = React.createRef();
    };
	
	/** 保存 */
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mFile/editFile', 
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.props.eventCartridge.action(this.props.eventCartridge.saveUpdate);
                    if(zkJsUtils.assertObjType(this.props.closeEdit, Function)){
                        this.props.closeEdit.call(this);
                    }
                }else{
                    callbackFunc(errors);
                }
            }
        });
    };

    /* 返回上一级 */
    f_goBackFunc = ()=>{
        if(zkJsUtils.assertObjType(this.props.closeEdit, Function)){
            this.props.closeEdit.call(this);
        }
    }

    // static getDerivedStateFromProps(props, state) {
    // };

    /** 返回 JSX 元素 */
    render() {

        let { dispatch, intl, loading, optEntity={}, editLeaveConfirm } = this.props;
        // console.log("[^_^:20231009-0024-001] optEntity: ", optEntity);
        // if(optEntity.parent)optEntity.parent.children = {};
        // optEntity.children = {};

        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                if(index == 'zh-CN'){
                    objRule[index] = zkToolsValidates.string(intl, 1, 80, required);
                }
            }
            return objRule;
        }
        
        let spinning = loading.effects['mFile/editFile'];
        return (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm {...layout} viewLayout = "custom" ref = {this.formRef} data={optEntity}
                    leaveConfirm = {editLeaveConfirm}
                    reloadConfirm = {editLeaveConfirm}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                    goBackFunc={this.f_goBackFunc}
                >
                	<ZKEditForm.Item label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.parentName')}  >
                        { optEntity.parent?(optEntity.parent.name+"["+optEntity.parent.code+"]"):zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir._top') }
                    </ZKEditForm.Item>
                	<ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.name')} 
                		rules = {[
                            zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.name.placeholder')} />
                	</ZKEditForm.Item>
                    <ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.code')} 
                        rules = {[
                            zkToolsValidates.string(intl, 1, 64, true), 
                            zkToolsValidates.code(intl)
                        ]} 
                    >
                        <ZKInput placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.code.placeholder')} disabled = {optEntity.pkId?true:false} />
                    </ZKEditForm.Item>
                	<ZKEditForm.Item name = "stauts" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.stauts')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 999999999, true), 
                        ]} 
					>
                        <ZKSelect placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.stauts.placeholder')} >
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                        </ZKSelect>
                	</ZKEditForm.Item>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mFile, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mFile]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default CInitEditDir;


