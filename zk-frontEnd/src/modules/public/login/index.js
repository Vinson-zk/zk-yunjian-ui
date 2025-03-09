/*
* @Author: Vinson
* @Date:   2021-06-24 23:10:32
* @Last Modified by: vinson
* @Last Modified time: 2025-01-25 14:16:01
* 
* 
* 
*/

import React from "react";
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { UserOutlined, GlobalOutlined, MobileFilled } from '@ant-design/icons';

// import { Form, Input, Button } from "antd";


import { ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKSpin } = ZKOriginalComponents;

import locales from "../../../locales/index.js";
import styles from "./styles.less";
import CPersonalUserLogin from './personalUser/index.js';
import CEnterpriseUserLogin from './enterpriseUser/index.js';

class CInitLoginPanel extends React.PureComponent {

	constructor(props){
        super(props);
        this.state={
        	userType: 0, // 登录的用户类型；0-初始；1-个人用户；2-企业用户；
        	defaultLoginType: props.match.params.defaultLoginType, // 指定默认的登录用户类型： enterprise-企业用户登录；personal 其他-个人用户登录；
        };
        this.onChangeUserType.bind(this);
        localStorage.setItem(globalAppConfig.localKey.defaultLoginType, this.state.defaultLoginType);
    }

    // 登录用户类型切换函数
    onChangeUserType = (value) => {
	    this.setState({userType: value});
	};

	render(){

		let { loading } = this.props;
		// console.log("[^_^:20250121-0926-001] this.props: ", this.props);

		const f_getLoginNode = (userType, defaultLoginType)=>{

			if(userType == 1){
				return <CPersonalUserLogin { ...this.props } className = {styles.login_panel_block} onChangeUserType={this.onChangeUserType} locales = {locales} />
			}else if(userType == 2){
				return  <CEnterpriseUserLogin { ...this.props } className = {styles.login_panel_block} onChangeUserType={this.onChangeUserType} locales = {locales} />
			}

			if(defaultLoginType === 'enterprise'){
				return <CEnterpriseUserLogin { ...this.props } onChangeUserType={this.onChangeUserType} locales = {locales} />;
			}else{
				return <CPersonalUserLogin { ...this.props } onChangeUserType={this.onChangeUserType} locales = {locales} />;
			}
			
		}

		let spinning = loading.effects['mPublicApp/accountLogin'] || loading.effects['mPublicApp/phoneNumberLogin'] || loading.effects['mApp/loginUserInfo'];
		return (
			<ZKSpin spinning={ spinning === true } >
				{ f_getLoginNode(this.state.userType, this.state.defaultLoginType) }
			</ZKSpin>
		)
	}
}

export default injectIntl(connect(({ mApp, loading }) => ({ mApp, loading }))(CInitLoginPanel));



