/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:54:48
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-17 12:02:22
 */


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitSysNavEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            selIconAttrName: "",
            icon: {

            }
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    // 保存
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mSysNav/editSysNav', 
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

        let { mApp, dispatch, mSysNav, intl, loading, location } = this.props;
        let { optEntity } = mSysNav;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        const f_selectIcon = (value)=>{
            let selIconAttrName = this.state.selIconAttrName;
            let setIcon = {};
            setIcon[selIconAttrName] = value;
            this.formRef.current.setFieldsValue(setIcon);
            this.setState({icon: {...this.state.icon, ...setIcon}, selIconAttrName:""});
        }
        const f_showSelIconModal = (selIconAttrName)=>{
            // form.setFieldsValue({"icon": value});
            this.setState({selIconAttrName: selIconAttrName});
        }

        // let { name = {} } = optEntity;
        // // 初始化名称各国内容为空，如果允许支持语言输入为空时，不需要这样设置，这个处理主要是给个初始值，然后方便统一校验；也可以为各语言传入指定校验
        // for(let index in locales.localLanguage){
        //     if(!name[index]){
        //         name[index] = "";
        //     }
        // }

        // 各语言指定校验
        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }

        let spinning = this.state.loading || loading.effects['mSysNav/editSysNav'] || loading.effects['mSysNav/getSysNav'];
        return (optEntity != null && mSysNav.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKModal
                    visible = {this.state.selIconAttrName != ""}
                    onCancel  = {()=>{this.setState({selIconAttrName: ""})}}
                    title={zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_icon.select')}
                    // footer = {<font color="red">* {zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_icon.select.opt")}</font>}
                    footer = { null }
                    // className=""
                    width={700}
                >
                    <ZKIcon.ZKIconPanel onSelect={f_selectIcon} />
                </ZKModal>
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.name')} rules = {[
                                // zkToolsValidates.notNull(intl), 
                                zkToolsValidates.object(intl, locales.localLanguage, undefined, f_makeObjRuls(ture), true),
                            ]} >
                        <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.code')} 
                        rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "funcModuleCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.funcModuleCode')} 
                        rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "funcName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.funcName')} 
                        rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "path" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.path')} 
                        rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "sort" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.sort')} 
                        rules = {[zkToolsValidates.integer(intl, 0, 999999999, true)]} >
                        <ZKInputNumber precision={0} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "isIndex" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isIndex')} 
                        rules = {[zkToolsValidates.notNull(intl, "integer")]
                        } >
                        <ZKSelect>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "isShow" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isShow')} 
                        rules = {[zkToolsValidates.notNull(intl, "integer")]} >
                        <ZKRadio.Group>
                            <ZKRadio.Button value={1} >{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show')}</ZKRadio.Button>
                            <ZKRadio.Button value={0} >{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}</ZKRadio.Button>
                        </ZKRadio.Group>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "icon" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.icon')} >
                        <ZKInput.Search enterButton addonBefore={ <ZKIcon.Antd4Icon icon={this.state.icon.icon?this.state.icon.icon:(optEntity.icon?optEntity.icon:"")} /> }
                            onSearch={value=>f_showSelIconModal("icon")} />
                    </ZKEditForm.Item>
                </ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysNav } = this.props;
        let { params } = match;

        // 地址栏改变了 
        if (mSysNav.pathname != location.pathname) {
            dispatch({ type: 'mSysNav/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
                dispatch({ type: 'mSysNav/setState', payload: { optEntity: {} } });
            }else{
                dispatch({ type: 'mSysNav/getSysNav', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysNav, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysNav]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysNav, loading }) => ({ mApp, mSysNav, loading }))(CInitSysNavEdit));


