/*
* @Author: Vinson
* @Date:   2021-07-01 16:19:27
* @Last Modified by:   Vinson
* @Last Modified time: 2021-07-02 10:31:13
* 
* 
* 
*/

import React from "react";
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { UserOutlined, GlobalOutlined, MobileFilled } from '@ant-design/icons';

// import { Form, Input, Button } from "antd";

import loginStyles from "../styles.less";

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKRow, ZKCol, ZKDivider, ZKTabs } = ZKOriginalComponents;
const { ZKRouter, ZKLanguageDropdown } = ZKCustomComponents;
const { Link } = ZKRouter;
const { zkToolsMsg, zkToolsValidates } = zkTools;

// import CAccountLogin from './accountLogin.js';
// import CPhoneNumberLogin from './phoneNumberLogin.js';

const FInitEnterpriseLoginForm = ({locales, intl, match, dispatch, mApp, onChangeUserType, className})=>{

    const { lang } = mApp;

	let languageProps = { locales, lang,
        changeFunc(lang) {
            dispatch({ type: 'mApp/changeLanguage', payload: { lang: lang } });
        }
    };

    // let classLang = lang.replaceAll("-", "_");  ${styles.login_panel}_${classLang}
	return (
	    <div className = {`${loginStyles.login_panel} ${className}`} >
    		<ZKTabs type="card" tabBarGutter = {2} className = {loginStyles.login_tabs} tabBarExtraContent = {
				<span className = {`${loginStyles.login_span_btn} ${loginStyles.login_span_btn_userType}`} onClick = {()=>{onChangeUserType(1)}}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.user.type.personalUser')}</span>
    		} >
	    		<ZKTabs.TabPane tab = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.type.account')} key="account">
	    			<div>fghjk</div>
			    </ZKTabs.TabPane>
			</ZKTabs>
			<ZKRow gutter={24} >
				<ZKDivider className = {loginStyles.login_divider} />
				<ZKCol span = {12}></ZKCol>
				<ZKCol span = {12} className = { `${loginStyles.login_row_col_right}` }>
					<ZKLanguageDropdown className = {loginStyles.login_languageDropdown} {...languageProps} />
				</ZKCol>
			</ZKRow>
	    </div>
    )
}

export default injectIntl(FInitEnterpriseLoginForm);

