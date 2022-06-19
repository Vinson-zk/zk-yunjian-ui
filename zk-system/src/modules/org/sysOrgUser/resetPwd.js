/*
* @Author: Vinson
* @Date:   2022-05-03 15:56:17
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-04 16:48:07
* 
* 管理修改密码；
* 
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKModal, ZKInput, ZKDivider } = ZKOriginalComponents;
// const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;

import orgStyles from "../org.styles.less";
import userStyles from "./styles.less";

class CInitSysOrgUserRestPwd extends Component {

	// 1、构造函数
	constructor(props) {
		super(props);
		this.state = {
			value:""
		};
	}

	// 关闭渠道编辑对话框
	close = ()=>{
		this.setState({value:""});
		if(this.props.onShowModal instanceof Function){
			this.props.onShowModal.call(this, false, {});
		}
	};
	// 分配
	handleOk = (e)=>{
		let { mSysOrgCompanyAdmin, dispatch } = this.props;
		dispatch({ 
		  type: 'mSysOrgUser/resetPwd', 
		  userId: this.props.user.pkId,
		  pwd: this.state.value, 
		  callback: dataObj=>{
		    this.close();
		  } 
		});
	};
	// 取消
	handleCancel = (e)=>{
		this.close();
	};
	// 修改值
	f_onChange = e=>{
		this.setState({value:e.target.value});
	};
    /** 返回 JSX 元素 */
	render() {

		let { isShow, user, intl, loading } = this.props;
		let spinning = loading.effects['mSysOrgUser/resetPwd'];
		return (
			<ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.modal.title.resetPwd')} visible={isShow}
			  onOk={this.handleOk}
			  onCancel={this.handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {390}
			  className={`${userStyles.resetPwd}`}
			>
	          <ZKSpin spinning={spinning === true} >
	          	{`${user.nickname}[${user.jobNum}][${user.account}]`}
	          	<ZKDivider className = {orgStyles.org_divider} />
	          	<ZKInput value={this.state.value} onChange={this.f_onChange} />
			  </ZKSpin>
			</ZKModal>
		)
	}
}

export default injectIntl(connect(({ loading }) => ({ loading }))(CInitSysOrgUserRestPwd));



