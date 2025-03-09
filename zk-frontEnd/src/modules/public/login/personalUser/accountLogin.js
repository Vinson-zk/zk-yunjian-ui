/*
* @Author: Vinson
* @Date:   2021-07-01 09:16:54
* @Last Modified by: vinson
* @Last Modified time: 2025-02-05 16:14:35
* 
* 
* 
*/

import React from "react";
import { connect } from 'dva';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// import { Form, Input, Button } from "antd";

import frontEndStyles from "../../../frontEnd.styles.less";
import loginStyles from "../styles.less";

import { ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKForm, ZKInput, ZKButton, ZKCheckbox, ZKRow, ZKCol } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates } = zkTools;

class CInitAccountLogin extends React.PureComponent {

	formRef = React.createRef();

	constructor(props){
        super(props);
        this.state={};
        this.onAccountLogin.bind(this);
    }

    onAccountLogin = (values) => {
    	let { dispatch, history } = this.props;
	    // console.log("[^_^:20210629-1717-001] FInitAccountLogin.values: ", values);
	    // dispatch({type:'mApp/login',history,payload:values}).then(()=>{dispatch({type:'mApp/getUaidLicenseInfo'})})
	    dispatch({type:'mPublicApp/accountLogin', loginFlag:1,  params:values, history:history });
	};

	render(){

		let { intl } = this.props;

		return (
		    <ZKForm ref={this.formRef} name="control-ref" onFinish={this.onAccountLogin}>
		    	<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" name = "username"  
							rules = {[ { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.vMsg.username') } ]} >
							<ZKInput className="" 
								prefix = { <UserOutlined className = { frontEndStyles.zk_public_icon_color } /> } 
								placeholder={`${zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.username')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.mail')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.phoneNumber')}`}
							/>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
				<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" name ="pwd"  
							rules = {[ { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.vMsg.password') } ]} >
							<ZKInput.Password style={{ width: '100%' }} 
								prefix = { <LockOutlined className = { frontEndStyles.zk_public_icon_color } /> } 
								placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.password') } 
							/>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
				{/*<ZKRow gutter={24} >
					<ZKCol >
						<ZKForm.Item labelCol = "" wrapperCol = "" name ="rememberAccount" valuePropName="checked" >
							<ZKCheckbox className = { loginStyles.login_item_checkbox } >{ zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.rememberAccount') }</ZKCheckbox>
						</ZKForm.Item>
					</ZKCol>
					<ZKCol >
						<ZKForm.Item labelCol = "" wrapperCol = "" name ="rememberMe" valuePropName="checked">
							<ZKCheckbox className = { loginStyles.login_item_checkbox } >{ zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.rememberMe') }</ZKCheckbox>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>*/}
				<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" className = {loginStyles.login_item_btn} >
							<ZKButton type="primary" htmlType="submit" className = {loginStyles.login_btn} >
								{ zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.loginBtn') }
							</ZKButton>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
			</ZKForm>
	    )
	}
}

export default CInitAccountLogin;





