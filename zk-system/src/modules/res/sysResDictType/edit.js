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
const { ZKSpin, ZKModal, ZKInput, ZKCol, ZKRow } = ZKOriginalComponents;
const { 
	ZKEditForm, 	
ZKInputJson, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitSysResDictTypeEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
	
	// 保存
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mSysResDictType/editSysResDictType', 
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.setState({loading: true});
                }
                callbackFunc(errors);
            }
        });
    }

    /** 返回 JSX 元素 */
    render() {

        let { mApp, dispatch, mSysResDictType, intl, loading, location } = this.props;
        let { optEntity } = mSysResDictType;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        
        let spinning = this.state.loading || loading.effects['mSysResDictType/editSysResDictType'] || loading.effects['mSysResDictType/getSysResDictType'];
        return (optEntity != null && mSysResDictType.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                	<ZKEditForm.Item name = "typeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDictType.typeCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "typeName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDictType.typeName')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "typeDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDictType.typeDesc')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysResDictType } = this.props;
        let { params } = match;

        // 第一次进来或地址栏改变了 
        if (mSysResDictType.pathname != location.pathname) {
            dispatch({ type: 'mSysResDictType/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
                dispatch({ type: 'mSysResDictType/setState', payload: { optEntity:{} } });
            } else {
                dispatch({ type: 'mSysResDictType/getSysResDictType', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysResDictType, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysResDictType]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysResDictType, loading }) => ({ mApp, mSysResDictType, loading }))(CInitSysResDictTypeEdit));