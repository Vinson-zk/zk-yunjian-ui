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
import CGrantFuncApi from "./grantFuncApi.js";
import CGrantMenu from "./grantMenu.js";
import CGrantNav from "./grantNav.js";

import zkStyles from 'zkFramework/css/styles.less';

import locales from "../../../locales/index";

class CInitSysAuthDefinedIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            grantFuncApiModal: false,
            grantMenuModal: false,
            grantNavModal: false,
            optAuth: {}
        };
    };

    // 分配Api接口、菜单、导航栏 Modal
    f_onShowModal = (modalFlag, flag, record)=>{
        if(modalFlag == "grantFuncApiModal"){
            this.setState({grantFuncApiModal:flag, optAuth:record});
        }else if(modalFlag == "grantMenuModal"){
            this.setState({grantMenuModal:flag, optAuth:record});
        }else if(modalFlag == "grantNavModal"){
            this.setState({grantNavModal:flag, optAuth:record});
        }  
    };

    render() {
        let { intl, mApp } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex_1_auto}`} >
                <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} onShowGrantModal = {this.f_onShowModal} />
                <CGrantFuncApi isShow={this.state.grantFuncApiModal} 
                    descName={zkToolsMsg.getInternationInfo(this.state.optAuth.name?this.state.optAuth.name:{}, lang)}
                    targetId={this.state.optAuth.pkId} 
                    onShowModal={this.f_onShowModal} />
                <CGrantMenu isShow={this.state.grantMenuModal} 
                    descName={zkToolsMsg.getInternationInfo(this.state.optAuth.name?this.state.optAuth.name:{}, lang)}
                    targetId={this.state.optAuth.pkId} 
                    onShowModal={this.f_onShowModal} />
                <CGrantNav isShow={this.state.grantNavModal} 
                    descName={zkToolsMsg.getInternationInfo(this.state.optAuth.name?this.state.optAuth.name:{}, lang)}
                    targetId={this.state.optAuth.pkId} 
                    onShowModal={this.f_onShowModal} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysAuthDefined } = this.props;
		if (location.pathname != mSysAuthDefined.pathname) {
			dispatch({ type: 'mSysAuthDefined/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysAuthDefined/findSysAuthDefineds", filter: mSysAuthDefined.filter, pagination: mSysAuthDefined.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mSysAuthDefined, loading }) => ({ mApp, mSysAuthDefined, loading }))(CInitSysAuthDefinedIndex));



