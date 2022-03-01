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
const { ZKSpin, ZKModal, ZKInput, ZKSelect, ZKRow, ZKCol } = ZKOriginalComponents;
const { 
	ZKEditForm, 	
ZKInputJson, ZKDateFormatPicker, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitPayGroupEdit extends Component {

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
            type: 'mPayGroup/editPayGroup', 
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

        let { mApp, dispatch, mPayGroup, intl, loading, location } = this.props;
        let { optEntity } = mPayGroup;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        
        let spinning = this.state.loading || loading.effects['mPayGroup/editPayGroup'] || loading.effects['mPayGroup/getPayGroup'];
        return (optEntity != null && mPayGroup.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKRow>
                      <ZKCol span={8} offset={2}>
                        <ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGroup.name')} 
                            rules = {[
                                zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
                        >
                          <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                        </ZKEditForm.Item>
                      </ZKCol>
                    </ZKRow>
                	<ZKEditForm.Item name = "wxAppId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGroup.wxAppId')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false}  />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "wxMchid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGroup.wxMchid')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false}  />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGroup.code')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false}  />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGroup.status')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 999999999, true), 
                        ]} 
					>
                        <ZKSelect>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.enable')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.disabled')}</ZKSelect.Option>
                        </ZKSelect>
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "startDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGroup.startDate')} 
                		rules = {[
                        ]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD'/>
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "endDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGroup.endDate')} 
                		rules = {[
                        ]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD'/>
                	</ZKEditForm.Item>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mPayGroup } = this.props;
        let { params } = match;

        // 第一次进来或地址栏改变了 
        if (mPayGroup.pathname != location.pathname) {
            let optEntity = location.state ? location.state.optEntity : undefined;
            if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
                dispatch({ type: 'mPayGroup/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
            } else {
                dispatch({ type: 'mPayGroup/setState', payload: { pathname: location.pathname, optEntity:optEntity } });
                if("_new" != params.pkId){
                    dispatch({ type: 'mPayGroup/getPayGroup', payload: { pkId: params.pkId } });
                }
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mPayGroup, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mPayGroup]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mPayGroup, loading }) => ({ mApp, mPayGroup, loading }))(CInitPayGroupEdit));