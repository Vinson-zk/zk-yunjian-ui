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
import ResetPwdModal from "./resetPwd.js";
import CGrantRole from "./grantRole.js";
import zkStyles from 'zkFramework/css/styles.less';
import CGrantAuth from "../grantAuth.js";

import locales from "../../../locales/index";

class CInitSysOrgUserIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resetPwdModal:false,
            resetPwdUser:{},
            grantRoleModal: false,
            grantRoleUser: {},
            optCompanyEntity:{},
            grantAuthModal:false,
        };
    };
    // 显示重置密码 Modal
    f_onShowResetPwdModal = (flag, record)=>{
        this.setState({resetPwdModal:flag, resetPwdUser:record});
    };
    // 显示分配角色 Modal
    f_onShowGrantRoleModal = (flag, record)=>{
        this.setState({grantRoleModal:flag, grantRoleUser:record});
    };

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
                <GridItem {...this.props} 
                    onShowResetPwdModal={this.f_onShowResetPwdModal} 
                    onShowGrantRoleModal={this.f_onShowGrantRoleModal} 
                    onShowGrantAuthModal={this.f_onShowGrantAuthModal} />
                <ResetPwdModal isShow = {this.state.resetPwdModal} user = {this.state.resetPwdUser} 
                    onShowModal={this.f_onShowResetPwdModal} />
                <CGrantRole isShow = {this.state.grantRoleModal} optUser = {this.state.grantRoleUser} 
                    onShowModal={this.f_onShowGrantRoleModal} />
                <CGrantAuth isShow = {this.state.grantAuthModal} 
                    url = {`/${globalAppConfig.apiPrefixSys}/auth/sysAuthUser/sysAuthDefinedsPage`}
                    urlOwnerIds = {`/${globalAppConfig.apiPrefixSys}/auth/sysAuthUser/findAuthIdsByUserId`}
                    urlOwnerTargetParamName="userId"
                    title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.grant.modal.title.user')}
                    descName={zkToolsMsg.getInternationInfo(this.state.optCompanyEntity.name?this.state.optCompanyEntity.name:{}, lang)}
                    targetId={this.state.optCompanyEntity.pkId} 
                    onShowModal={this.f_onShowGrantAuthModal}
                    saveSpinning={loading.effects["mSysOrgUser/grantAuth"]||false}
                    saveFunc={(userId, auths, callback)=>{
                        dispatch({ 
                            type: 'mSysOrgUser/grantAuth', 
                            userId: userId,
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
        let { location, dispatch, mSysOrgUser } = this.props;
		if (location.pathname != mSysOrgUser.pathname) {
			dispatch({ type: 'mSysOrgUser/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysOrgUser/findSysOrgUsers", filter: mSysOrgUser.filter, pagination: mSysOrgUser.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mSysOrgUser, loading }) => ({ mApp, mSysOrgUser, loading }))(CInitSysOrgUserIndex));





