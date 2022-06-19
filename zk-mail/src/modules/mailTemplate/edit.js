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

import locales from "../../locales/mail/index.js";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";    

// ZKOriginalComponents
const {ZKSpin, ZKModal, ZKInput, ZKSelect, ZKRow, ZKCol} = ZKOriginalComponents;
// ZKCustomComponents
const {ZKEditForm, } = ZKCustomComponents;
// zkTools
const {zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import CMailTypeSelect from "../mailTypeSelect.js";

class CInitMailTemplateEdit extends Component {

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
            type: 'mMailTemplate/editMailTemplate', 
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

        let { location, mApp, dispatch, mMailTemplate, intl, loading } = this.props;
        let { optEntity } = mMailTemplate;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        
        let spinning = this.state.loading || loading.effects['mMailTemplate/editMailTemplate'] || loading.effects['mMailTemplate/getMailTemplate'];
        return (optEntity != null && mMailTemplate.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "typeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.typeId')} 
                    		rules = {[
    							zkToolsValidates.string(intl, 1, 64, true), 
                            ]} 
    					>
                            <CMailTypeSelect style={{width: '100%'}} valueKey="typeCode" placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.typeId.placeholder')} disabled = {optEntity.pkId?true:false} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKEditForm.Item name = "companyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.companyCode')} 
                        rules = {[
                            zkToolsValidates.string(intl, 0, 64, false), 
                        ]} 
                    >
                        <ZKInput disabled = {optEntity.pkId?true:false} style={{width: '100%'}} placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.companyCode.placeholder')} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "locale" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.locale')} 
                        rules = {[
                            zkToolsValidates.string(intl, 0, 16, false), 
                        ]} 
                    >
                        <ZKSelect disabled = {optEntity.pkId?true:false} allowClear = {true} style={{width: '100%'}} className="-" placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.status.placeholder')} >
                            <ZKSelect.Option value={"zh_CN"}>简体中文</ZKSelect.Option>
                            <ZKSelect.Option value={"en_US"}>English</ZKSelect.Option>
                            <ZKSelect.Option value={"zh_TW"}>繁体中文</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.status')} 
                        rules = {[
                            zkToolsValidates.integer(intl, 0, 9, true), 
                        ]} 
                    >
                        <ZKSelect placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.status.placeholder')} >
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.status.0')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.status.1')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "sendAddress" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.sendAddress')} 
                		rules = {[
							zkToolsValidates.email(intl), 
                        ]} 
					>
                        <ZKInput style={{width: '100%'}} placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.sendAddress.placeholder')} />
                	</ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "sendName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.sendName')} 
                    		rules = {[
    							zkToolsValidates.string(intl, 1, 512, true), 
                            ]} 
    					>
                            <ZKInput style={{width: '100%'}}  placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.sendName.placeholder')} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "subject" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.subject')} 
                    		rules = {[
    							zkToolsValidates.string(intl, 1, 512, true), 
                            ]} 
    					>
                            <ZKInput style={{width: '100%'}}  placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.subject.placeholder')} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "content" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.content')} 
                    		rules = {[
    							zkToolsValidates.string(intl, 1, 1024, true), 
                            ]} 
    					>
                            <ZKInput.TextArea rows={9} style={{width: '100%'}}  placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.content.placeholder')} />
                    	</ZKEditForm.Item>
                	</ZKCol></ZKRow>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mMailTemplate } = this.props;
        let { params } = match;
        if (mMailTemplate.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了
            dispatch({ type: 'mMailTemplate/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
            	dispatch({ type: 'mMailTemplate/setState', payload: { optEntity: {} } });
            }else{
            	dispatch({ type: 'mMailTemplate/getMailTemplate', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mMailTemplate, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mMailTemplate]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mMailTemplate, loading }) => ({ mApp, mMailTemplate, loading }))(CInitMailTemplateEdit));