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

// import SearchItem from "./search.js";
// import GridItem from "./grid.js";

import zkStyles from 'zkFramework/css/styles.less';

import locales from "../../locales/index.js";

// =====================================================
import zkFileStyles from '../file.styles.less';
import CDirTree from './dirTree.js';

class CInitFileDirectoryIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    /*
    <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} />
                <div className={`${zkStyles.display_flex_col} ${zkStyles.flex_1_auto}`} >
    */
    f_onSelectDir = node=>{
        let { dispatch } = this.props;
        dispatch({ type: 'mFileDirectory/setState', payload: { optDir: node } });
    }

    render() {
        let { mFileDirectory, dispatch, intl } = this.props;
        return (
            <div className={ `${zkStyles.zk_main_panel} ${zkStyles.display_flex_row}` } style={{height:'100%'}} >
                <div className={`${zkStyles.zk_left_sider} ${zkFileStyles.zk_left_sider_border} ${zkFileStyles.tree}`} style = {{'width':'200px'}}>
                    <CDirTree intl = {intl}
                        onSelect = {this.f_onSelectDir} 
                        optDir = {mFileDirectory.optDir} 
                        treeData = {mFileDirectory.treeData} 
                    />
                </div>
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mFileDirectory } = this.props;
		if (location.pathname != mFileDirectory.pathname) {
			dispatch({ type: 'mFileDirectory/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mFileDirectory/findFileDirectorysTree", callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mFileDirectory, loading }) => ({ mApp, mFileDirectory, loading }))(CInitFileDirectoryIndex));



