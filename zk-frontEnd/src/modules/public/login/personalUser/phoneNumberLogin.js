/*
* @Author: Vinson
* @Date:   2021-07-01 09:19:07
* @Last Modified by:   Vinson
* @Last Modified time: 2021-07-02 00:01:23
* 
* 
* 
*/


import React from "react";
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { MobileOutlined, LockOutlined } from '@ant-design/icons';

// import { Form, Input, Button } from "antd";

import loginStyles from "../styles.less";

import { ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKForm, ZKInput, ZKButton, ZKRow, ZKCol, ZKCheckbox } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates } = zkTools;

class CInitPhoneNumberLoginLogin extends React.PureComponent {

	formRef = React.createRef();

	constructor(props){
        super(props);
        this.state={};
        this.onPhoneNumberLogin.bind(this);
    }

	onPhoneNumberLogin = (values) => {
		let { dispatch } = this.props;
	    // console.log("[^_^:20210629-1717-001] onPhoneNumberLogin.values: ", values);
	    dispatch({type:'mApp/phoneNumberLogin', params:values});
	};

	onGetValidCode = ()=>{

	    console.log("[^_^:20210701-1031-001] onGetValidCode 取手机验证码 ");
	}

	render(){

		let { intl } = this.props;

		return (
		    <ZKForm ref={this.formRef} name="control-ref" onFinish={this.onPhoneNumberLogin}>
		    	<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" name = "phoneNumber"  
							rules = {[ { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.vMsg.phoneNumber') } ]} >
							<ZKInput className="" 
								prefix = { <MobileOutlined className = { loginStyles.login_item_icon } /> } 
								placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.phoneNumber')} 
							/>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
				<ZKRow gutter={24} >
					<ZKCol span = {24}>
						<ZKForm.Item labelCol = "" wrapperCol = "" name ="validCode"  
							rules = {[ { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.vMsg.validCode') } ]} >
							<ZKInput style={{ width: '100%' }} 
								prefix = { <LockOutlined className = { loginStyles.login_item_icon } /> } 
								addonAfter = {<span onClick={this.onGetValidCode} className = {loginStyles.login_span_btn} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.validCode')}</span>}
								placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.validCode') } />
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
				<ZKRow gutter={24} >
					<ZKCol >
						<ZKForm.Item labelCol = "" wrapperCol = "" name ="rememberAccount" valuePropName="checked" >
							<ZKCheckbox className = { loginStyles.login_item_checkbox } >{ zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.rememberAccount') }</ZKCheckbox>
						</ZKForm.Item>
					</ZKCol>
				</ZKRow>
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


export default injectIntl(CInitPhoneNumberLoginLogin);




