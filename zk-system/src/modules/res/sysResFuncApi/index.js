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
import ChannelEdit from "./channelEdit.js";

import zkStyles from 'zkFramework/css/styles.less';

import locales from "../../../locales/index";

class CInitSysResFuncApiIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            channelEditPageIsShow:false, // 接口请求渠道编辑页面显示状态
            editFuncApi:{},        // 接口请求渠道编辑时，当道编辑设置的行
        };
    }

    onShowChannelEdit = (flag, record)=>{
        this.setState({channelEditPageIsShow:flag, editFuncApi:record});
    }

    render() {
        let channelEditProps = {
            isShow: this.state.channelEditPageIsShow,
            editFuncApi: this.state.editFuncApi,
            onShowChannelEdit: this.onShowChannelEdit,
        };

        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex_1_auto}`} >
                <SearchItem {...this.props} locales={locales} />
                <GridItem onShowChannelEdit={this.onShowChannelEdit} {...this.props} />
                <ChannelEdit {...channelEditProps} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysResFuncApi } = this.props;
		if (location.pathname != mSysResFuncApi.pathname) {
			dispatch({ type: 'mSysResFuncApi/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysResFuncApi/findSysResFuncApis", filter: mSysResFuncApi.filter, pagination: mSysResFuncApi.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mSysResFuncApi, loading }) => ({ mApp, mSysResFuncApi, loading }))(CInitSysResFuncApiIndex));

