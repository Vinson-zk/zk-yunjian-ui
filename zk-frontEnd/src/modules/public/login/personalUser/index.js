/*
* @Author: Vinson
* @Date:   2021-07-01 15:57:02
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-21 14:23:14
* 
* 
* 
*/

import React from "react";
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { UserOutlined, GlobalOutlined, MobileFilled, QqOutlined, WechatOutlined, AlipayCircleOutlined, GithubOutlined, ZhihuOutlined, 
	AmazonOutlined, GoogleOutlined, TwitterOutlined, DingdingOutlined, WeiboOutlined, TaobaoCircleOutlined, YahooOutlined, SketchOutlined, YuqueOutlined, YoutubeOutlined } from '@ant-design/icons';

// import { Form, Input, Button } from "antd";

import loginStyles from "../styles.less";

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKRow, ZKCol, ZKDivider, ZKTabs } = ZKOriginalComponents;
const { ZKRouter, ZKLanguageDropdown } = ZKCustomComponents;
const { Link } = ZKRouter;
const { zkToolsMsg, zkToolsValidates } = zkTools;

import CAccountLogin from './accountLogin.js';
import CPhoneNumberLogin from './phoneNumberLogin.js';

const FInitPersonalLoginForm = ({locales, intl, match, dispatch, mApp, onChangeUserType, className})=>{

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
				<span className = {`${loginStyles.login_span_btn} ${loginStyles.login_span_btn_userType}`} onClick = {()=>{onChangeUserType(2)}}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.user.type.enterpriseUser')}</span>
    		} >
	    		<ZKTabs.TabPane tab = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.type.account')} key="account">
	    			<CAccountLogin dispatch = {dispatch} />
			    </ZKTabs.TabPane>
			    <ZKTabs.TabPane tab = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.type.phone')} key="phone">
			    	<CPhoneNumberLogin dispatch = {dispatch} />
			    </ZKTabs.TabPane>
			</ZKTabs>
			<ZKRow gutter={24} >
				<ZKCol span = {24} className = {loginStyles.login_no_account_register} >
					&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.register.guide')}<Link to={`_register`}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.register')}</Link>
				</ZKCol>
			</ZKRow>
			{/*<ZKRow gutter={24} >
				<ZKCol span = {24}>
					<ZKDivider className = {loginStyles.login_by_third_Divider_text} plain >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.login.by.third.user')}</ZKDivider>
				</ZKCol>
			</ZKRow>
			<ZKRow gutter={24} >
				<ZKCol span = {24} className = {loginStyles.login_by_third_account_row}>
					<span><QqOutlined className={loginStyles.login_by_third_account_Qq} /></span>
					<span><WechatOutlined className={loginStyles.login_by_third_account_Wechat} /></span>
					<span><AlipayCircleOutlined className={loginStyles.login_by_third_account_AlipayCircle} /></span>
					<span><GithubOutlined className={loginStyles.login_by_third_account_Github} /></span>
					<span><ZhihuOutlined className={loginStyles.login_by_third_account_Zhihu} /></span>
					<span><AmazonOutlined className={loginStyles.login_by_third_account_Amazon} /></span>
					<span><GoogleOutlined className={loginStyles.login_by_third_account_Google} /></span>
					<span><TwitterOutlined className={loginStyles.login_by_third_account_Twitter} /></span>
					<span><DingdingOutlined className={loginStyles.login_by_third_account_Dingding} /></span>
					<span><WeiboOutlined className={loginStyles.login_by_third_account_Weibo} /></span>
					<span><TaobaoCircleOutlined className={loginStyles.login_by_third_account_Taobao} /></span>
					<span><YahooOutlined className={loginStyles.login_by_third_account_Yahoo} /></span>
					<span><SketchOutlined className={loginStyles.login_by_third_account_Sketch} /></span>
					<span><YuqueOutlined className={loginStyles.login_by_third_account_Yuque} /></span>
					<span><YoutubeOutlined className={loginStyles.login_by_third_account_Youtube} /></span>
				</ZKCol>
			</ZKRow>*/}
			<ZKRow gutter={24} >
				<ZKDivider />
			</ZKRow>
			<ZKRow>
				<ZKCol span = {12}>
					<Link to={`_forgot_password`}>[{ zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.forgotPassword') }]</Link>
				</ZKCol>
				<ZKCol span = {12} className = { `${loginStyles.login_row_col_right}` }>
					<ZKLanguageDropdown className = {loginStyles.login_languageDropdown} {...languageProps} />
				</ZKCol>
			</ZKRow>
	    </div>
    )
}

export default injectIntl(FInitPersonalLoginForm);



