/*
 * @Author: Vinson 
 * @Date: 2020-08-06 17:12:26 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-26 14:28:52
 */

import React from 'react';
import { connect } from 'dva';
// import { injectIntl } from 'react-intl';
import { addLocaleData, IntlProvider, } from 'react-intl';
import { ConfigProvider, App } from 'antd';

// 日期全部国际化
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale；标识为中杠分隔；示例: zh-CN

import locales from './locales/index';
import CHome from './home';
import zkStyles from 'zkFramework/style/zk.styles.less';
import { ZKOriginalComponents } from "zkFramework";
const { ZKModal } = ZKOriginalComponents;

for (let index in locales) {
    addLocaleData(locales[index].localeData);
}

// addLocaleData(locales['en-US'].localeData);
// addLocaleData(locales['zh-CN'].localeData);

import zkTheme, { changeStyleCssVal } from "zkFramework/style/theme";

import { theme } from 'antd/lib';
const { compactAlgorithm, darkAlgorithm, defaultAlgorithm, defaultConfig, defaultSeed, getDesignToken, useToken } = theme;

const FInitIndex = (props) => {

    // console.log("[^_^:20200813-1926-001] FInitIndex.props", props);

    const { mApp } = props;
    const { lang, themeFlag } = mApp;

    // 改变 浏览器 title
    document.getElementById("app_title_id").innerText = locales[lang].projectName;

    changeStyleCssVal(zkTheme[themeFlag]);
    let myTheme = {
        "token": zkTheme[themeFlag].base
    }
    if(themeFlag === 'dark'){
        // 1. 单独使用暗色算法
        myTheme['algorithm'] = theme.darkAlgorithm 
    }

    // 
    return (
        <ConfigProvider locale={locales[lang].antd} theme = {myTheme} >
            <IntlProvider locale={locales[lang].locale} messages={locales[lang].messages}>
                <App className={zkStyles.zk_f_full} >
                    <ZKModal.ModalStaticFunc />
                    <CHome {...props} locales={locales} mApp={mApp} lang={lang} />
                </App>
            </IntlProvider>
        </ConfigProvider>
    )
}

export default connect(({ mApp }) => ({ mApp }))(FInitIndex);
