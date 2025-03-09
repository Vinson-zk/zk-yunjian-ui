/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-06 10:05:02
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:18:39
*/

import React, { useState } from 'react';
// import { injectIntl } from 'react-intl';
// import { connect } from 'dva';
// import { Scrollbars } from 'react-custom-scrollbars';
import { Space } from 'antd';

import { zkTools, ZKOriginalComponents, ZKCustomComponents } from "zkFramework";   
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKDivider, ZKButton } = ZKOriginalComponents;
// const { ZKEditForm } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates } = zkTools;     
// const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect, ZKButton, ZKUpload, ZKCard, ZKDivider } = ZKOriginalComponents;
// const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, ZKIcon, ZKSmartUpload, ZKDetailGrid } = ZKCustomComponents;
// const { ZKDictSelect } = ZKBusinessComponents;
// const { zkToolsAuth, zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkJsUtils from 'zkJsUtils';
// import locales from "../../../locales/index";

// import zkStyles from 'zkFramework/style/zk.styles.less';
// import frontEndStyles from '../../frontEnd.styles.less';
import privateStyles from '../private.styles.less';


const FInitChangeMail = ({ isShow, intl, loading, dispatch, mApp, mPrivateApp, onSetFlag })=>{
	const [form] = ZKForm.useForm();

	let { user } = mApp;

	// 提交验证码
	let f_handleOk = e=>{
		form.validateFields(['newMail', 'mailVerifyCode'], {}).then(values=> {
			dispatch({
				'type': 'mPrivateApp/cmSubmitVerifyCode',
				'verifyCode': values.mailVerifyCode,
				'callBackOk': res=>{ 
					dispatch({ type: "mApp/loginUserInfo" });
					// dispatch({ type: "mPrivateApp/setState", payload: { 'mailCodeWaitTime': 0} });
					f_handleCancel(); 
				},
				'callBackErr': res=>{},
			});
		}).catch(err=>{
			if(console)console.error("[^_^:20250207-1727-001] f_handleOk.err: ", err);
		});
	}

	let f_handleCancel = e=>{
		form.setFieldsValue({'newMail': undefined, 'mailVerifyCode': undefined});
		setFirstSend(true);
		onSetFlag(false);
	}
	// 发送邮箱验证码
	let f_sendVerifyCode = ()=>{
		// console.log("[^_^:20250207-1408-001] f_sendVerifyCode.isFirstSend: ", isFirstSend);
		if(isFirstSend){
			// 第一次发送验证码
			form.validateFields(['newMail'], {}).then(values=> {
				// console.log("[^_^:20250207-1708-001] f_sendVerifyCode: ", values);
				dispatch({
					'type': 'mPrivateApp/cmSendVerifyCode',
					'newMail': values.newMail,
					'callBackOk': res=>{ 
						setFirstSend(false);
					 },
					'callBackErr': res=>{
						if(res.type === globalAppConfig.resCodeType.dataValidator){
							let errors = zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data);
							form.setFields(errors);
							form.scrollToField(errors[0].name);
						}
					},
				});
			}).catch(err=>{
				if(console)console.error("[^_^:20250207-1708-002] f_sendVerifyCode.err: ", err);
			});
		}else{
			// 不是第一次发送验证码
			dispatch({
				'type': 'mPrivateApp/sendVerifyCodeAgain',
				'againFlag': 1,
				'callBackOk': res=>{},
				'callBackErr': res=>{},
			});
		}
	}

	const [isFirstSend, setFirstSend] = useState(true);

	let spinning = loading.effects['mPrivateApp/cmSendVerifyCode'] 
		|| loading.effects['mPrivateApp/sendVerifyCodeAgain'] 
		|| loading.effects['mPrivateApp/cpSubmitVerifyCode'];

	return <ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.mail')} open={isShow}
			  onOk={f_handleOk}
			  onCancel={f_handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {490}
	>
		<ZKSpin spinning={spinning === true} >
			{`${user.nickname}[${user.account}]`}
			<ZKDivider className = {privateStyles.personal_center_divider} />
			<ZKForm form={form} initialValues = {{}} >
				<ZKForm.Item name = "newMail" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.mail.new')} 
					rules = {[
						zkToolsValidates.string(intl, 1, 64, true),
						zkToolsValidates.email(intl)
					]} 
				>
					<ZKInput disabled = {(isFirstSend && mPrivateApp.mailCodeWaitTime <= 0)?false:true} placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.input.mail.new') }  />
				</ZKForm.Item>
				<ZKForm.Item name = "mailVerifyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.mail')}
					rules = {[ 
						zkToolsValidates.string(intl, 1, 6, true)
					]} 
				>
					<ZKInput placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.mail') } 
						className={privateStyles.personal_center_send_input}
						addonAfter = {
							<ZKButton onClick={f_sendVerifyCode} type="primary"
								className={privateStyles.personal_center_send_btn} 
								disabled = {mPrivateApp.mailCodeWaitTime > 0} >
								{isFirstSend?
									zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode'):
									zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode.again')}
								{mPrivateApp.mailCodeWaitTime>0?`(${mPrivateApp.mailCodeWaitTime})`:""}
							</ZKButton>
						}
					/>
				</ZKForm.Item>
				{/*  
				<ZKForm.Item name = "mailVerifyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.mail')}
					rules = {[ 
						zkToolsValidates.string(intl, 1, 6, true)
					]} 
				>
					<Space.Compact style={{width: '100%', }}>
						<ZKInput placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.mail') } />
						<ZKButton onClick={f_sendVerifyCode} className="" disabled = {mPrivateApp.mailCodeWaitTime > 0} type="primary">
							{isFirstSend?
								zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode'):
								zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode.again')}
							{mPrivateApp.mailCodeWaitTime>0?`(${mPrivateApp.mailCodeWaitTime})`:""}
						</ZKButton>
					</Space.Compact>
				</ZKForm.Item>
				*/}
			</ZKForm>
		</ZKSpin>
	</ZKModal>
}


export default FInitChangeMail;









