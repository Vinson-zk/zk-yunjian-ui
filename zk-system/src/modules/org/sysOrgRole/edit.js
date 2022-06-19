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

import { zkTools, ZKCustomComponents, ZKOriginalComponents, ZKBusinessComponents } from "zkFramework";        
const { ZKSpin, ZKModal, ZKInput, ZKSelect, ZKDivider, ZKRow, ZKCol} = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, } = ZKCustomComponents;
const { ZKDeptSelect } = ZKBusinessComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import locales from "../../../locales/index";
import orgStyles from "../org.styles.less";

class CInitSysOrgRoleEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            type: undefined
        }
    };

    // 2、调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
    static getDerivedStateFromProps(props, state) {
         let { mSysOrgRole } = props;
        let { optEntity } = mSysOrgRole;
        if(optEntity && optEntity.type != undefined && state.type == undefined){
            state.type = optEntity.type;
        }
        return true;
    }
	
	/** 保存 */
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mSysOrgRole/editSysOrgRole', 
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.setState({loading: true});
                }
                callbackFunc(errors);
            }
        });
    };

    // 角色类型改变
    f_selectTypeChange = e=>{
        // console.log("[^_^:20220428-1705-001] ", e);
        this.setState({type: e});
    };

    /** 返回 JSX 元素 */
    render() {

        let { location, mApp, dispatch, mSysOrgRole, intl, loading } = this.props;
        let { optEntity } = mSysOrgRole;
        let { user } = mApp;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
            }
            return objRule;
        }
        // console.log("[^_^:20220428-1705-001] ", this.state);
        
        let spinning = this.state.loading || loading.effects['mSysOrgRole/editSysOrgRole'] || loading.effects['mSysOrgRole/getSysOrgRole'];
        return (optEntity != null && mSysOrgRole.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKEditForm.Item name = "user.company.groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRank.groupCode')} initialValue={user.company.groupCode} >
                        <ZKInput disabled = {true} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "user.company.code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRank.companyCode')} initialValue={user.company.code} >
                        <ZKInput disabled = {true} />
                    </ZKEditForm.Item>
                    <ZKDivider className = {orgStyles.org_divider} />
                	<ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.code')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                    <ZKEditForm.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status')} 
                        rules = {[
                            zkToolsValidates.integer(intl, 0, 9, true), 
                        ]} 
                    >
                        <ZKSelect>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status.0')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status.1')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                	<ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.name')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "type" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 9, true), 
                        ]} 
					>
                        <ZKSelect disabled = {optEntity.pkId?true:false} onChange={this.f_selectTypeChange} >
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type.0')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type.1')}</ZKSelect.Option>
                        </ZKSelect>
                	</ZKEditForm.Item>
                	{this.state.type == 1? 
                        <ZKEditForm.Item name = "deptId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.deptId')} 
                            rules = {[
                                zkToolsValidates.string(intl, 0, 64, true), 
                            ]} 
                        >
                            <ZKDeptSelect valueKey="pkId" disabled = {optEntity.pkId?true:false} />
                        </ZKEditForm.Item>:<div></div>
                    }
                	<ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "shortDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.shortDesc')} 
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
        let { location, match, dispatch, mSysOrgRole } = this.props;
        let { params } = match;
        if (mSysOrgRole.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了
            dispatch({ type: 'mSysOrgRole/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
            	dispatch({ type: 'mSysOrgRole/setState', payload: { optEntity: {} } });
            }else{
            	dispatch({ type: 'mSysOrgRole/getSysOrgRole', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysOrgRole, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysOrgRole]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysOrgRole, loading }) => ({ mApp, mSysOrgRole, loading }))(CInitSysOrgRoleEdit));