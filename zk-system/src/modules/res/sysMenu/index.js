/**
 *
 * @Author: Vinson
 * @Date: 2020-08-29 17:39:59
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-19 19:31:37
 */


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import GridItem from "./grid.js";

import zkStyles from 'zkFramework/css/styles.less';

// const FInitSysNacIndex = (params) => {
//     return (<div>FInitSysNacIndex</div>);
// }

class CInitSysMenuIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    // static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    render() {
        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex_1_auto}`}>
                <SearchItem {...this.props} />
                <GridItem {...this.props} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysMenu } = this.props;
		if (location.pathname != mSysMenu.pathname) {
			dispatch({ type: 'mSysMenu/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysMenu/findSysMenusTree", filter: mSysMenu.filter, pagination:mSysMenu.pagination, callback: e => { } })
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {

    }

}

export default injectIntl(connect(({ mApp, mSysMenu, loading }) => ({ mApp, mSysMenu, loading }))(CInitSysMenuIndex));
