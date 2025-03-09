/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:05:59
* @Last Modified by: runoob
* @Last Modified time: 2024-07-31 15:59:32
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

    // 分配权限
    f_onShowGrantAuthModal = (flag, record)=>{
        this.setState({grantAuthModal:flag, optDeptEntity:record});
    };

    render() {
        let { intl, loading, mApp, mSysOrgDept, dispatch } = this.props;
        //  ${zkOrgStyles.companry_tree}
        return (
            <div className={ `${zkStyles.zk_f_main_panel} ${zkStyles.zk_f_display_flex_row}` } style={{height:'100%'}} >
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
                        saveSpinning={loading.effects["mSysOrgDept/grantAuth"]||false}
                        saveFunc={(deptId, allotAuths, callback)=>{
                            dispatch({ 
                                type: 'mSysOrgDept/grantAuth', 
                                deptId: deptId,
                                allotAuths: allotAuths,
                                callback: callback
                            });
                        }}
                    />
                </div>
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysOrgDept } = this.props;
		if (location.pathname != mSysOrgDept.pathname) {
			dispatch({ type: 'mSysOrgDept/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysOrgDept/findSysOrgDeptsTree", filter: mSysOrgDept.filter, pagination: mSysOrgDept.pagination, callback: e => { } })
		}
    }

    componentWillUnmount() {
        this.setState = ()=>false;
    }
}

export default injectIntl(connect(({ mApp, mSysOrgDept, loading }) => ({ mApp, mSysOrgDept, loading }))(CInitSysOrgDeptIndex));





