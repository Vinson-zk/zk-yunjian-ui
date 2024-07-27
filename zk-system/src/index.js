/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 22:57:05
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-25 00:14:07
 */

import React from 'react';
import { connect } from 'dva';
// import { injectIntl } from 'react-intl';
import { addLocaleData, IntlProvider, } from 'react-intl';
import { ConfigProvider, App } from 'antd';

import locales from "./locales/index.js";
import CHome from './home';

import zkStyles from 'zkFramework/style/zk.styles.less';
import { ZKOriginalComponents } from "zkFramework";
const { ZKModal } = ZKOriginalComponents;

for (let index in locales) {
    addLocaleData(locales[index].localeData);
}

let themeFlag = 'default';
import zkTheme, { changeStyleCssVal } from "zkFramework/style/theme";
changeStyleCssVal(zkTheme[themeFlag]);

const FInitSysIndex = ({ mApp, ...props }) => {

    const { lang } = mApp;

    // 改变 浏览器 title
    document.getElementById("app_title_id").innerText = locales[lang].projectName;

    return (
        <ConfigProvider locale={locales[lang].antd} theme = {{ "token": zkTheme[themeFlag].base }} >
            <IntlProvider locale={locales[lang].locale} messages={locales[lang].messages}>
                <App className={zkStyles.zk_f_full} >
                    <ZKModal.ModalStaticFunc />
                    <CHome { ...props } locales={locales} mApp={mApp} lang={lang} />
                </App>
            </IntlProvider>
        </ConfigProvider>
    );
}

export default connect(({ mApp }) => ({ mApp }))(FInitSysIndex);


