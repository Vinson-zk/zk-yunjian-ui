/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:05:59
* @Last Modified by: runoob
* @Last Modified time: 2024-07-31 16:00:45
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKDivider } = ZKOriginalComponents;
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import GridItem from "./grid.js";
import AuditCompany from "./auditCompany.js";
import CGrantAuthToCompany from "../grantAuthToCompany.js";

import zkStyles from 'zkFramework/style/zk.styles.less';

import locales from "../../../locales/index";

import CSysOrgCompanyEdit from "./edit.js";
import CSysOrgCompanyDetail from "./detail.js";

class CInitSysOrgCompanyIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	isEdit: false,
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
        let { mApp, intl, dispatch } = this.props;

        return (
            <div className={`${zkStyles.zk_f_display_flex_col} ${zkStyles.zk_f_flex_auto_1}`} >
            	{this.state.isEdit?
            		<CSysOrgCompanyEdit {...this.props}  company = {mApp.user.company} 
            			onOpt = {()=>{
            				this.setState({isEdit: false});
            			}}
            		/>:
            		<CSysOrgCompanyDetail {...this.props}  company = {mApp.user.company} 
            			onOpt = {()=>{
            				this.setState({isEdit: true});
            			}}
            		/>
            	}
            	<ZKDivider orientation = "left">{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.child')}</ZKDivider>
                <SearchItem {...this.props} locales={locales} />
                <GridItem {...this.props} 
                    onShowAuditModal={this.onShowAuditModal}
                    onShowGrantModalModal={this.f_onShowGrantModalModal} />
                <AuditCompany isShow = {this.state.auditCompanyModal} 
                    optEntity = {this.state.optCompanyEntity} 
                    onShowAuditModal={this.onShowAuditModal} />
                <CGrantAuthToCompany isShow = {this.state.grantAuthModal} 
                    descName={zkToolsMsg.getInternationInfo(this.state.optCompanyEntity.name?this.state.optCompanyEntity.name:{}, intl.locale)}
                    toTargetId={this.state.optCompanyEntity.pkId} 
                    onShowModal={this.f_onShowGrantModalModal} 
                    saveFunc={(companyId, allotAuths, callback)=>{
                        dispatch({ 
						  type: 'mSysOrgCompany/grantAuths', 
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
        let { location, dispatch, mSysOrgCompany } = this.props;
		if (location.pathname != mSysOrgCompany.pathname) {
			dispatch({ type: 'mSysOrgCompany/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysOrgCompany/findSysOrgCompanysTree", filter: mSysOrgCompany.filter, pagination: mSysOrgCompany.pagination, callback: e => { } })
		}
    }
}

export default injectIntl(connect(({ mApp, mSysOrgCompany, loading }) => ({ mApp, mSysOrgCompany, loading }))(CInitSysOrgCompanyIndex));

