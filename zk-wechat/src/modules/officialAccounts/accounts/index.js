/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
 */


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import GridItem from "./grid.js";
import CAuth from "./auth.js";

import zkStyles from 'zkFramework/css/styles.less';

import locales from "../../../locales/index";

class CInitAccountsIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowAuth:false
        };
    }

    f_showAuth = (flag)=>{
        this.setState({isShowAuth: flag});
    };

    render() {
        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex_1_auto}`} >
                <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} onAuth = {this.f_showAuth} />
                <CAuth isShow = {this.state.isShowAuth} onShowModal = {this.f_showAuth} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mOfficialAccounts } = this.props;
		if (location.pathname != mOfficialAccounts.pathname) {
			dispatch({ type: 'mOfficialAccounts/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mOfficialAccounts/findAccounts", filter: mOfficialAccounts.filter, pagination: mOfficialAccounts.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mOfficialAccounts, loading }) => ({ mApp, mOfficialAccounts, loading }))(CInitAccountsIndex));


