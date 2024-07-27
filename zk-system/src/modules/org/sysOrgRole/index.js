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

import zkStyles from 'zkFramework/style/zk.styles.less';

import locales from "../../../locales/index";

class CInitSysOrgRoleIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optRoleEntity:{},
            grantAuthModal:false,
        };
    }

    // 分配权限
    f_onShowGrantAuthModal = (flag, record)=>{
        this.setState({grantAuthModal:flag, optRoleEntity:record});
    };

    render() {
        
        let { intl, loading, mApp, dispatch } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
        return (
            <div className={`${zkStyles.zk_f_display_flex_col} ${zkStyles.zk_f_flex_auto_1}`} >
                <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} onShowGrantAuthModal={this.f_onShowGrantAuthModal} />
                <CGrantAuth isShow = {this.state.grantAuthModal} 
                    url = {`/${globalAppConfig.apiPrefixSys}/auth/sysAuthRole/findAllotAuthPage`}
                    formatParamsFunc = {(toTargetId, params={})=>{
                        params['roleId'] = toTargetId;
                        return params;
                    }}
                    title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.grant.modal.title.role')}
                    descName={zkToolsMsg.getInternationInfo(this.state.optRoleEntity.name?this.state.optRoleEntity.name:{}, lang)}
                    toTargetId={this.state.optRoleEntity.pkId} 
                    onShowModal={this.f_onShowGrantAuthModal}
                    saveSpinning={loading.effects["mSysOrgRole/grantAuth"]||false}
                    saveFunc={(roleId, allotAuths, callback)=>{
                        dispatch({ 
                            type: 'mSysOrgRole/grantAuth', 
                            roleId: roleId,
                            allotAuths: allotAuths,
                            callback: callback
                        });
                    }}
                />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysOrgRole } = this.props;
		if (location.pathname != mSysOrgRole.pathname) {
			dispatch({ type: 'mSysOrgRole/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysOrgRole/findSysOrgRoles", filter: mSysOrgRole.filter, pagination: mSysOrgRole.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mSysOrgRole, loading }) => ({ mApp, mSysOrgRole, loading }))(CInitSysOrgRoleIndex));