/*
* @Author: Vinson
* @Date:   2021-03-29 16:21:08
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 19:56:32
* 
* 
* 
*/

// window.ResizeObserver = class _NewResizeObserver extends ResizeObserver {
// 	constructor(callback) {
// 		super(() => window.requestAnimationFrame(() => callback.apply(this, arguments)));
// 	}
// }

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Layout, Space } from 'antd';
// import { connect } from 'dva';

import zkStyles from 'zkFramework/style/zk.styles.less';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';

// import zkJsUtils from "zkJsUtils";

const { Header, Content } = Layout;
const { ZKRouter, ZKLogo, ZKIcon, ZKUserDropDown, ZKLanguageSelect, ZKVersionInfo, ZKNavigation, ZKTheme } = ZKCustomComponents;
const { ZKModal, ZKSpin, ZKSelect } = ZKOriginalComponents;
const { Switch, Redirect } = ZKRouter;
const { Option } = ZKSelect
const { zkToolsNavAndMenu, zkToolsMsg, zkToolsAuth, zkToolsUtils } = zkTools;

/*** 版本信息 ***/
import zkPackagePackageInfo from 'zkPackage/package.json';
import zkFrameworkPackageInfo from 'zkFramework/package.json';
// import zkSamplePackageInfo from 'zkSample/package.json';
import zkSystemPackageInfo from 'zkSystem/package.json';
import zkDevelopmentToolPackageInfo from 'zkDevelopmentTool/package.json';
import zkWechatPackageInfo from 'zkWechat/package.json';
import zkFilePackageInfo from 'zkFile/package.json';
import zkMailPackageInfo from 'zkMail/package.json';
import zkIotPackageInfo from 'zkIot/package.json';

const dependenceInfos = [
	// zkSamplePackageInfo, 
	zkPackagePackageInfo, zkFrameworkPackageInfo, zkSystemPackageInfo, zkDevelopmentToolPackageInfo, zkWechatPackageInfo, zkFilePackageInfo, zkMailPackageInfo, zkIotPackageInfo];
import versionInfo from '../../package.json';

import { privateRouteCode, privateRouteItems } from '../static.router.item.js';
import privateFuncObj from './private/func.js';

/*** 引入依赖功能模块 ***/
// import {funcModule as sampleFuncModule} from 'zkSample';
import {funcModule as systemFuncModule} from 'zkSystem';
import {funcModule as developmentToolFuncModule} from 'zkDevelopmentTool';
import {funcModule as wechatFuncModule} from 'zkWechat';
import {funcModule as fileFuncModule} from 'zkFile';
import {funcModule as mailFuncModule} from 'zkMail';
import generalApplicationFuncModule from './generalApplication/func.js';
import {funcModule as iotFuncModule} from 'zkIot';

const funcModuleMppingObj = { 
    // "sample": sampleFuncModule,
    "sys": systemFuncModule,
    "developmentTool": developmentToolFuncModule,
    "wechat": wechatFuncModule,
    "generalApplication": generalApplicationFuncModule,
    "file": fileFuncModule,
    "mail": mailFuncModule,
    "iot": iotFuncModule,
}
funcModuleMppingObj[privateRouteCode] = privateFuncObj;

// console.log("[^_^:20250108-1601-001] funcModuleMppingObj: ", funcModuleMppingObj);

/*** 动态加载组件助手 ***/
const dynamicImportHelper = zkToolsNavAndMenu.getDynamicImportHelper(funcModuleMppingObj);

class CInitLayoutPrivate extends React.PureComponent {
	constructor(props){
        super(props);
        this.state={
        	navRoutes: null,      // 导航栏路由
            indexNavRoute: null,  // 默认导航栏
            themeFlag: 'default'
        };
        props.dispatch({type: 'mApp/getNavItems', payload:{}});
    }

    static getDerivedStateFromProps(props, state){

        // console.log("[^_^:20210329-1720-001] getDerivedStateFromProps ", props, state);
        if(state.navRoutes == null && props.mApp.navItems != undefined){
            // 菜单还未生成路由，生成路由
            let { mApp, dvaApp, dispatch, match } = props;
            // console.log("[^_^:20200811-1044-001] getDerivedStateFromProps ", mApp, state);
            // 生成导航栏目路由
            let navRoutes = zkToolsNavAndMenu.getRoutesByNavs(dvaApp, match.path, mApp.navItems, dynamicImportHelper);
            let privateNavRoutes = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, privateRouteItems, dynamicImportHelper);
            state.navRoutes = navRoutes.concat(privateNavRoutes);
            // 查找默认导航栏目
            let items = privateRouteItems.concat(mApp.navItems);
            state.indexNavRoute = zkToolsNavAndMenu.getIndexNav(items);
            // console.log("[^_^:20200811-1726-001] getDerivedStateFromProps.items ", items);
            // console.log("[^_^:20200811-1726-001] getDerivedStateFromProps.privateRouteItems ", privateRouteItems);
            // console.log("[^_^:20200811-1726-001] getDerivedStateFromProps.navItems ", mApp.navItems);
            // console.log("[^_^:20200811-1044-002] getDerivedStateFromProps.state.navRoutes ", state.navRoutes);
            // console.log("[^_^:20200811-1044-002] getDerivedStateFromProps.state.indexNavRoute ", state.indexNavRoute);
        }
        return true;
    }

    render(){
    	const {dvaApp, match, mApp, dispatch, history, locales, intl} = this.props;
    	let languageSwitchProps = { 
    		locales, 
    		lang: intl.locale,
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
	        	case '_key_personal_center':  // 个人中心
	            	history.push(`${(match.path == '/' ? "" : match.path)}/_personalCenter`);
	                break;
	            case '_key_logout':  // 退出
	            	zkToolsAuth.logout();
	                dispatch({ type: 'mApp/setState', payload: { user: undefined } });
	                break;
	            case '_key_version_info': // 版本信息
	                ZKModal.info({
	                    title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_version_info'),
	                    content: <ZKVersionInfo intl={intl} versionInfo={versionInfo} dependenceInfos={dependenceInfos} />
	                })
	                break;
	            default:
	                if (console) console.log("[^_^:20190507-1417-001] 暂未支持的 user drop down opt key: ", key);
	                break;
	        }
	    }

	    let optMenuItems = [];
        if (mApp.user) {
	        optMenuItems = [
	        	// {
	            //     'key': '_key_personal_center',
	            //     'icon': <ZKIcon icon = 'UserOutlined' />,
	            //     'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "zk.front.end.label.personal.center", null)}</span>,
	            //     'title': zkToolsMsg.msgFormatByIntl(intl, "zk.front.end.label.personal.center", null)
	            // },
		    	{
	                'key': '_key_logout',
	                'icon': <ZKIcon icon = 'LogoutOutlined' />,
	                'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_logout", null)}</span>,
	                'title': zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_logout", null)
	            },
	            {
	                'key': '_key_version_info',
	                'icon': <ZKIcon icon = 'InfoCircleOutlined' />,
	                'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_version_info", null)}</span>,
	                'title': zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_version_info", null)
	            }
		    ];
	    }

	    return (
	        <Layout className={zkStyles.zk_f_layout}>
	            <Header className={zkStyles.zk_f_header}>
	                {/*<ZKLogo logoImgUrl="assets/img/logo-zk.png" />*/}
	                <ZKLogo logoImgUrl="assets/img/logo-zk.jpg" onClick = {e=>history.push("/")} />
	                <ZKNavigation prefixPath={`${match.path}`} navItems={mApp.navItems?mApp.navItems:[]} />
	                <ZKUserDropDown user={{username: mApp.user.nickname?mApp.user.nickname:mApp.user.account, ...mApp.user}} optMenuItems={optMenuItems} callBack={f_onUserDropDownCallBack} />
	                <ZKTheme themeFlag={mApp.themeFlag} setThemeFunc={key=>{
	                	zkToolsUtils.setTheme(key);
	                	dispatch({ type: 'mApp/setState', payload: { themeFlag: key }});
	                }} />&nbsp;&nbsp;
	                <ZKLanguageSelect {...languageSwitchProps} />
	            </Header>
	            <Content className={zkStyles.zk_f_content}>
	                <Switch>
	                    {this.state.indexNavRoute ?
	                        (
	                            <Redirect exact from={`${match.path}`} to={`${(match.path == '/' ? "" : match.path)}/${this.state.indexNavRoute.path}`} />
	                        ) : ""
	                    }
	                    {this.state.navRoutes}
	                </Switch>
	            </Content>
                {/*<div className = {zkStyles.zk_f_footer} ><span>Copyright © Vinson zk-frontEnd</span></div>*/}
                {/*<div className = {zkStyles.zk_f_footer} ><span>Copyright © Comnect All Rights Reserved.</span></div>*/}
                <div className = {zkStyles.zk_f_footer} >
                	<span>Copyright © Shenzhen COMNECT Technology Co., Ltd. All rights reserved. </span>
                </div>
                
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
		// console.log("[^_^:20210823-1201-001] ", globalAppConfig.isAuth, zkToolsAuth.isLogin(), props.mApp.user);
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


