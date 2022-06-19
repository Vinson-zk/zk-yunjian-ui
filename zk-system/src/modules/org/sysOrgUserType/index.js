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
import CGrantAuth from "../grantAuth.js";

import zkStyles from 'zkFramework/css/styles.less';

import locales from "../../../locales/index";

class CInitSysOrgUserTypeIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optCompanyEntity:{},
            grantAuthModal:false,
        };
    }

    // 分配权限
    f_onShowGrantAuthModal = (flag, record)=>{
        this.setState({grantAuthModal:flag, optCompanyEntity:record});
    };

    render() {
        
        let { intl, loading, mApp, dispatch } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex_1_auto}`} >
                <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} onShowGrantAuthModal={this.f_onShowGrantAuthModal} />
                <CGrantAuth isShow = {this.state.grantAuthModal} 
                    url = {`/${globalAppConfig.apiPrefixSys}/auth/sysAuthUserType/sysAuthDefinedsPage`}
                    urlOwnerIds = {`/${globalAppConfig.apiPrefixSys}/auth/sysAuthUserType/findAuthIdsByUserTypeId`}
                    urlOwnerTargetParamName="userTypeId"
                    title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.grant.modal.title.userType')}
                    descName={zkToolsMsg.getInternationInfo(this.state.optCompanyEntity.name?this.state.optCompanyEntity.name:{}, lang)}
                    targetId={this.state.optCompanyEntity.pkId} 
                    onShowModal={this.f_onShowGrantAuthModal}
                    saveSpinning={loading.effects["mSysOrgUserType/grantAuth"]||false}
                    saveFunc={(userTypeId, auths, callback)=>{
                        dispatch({ 
                            type: 'mSysOrgUserType/grantAuth', 
                            userTypeId: userTypeId,
                            auths: auths,
                            callback: callback
                        });
                    }}
                />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysOrgUserType } = this.props;
		if (location.pathname != mSysOrgUserType.pathname) {
			dispatch({ type: 'mSysOrgUserType/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysOrgUserType/findSysOrgUserTypes", filter: mSysOrgUserType.filter, pagination: mSysOrgUserType.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mSysOrgUserType, loading }) => ({ mApp, mSysOrgUserType, loading }))(CInitSysOrgUserTypeIndex));