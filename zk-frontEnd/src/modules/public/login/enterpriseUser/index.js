/*
* @Author: Vinson
* @Date:   2021-07-01 16:19:27
* @Last Modified by: runoob
* @Last Modified time: 2024-07-09 11:37:41
* 
* 
* 
*/

import React from "react";
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { UserOutlined, GlobalOutlined, MobileFilled } from '@ant-design/icons';

// import { Form, Input, Button } from "antd";

import zkStyles from 'zkFramework/style/zk.styles.less'
import loginStyles from "../styles.less";

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKRow, ZKCol, ZKDivider, ZKTabs } = ZKOriginalComponents;
const { ZKRouter, ZKLanguageDropdown, ZKTheme } = ZKCustomComponents;
const { Link } = ZKRouter;
const { zkToolsMsg, zkToolsValidates, zkToolsUtils } = zkTools;


import CAccountLogin from './accountLogin.js';

const FInitEnterpriseLoginForm = ({locales, intl, match, dispatch, mApp, onChangeUserType, className})=>{

    const { lang } = mApp;

	let languageProps = { locales, lang,
        changeFunc(lang) {
            dispatch({ type: 'mApp/changeLanguage', payload: { lang: lang } });
        }
    };

    let items = [
    	{
    		key: 'account',
    		label: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.type.account'),
    		children: <CAccountLogin dispatch = {dispatch} />
    	}
    ]

    // let classLang = lang.replaceAll("-", "_");  ${styles.login_panel}_${classLang}
	return (
	    <div className = {`${loginStyles.login_panel} ${className}`} >
    		<ZKTabs type="card" tabBarGutter = {2} className = {loginStyles.login_tabs} items = {items}
    			tabBarExtraContent = {
					<span className = {`${loginStyles.login_span_btn} ${loginStyles.login_span_btn_userType}`} onClick = {()=>{onChangeUserType(1)}}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.user.type.personalUser')}</span>
    			} 
    		/>
            <ZKRow gutter={24} >
                <ZKCol span = {24} className = {loginStyles.login_no_account_register} >
                    &nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.register.guide')}<Link to={`_register_company`}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.register')}</Link>
                </ZKCol>
            </ZKRow>
			<ZKRow gutter={24} >
				<ZKDivider className = {loginStyles.login_divider} />
				<ZKCol span = {12}>
                    <Link to={`_forgot_password`}>[{ zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.forgotPassword') }]</Link>
                </ZKCol>
				<ZKCol span = {12} className = { `${zkStyles.zk_f_div_vertical_middle}` }>
					<ZKTheme themeFlag={mApp.themeFlag} setThemeFunc={key=>{
                        zkToolsUtils.setTheme(key);
                        dispatch({ type: 'mApp/setState', payload: { themeFlag: key }});
                    }} />&nbsp;&nbsp;
					<ZKLanguageDropdown className = {loginStyles.login_languageDropdown} {...languageProps} />
				</ZKCol>
			</ZKRow>
	    </div>
    )
}

export default injectIntl(FInitEnterpriseLoginForm);

