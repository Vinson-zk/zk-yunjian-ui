/*
 * 公司审核中
 * @Author: Vinson
 * @Email: binary_space@126.com
 * @QQ: 1035862795
 * @Wechat: 1035862795
 * @Date: 2025-01-20 16:40:35
 * @Last Modified by: vinson
 * @Last Modified time: 2025-02-06 16:19:50
 */


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Image, Icon } from "antd";

import locales from "../../../../locales/index";
import { zkTools, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKRow, ZKCol, } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsAuth } = zkTools;

import zkJsUtils from 'zkJsUtils';

import styles from './styles.less';

const photoUrlPrifix = '/' + globalAppConfig.apiPrefixSys + "/org/sysOrgCompany/n/certPhoto/";

class CInitRegisterCompanyAuditIng extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        // let { mPublicApp } = this.props;
        // let { rcOptEntity={} } = mPublicApp;
        // this.f_assertToRouter(rcOptEntity);
    };

    // 断言路由跳转
    f_assertToRouter = (rcOptEntity={})=>{
        if(!zkJsUtils.isEmpty(rcOptEntity, true)){
            let { history } = this.props; 
            if(rcOptEntity.status == 4){
                history.push("/_register_company/2");
            }else if(rcOptEntity.status != 2 && rcOptEntity.status != 3){
                history.push("/");
            }
        }
    }

    /** 返回 JSX 元素 */
    render() {
        let { intl, mPublicApp } = this.props;
        let { rcOptEntity={} } = mPublicApp;
        this.f_assertToRouter(rcOptEntity);

    	let spinning = false;
        // 
        return (
            <ZKSpin spinning={spinning === true} >
                <div className = {styles.zk_audit_div_panel}>
                    <div>
                        <div className = {styles.zk_audit_conten_row}>
                            <div className = {styles.zk_audit_conten_logo_div} >
                                <img src = {photoUrlPrifix+'3?__tk=' + zkToolsAuth.getTicket()} />
                            </div>
                            <h2>{rcOptEntity.name?zkToolsMsg.getInternationInfo(rcOptEntity.name):""}</h2>
                            <h3>{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.audit.ing')}</h3>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                </div>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { mPublicApp, dispatch, history, match } = this.props; 
        let { rcOptEntity } = mPublicApp; 
        if(rcOptEntity === undefined){
            // 从令牌中取提交的公司信息
            dispatch({ 
                type: 'mPublicApp/getCompanyInfoByTk', 
                callbackOk: rcOptEntity=>{
                    // this.f_assertToRouter(rcOptEntity);
                },
                callbackErr: ()=>{
                    // 从令牌中取提交的公司信息失败
                    history.push("/");
                    zkToolsAuth.removeTicket();
                }
            });
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {

    }

}

export default injectIntl(connect(({ mPublicApp, loading }) => ({ mPublicApp, loading }))(CInitRegisterCompanyAuditIng));







