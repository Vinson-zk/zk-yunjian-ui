/*
 * @Author: Vinson 
 * @Date: 2020-08-06 17:12:26 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-02-28 12:18:09
 */

import React from 'react';
import { connect } from 'dva';
// import { injectIntl } from 'react-intl';
import { addLocaleData, IntlProvider, } from 'react-intl';
import { ConfigProvider } from 'antd';

// 日期全部国际化
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale；标识为中杠分隔；示例: zh-CN
import moment from 'moment';

import locales from './locales/index';
import CHome from './home';


for (let index in locales) {
    addLocaleData(locales[index].localeData);
}

// addLocaleData(locales['en-US'].localeData);
// addLocaleData(locales['zh-CN'].localeData);

const FInitIndex = (props) => {

    // console.log("[^_^:20200813-1926-001] FInitIndex.props", props);

    const { mApp } = props;
    const { lang } = mApp;
    // 日期 国际化
    moment.locale(lang);

    // 改变 浏览器 title
    document.getElementById("app_title_id").innerText = locales[lang].projectName;

    // 
    return (
        <ConfigProvider locale={locales[lang].antd}>
            <IntlProvider locale={locales[lang].locale} messages={locales[lang].messages}>
                <CHome {...props} locales={locales} mApp={mApp} lang={lang} />
            </IntlProvider>
        </ConfigProvider>
    )
}

export default connect(({ mApp }) => ({ mApp }))(FInitIndex);
