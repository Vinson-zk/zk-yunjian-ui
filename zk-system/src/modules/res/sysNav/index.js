/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 21:39:43
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-02 17:15:47
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

class CInitSysNavIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    // static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    render() {
        // console.log("[^_^:202111021635-001]", this.props.mSysNav.filter)
        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex}`} >
                <SearchItem {...this.props} />
                <GridItem {...this.props} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysNav } = this.props;
		if (location.pathname != mSysNav.pathname) {
			dispatch({ type: 'mSysNav/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysNav/findSysNavs", filter: mSysNav.filter, callback: e => { } })
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {

    }

}

export default injectIntl(connect(({ mApp, mSysNav, loading }) => ({ mApp, mSysNav, loading }))(CInitSysNavIndex));

