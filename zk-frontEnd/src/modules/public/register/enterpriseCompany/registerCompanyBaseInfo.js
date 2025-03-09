/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-31 14:11:10
* @Last Modified by: vinson
* @Last Modified time: 2025-01-25 22:55:19
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../../../locales/index";
import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect, ZKButton } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, } = ZKCustomComponents;
const { ZKDictSelect } = ZKBusinessComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitRegisterCompanyBaseInfo extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            
        }
        // console.log("[^_^:20240802-0101-001] CInitRegisterCompanyBaseInfo.constructor: ", props)
    };

    // 断言路由跳转
    f_assertToRouter = (rcOptEntity={})=>{
        if(!zkJsUtils.isEmpty(rcOptEntity, true)){
            let { history } = this.props;
            if(rcOptEntity.status){
                if(rcOptEntity.status == 3 || rcOptEntity.status == 2){
                    history.push("/_company_audit");
                }else if(rcOptEntity.status == 4){
                    history.push("/_register_company/2");
                }else{
                    history.push("/");
                }
            }
        }
    }
	
	/** 提交公司基础信息 */
    f_submitCompanyBaseInfo = (values)=>{
        let { mPublicApp, dispatch, history, match } = this.props; 
        let { rcOptEntity={} } = mPublicApp; 
        let saveData = { ...rcOptEntity, ...values };

        dispatch({
            type: 'mPublicApp/rcSubmitBaceInfo', 
            rcOptEntity: saveData, 
            callbackOk: ()=>{
                let toPath = match.path;
                toPath = toPath.replace(":rcStep", match.params.rcStep*1 + 1)
                // console.log("[^_^:20250120-2002-001] toPath: ", toPath);
                history.push(toPath);
            },
            callbackErr: (errors) => {
                console.log("[^_^:20250120-2002-002] errors: ", errors);
                if(errors){
                    this.formRef.current.setFields(errors);
                    this.formRef.current.scrollToField(errors[0].name);
                }
            },
        });
    }

    /** 返回 JSX 元素 */
    render() {

        let { mPublicApp, dispatch, history, intl, loading, location, match } = this.props; 
        
        let { rcOptEntity={} } = mPublicApp; 
        this.f_assertToRouter(rcOptEntity);

        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 128, required);
            }
            return objRule;
        }
        
        let spinning = loading.effects['mPublicApp/rcSubmitBaceInfo'];
        
        return (
            <ZKSpin spinning={spinning === true} >
                <ZKForm ref = { this.formRef } initialValues = {rcOptEntity} onFinish = {this.f_submitCompanyBaseInfo} >
                	<ZKForm.Item name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.groupCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                            zkToolsValidates.code(intl)
                        ]} 
					>
                        <ZKInput disabled = {rcOptEntity.pkId?true:false} />
                	</ZKForm.Item>
                	<ZKForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.code')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                            zkToolsValidates.code(intl)
                        ]} 
					>
                        <ZKInput disabled = {rcOptEntity.pkId?true:false} />
                	</ZKForm.Item>
                	<ZKForm.Item name = "phoneNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.phoneNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                            zkToolsValidates.phone(intl)
                        ]} 
					>
                        <ZKInput disabled = {rcOptEntity.pkId?true:false} />
                	</ZKForm.Item>
                	<ZKForm.Item name = "mail" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.mail')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                            zkToolsValidates.email(intl)
                        ]} 
					>
                        <ZKInput disabled = {rcOptEntity.pkId?true:false} />
                	</ZKForm.Item>
                	<ZKForm.Item name = "faxNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.faxNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKForm.Item>
                	<ZKForm.Item name = "telNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.telNum')} 
                		rules = {[
                            zkToolsValidates.string(intl, 0, 64)
                        ]} 
					>
                        <ZKInput />
                	</ZKForm.Item>
                    <ZKForm.Item name = "address" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.address')} 
                        rules = {[
                            zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                        ]} 
                    >
                        <ZKInputJson style={{'width':'400px'}} styleType="compact" primaryAttr={intl.locale} attrs={locales} />
                    </ZKForm.Item>
                    <ZKForm.Item wrapperCol={{ span: 24, offset: 9}} >
                        <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_next_step')}</ZKButton>
                    </ZKForm.Item>
            	</ZKForm>
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

    }

}

// export default injectIntl(connect(({ mApp, mPublicApp, loading }) => ({ mApp, mPublicApp, loading }))(CInitRegisterCompanyBaseInfo));
export default CInitRegisterCompanyBaseInfo;





