/*
* @Author: Vinson
* @Date:   2022-04-21 14:34:54
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-26 09:31:44
* 
* 
* 
*/


import React from "react";
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// import { Form, Input, Button } from "antd";

import loginStyles from "../styles.less";

import { ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKForm, ZKInput, ZKButton, ZKCheckbox, ZKRow, ZKCol } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates } = zkTools;

class CInitAccountLogin extends React.PureComponent {

	formRef = React.createRef();

	constructor(props){
        super(props);
        this.state={
        	defaultUser: {
        		companyCode:'yunjian',
        		username:'admin',
        		pwd:'admin',
        	}
        };
        this.onAccountLogin.bind(this);
    };

    onAccountLogin = (values) => {
    	let { dispatch } = this.props;
	    // console.log("[^_^:20210629-1717-001] FInitAccountLogin.values: ", values);
	    // dispatch({type:'mApp/login',history,payload:values}).then(()=>{dispatch({type:'mApp/getUaidLicenseInfo'})})
	    dispatch({type:'mApp/accountLogin', loginFlag:2, params:values});
	};

	render(){

		let { intl } = this.props;

		return (
		    <ZKForm ref={this.formRef} name="control-ref" onFinish={this.onAccountLogin}
		    	initialValues = {this.state.defaultUser}
		    >
				<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" name = "companyCode"  
							rules = {[ { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.vMsg.companyCode') } ]} >
							<ZKInput className="" 
								prefix = { <UserOutlined className = { loginStyles.login_item_icon } /> } 
								placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.companyCode')}
							/>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
		    	<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" name = "username"  
							rules = {[ { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.vMsg.username') } ]} >
							<ZKInput className="" 
								prefix = { <UserOutlined className = { loginStyles.login_item_icon } /> } 
								placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.username')}
							/>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
				<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" name ="pwd"  
							rules = {[ { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.vMsg.password') } ]} >
							<ZKInput.Password style={{ width: '100%' }} 
								prefix = { <LockOutlined className = { loginStyles.login_item_icon } /> } 
								placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.password') } 
							/>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
			{/*
				<ZKRow gutter={24} >
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
				</ZKRow>
			*/}
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

export default injectIntl(CInitAccountLogin);



