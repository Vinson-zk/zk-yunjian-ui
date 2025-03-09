/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 22:57:05
 * @Last Modified by: vinson
 * @Last Modified time: 2025-01-20 15:27:21
 */

import React from 'react';
import { connect } from 'dva';
// import { injectIntl } from 'react-intl';
import { addLocaleData, IntlProvider, } from 'react-intl';
import { ConfigProvider, App } from 'antd';

import zkStyles from 'zkFramework/style/zk.styles.less';
import { ZKCustomComponents, ZKOriginalComponents, zkTools } from "zkFramework";
const { ZKModal } = ZKOriginalComponents;
const { zkToolsAuth } = zkTools;

import { publicRouteItems } from './static.router.item.js';

import locales from "./locales/index.js";
import CLayoutPublic from './modules/layoutPublic.js';
import CLayoutPrivate from './modules/layoutPrivate.js';

for (let index in locales) {
    addLocaleData(locales[index].localeData);
}

import zkTheme, { changeStyleCssVal } from "zkFramework/style/theme";

import { theme } from 'antd/lib';
const { compactAlgorithm, darkAlgorithm, defaultAlgorithm, defaultConfig, defaultSeed, getDesignToken, useToken } = theme;

const FInitIndex = ({ mApp, match, location, history, ...props }) => {

    // console.log("[^_^:20240627-2315-001] history: ", history);
    // console.log("[^_^:20240627-2315-001] match: ", match);
    // console.log("[^_^:20240627-2315-001] location: ", location);

    const { lang, themeFlag } = mApp;
    changeStyleCssVal(zkTheme[themeFlag]);

    // 改变 浏览器 title
    document.getElementById("app_title_id").innerText = locales[lang].projectName;

    // console.log("[^_^:20210628-2331-001] ", zkToolsAuth.isLogin());
    const isOpenPage = zkToolsAuth.isPublicItem(globalAppConfig.basename, publicRouteItems, location.pathname);
    // console.log("[^_^:20210628-2331-002] isOpenPage:", isOpenPage, location.pathname, match);
    let myTheme = {
        "token": zkTheme[themeFlag].base
    }
    if(themeFlag === 'dark'){
        // 1. 单独使用暗色算法
        myTheme['algorithm'] = theme.darkAlgorithm 
    }

    let defaultLoginType = localStorage.getItem(globalAppConfig.localKey.defaultLoginType);
    defaultLoginType = defaultLoginType?defaultLoginType:'personal';

    return (
        <ConfigProvider locale={locales[lang].antd} theme = {myTheme} >
            <IntlProvider locale={locales[lang].locale} messages={locales[lang].messages}>
                <App className={zkStyles.zk_f_full} >
                    <ZKModal.ModalStaticFunc />
                    {isOpenPage ?
                        <CLayoutPublic {...props} match={match} location={location} history={history} locales={locales} lang={lang} mApp={mApp} />
                        : 
                        <CLayoutPrivate { ...props } match={match} location={location} history={history} redirectPath={`${match.path=="/"?"":match.path}/_login/${defaultLoginType}`} locales={locales} lang={lang} mApp={mApp} user = {mApp.user} />
                    }
                </App>
            </IntlProvider>
        </ConfigProvider>
    );
}

export default connect(({ mApp }) => ({ mApp }))(FInitIndex);


