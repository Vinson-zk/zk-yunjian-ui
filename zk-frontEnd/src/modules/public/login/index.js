/*
* @Author: Vinson
* @Date:   2021-06-24 23:10:32
* @Last Modified by:   Vinson
* @Last Modified time: 2021-07-02 10:03:25
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
        };
        this.onChangeUserType.bind(this);
    }

    // 登录用户类型切换函数
    onChangeUserType = (value) => {
	    this.setState({userType: value});
	};

	render(){

		let { loading } = this.props;

		const f_getLoginNode = userType=>{

			if(userType == 1){
				return <CPersonalUserLogin { ...this.props } className = {styles.login_panel_block} onChangeUserType={this.onChangeUserType} locales = {locales} />
			}else if(userType == 2){
				return  <CEnterpriseUserLogin { ...this.props } className = {styles.login_panel_block} onChangeUserType={this.onChangeUserType} locales = {locales} />
			}
			return <CPersonalUserLogin { ...this.props } className="" onChangeUserType={this.onChangeUserType} locales = {locales} />;;
		}

		let spinning = loading.effects['mApp/accountLogin'] || loading.effects['mApp/phoneNumberLogin'];
		return (
			<ZKSpin spinning={ spinning === true } >
				{ f_getLoginNode(this.state.userType) }
			</ZKSpin>
		)
	}
}

export default connect(({ mApp, loading }) => ({ mApp, loading }))(CInitLoginPanel);



