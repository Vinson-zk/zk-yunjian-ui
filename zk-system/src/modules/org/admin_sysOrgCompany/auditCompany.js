/*
* @Author: Vinson
* @Date:   2022-04-15 14:32:51
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-07 17:22:19
* 
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
		let { mSysOrgCompanyAdmin, dispatch } = this.props;
		dispatch({ 
		  type: 'mSysOrgCompanyAdmin/auditCompany', 
		  companyId: this.props.optEntity.pkId,
		  status: this.state.value, 
		  callback: dataObj=>{
		    this.close();
		    dispatch({ type: "mSysOrgCompanyAdmin/findSysOrgCompanysTree", filter: mSysOrgCompanyAdmin.filter, pagination: mSysOrgCompanyAdmin.pagination, callback: e => { } })
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

		let { location, mApp, mSysOrgCompanyAdmin, isShow, optEntity, intl, loading } = this.props;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = !optEntity || loading.effects['mSysOrgCompanyAdmin/auditCompany'];

		return (
			<ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.audit')} visible={isShow}
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

export default injectIntl(connect(({ mApp, mSysOrgCompanyAdmin, loading }) => ({ mApp, mSysOrgCompanyAdmin, loading }))(CInitSysOrgCompanyAudit));


