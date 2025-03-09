/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-06 09:56:43
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:32:11
*/

import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKRow, ZKCol,  ZKCard, ZKDivider } = ZKOriginalComponents;
const { ZKIcon, } = ZKCustomComponents;
// const { ZKDictSelect } = ZKBusinessComponents;
const { zkToolsMsg } = zkTools;

import zkJsUtils from 'zkJsUtils';
import locales from "../../../locales/index";

// import zkStyles from 'zkFramework/style/zk.styles.less';
// import frontEndStyles from '../../frontEnd.styles.less';
import privateStyles from '../private.styles.less';

import CChangePwd from './changePwd.js';
import CChangeAccount from './changeAccount.js';
import CChangeMail from './changeMail.js';
import CChangePhoneNum from './changePhoneNum.js';
import CLoginReordList from './loginRecordList.js';
import CCloseAccount from './closeAccount.js';

const FInitAccountSettings = ({ intl, loading, dispatch, mApp, mPrivateApp, ...props})=>{

	const colLabelProps = {
		span: 4,
		className: privateStyles.personal_center_account_setting_label
	}
	const colTipsProps = {
		span: 15,
		className: privateStyles.personal_center_account_setting_tips
	}
	const colOptProps = {
		span: 5,
		className: privateStyles.personal_center_account_setting_opt
	}
	// ---------------------------------------------------
	// 手机显示处理
	const f_getDisplayPhoneNum = phoneNum=>{
		if(phoneNum){
			if(phoneNum.length > 10){
				return phoneNum.replace(/(\d{3})(\d*)(\d{4})/, '$1****$3');
			}else{
				return phoneNum.replace(/(\d{1})(\d*)(\d{2})/, '$1****$3');
			}
		}
		return phoneNum;
	}
	// 邮箱显示处理
	const f_getDisplayMail = mail=>{
		if(mail){
			return mail.replace(/(\S{2})([^@]*)/, '$1***');
		}
		return mail;
	}
	// 注销账号

	const [isChangePwdFlag, setIsChangePwdFlag] = useState(false);
	const [isChangeAccountFlag, setIsChangeAccountFlag] = useState(false);
	const [isChangeMailFlag, setIsChangeMailFlag] = useState(false);
	const [isChangePhoneFlag, setIsChangePhoneFlag] = useState(false);
	const [isLoginRecordListFlag, setIsLoginRecordListFlag] = useState(false);
	const [isCloseAccountFlag, setIsCloseAccountFlag] = useState(false);

	return <Scrollbars style={{'height':'100%'}} {...props} >
		<ZKCard title={<><ZKIcon icon = 'SettingOutlined' />&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.personal.settings')}</>} >
			<ZKRow span = {24} >
				<CChangePwd isShow = {isChangePwdFlag} onSetFlag={flag=>setIsChangePwdFlag(flag)} 
					intl = {intl} loading = {loading} dispatch = {dispatch} mApp = {mApp} />
				<ZKCol {...colLabelProps} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password')}</ZKCol>
				<ZKCol {...colTipsProps} >&nbsp;</ZKCol>
				<ZKCol {...colOptProps} >
					<span onClick = {e=>setIsChangePwdFlag(true)}>
						{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.password')}
					</span>
				</ZKCol>
			</ZKRow>
			<ZKDivider />
			<ZKRow span = {24} >
				<CChangeAccount isShow = {isChangeAccountFlag} onSetFlag={flag=>setIsChangeAccountFlag(flag)} 
					intl = {intl} loading = {loading} dispatch = {dispatch} mApp = {mApp} />
				<ZKCol {...colLabelProps} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.account')}</ZKCol>
				<ZKCol {...colTipsProps} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.change.account')}</ZKCol>
				<ZKCol {...colOptProps} >
					<span onClick = {e=>setIsChangeAccountFlag(true)}>
						{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.account')}
					</span>
				</ZKCol>
			</ZKRow>
			<ZKDivider />
			<ZKRow span = {24} >
				<CChangeMail isShow = {isChangeMailFlag} onSetFlag={flag=>setIsChangeMailFlag(flag)} 
					intl = {intl} loading = {loading} dispatch = {dispatch} mApp = {mApp} mPrivateApp = {mPrivateApp} />
				<ZKCol {...colLabelProps} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.mail')}</ZKCol>
				<ZKCol {...colTipsProps} >
					{f_getDisplayMail(mApp.user.mail)}
				</ZKCol>
				<ZKCol {...colOptProps} >
					<span onClick = {e=>setIsChangeMailFlag(true)}>
						{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.mail')}
					</span>
				</ZKCol>
			</ZKRow>
			<ZKDivider />
			<ZKRow span = {24} >
				<CChangePhoneNum isShow = {isChangePhoneFlag} onSetFlag={flag=>setIsChangePhoneFlag(flag)} 
					intl = {intl} loading = {loading} dispatch = {dispatch} mApp = {mApp} mPrivateApp = {mPrivateApp} />
				<ZKCol {...colLabelProps} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.phone')}</ZKCol>
				<ZKCol {...colTipsProps} >
					{f_getDisplayPhoneNum(mApp.user.phoneNum)}
				</ZKCol>
				<ZKCol {...colOptProps} >
					<span onClick = {e=>setIsChangePhoneFlag(true)}>
						{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.change.phone')}
					</span>
				</ZKCol>
			</ZKRow>
			<ZKDivider />
			<ZKRow span = {24} >
				<CLoginReordList isShow = {isLoginRecordListFlag} onSetFlag={flag=>setIsLoginRecordListFlag(flag)} 
					intl = {intl} loading = {loading} dispatch = {dispatch} mApp = {mApp} />
				<ZKCol {...colLabelProps} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.login.record')}</ZKCol>
				<ZKCol {...colTipsProps}>&nbsp;</ZKCol>
				<ZKCol {...colOptProps}>
					<span onClick = {e=>setIsLoginRecordListFlag(true)}>
						{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.login.record.list')}
					</span>
				</ZKCol>
			</ZKRow>
			<ZKDivider />
			<ZKRow span = {24} >
				<CCloseAccount isShow = {isCloseAccountFlag} onSetFlag={flag=>setIsCloseAccountFlag(flag)} 
					intl = {intl} loading = {loading} dispatch = {dispatch} mApp = {mApp} />
				<ZKCol {...colLabelProps} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.close.account')}</ZKCol>
				<ZKCol {...colTipsProps} >&nbsp;</ZKCol>
				<ZKCol {...colOptProps} >
					<span onClick = {e=>setIsCloseAccountFlag(true)}>
						{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.close.account.immediately')}
					</span>
				</ZKCol>
			</ZKRow>
		</ZKCard>
	</Scrollbars>
}


// export default FInitAccountSettings;
export default injectIntl(connect(({ mApp, mPrivateApp, loading }) => ({ mApp, mPrivateApp, loading }))(FInitAccountSettings));







