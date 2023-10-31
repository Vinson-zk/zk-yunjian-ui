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
// ZKOriginalComponents
const { ZKSpin, ZKModal,ZKSelect,} = ZKOriginalComponents;
// ZKCustomComponents
const { ZKEditForm, ZKInputJson,} = ZKCustomComponents;
// zkTools
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;  

class CInitFileDirectoryEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
        }
    };
	
	/** 保存 */
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mFileDirectory/editFileDirectory', 
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

        let { location, mApp, dispatch, mFileDirectory, intl, loading } = this.props;
        let { optEntity } = mFileDirectory;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 80, required);
            }
            return objRule;
        }
        
        let spinning = !optEntity || this.state.loading
        	 || loading.effects['mFileDirectory/editFileDirectory'] || loading.effects['mFileDirectory/getFileDirectory'];
        
        return (optEntity != undefined && mFileDirectory.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                	<ZKEditForm.Item label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.parentName')}  >
                        { optEntity.parent?(optEntity.parent.name?zkToolsMsg.getInternationInfo(optEntity.parent.name):optEntity.parent.pkId):zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir._top') }
                    </ZKEditForm.Item>
                	<ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.name')} 
                		rules = {[
							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                        ]} 
					>
                        <ZKInputJson placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.name.placeholder')}
                        	styleType="compact" primaryAttr={lang} attrs={locales} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "stauts" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.stauts')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 999999999, true), 
                        ]} 
					>
                        <ZKSelect placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.file.dir.stauts.placeholder')} >
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                        </ZKSelect>
                	</ZKEditForm.Item>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mFileDirectory, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mFileDirectory]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mFileDirectory, loading }) => ({ mApp, mFileDirectory, loading }))(CInitFileDirectoryEdit));



