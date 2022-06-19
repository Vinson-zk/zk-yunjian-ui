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
const { ZKSpin, ZKModal, ZKInput, ZKSelect, ZKRow, ZKCol, ZKDivider} = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkOrgStyles from '../org.styles.less';

class CInitSysOrgDeptEdit extends Component {

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
        let { dispatch, mSysOrgDeptAdmin } = this.props;
        this.props.dispatch({
            type: 'mSysOrgDeptAdmin/editSysOrgDept', 
            companyId: mSysOrgDeptAdmin.targetCompany.pkId,
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.setState({loading: true});
                }
                callbackFunc(errors);
            }
        });
    }

    /** 返回 JSX 元素 */
    render() {

        let { location, mApp, dispatch, mSysOrgDeptAdmin, intl, loading } = this.props;
        let { optEntity, targetCompany={} } = mSysOrgDeptAdmin;
        
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
        	 || loading.effects['mSysOrgDeptAdmin/editSysOrgDept'] || loading.effects['mSysOrgDeptAdmin/getSysOrgDept'];
        
        return (optEntity != undefined && mSysOrgDeptAdmin.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKEditForm.Item name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.groupCode')}>
                        {targetCompany.groupCode}
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.companyCode')} >
                        {targetCompany.code}
                    </ZKEditForm.Item>

                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.companyName')} >
                            { targetCompany.name?zkToolsMsg.getInternationInfo(targetCompany.name):"" }
                        </ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKDivider className = {zkOrgStyles.org_divider} />
                    <ZKEditForm.Item label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.parentName')}  >
                        { optEntity.parent?(optEntity.parent.name?zkToolsMsg.getInternationInfo(optEntity.parent.name):optEntity.parent.pkId):zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept._top') }
                    </ZKEditForm.Item>                  	             	
                	<ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.code')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
            			<ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.name')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>  
                	<ZKEditForm.Item name = "faxNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.faxNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "telNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.telNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "phoneNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.phoneNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "mail" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.mail')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status')} 
                		rules = {[
							zkToolsValidates.integer(intl, 0, 999999999, true), 
                        ]} 
					>
                        <ZKSelect>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status.0')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status.1')}</ZKSelect.Option>
                        </ZKSelect>
                	</ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "address" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.address')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>

                    </ZKCol></ZKRow>
                	<ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "shortDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.shortDesc')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "sourceCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.sourceCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
            			<ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "sourceId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.sourceId')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
            			<ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysOrgDeptAdmin } = this.props;
        let { params } = match;
        if (mSysOrgDeptAdmin.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了 
            dispatch({ type: 'mSysOrgDeptAdmin/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
                if("_top" == params.parentId){
                    // 新增根结点；不需要查父节点信息；
                    // dispatch({ type: 'mSysOrgDeptAdmin/setState', payload: { optEntity:{} } });
                    // 查询操作的目标公司
                    dispatch({ type: 'mSysOrgDeptAdmin/getSysOrgDept', payload: { companyId: params.companyId }, flag:2 });
                }else{
                	// 新增子节点；需要查父节点信息；不管父节点存不存在，都从后台查询
                    dispatch({ type: 'mSysOrgDeptAdmin/getSysOrgDept', payload: { pkId: params.parentId }, flag:1 });
                }
            }else{
                // 编辑；则根据 id 取后台数据；
                dispatch({ type: 'mSysOrgDeptAdmin/getSysOrgDept', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysOrgDeptAdmin, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysOrgDeptAdmin]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysOrgDeptAdmin, loading }) => ({ mApp, mSysOrgDeptAdmin, loading }))(CInitSysOrgDeptEdit));


