/*
* @Author: Vinson
* @Date:   2022-05-18 01:13:42
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-22 01:35:55
* 
* 向第三方平台授权
* 
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Form, Icon, Result, Typography } from "antd";
import { SmileOutlined } from '@ant-design/icons';
const { Paragraph, Text } = Typography;

import locales from "../../../locales/index";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKModal, ZKInput, ZKRadio, ZKSelect } = ZKOriginalComponents;
// const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;

const { zkToolsMsg, zkToolsValidates } = zkTools;

import zkStyles from 'zkFramework/css/styles.less';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

class CInitThridPartyAuth extends Component {

	formRef = React.createRef();

	// 1、构造函数
	constructor(props) {
		super(props);
		this.state = {	
			statusFalg: 0, // 授权状态标识；0-申请授权；1-返回了授权结果；
			authUrl: undefined,

		};
	}

	// 关闭渠道编辑对话框
	close = ()=>{
		this.setState({statusFalg: 0, authUrl: undefined});
		this.props.onShowModal.call(this, false);
	};
	// 分配
	handleOk = (e)=>{
		if(this.state.statusFalg == 1){
			this.close();
			return;
		}

		this.formRef.current.validateFields().then(values=>{
			console.log("[^_^:20220518-1101-001] 向第三方授权，values：", values);
			let { dispatch } = this.props;
			dispatch({ 
			  type: 'mOfficialAccounts/accountAuth', 
			  values: values, 
			  callback: authUrl=>{
			    // var tw = window.open();
				// tw.location.href = data.data
				if(values.byeType == 1){
					this.setState({statusFalg:1, authUrl: authUrl});
				}else{
					window.location.href=authUrl;
				}
			  } 
			});
		});
	};
	// 取消
	handleCancel = (e)=>{
		// console.log(e);
		this.close();
	};

	// 复制到剪贴版
	f_copy = (value)=>{
		let { intl } = this.props;
		document.designMode = 'on';
		let bool = document.execCommand('copy');
		if (!bool) {
		  zkToolsMsg.alertMsg(intl, null, {
		    type: "error",
		    msg: `${zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_copy")}${zkToolsMsg.msgFormatByIntl(intl, "global.app.msg.fail")}`,
		  });
		} else {
		  let inputEle = document.createElement('input');
		  document.body.appendChild(inputEle);
		  inputEle.setAttribute('value', value);
		  inputEle.setAttribute('readonly', 'readonly');
		  inputEle.select();
		  document.execCommand('copy');
		  document.body.removeChild(inputEle);

		  zkToolsMsg.alertMsg(intl, null, {
		    type: "success",
		    msg: `${zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_copy")}${zkToolsMsg.msgFormatByIntl(intl, "global.app.msg.success")}`,
		  });
		}
		document.designMode = 'off';
	}

    /** 返回 JSX 元素 */
	render() {

		let { location, isShow, intl, loading } = this.props;

		let spinning = loading.effects['mOfficialAccounts/accountAuth'];
		return (
			<ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth')} visible={isShow}
			  onOk={this.handleOk}
			  onCancel={this.handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {660}
			>
			  {this.state.statusFalg == 0?
	          <ZKSpin spinning={spinning === true} >
	          		<Form {...formItemLayout} className={`${zkStyles.zk_modal_padding}`} ref = {this.formRef} >
						<Form.Item  name="byeType" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.byeType')}
							initialValue={0} rules = {[ zkToolsValidates.integer(intl, 0, 1)]} 
						>
							<ZKRadio.Group>
							    <ZKRadio value={0} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.byeType.0')}</ZKRadio>
							    <ZKRadio value={1} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.byeType.1')}</ZKRadio>
							</ZKRadio.Group>
						</Form.Item>
						<Form.Item name="companyCode" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.companyCode')}
							rules = {[ zkToolsValidates.string(intl, 1, 64, true)]} 
						>
							<ZKInput className="" style={{'width':'230'}} placeholder = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.companyCode')} />
						</Form.Item>
						<Form.Item name="wxAccountAppid" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxAccountAppid')}
							initialValue={""} rules = {[ zkToolsValidates.string(intl, 1, 64)]} 
						>
							<ZKInput className="" style={{'width':'230'}} placeholder= {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxAccountAppid')} /> 
						</Form.Item>
						<Form.Item name="bizAppid" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.bizAppid')}
							initialValue={""} rules = {[ zkToolsValidates.string(intl, 1, 64)]} 
						>
							<ZKInput placeholder = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.bizAppid')} />
						</Form.Item>
						<Form.Item name="authType" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.authType')}
							rules = {[ zkToolsValidates.string(intl, 1, 1, false)]} initialValue={"3"} 
						>
							<ZKSelect >
							    <ZKSelect.Option value={"1"} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.authType.1')}</ZKSelect.Option>
							    <ZKSelect.Option value={"2"} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.authType.2')}</ZKSelect.Option>
							    <ZKSelect.Option value={"3"} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.authType.3')}</ZKSelect.Option>
							</ZKSelect>
						</Form.Item>
					</Form>
			  </ZKSpin>
			  :
			  <div className={`${zkStyles.zk_modal_padding} ${zkStyles.zk_unselect}`} onClick={()=>{this.f_copy(this.state.authUrl)}} >
			  	<Paragraph>
			  		<Text strong style={{fontSize: 14}}>{this.state.authUrl}</Text>
			    </Paragraph>
			  	<Paragraph style={{'color':'red'}}>
			        {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth.url.msg')}
			    </Paragraph>
			  </div>
			  }
			</ZKModal>
		)
	}
}

export default injectIntl(connect(({ mApp, loading }) => ({ mApp, loading }))(CInitThridPartyAuth));



