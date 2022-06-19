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
const { ZKEditForm, ZKInputJson, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitSysSetCollectionEdit extends Component {

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
            type: 'mSysSetCollection/editSysSetCollection', 
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

        let { location, mApp, dispatch, mSysSetCollection, intl, loading } = this.props;
        let { optEntity } = mSysSetCollection;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        
        let spinning = this.state.loading || loading.effects['mSysSetCollection/editSysSetCollection'] || loading.effects['mSysSetCollection/getSysSetCollection'];
        return (optEntity != null && mSysSetCollection.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetCollection.code')} 
                        rules = {[
                            zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
                    >
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                    </ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetCollection.name')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "setDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetCollection.setDesc')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetCollection.groupCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "compamyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetCollection.compamyCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysSetCollection } = this.props;
        let { params } = match;
        if (mSysSetCollection.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了
            dispatch({ type: 'mSysSetCollection/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
            	dispatch({ type: 'mSysSetCollection/setState', payload: { optEntity: {} } });
            }else{
            	dispatch({ type: 'mSysSetCollection/getSysSetCollection', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysSetCollection, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysSetCollection]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysSetCollection, loading }) => ({ mApp, mSysSetCollection, loading }))(CInitSysSetCollectionEdit));