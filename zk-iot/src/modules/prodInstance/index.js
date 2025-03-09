/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 17:15:05
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 17:34:06
*/


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import GridItem from "./grid.js";

import zkStyles from 'zkFramework/style/zk.styles.less';

import locales from "../../locales/index";

class CInitIotProdInstanceIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={`${zkStyles.zk_f_display_flex_col} ${zkStyles.zk_f_flex_auto_1}`} >
                <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mIotProdInstance } = this.props;
		if (location.pathname != mIotProdInstance.pathname) {
			dispatch({ type: 'mIotProdInstance/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mIotProdInstance/findIotProdInstances", filter: mIotProdInstance.filter, pagination: mIotProdInstance.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mIotProdInstance, loading }) => ({ mApp, mIotProdInstance, loading }))(CInitIotProdInstanceIndex));

