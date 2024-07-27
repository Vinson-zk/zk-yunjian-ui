/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 19:04:44
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 19:05:31

* 审核公司
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKModal, ZKRadio } = ZKOriginalComponents;
// const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;

const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;

class CInitSysOrgCompanyAudit extends Component {

	// 1、构造函数
	constructor(props) {
		super(props);
		this.state = {
			value:1
		};
	}

	// 关闭渠道编辑对话框
	close = ()=>{
		this.props.onShowAuditModal.call(this, false, {});
	};
	// 分配
	handleOk = (e)=>{
		let { mSysOrgCompany, dispatch } = this.props;
		dispatch({ 
		  type: 'mSysOrgCompany/auditCompany', 
		  companyId: this.props.optEntity.pkId,
		  status: this.state.value, 
		  callback: dataObj=>{
		    this.close();
		    dispatch({ type: "mSysOrgCompany/findSysOrgCompanysTree", filter: mSysOrgCompany.filter, pagination: mSysOrgCompany.pagination, callback: e => { } })
		  } 
		});
	};
	// 取消
	handleCancel = (e)=>{
		// console.log(e);
		this.close();
	};

    /** 返回 JSX 元素 */
	render() {

		let { location, mApp, mSysOrgCompany, isShow, optEntity, intl, loading } = this.props;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = !optEntity || loading.effects['mSysOrgCompany/auditCompany'];

		return (
			<ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.audit')} open={isShow}
			  onOk={this.handleOk}
			  onCancel={this.handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {390}
			>
	          <ZKSpin spinning={spinning === true} >
	          	<ZKRadio.Group name="auditCompanyRadiogroup" defaultValue={optEntity.status}
	          		onChange = {e=>this.setState({value:e.target.value})}
	          		style = {{'width':'100%', 'height':'100px', 'lineHeight':'100px', 'textAlign':'center'}}
	          	>
				    <ZKRadio value={0} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.0')}</ZKRadio>
				    <ZKRadio value={1} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.1')}</ZKRadio>
				</ZKRadio.Group>
			  </ZKSpin>
			</ZKModal>
		)
	}

}

export default injectIntl(connect(({ mApp, mSysOrgCompany, loading }) => ({ mApp, mSysOrgCompany, loading }))(CInitSysOrgCompanyAudit));



