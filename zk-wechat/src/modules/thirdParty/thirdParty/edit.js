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
ZKInput, ZKInputNumber, } = ZKOriginalComponents;
const { 
	ZKEditForm, 	
ZKDateFormatPicker, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitThirdPartyEdit extends Component {

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
        if(!this.props.mThirdParty.optEntity.pkId){
            values.isNewRecord = 1;
        }
        this.props.dispatch({
            type: 'mThirdParty/editThirdParty', 
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

        let { mApp, dispatch, mThirdParty, intl, loading, location } = this.props;
        let { optEntity } = mThirdParty;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        
        let spinning = this.state.loading || loading.effects['mThirdParty/editThirdParty'] || loading.effects['mThirdParty/getThirdParty'];
        return (optEntity != null && mThirdParty.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                	<ZKEditForm.Item name = "pkId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.pkId')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "wxAppSecret" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxAppSecret')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput style = {{width:'100%'}} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "wxToken" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxToken')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "wxAesKey" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxAesKey')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput style = {{width:'100%'}} />
                	</ZKEditForm.Item>
                {
     //            	<ZKEditForm.Item name = "wxTicket" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxTicket')} 
     //            		rules = {[
					// 		zkToolsValidates.string(intl, 0, 64), 
     //                    ]} 
					// >
     //                    <ZKInput disabled = {optEntity.pkId?true:false} />
     //            	</ZKEditForm.Item>
     //            	<ZKEditForm.Item name = "wxTicketUpdateDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxTicketUpdateDate')} 
     //            		rules = {[
     //                    ]} 
					// >
     //                    <ZKDateFormatPicker format='YYYY-MM-DD'disabled = {optEntity.pkId?true:false} />
     //            	</ZKEditForm.Item>
     //            	<ZKEditForm.Item name = "wxAccessToken" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxAccessToken')} 
     //            		rules = {[
					// 		zkToolsValidates.string(intl, 0, 64), 
     //                    ]} 
					// >
     //                    <ZKInput disabled = {optEntity.pkId?true:false} />
     //            	</ZKEditForm.Item>
     //            	<ZKEditForm.Item name = "wxAccessTokenExpiresIn" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxAccessTokenExpiresIn')} 
     //            		rules = {[
					// 		zkToolsValidates.integer(intl, 0, 999999999), 
     //                    ]} 
					// >
     //                    <ZKInputNumber precision={0} disabled = {optEntity.pkId?true:false} />
     //            	</ZKEditForm.Item>
     //            	<ZKEditForm.Item name = "wxAccessTokenUpdateDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdParty.wxAccessTokenUpdateDate')} 
     //            		rules = {[
     //                    ]} 
					// >
     //                    <ZKDateFormatPicker format='YYYY-MM-DD' disabled = {optEntity.pkId?true:false} />
     //            	</ZKEditForm.Item>
                }
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mThirdParty } = this.props;
        let { params } = match;

        // 第一次进来或地址栏改变了 
        if (mThirdParty.pathname != location.pathname) {
            let optEntity = location.state ? location.state.optEntity : undefined;
            if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
                dispatch({ type: 'mThirdParty/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
            } else {
                dispatch({ type: 'mThirdParty/setState', payload: { pathname: location.pathname, optEntity:optEntity } });
                if("_new" != params.pkId){
                    dispatch({ type: 'mThirdParty/getThirdParty', payload: { pkId: params.pkId } });
                }
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mThirdParty, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mThirdParty]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mThirdParty, loading }) => ({ mApp, mThirdParty, loading }))(CInitThirdPartyEdit));