/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 19:50:16
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 20:20:27
*/


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import CGridItem from "./grid.js";

import zkStyles from 'zkFramework/style/zk.styles.less';
import locales from "../../../locales/index";

class CInitSysAuthCompanyIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        let { intl, mApp } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
        return (
            <div className={`${zkStyles.zk_f_display_flex_col} ${zkStyles.zk_f_flex_auto_1}`} >
                <SearchItem {...this.props} locales={locales} />
                <CGridItem {...this.props} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
    	
    }
}

export default injectIntl(connect(({ mApp, mSysAuthCompany, loading }) => ({ mApp, mSysAuthCompany, loading }))(CInitSysAuthCompanyIndex));




