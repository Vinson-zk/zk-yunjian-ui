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
const { ZKSpin, ZKModal, ZKInput, ZKRow, ZKCol, ZKSelect } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitFuncKeyTypeEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    };
	
	/** 保存 */
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mFuncKeyType/editFuncKeyType', 
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.setState({loading: true});
                }
                callbackFunc(errors);
            }
        });
    };

    /** 返回 JSX 元素 */
    render() {

        let { location, mApp, dispatch, mFuncKeyType, intl, loading } = this.props;
        let { optEntity } = mFuncKeyType;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        
        let spinning = this.state.loading || loading.effects['mFuncKeyType/editFuncKeyType'] || loading.effects['mFuncKeyType/getFuncKeyType'];
        return (optEntity != null && mFuncKeyType.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                	<ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "funcTypeName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.funcTypeName')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKEditForm.Item name = "funcTypeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.funcTypeCode')} 
                        rules = {[
                            zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
                    >
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.status')} 
                        rules = {[
                            zkToolsValidates.integer(intl, 0, 9, true), 
                        ]} 
                    >
                        <ZKSelect>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.status.0')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.status.1')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "funcTypeDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.funcTypeDesc')} 
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
        let { location, match, dispatch, mFuncKeyType } = this.props;
        let { params } = match;
        if (mFuncKeyType.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了
            dispatch({ type: 'mFuncKeyType/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
            	dispatch({ type: 'mFuncKeyType/setState', payload: { optEntity: {} } });
            }else{
            	dispatch({ type: 'mFuncKeyType/getFuncKeyType', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mFuncKeyType, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mFuncKeyType]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mFuncKeyType, loading }) => ({ mApp, mFuncKeyType, loading }))(CInitFuncKeyTypeEdit));