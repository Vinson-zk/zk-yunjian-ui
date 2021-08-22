/*
* @Author: Vinson
* @Date:   2021-06-24 18:48:40
* @Last Modified by:   Vinson
* @Last Modified time: 2021-07-02 14:42:57
* 
* 公共的视图，登录，注册等未进入框架布局前的视图
* 
*/

import React from "react";
import { connect } from "dva";
import { Layout } from "antd";
import { injectIntl } from "react-intl";

import { ZKCustomComponents, ZKOriginalComponents, ZKException, zkTools } from 'zkFramework';
import zkStyles from 'zkFramework/css/styles.less';
import publicStyles from './layoutPublic.styles.less';

// import zkJsUtils from "zkJsUtils";

const { Header, Content } = Layout;
const { ZKRouter, ZKLogo, ZKLanguageSelect } = ZKCustomComponents;
const { Switch, Redirect, Route } = ZKRouter;
const { zkToolsNavAndMenu, zkToolsAuth } = zkTools;

import { publicRouteCode, publicRouteItems } from '../static.router.item.js';
import publicFuncObj from './public/func.js';

const funcModuleMppingObj = {}
funcModuleMppingObj[publicRouteCode] = publicFuncObj;
/*** 动态加载组件助手 ***/
const dynamicImportHelper = zkToolsNavAndMenu.getDynamicImportHelper(funcModuleMppingObj);


// 公共的路由
let publicRouters = null;
// 默认路由
let publicIndexRouter = null;
/**
 * 登录、注册等开放的 路径的布局
 */
const FInitLayoutPublic = ({ dvaApp, match, dispatch, locales, mApp, lang }) => {

    if (publicRouters == null) {
        // 生成路由 
		publicRouters = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, publicRouteItems, dynamicImportHelper);
      	// 制作默认菜单的路由路径对象
      	publicIndexRouter = zkToolsNavAndMenu.getIndexMenu(publicRouteItems, match.path);

        publicRouters.push(<Route key="_key_not_found_route_public_layout" component = {()=><ZKException /> } />);
    }

    // let languageSwitchProps = { 
    // 	locales, 
    // 	lang,
    //     changeFunc(lang) {
    //         dispatch({ type: 'mApp/changeLanguage', payload: { lang: lang } });
    //     }
    // };

    // let f_onLogin = () => {
    //     if (!mApp.user) {
    //     	zkToolsAuth.setTicket("test_假装登录");
    //         dispatch({ type: 'mApp/setState', payload: { user: { "pkId": "pkId", "loginName": "test", "nickname": "游客", "newMsg": 6 } } });
    //     }
    // }

    return (
        <Layout className={zkStyles.zk_layout}>
	        {/*<div className={publicStyles.public_head} >
	        	<div>
                	<ZKLanguageSelect {...languageSwitchProps} />
                </div>
            </div>*/}
	        <Switch>
	            { publicRouters }
	        </Switch>
        </Layout>
    );
};

/*** 判断登录情况 ***/
const FInitLayoutPublicAuth = ({ location, ...props }) => {
    // 如果已登录，跳转到 from 或 "/"
    if (zkToolsAuth.isLogin()) {
    	// console.log("[^_^:20210628-2313-001] location.state: ", location.state);
        const { fromLocation } = location.state || { fromLocation: { pathname: "/" } };
        return <Redirect to={ fromLocation } />;
    }

    return <FInitLayoutPublic {...props} key = "_layoutPublic" />
}

export default FInitLayoutPublicAuth;


