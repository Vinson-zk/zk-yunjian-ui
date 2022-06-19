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

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKModal, ZKInput, ZKSelect, ZKDivider, ZKRow, ZKCol } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, } = ZKCustomComponents;
const { ZKDeptSelect, ZKDictSelect, ZKUserTypeSelect, ZKRankSelect } = ZKBusinessComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import locales from "../../../locales/index";
import orgStyles from "../org.styles.less";

class CInitSysOrgUserEdit extends Component {

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
        if(values.deptId == ''){
            delete values['deptId'];
        }
        if(values.rankId == ''){
            delete values['rankId'];
        }
        if(values.userTypeId == ''){
            delete values['userTypeId'];
        }

        this.props.dispatch({
            type: 'mSysOrgUser/editSysOrgUser', 
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

        let { location, mApp, dispatch, mSysOrgUser, intl, loading } = this.props;
        let { optEntity } = mSysOrgUser;
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
        
        let spinning = this.state.loading || loading.effects['mSysOrgUser/editSysOrgUser'] || loading.effects['mSysOrgUser/getSysOrgUser'];
        return (optEntity != null && mSysOrgUser.pathname == location.pathname) && (
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
                    <ZKEditForm.Item name = "account" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.account')} 
                        rules = {[
                            zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
                    >
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "jobNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.jobNum')} 
                        rules = {[
                            zkToolsValidates.string(intl, 0, 64), 
                        ]} 
                    >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status')} 
                        rules = {[
                            zkToolsValidates.integer(intl, 0, 999999999, true), 
                        ]} 
                    >
                        <ZKSelect>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status.0')}</ZKSelect.Option>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status.1')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "deptId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.deptId')} 
                        rules = {[
                            zkToolsValidates.string(intl, 0, 64), 
                        ]} 
                    >
                        <ZKDeptSelect valueKey="pkId" />
                    </ZKEditForm.Item>
                	<ZKEditForm.Item name = "userTypeId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.userTypeId')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKUserTypeSelect />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "rankId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.rankId')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKRankSelect />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "familyName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.familyName')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "secondName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.secondName')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "nickname" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.nickname')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "birthday" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.birthday')} 
                		rules = {[
                        ]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD'/>
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "sex" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sex')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKDictSelect typeCode="sex" />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "telNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.telNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "phoneNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.phoneNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "mail" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.mail')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                    <ZKRow>
                        <ZKCol span={8} offset={2} >
                        	<ZKEditForm.Item name = "headPhoto" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.headPhoto')} 
                        		rules = {[
        							zkToolsValidates.string(intl, 0, 512), 
                                ]} 
        					>
                                <ZKInput />
                        	</ZKEditForm.Item>
                        </ZKCol>
                        <ZKCol span={8} offset={2} >
                        	<ZKEditForm.Item name = "headPhotoOriginal" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.headPhotoOriginal')} 
                        		rules = {[
        							zkToolsValidates.string(intl, 0, 512), 
                                ]} 
        					>
                                <ZKInput />
                        	</ZKEditForm.Item>
                        </ZKCol>
                    </ZKRow>
                	<ZKEditForm.Item name = "qq" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.qq')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "wechat" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.wechat')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "address" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.address')} 
                            rules = {[
                                zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
                        >
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                        </ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "sourceCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sourceCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 11), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "sourceId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sourceId')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 11), 
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
        let { location, match, dispatch, mSysOrgUser } = this.props;
        let { params } = match;
        if (mSysOrgUser.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了
            dispatch({ type: 'mSysOrgUser/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
            	dispatch({ type: 'mSysOrgUser/setState', payload: { optEntity: {} } });
            }else{
            	dispatch({ type: 'mSysOrgUser/getSysOrgUser', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysOrgUser, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysOrgUser]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysOrgUser, loading }) => ({ mApp, mSysOrgUser, loading }))(CInitSysOrgUserEdit));