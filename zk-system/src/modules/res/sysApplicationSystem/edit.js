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

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKModal,
ZKInput, } = ZKOriginalComponents;
const { 
	ZKEditForm, 	
ZKInputJson, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitSysApplicationSystemEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
        }
    }
	
	// static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    render() {

        let { mApp, dispatch, mSysApplicationSystem, intl, loading, location } = this.props;
        let { optEntity } = mSysApplicationSystem;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        // 保存
        const save = (values, form, callbackFunc) => {
            dispatch({
                type: 'mSysApplicationSystem/editSysApplicationSystem', 
                payload: values, 
                callback: (errors) => {
                    callbackFunc(errors);
                }
            });
        };

        // let { name = {} } = optEntity;
        // // 初始化名称各国内容为空，如果允许支持语言输入为空时，不需要这样设置，这个处理主要是给个初始值，然后方便统一校验；也可以为各语言传入指定校验
        // for(let index in locales.localLanguage){
        //     if(!name[index]){
        //         name[index] = "";
        //     }
        // }

        // 各语言指定校验
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 80, required);
            }
            return objRule;
        }
        

        let spinning = loading.effects['mSysApplicationSystem/editSysApplicationSystem'] || loading.effects['mSysApplicationSystem/getSysApplicationSystem'];
        return (optEntity != null && mSysApplicationSystem.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={save}
                    resetFunc={form => { return true }}
                >
                	<ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysApplicationSystem.name')} 
                		rules = {[
							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                        ]} 
					>
                        <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysApplicationSystem.code')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "shortName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysApplicationSystem.shortName')} 
                		rules = {[
							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                        ]} 
					>
                        <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                	</ZKEditForm.Item>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysApplicationSystem } = this.props;
        let { params } = match;

        // 第一次进来或地址栏改变了 
        if (mSysApplicationSystem.pathname != location.pathname) {
            let optEntity = location.state ? location.state.optEntity : undefined;
            if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
                dispatch({ type: 'mSysApplicationSystem/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
            } else {
                dispatch({ type: 'mSysApplicationSystem/setState', payload: { pathname: location.pathname, optEntity:optEntity } });
                if("_new" != params.pkId){
                    dispatch({ type: 'mSysApplicationSystem/getSysApplicationSystem', payload: { pkId: params.pkId } });
                }
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysApplicationSystem, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysApplicationSystem]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysApplicationSystem, loading }) => ({ mApp, mSysApplicationSystem, loading }))(CInitSysApplicationSystemEdit));