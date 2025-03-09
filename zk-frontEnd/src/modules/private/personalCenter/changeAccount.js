/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-06 10:05:50
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:18:38
*/

import React, { useState } from 'react';
// import { injectIntl } from 'react-intl';
// import { connect } from 'dva';
// import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents } from "zkFramework";   
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKDivider } = ZKOriginalComponents;
// const { ZKIcon } = ZKCustomComponents;
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


const FInitChangeAccount = ({ isShow, intl, loading, dispatch, mApp, onSetFlag })=>{
	const [form] = ZKForm.useForm();

	let { user } = mApp;

	let f_handleOk = e=>{
		form.submit();
	}

	let f_handleCancel = e=>{
		form.setFieldsValue({newAccount: undefined});
		onSetFlag(false);
	}

	let f_submit = values=>{
		dispatch({
			'type': 'mPrivateApp/changeAccount',
			fromData: values,
			callBackOk: res=>{ f_handleCancel(); },
			callBackErr: res=>{
				if(res.type === globalAppConfig.resCodeType.dataValidator){
					let errors = zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data);
					form.setFields(errors);
					form.scrollToField(errors[0].name);
				}
			},
		});
	}

	let spinning = loading.effects['mPrivateApp/changeAccount'];

	return <ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.account')} open={isShow}
			  onOk={f_handleOk}
			  onCancel={f_handleCancel}
			  okButtonProps = {{loading: spinning}}
			  cancelButtonProps = {{loading: spinning}}
			  width = {490}
	>
		<ZKSpin spinning={spinning === true} >
			{`${user.nickname}[${user.account}]`}
			<ZKDivider className = {privateStyles.personal_center_divider} />
			<ZKForm form={form} initialValues = {{}} onFinish = {f_submit} >
				<ZKForm.Item name ="newAccount" labelCol = {{span: 6}} wrapperCol = {{span:24}}
					label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.account')}
					rules = {[ 
						zkToolsValidates.string(intl, 1, 64, true), 
                        zkToolsValidates.username(intl)
					]} 
				>
					<ZKInput />
				</ZKForm.Item>
			</ZKForm>
		</ZKSpin>
	</ZKModal>
}


export default FInitChangeAccount;











