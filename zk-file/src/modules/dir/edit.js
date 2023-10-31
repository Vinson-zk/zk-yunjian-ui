/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
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

class CInitDirEdit extends Component {

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
            type: 'mDir/editDir', 
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.props.dispatch({ type: "mDir/setState", payload: { treeData: undefined } });
                    this.props.dispatch({ type: "mDir/findDirTree", callback: e => { } });
                    this.setState({loading: false});
                    if(this.props.closeEdit instanceof Function){
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
        if(this.props.closeEdit instanceof Function){
            this.props.closeEdit.call(this);
        }
    }

    // static getDerivedStateFromProps(props, state) {
    // };

    /** 返回 JSX 元素 */
    render() {

        let { lang, dispatch, intl, loading, optEntity={}, editLeaveConfirm } = this.props;
        if(optEntity.parent)optEntity.parent.children = {};
        // optEntity.children = {};
        
		lang = lang?lang:zkToolsMsg.getLocale();

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
        
        let spinning = loading.effects['mDir/editDir'];
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
                        { optEntity.parent?
                            ((optEntity.parent.name?zkToolsMsg.getInternationInfo(optEntity.parent.name):optEntity.parent.pkId)+"["+optEntity.parent.code+"]")
                            :zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir._top') }
                    </ZKEditForm.Item>
                	<ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.name')} 
                		rules = {[
							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                        ]} 
					>
                        <ZKInputJson placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.name.placeholder')}
                        	styleType="compact" primaryAttr={lang} attrs={locales} />
                	</ZKEditForm.Item>
                    <ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.code')} 
                        rules = {[
                            zkToolsValidates.string(intl, 1, 64, true), 
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
		// let { mDir, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mDir]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default CInitDirEdit;



