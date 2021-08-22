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
ZKInput, ZKInputNumber, ZKSelect, ZKRadio, } = ZKOriginalComponents;
const { 
	ZKEditForm, 	
ZKInputJson, ZKIcon, ZKDateFormatPicker, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitCodeGenTestCodeGenTestEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
			selIconAttrName: "",
			icon: {
				valueStrIcon: undefined
			}
        }
    }
	
	// static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    render() {

        let { mApp, dispatch, mCodeGenTestCodeGenTest, intl, loading, location } = this.props;
        let { optEntity } = mCodeGenTestCodeGenTest;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        // 保存
        const f_save = (values, form, callbackFunc) => {
            dispatch({
                type: 'mCodeGenTestCodeGenTest/editCodeGenTestCodeGenTest', 
                payload: values, 
                callback: (errors) => {
                    callbackFunc(errors);
                }
            });
        };
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

        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 80, required);
            }
            return objRule;
        }
        
        let spinning = loading.effects['mCodeGenTestCodeGenTest/editCodeGenTestCodeGenTest'] || loading.effects['mCodeGenTestCodeGenTest/getCodeGenTestCodeGenTest'];
        return (optEntity != null && mCodeGenTestCodeGenTest.pathname == location.pathname) && (
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
                    saveFunc={f_save}
                    resetFunc={form => { return true }}
                >
                	<ZKEditForm.Item name = "valueJson" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueJson')} 
                		rules = {[
							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                        ]} 
					>
                        <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "valueString" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueString')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 128), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "valueDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueDate')} 
                		rules = {[
							zkToolsValidates.notNull(intl, "string"), 
                        ]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD' />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "valueInt" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueInt')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 999999999), 
                        ]} 
					>
                        <ZKInputNumber precision={0} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "valueFloat" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueFloat')} 
                		rules = {[
							zkToolsValidates.number(intl, 0, 9999, true), 
                        ]} 
					>
                        <ZKInputNumber precision={2} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "valueBool" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueBool')} 
                		rules = {[
							zkToolsValidates.boolean(intl, true), 
                        ]} 
					>
                         <ZKRadio.Group>
                            <ZKRadio.Button value={true} >{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKRadio.Button>
                            <ZKRadio.Button value={false} >{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKRadio.Button>
                        </ZKRadio.Group>
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "valueIntSel" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueIntSel')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 999999999, true), 
                        ]} 
					>
                        <ZKSelect>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                        </ZKSelect>
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "valueStrIcon" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueStrIcon')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput.Search enterButton addonBefore={ <ZKIcon.Antd4Icon icon={this.state.icon.valueStrIcon?this.state.icon.valueStrIcon:(optEntity.icon?optEntity.valueStrIcon:"")} /> }
                            onSearch={value=>f_showSelIconModal("valueStrIcon")} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "parentId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.parentId')} 
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
        let { location, match, dispatch, mCodeGenTestCodeGenTest } = this.props;
        let { params } = match;

        // 第一次进来或地址栏改变了 
        if (mCodeGenTestCodeGenTest.pathname != location.pathname) {
            let optEntity = location.state ? location.state.optEntity : undefined;
            if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
                dispatch({ type: 'mCodeGenTestCodeGenTest/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
            } else {
                dispatch({ type: 'mCodeGenTestCodeGenTest/setState', payload: { pathname: location.pathname, optEntity:optEntity } });
                if("_new" != params.pkId){
                    dispatch({ type: 'mCodeGenTestCodeGenTest/getCodeGenTestCodeGenTest', payload: { pkId: params.pkId } });
                }
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mCodeGenTestCodeGenTest, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mCodeGenTestCodeGenTest]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mCodeGenTestCodeGenTest, loading }) => ({ mApp, mCodeGenTestCodeGenTest, loading }))(CInitCodeGenTestCodeGenTestEdit));