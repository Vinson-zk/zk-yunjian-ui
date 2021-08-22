/*
* @Author: Vinson
* @Date:   2021-03-29 16:21:08
* @Last Modified by:   Vinson
* @Last Modified time: 2021-07-02 09:22:15
* 
* 
* 
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd';

import zkStyles from 'zkFramework/css/styles.less';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';

// import zkJsUtils from "zkJsUtils";

const { Header, Content } = Layout;
const { ZKRouter, ZKLogo, ZKUserDropDown, ZKLanguageSelect, ZKVersionInfo, ZKNavigation } = ZKCustomComponents;
const { ZKModal, ZKSpin } = ZKOriginalComponents;
const { Switch, Redirect } = ZKRouter;
const { zkToolsNavAndMenu, zkToolsMsg, zkToolsAuth } = zkTools;

/*** 版本信息 ***/
import zkFrameworkInfo from 'zkFramework/package.json';
import zkPackageInfo from 'zkPackage/package.json';
import zkSample from 'zkSample/package.json';
import zkSystem from 'zkSystem/package.json';

const dependenceInfos = [zkPackageInfo, zkFrameworkInfo, zkSample, zkSystem];
import versionInfo from '../../package.json';

/*** 引入依赖功能模块 ***/
import {funcModule as sampleFuncModule} from 'zkSample';
import {funcModule as systemFuncModule} from 'zkSystem';

const funcModuleMppingObj = { 
    "system": systemFuncModule,
    "sample": sampleFuncModule,
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

	    let f_onLogin = () => {
	        if (!mApp.user) {
	            dispatch({ type: 'mApp/setState', payload: { user: { "loginName": "test", "nickname": "游客", "newMsg": 6 } } });
	        }
	    }

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
	                <ZKUserDropDown user={mApp.user} onLogin={f_onLogin} optKeys={optKeys} callBack={f_onUserDropDownCallBack} />
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

	// console.log("[^_^:20210702-0846-001] ", zkToolsAuth.isLogin());

    /** 如果未登录，跳转到指定的路由路径 */
    if(!zkToolsAuth.isLogin()){
        return <Redirect to={{ pathname: redirectPath, state: { fromLocation: props.location } }}/>
    }

    /** 等待获取用户信息 */
    if( !props.mApp.user || zkJsUtils.isEmpty(props.mApp.user.pkId) ){
        // 此处待优化，laoding 显示
        return <ZKSpin style={{position:'absolute',left:'50%',top:'50%'}}/>
    }

    return <CLayoutPrivate {...props} />

}

export default FInitLayoutPrivateAuth;


