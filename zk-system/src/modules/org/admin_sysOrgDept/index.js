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
import { Scrollbars } from 'react-custom-scrollbars';
import { DownOutlined } from '@ant-design/icons';

import { Layout } from 'antd';
const { Content, Sider } = Layout;

import { ZKBusinessComponents, ZKOriginalComponents, zkTools } from 'zkFramework';
const { ZKTree, ZKSpin } = ZKOriginalComponents;
const { ZKCompanyTree } = ZKBusinessComponents;
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import GridItem from "./grid.js";
import CGrantAuth from "../grantAuth.js";

import zkStyles from 'zkFramework/style/zk.styles.less';
import zkOrgStyles from '../org.styles.less';

import locales from "../../../locales/index";

class CInitSysOrgDeptIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optDeptEntity:{},
            grantAuthModal:false,
        }
    }

    f_onSelect = (company) => {
        let { dispatch, mSysOrgDeptAdmin } = this.props;
        if(company && company.pkId){
            dispatch({ 
                type: "mSysOrgDeptAdmin/findSysOrgDeptsTree", 
                companyId: company.pkId, 
                filter: mSysOrgDeptAdmin.filter, 
                pagination: mSysOrgDeptAdmin.pagination, 
                callback: e => { } 
            });
            dispatch({ 
                type: 'mSysOrgDeptAdmin/setState', 
                payload: {
                    targetCompany: company
                }
            });
        }
    };

    // 分配权限
    f_onShowGrantAuthModal = (flag, record)=>{
        this.setState({grantAuthModal:flag, optDeptEntity:record});
    };

    render() {
        let { intl, loading, mApp, mSysOrgDeptAdmin, dispatch } = this.props;

        //  ${zkOrgStyles.companry_tree}
        return (
            <div className={ `${zkStyles.zk_f_main_panel} ${zkStyles.zk_f_display_flex_row}` } style={{height:'100%'}} >
                <div className={`${zkStyles.zk_f_left_sider} ${zkOrgStyles.zk_left_sider_border}`} style = {{'width':'200px'}}>
                    <ZKCompanyTree onSelect = {this.f_onSelect} optCompany = {mSysOrgDeptAdmin.targetCompany} />
                </div>
                {mSysOrgDeptAdmin.targetCompany.pkId?
                    <div className={`${zkStyles.zk_f_display_flex_col} ${zkStyles.zk_f_flex_auto_1}`} style = {{'width':'100px'}} >
                        <SearchItem {...this.props} locales={locales} />
                        <GridItem {...this.props} onShowGrantAuthModal={this.f_onShowGrantAuthModal} />
                        <CGrantAuth isShow = {this.state.grantAuthModal} 
                            url = {`/${globalAppConfig.apiPrefixSys}/auth/sysAuthDept/findAllotAuthPage`}
                            formatParamsFunc = {(toTargetId, params={})=>{
                                params['deptId'] = toTargetId;
                                return params;
                            }}
                            title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.grant.modal.title.dept')}
                            descName={zkToolsMsg.getInternationInfo(this.state.optDeptEntity.name?this.state.optDeptEntity.name:{}, intl.locale)}
                            toTargetId={this.state.optDeptEntity.pkId} 
                            onShowModal={this.f_onShowGrantAuthModal}
                            saveSpinning={loading.effects["mSysOrgDeptAdmin/grantAuth"]||false}
                            saveFunc={(deptId, allotAuths, callback)=>{
                                dispatch({ 
                                    type: 'mSysOrgDeptAdmin/grantAuth', 
                                    deptId: deptId,
                                    allotAuths: allotAuths,
                                    callback: callback
                                });
                            }}
                        />
                    </div>:<div></div>
                }
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysOrgDeptAdmin } = this.props;
		if (location.pathname != mSysOrgDeptAdmin.pathname) {
			dispatch({ type: 'mSysOrgDeptAdmin/setState', payload: { pathname: location.pathname } });
            // this.f_getCompany(null);
			// dispatch({ type: "mSysOrgDeptAdmin/findSysOrgDepts", filter: mSysOrgDeptAdmin.filter, pagination: mSysOrgDeptAdmin.pagination, callback: e => { } })
		}
    }

    componentWillUnmount() {
        this.setState = ()=>false;
    }
}

export default injectIntl(connect(({ mApp, mSysOrgDeptAdmin, loading }) => ({ mApp, mSysOrgDeptAdmin, loading }))(CInitSysOrgDeptIndex));



