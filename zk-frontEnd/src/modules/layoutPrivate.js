/*
* @Author: Vinson
* @Date:   2021-03-29 16:21:08
* @Last Modified by:   Vinson-zk
* @Last Modified time: 2022-05-25 15:02:02
* 
* 
* 
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd';
// import { connect } from 'dva';

import zkStyles from 'zkFramework/css/styles.less';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';

// import zkJsUtils from "zkJsUtils";

const { Header, Content } = Layout;
const { ZKRouter, ZKLogo, ZKUserDropDown, ZKLanguageSelect, ZKVersionInfo, ZKNavigation } = ZKCustomComponents;
const { ZKModal, ZKSpin } = ZKOriginalComponents;
const { Switch, Redirect } = ZKRouter;
const { zkToolsNavAndMenu, zkToolsMsg, zkToolsAuth } = zkTools;

/*** 版本信息 ***/
import zkPackagePackageInfo from 'zkPackage/package.json';
import zkFrameworkPackageInfo from 'zkFramework/package.json';
import zkSamplePackageInfo from 'zkSample/package.json';
import zkSystemPackageInfo from 'zkSystem/package.json';
import zkDevelopmentToolPackageInfo from 'zkDevelopmentTool/package.json';
import zkWechatPackageInfo from 'zkWechat/package.json';
import zkMailPackageInfo from 'zkMail/package.json';

const dependenceInfos = [zkPackagePackageInfo, zkFrameworkPackageInfo, zkSamplePackageInfo, zkSystemPackageInfo, 
	zkDevelopmentToolPackageInfo, zkWechatPackageInfo, zkMailPackageInfo];
import versionInfo from '../../package.json';

/*** 引入依赖功能模块 ***/
import {funcModule as sampleFuncModule} from 'zkSample';
import {funcModule as systemFuncModule} from 'zkSystem';
import {funcModule as developmentToolFuncModule} from 'zkDevelopmentTool';
import {funcModule as wechatFuncModule} from 'zkWechat';
import {funcModule as mailFuncModule} from 'zkMail';
import generalApplicationFuncModule from './generalApplication/func.js';

const funcModuleMppingObj = { 
    "sys": systemFuncModule,
    "sample": sampleFuncModule,
    "developmentTool": developmentToolFuncModule,
    "wechat": wechatFuncModule,
    "generalApplication": generalApplicationFuncModule,
    "mail": mailFuncModule,
}

/*** 动态加载组件助手 ***/
const dynamicImportHelper = zkToolsNavAndMenu.getDynamicImportHelper(funcModuleMppingObj);

class CInitLayoutPrivate extends React.PureComponent {
	constructor(props){
        super(props);
        this.state={
        	navRoutes: null,      // 导航栏路由
            indexNavRoute: null  // 默认导航栏
        };
        props.dispatch({type: 'mApp/getNavItems', payload:{}});
    }

    componentDidMount() {
        const { intl, dispatch, mApp } = this.props;
        // 请求菜单
        if(mApp.menuFlag === 0){
            // 尚未向后请求过菜单，请求菜单
            dispatch({ type: "mApp/getMenus" });
        }
    }

    static getDerivedStateFromProps(props, state){

        // console.log("[^_^:20210329-1720-001] getDerivedStateFromProps ", props, state);
        if(state.navRoutes == null && props.mApp.navItems != undefined){
            // 菜单还未生成路由，生成路由
            let { mApp, dvaApp, dispatch, match } = props;
            // console.log("[^_^:20200811-1044-001] getDerivedStateFromProps ", mApp, state);
            // 生成导航栏目路由
            state.navRoutes = zkToolsNavAndMenu.getRoutesByNavs(props.dvaApp, props.match.path, props.mApp.navItems, dynamicImportHelper);
            // 查找默认导航栏目
            state.indexNavRoute = zkToolsNavAndMenu.getIndexNav(props.mApp.navItems);
        }
        return true;
    }

    render(){
    	const {dvaApp, match, mApp, dispatch, locales, lang, intl} = this.props;
    	let languageSwitchProps = { 
    		locales, 
    		lang,
	        changeFunc(lang) {
	            dispatch({ type: 'mApp/changeLanguage', payload: { lang: lang } });
	        }
	    };

	    // let f_onLogin = () => {
	    //     if (!mApp.user) {
	    //         dispatch({ type: 'mApp/setState', payload: { user: { "loginName": "test", "nickname": "游客", "newMsg": 6 } } });
	    //     }
	    // }

	    let f_onUserDropDownCallBack = key => {
	        switch (key) {
	            case '_key_logout':  // 退出
	            	zkToolsAuth.logout();
	                dispatch({ type: 'mApp/setState', payload: { user: undefined } });
	                break;
	            case '_key_version_info': // 版本信息
	                ZKModal.info({
	                    title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_version_info'),
	                    content: <ZKVersionInfo intl={intl} versionInfo={versionInfo} dependenceInfos={dependenceInfos} />,
	                    className: zkStyles.zk_versionInfo_modal
	                })
	                break;
	            default:
	                if (console) console.log("[^_^:20190507-1417-001] 暂未支持的 user drop down opt key: ", key);
	                break;
	        }
	    }

	    let optKeys = [];
	    if (mApp.user) {
	        optKeys = ["_key_logout", "_key_version_info"];
	    } else {
	        optKeys = [];
	    }

	    return (
	        <Layout className={zkStyles.zk_layout}>
	            <Header className={zkStyles.zk_header}>
	                <ZKLogo logoImgUrl="assets/img/logo-zk.png" />
	                <ZKNavigation prefixPath={`${match.path}`} navItems={mApp.navItems?mApp.navItems:[]} />
	                <ZKUserDropDown user={{username:mApp.user.account, ...mApp.user}} optKeys={optKeys} callBack={f_onUserDropDownCallBack} />
	                <ZKLanguageSelect {...languageSwitchProps} />
	            </Header>
	            <Content className={zkStyles.zk_content}>
	                <Switch>
	                    {this.state.indexNavRoute ?
	                        (
	                            <Redirect exact from={`${match.path}`} to={`${(match.path == '/' ? "" : match.path)}/${this.state.indexNavRoute.path}`} />
	                        ) : ""
	                    }
	                    {this.state.navRoutes}
	                </Switch>
	            </Content>
                <div className = {zkStyles.zk_footer} ><p>opyright © Vinson zk-frontEnd</p></div>
	        </Layout>
	    )
    }
}

const CLayoutPrivate = injectIntl(CInitLayoutPrivate);

// 判断登录情况
const FInitLayoutPrivateAuth = ({ redirectPath, ...props }) => {

	if(!globalAppConfig.isAuth){
		// 关闭了权限认证；
		zkToolsAuth.setTicket("_not_auth_isAuth_false");
		if( !props.mApp.user || zkJsUtils.isEmpty(props.mApp.user.pkId) ){
			// 无用户信息 默认设置一游客用户
			props.dispatch({ 
				type: 'mApp/setState', 
				payload: { 
					user: { pkId:"test_user_pkId", "loginName": "test", "nickname": "游客", "newMsg": 6 }, 
					platformCode:'_default_platform_code_' 
				} 
			});	
		}	
		console.log("[^_^:20210823-1201-001] ", globalAppConfig.isAuth, zkToolsAuth.isLogin(), props.mApp.user);
	}
	// console.log("[^_^:20210702-0846-001] ", globalAppConfig.isAuth, zkToolsAuth.isLogin(), props.mApp.user);
	
	/** 如果未登录，跳转到指定的路由路径 */
    if(!zkToolsAuth.isLogin()){
        return <Redirect to={{ pathname: redirectPath, state: { fromLocation: props.location } }}/>
    }

    // console.log("[^_^:20220421-2208-001] ", props.mApp.user);

    /** 等待获取用户信息 */
    if( !props.mApp.user || zkJsUtils.isEmpty(props.mApp.user.pkId) ){
        // 此处待优化，laoding 显示
        return <ZKSpin style={{position:'absolute',left:'50%',top:'50%'}}/>
    }

    return <CLayoutPrivate {...props} />
}

export default FInitLayoutPrivateAuth;
// export default connect(({ mApp }) => ({ mApp }))(FInitIndex)










