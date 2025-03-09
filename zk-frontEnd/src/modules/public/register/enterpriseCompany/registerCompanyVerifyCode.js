/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-31 14:11:38
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:50
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { Space, Button } from 'antd';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKInput, ZKButton, ZKAlert } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import frontEndStyles from '../../../frontEnd.styles.less';

class CInitRegisterCompanyVerifyCode extends Component {

    // formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {}
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
    f_submitCompanyVerifyCode = (values)=>{
        
        let { intl, history, match } = this.props; 

        let _this = this;
		// 执行
		let f_executeVerifyCode = (values) => {
            _this.props.dispatch({
                type: 'mPublicApp/rcSendVerifyCodeAgain', 
	            params: values,
                callbackOk: ()=>{
                    let toPath = match.path;
                    toPath = toPath.replace(":rcStep", match.params.rcStep*1 + 1)
                    history.push(toPath);
                },
                callbackErr: (errors) => {
                    if(errors){
                        this.formRef.current.setFields(errors);
                        this.formRef.current.scrollToField(errors[0].name);
                    }
                },
            });
		};
		zkToolsMsg.alertModalMsg(intl, null, {
			'type': "confirm",
			'msg': zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.confirm.base.info'),
			'onOk': ()=>{ f_executeVerifyCode(values); }, 
			'onCancel': ()=>{}
		});
    }

    /** 回到上一步 **/
    f_preStep = ()=>{
    	let { dispatch, history, match } = this.props; 
        let toPath = match.path;
        history.push(toPath.replace(":rcStep", match.params.rcStep*1 - 1));
    }

    /** 再次发送邮箱验证码 **/
    f_sendMailCodeAgain = ()=>{
        let { dispatch } = this.props; 
    	dispatch({type: 'mPublicApp/rcSendVerifyCodeAgain', againFlag: 1, callBack: ()=>{} });
    }
    /** 再次发送手机验证码 **/
    f_sendPhoneCodeAgain = ()=>{
        let { dispatch } = this.props; 
        dispatch({type: 'mPublicApp/rcSendVerifyCodeAgain', againFlag: 2, callBack: ()=>{} });
    }

    /** 返回 JSX 元素 */
    render() {

        let { location, mPublicApp, dispatch, intl, loading } = this.props; 

        let { rcOptEntity } = mPublicApp; 
        this.f_assertToRouter(rcOptEntity);

        let { rcMailCodeWaitTime, rcPhoneCodeWaitTime } = mPublicApp; 
        // console.log("[^_^:20250121-1007-001] mPublicApp.rcOptEntity: ", rcOptEntity);
        let spinning = rcOptEntity === undefined || loading.effects['mPublicApp/registerCompanyVerifyCode'];
        
        return (
            <ZKSpin spinning={spinning === true} >
                <ZKForm initialValues = {rcOptEntity} onFinish = {this.f_submitCompanyVerifyCode} >
                	<ZKForm.Item wrapperCol={{ span: 15, offset: 6}}> 
            			<ZKAlert style = {{margin: '0 auto'}} type="warning" showIcon 
            				message={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.alert')} />
                	</ZKForm.Item>
                	<ZKForm.Item name = "mail" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.mail')}>
                        <ZKInput disabled = {true} />
                	</ZKForm.Item>
                	<ZKForm.Item name = "mailVerifyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.mail')}
                		rules = {[ 
							zkToolsValidates.string(intl, 1, 6, true)
						]} 
                	>
                        <Space.Compact style={{width: '100%', }}>
                        	<ZKInput placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.mail') } /><ZKButton onClick={this.f_sendMailCodeAgain} className="" disabled = {rcMailCodeWaitTime > 0} type="primary">
                        			{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode.again')}{rcMailCodeWaitTime>0?`(${rcMailCodeWaitTime})`:""}
                        		</ZKButton>
                        </Space.Compact>
                	</ZKForm.Item>
                	<ZKForm.Item name = "phoneNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.phoneNum')}>
                        <ZKInput disabled = {true} />
                	</ZKForm.Item>
                	<ZKForm.Item name = "phoneVerifyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.phone')}
                		rules = {[ 
                			zkToolsValidates.string(intl, 1, 6, true)
						]}
                	>
                		<Space.Compact style={{width: '100%', }}>
                        	<ZKInput placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.phone') } /><ZKButton onClick={this.f_sendPhoneCodeAgain} className="" disabled = {rcPhoneCodeWaitTime > 0} type="primary">
                        			{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode.again')}{rcPhoneCodeWaitTime>0?`(${rcPhoneCodeWaitTime})`:""}
                        		</ZKButton>
                        </Space.Compact>
                	</ZKForm.Item>
                	<ZKForm.Item name ="pwd" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password')}
						rules = {[ 
							{ required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.set.password') } 
						]} 
					>
						<ZKInput.Password style={{ width: 280 }} 
                            prefix = { <LockOutlined className = { frontEndStyles.zk_public_icon_color } /> }
							placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password') } 
						/>
					</ZKForm.Item>
					<ZKForm.Item 
						name ="pwdAgain" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password.again')}
						dependencies={['pwd']}
						rules = {[ 
							{ required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.set.password.again') },
							({ getFieldValue }) => ({
							    validator(_, value) {
							        if (!value || getFieldValue('pwd') === value) {
							            return Promise.resolve();
							        }
							        return Promise.reject(new Error(zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.confirm.pwd.input')));
							    },
							}),
						]} 
					>
						<ZKInput.Password style={{ width: 280 }} 
                            prefix = { <LockOutlined className = { frontEndStyles.zk_public_icon_color } /> }
							placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password.again') } 
						/>
					</ZKForm.Item>
                    <ZKForm.Item wrapperCol={{ span: 24, offset: 9}} >
                    	<ZKButton type="primary" onClick={this.f_preStep} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_pre_step')}</ZKButton>
                    	&nbsp;&nbsp;&nbsp;&nbsp;
                        <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_submit')}</ZKButton>
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
    	// 清除读秒器
        // this.props.dispatch({type: 'mPublicApp/rcCloseReaderSecondCode'});
    }

}

// export default injectIntl(connect(({ mApp, mPublicApp, loading }) => ({ mApp, mPublicApp, loading }))(CInitRegisterCompanyVerifyCode));
export default CInitRegisterCompanyVerifyCode;






