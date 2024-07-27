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
import AuditCompany from "./auditCompany.js";
import CGrantAuthToCompany from "../grantAuthToCompany.js";

import zkStyles from 'zkFramework/style/zk.styles.less';

import locales from "../../../locales/index";

class CInitSysOrgCompanyIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optCompanyEntity:{},
            auditCompanyModal:false,
            grantAuthModal:false,
        }
    }

    // 分配权限
    f_onShowGrantModalModal = (flag, record)=>{
        this.setState({grantAuthModal:flag, optCompanyEntity:record});
    };

    onShowAuditModal = (flag, record)=>{
        this.setState({auditCompanyModal:flag, optCompanyEntity:record});
    };

    render() {
        let { mApp, dispatch } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <div className={`${zkStyles.zk_f_display_flex_col} ${zkStyles.zk_f_flex_auto_1}`} >
                <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} 
                    onShowAuditModal={this.onShowAuditModal}
                    onShowGrantModalModal={this.f_onShowGrantModalModal} />
                <AuditCompany isShow = {this.state.auditCompanyModal} 
                    optEntity = {this.state.optCompanyEntity} 
                    onShowAuditModal={this.onShowAuditModal} />
                <CGrantAuthToCompany isShow = {this.state.grantAuthModal} 
                    descName={zkToolsMsg.getInternationInfo(this.state.optCompanyEntity.name?this.state.optCompanyEntity.name:{}, lang)}
                    toTargetId={this.state.optCompanyEntity.pkId} 
                    onShowModal={this.f_onShowGrantModalModal} 
                    saveFunc={(companyId, allotAuths, callback)=>{
                        dispatch({ 
                          type: 'mSysOrgCompanyAdmin/grantAuths', 
                          companyId: companyId,
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
        let { location, dispatch, mSysOrgCompanyAdmin } = this.props;
		if (location.pathname != mSysOrgCompanyAdmin.pathname) {
			dispatch({ type: 'mSysOrgCompanyAdmin/setState', payload: { pathname: location.pathname } });
			dispatch({ 
                type: "mSysOrgCompanyAdmin/findSysOrgCompanysTree", 
                filter: {...mSysOrgCompanyAdmin.initFilter, ...mSysOrgCompanyAdmin.filter}, 
                pagination: mSysOrgCompanyAdmin.pagination, 
                callback: e => { } 
            })
		}
    }
}

export default injectIntl(connect(({ mApp, mSysOrgCompanyAdmin, loading }) => ({ mApp, mSysOrgCompanyAdmin, loading }))(CInitSysOrgCompanyIndex));

