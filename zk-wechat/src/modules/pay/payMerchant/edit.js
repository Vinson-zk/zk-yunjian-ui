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
const { ZKSpin, ZKModal, ZKInput, ZKSelect, ZKRow, ZKCol} = ZKOriginalComponents;
const { 
	ZKEditForm, 	
ZKDateFormatPicker, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitPayMerchantEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
	
	/** 保存 */
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mPayMerchant/editPayMerchant', 
            payload: values, 
            callback: (errors) => {
                if(errors){
                    this.setState({loading: true});
                }
                callbackFunc(errors);
            }
        });
    }

    /** 返回 JSX 元素 */
    render() {

        let { mApp, dispatch, mPayMerchant, intl, loading, location } = this.props;
        let { optEntity } = mPayMerchant;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        
        let spinning = this.state.loading || loading.effects['mPayMerchant/editPayMerchant'] || loading.effects['mPayMerchant/getPayMerchant'];
        return (optEntity != null && mPayMerchant.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKEditForm.Item name = "pkId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.pkId')} 
                        rules = {[
                            zkToolsValidates.string(intl, 0, 20), 
                        ]} 
                    >
                        <ZKInput />
                    </ZKEditForm.Item>
                	<ZKEditForm.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.status')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 999999999, true), 
                        ]} 
					>
                        <ZKSelect disabled = {optEntity.pkId?true:false} >
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.enable')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.disabled')}</ZKSelect.Option>
                        </ZKSelect>
                	</ZKEditForm.Item>
                    <ZKRow>
                      <ZKCol span={20} offset = {0} pull = {0}>
                	    <ZKEditForm.Item labelCol = {{span:6}} wrapperCol = {{span:18}} name = "apiv3AesKey" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiv3AesKey')} 
                	    	rules = {[
					    		zkToolsValidates.string(intl, 1, 64, true), 
                            ]} 
					    >
                            <ZKInput style = {{width:'100%'}} />
                	    </ZKEditForm.Item>
                      </ZKCol>
                    </ZKRow>
                    <ZKRow>
                      <ZKCol span={20} offset = {0} pull = {0}>
                	    <ZKEditForm.Item labelCol = {{span:6}} wrapperCol = {{span:18}} name = "apiKey" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiKey')} 
                	    	rules = {[
					    		zkToolsValidates.string(intl, 0, 64), 
                            ]} 
					    >
                            <ZKInput style = {{width:'100%'}} />
                	    </ZKEditForm.Item>
                      </ZKCol>
                    </ZKRow>
                    <ZKRow>
                      <ZKCol span={20} offset = {0} pull = {0}>
                	    <ZKEditForm.Item labelCol = {{span:6}} wrapperCol = {{span:18}} name = "apiCertPathPkcs12" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiCertPathPkcs12')} 
                	    	rules = {[
					    		zkToolsValidates.string(intl, 0, 128), 
                            ]} 
					    >
                            <ZKInput style = {{width:'100%'}} />
                	    </ZKEditForm.Item>
                      </ZKCol>
                    </ZKRow>
                    <ZKRow>
                      <ZKCol span={20} offset = {0} pull = {0}>
                	    <ZKEditForm.Item labelCol = {{span:6}} wrapperCol = {{span:18}} name = "apiCertPathPem" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiCertPathPem')} 
                	    	rules = {[
					    		zkToolsValidates.string(intl, 1, 128, true), 
                            ]} 
					    >
                            <ZKInput style = {{width:'100%'}} />
                	    </ZKEditForm.Item>
                      </ZKCol>
                    </ZKRow>
                    <ZKRow>
                      <ZKCol span={20} offset = {0} pull = {0}>
                	    <ZKEditForm.Item labelCol = {{span:6}} wrapperCol = {{span:18}} name = "apiCertPathKeyPem" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiCertPathKeyPem')} 
                	    	rules = {[
					    		zkToolsValidates.string(intl, 1, 128, true), 
                            ]} 
					    >
                            <ZKInput style = {{width:'100%'}} />
                	    </ZKEditForm.Item>
                      </ZKCol>
                    </ZKRow>
                    <ZKRow>
                      <ZKCol span={20} offset = {0} pull = {0}>
                	    <ZKEditForm.Item labelCol = {{span:6}} wrapperCol = {{span:18}} name = "apiCertSerialNo" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiCertSerialNo')} 
                	    	rules = {[
					    		zkToolsValidates.string(intl, 0, 64), 
                            ]} 
					    >
                            <ZKInput style = {{width:'100%'}} />
                	    </ZKEditForm.Item>
                      </ZKCol>
                    </ZKRow>
                	<ZKEditForm.Item name = "apiCertExpirationTime" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiCertExpirationTime')} 
                		rules = {[]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD'/>
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "apiCertEffectiveTime" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiCertEffectiveTime')} 
                		rules = {[]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD'/>
                	</ZKEditForm.Item>
                    <ZKEditForm.Item name = "apiCertUpdateDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayMerchant.apiCertUpdateDate')} 
                        rules = {[]} 
                    >
                        <ZKDateFormatPicker format='YYYY-MM-DD'/>
                    </ZKEditForm.Item>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mPayMerchant } = this.props;
        let { params } = match;

        // 第一次进来或地址栏改变了 
        if (mPayMerchant.pathname != location.pathname) {
            let optEntity = location.state ? location.state.optEntity : undefined;
            if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
                dispatch({ type: 'mPayMerchant/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
            } else {
                dispatch({ type: 'mPayMerchant/setState', payload: { pathname: location.pathname, optEntity:optEntity } });
                if("_new" != params.pkId){
                    dispatch({ type: 'mPayMerchant/getPayMerchant', payload: { pkId: params.pkId } });
                }
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mPayMerchant, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mPayMerchant]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mPayMerchant, loading }) => ({ mApp, mPayMerchant, loading }))(CInitPayMerchantEdit));