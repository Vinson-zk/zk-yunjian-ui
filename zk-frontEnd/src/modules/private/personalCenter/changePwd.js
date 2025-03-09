/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-05 15:49:34
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:52:52
*/

import React, { useState } from 'react';
// import { injectIntl } from 'react-intl';
// import { connect } from 'dva';
// import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";   
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKDivider } = ZKOriginalComponents;
const { ZKIcon } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;     
// const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect, ZKButton, ZKUpload, ZKCard, ZKDivider } = ZKOriginalComponents;
// const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, ZKIcon, ZKSmartUpload, ZKDetailGrid } = ZKCustomComponents;
// const { ZKDictSelect } = ZKBusinessComponents;
// const { zkToolsAuth, zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkJsUtils from 'zkJsUtils';
// import locales from "../../../locales/index";

// import zkStyles from 'zkFramework/style/zk.styles.less';
import frontEndStyles from '../../frontEnd.styles.less';
import privateStyles from '../private.styles.less';


const FInitChangePwd = ({ isShow, intl, loading, dispatch, mApp, onSetFlag })=>{
	const [form] = ZKForm.useForm();

	let { user } = mApp;

	let f_handleOk = e=>{
		form.submit();
	}

	let f_handleCancel = e=>{
		form.setFieldsValue({
			'oldPassword': undefined,
			'newPassword': undefined,
			'pwdAgain': undefined,
		});
		onSetFlag(false);
	}

	let f_submit = values=>{
		zkJsUtils.delObjAttr(values, 'pwdAgain');
		dispatch({
			'type': 'mPrivateApp/changePwd',
			fromData: values,
			callBackOk: res=>{ 
				f_handleCancel(); 
			},
			callBackErr: res=>{
				if(res.type === globalAppConfig.resCodeType.dataValidator){
                    let errors = zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data);
                    form.setFields(errors);
                    form.scrollToField(errors[0].name);
                }
			},
		});
	}

	let spinning = loading.effects['mPrivateApp/changePwd'];

	return <ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.password')} open={isShow}
			  onOk={f_handleOk}
			  onCancel={f_handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {490}
			  // className={`${userStyles.resetPwd}`}
	>
		<ZKSpin spinning={spinning === true} >
			{`${user.nickname}[${user.account}]`}
			<ZKDivider className = {privateStyles.personal_center_divider} />
			<ZKForm form={form} initialValues = {{}} onFinish = {f_submit} >
	        	<ZKForm.Item name ="oldPassword" labelCol = {{span: 6}} wrapperCol = {{span:24}}
	        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.old.password')}
					rules = {[ 
						{ required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.input.password') } 
					]} 
				>
					<ZKInput.Password style={{ width: '100%' }} 
						prefix = { <ZKIcon icon = 'LockOutlined' className = { frontEndStyles.zk_public_icon_color } /> }
						placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.old.password') } 
					/>
				</ZKForm.Item>
	        	<ZKForm.Item name ="newPassword" labelCol = {{span: 6}} wrapperCol = {{span:24}}
	        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.new.password')}
					rules = {[ 
						{ required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.set.password') } 
					]} 
				>
					<ZKInput.Password style={{ width: '100%' }} 
						prefix = { <ZKIcon icon = 'LockOutlined' className = { frontEndStyles.zk_public_icon_color } /> }
						placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.new.password') } 
					/>
				</ZKForm.Item>
				<ZKForm.Item name ="pwdAgain" labelCol = {{span: 6}} wrapperCol = {{span:24}}
					label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.new.password.again')}
					dependencies={['newPassword']}
					rules = {[ 
						{ required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.set.password.again') },
						({ getFieldValue }) => ({
						    validator(_, value) {
						        if (!value || getFieldValue('newPassword') === value) {
						            return Promise.resolve();
						        }
						        return Promise.reject(new Error(zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.confirm.pwd.input')));
						    },
						}),
					]} 
				>
					<ZKInput.Password style={{ width: '100%' }} 
						prefix = { <ZKIcon icon = 'LockOutlined' className = { frontEndStyles.zk_public_icon_color } /> }
						placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.new.password.again') } 
					/>
				</ZKForm.Item>
	    	</ZKForm>
		</ZKSpin>
	</ZKModal>
}


export default FInitChangePwd;






