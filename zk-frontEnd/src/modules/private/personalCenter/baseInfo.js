/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-05 15:49:12
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:31:29
*/

import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Scrollbars } from 'react-custom-scrollbars';
import ImgCrop from 'antd-img-crop';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect, ZKButton, ZKUpload, ZKCard, ZKDivider } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, ZKIcon, ZKSmartUpload, ZKDetailGrid } = ZKCustomComponents;
const { ZKDictSelect } = ZKBusinessComponents;
const { zkToolsAuth, zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkJsUtils from 'zkJsUtils';
import locales from "../../../locales/index";

// import zkStyles from 'zkFramework/style/zk.styles.less';
// import frontEndStyles from '../../frontEnd.styles.less';
import privateStyles from '../private.styles.less';

const FInitBaseInfoEdit = ({dispatch, loading, user, intl, f_onSetEditFlag})=>{

	const [form] = ZKForm.useForm();

	const f_makeObjRuls = required=>{
        let objRule = {};
        for(let index in locales){
            objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
        }
        return objRule;
    }

    const f_submit = values=>{
    	dispatch({
            'type': 'mPrivateApp/editBaseInfo', 
            'user': {...user, ...values},
            callBackOk: res=> {
            	// dispatch({ type: 'mApp/setState', payload:{ user: res.data } });
            	f_onSetEditFlag(false);
            },
            callBackErr: res=>{
            	if(res.type === globalAppConfig.resCodeType.dataValidator){
                    let errors = zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data);
                    form.setFields(errors);
                    form.scrollToField(errors[0].name);
                }
            }
        });
    }

	let spinning = loading.effects['mPrivateApp/editBaseInfo'];

	return <ZKSpin spinning={spinning === true} >
		<ZKForm form = { form } 
            initialValues = {{...user}} 
            onFinish = {f_submit} 
        >
            <ZKEditForm.Item name = "familyName" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
            	label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.familyName')} 
        		rules = {[
					zkToolsValidates.string(intl, 1, 64, true), 
                ]} 
			>
                <ZKInput />
        	</ZKEditForm.Item>
        	<ZKEditForm.Item name = "secondName" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.secondName')} 
        		rules = {[
					zkToolsValidates.string(intl, 1, 64, true), 
                ]} 
			>
                <ZKInput />
        	</ZKEditForm.Item>
        	<ZKEditForm.Item name = "nickname" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.nickname')} 
        		rules = {[
					zkToolsValidates.string(intl, 1, 64, true), 
                ]} 
			>
                <ZKInput />
        	</ZKEditForm.Item>
        	<ZKEditForm.Item name = "birthday" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.birthday')} 
        		rules = {[
                ]} 
			>
                <ZKDateFormatPicker format='YYYY-MM-DD'/>
        	</ZKEditForm.Item>
        	<ZKEditForm.Item name = "sex" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sex')} 
        		rules = {[
					zkToolsValidates.string(intl, 1, 64, true), 
                ]} 
			>
                <ZKDictSelect typeCode="sex" />
        	</ZKEditForm.Item>
        	<ZKEditForm.Item name = "telNum" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.telNum')} 
        		rules = {[
					zkToolsValidates.string(intl, 0, 64), 
                ]} 
			>
                <ZKInput />
        	</ZKEditForm.Item>
        	<ZKEditForm.Item name = "qq" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.qq')} 
        		rules = {[
					zkToolsValidates.string(intl, 0, 64), 
                ]} 
			>
                <ZKInput />
        	</ZKEditForm.Item>
        	<ZKEditForm.Item name = "wechat" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.wechat')} 
        		rules = {[
					zkToolsValidates.string(intl, 0, 64), 
                ]} 
			>
                <ZKInput />
        	</ZKEditForm.Item>
            <ZKEditForm.Item name = "address" labelCol = {{span: 5}} wrapperCol = {{span:19}} 
            	label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.address')} 
                rules = {[
                    zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                ]} 
            >
                <ZKInputJson style = {{"width":"90%"}} styleType="compact" primaryAttr={intl.locale} attrs={locales} />
            </ZKEditForm.Item>
            <ZKRow span = {24}>
                <ZKCol offset = {9} >
                    <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_submit')}</ZKButton>
                </ZKCol>
                <ZKCol >
                    <ZKButton onClick={e=>{f_onSetEditFlag(false);}}>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_cancel')}</ZKButton>
                </ZKCol>
            </ZKRow>
        </ZKForm>
        <div>&nbsp;</div>
	</ZKSpin>
}

const FInitBaseInfoDetail = ({loading, user, intl})=>{

	let spinning = loading.effects['mPrivateApp/editBaseInfo'];

	return <ZKSpin spinning={spinning === true} >
		<ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.familyName')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>{user.familyName}</ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.secondName')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>{user.secondName}</ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.nickname')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>{user.nickname}</ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.birthday')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>
            	<ZKDateFormatPicker disabled format='YYYY-MM-DD' value = {user.birthday}/>
            </ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sex')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>
            	<ZKDictSelect disabled defaultValue={user.sex} typeCode="sex" />
            </ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.telNum')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>{user.telNum}</ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.qq')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>{user.qq}</ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.wechat')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>{user.wechat}</ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
         <ZKDetailGrid.Row span={24}>
            <ZKDetailGrid.ColLabel span={5} offset = {0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.address')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue span={19}>
            	<ZKInputJson disabled style = {{"width":"90%"}}  styleType="expanding" value={user.address?user.address:{}} primaryAttr={intl.locale} attrs={locales} />
            </ZKDetailGrid.ColValue>
        </ZKDetailGrid.Row>
        <div>&nbsp;</div>
	</ZKSpin>
}

const FInitBaseInfo = ({ intl, loading, dispatch, mApp, mPrivateApp, ...props})=>{


	const maxSize = 10*1024*1024;
	const supportTypes = ['image/png', 'image/jpeg'];

	const f_getHeadUrl = user=>{
		if(!zkJsUtils.isEmpty(user.headPhoto)){
			return `/${globalAppConfig.apiPrefixFile}/fileInfo/f/getFile?__tk=${zkToolsAuth.getTicket()}&saveUuid=${user.headPhoto}`;
		}
		return "";
	}

	const [isEditFlag, setIsEditFlag] = useState(false);
	// const [userHeadUrl, setUserHeadUrl] = useState(f_getHeadUrl(mApp.user));

	const f_uploadUserHead = (file, fileList)=>{
		// console.log("[^_^:20250206-2027-001] -------------- file: ", file);
        // 'zk.front.end.tips.user.head.upload': '请上传 png、jpg、jpeg 格式照片，大小 10MB 以内',
        // 'zk.front.end.err.msg.user.head.upload.type': '请上传 png、jpg、jpeg 格式照片', 
        // 'zk.front.end.err.msg.user.head.upload.max': '上传内容超过 10MB', 

        if(supportTypes.indexOf(file.type) == -1){ // 不支持的格式
        	let errMsg = zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.user.head.upload');
        	zkToolsMsg.alertMsg(intl, null, {'type': 'error', 'msg': errMsg});
        	return false;
		}

        if(file.size > maxSize){ // 超出大小限制
        	let errMsg = zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.err.msg.user.head.upload.max');
        	zkToolsMsg.alertMsg(intl, null, {'type': 'error', 'msg': errMsg});
        	return false;
        }

        dispatch({
            type: "mPrivateApp/uploadUserHead", 
            file: file,
            user: mApp.user,
            upload: {
            	onprogress: function(event) {
                    let percent = Math.floor(event.loaded/event.total*10000);
                    // let percent = (event.loaded/event.total).toFixed(4);
                	console.log("[^_^:20250206-1926-001] onprogress: ", percent);
                	// setUploadProgress(percent);
                },
            },
            callBackOk: res=> {
                console.log("[^_^:20250206-1926-001] upload.res: ", res);
            },
            callBackErr: res=>{}
        });
		return false;
	}

	// console.log("[^_^:20250205-1725-002] -------------- mApp.user: ", mApp.user);
	let spinning = loading.effects['mPrivateApp/uploadUserHead'] || loading.effects['mPrivateApp/editBaseInfo'];
	return <Scrollbars style={{'height':'100%'}} {...props} >
		<div className={privateStyles.personal_center_head}>
            <ZKSpin spinning={spinning === true} >
                <div className = {privateStyles.personal_center_head_left}>
					<img src = {f_getHeadUrl(mApp.user)} />
					<ImgCrop rotationSlider>
						<ZKUpload className = {`${privateStyles.personal_center_head_left_upload}`}
							listType = "picture"
							maxCount = {1}
							showUploadList = {false}
							beforeUpload = {f_uploadUserHead}
						>
							<ZKIcon icon='UploadOutlined' />
						</ZKUpload>
					</ImgCrop>
                </div>
            </ZKSpin>
			<div className={privateStyles.personal_center_head_right} >
				{mApp.user.account}<br />
				{/*{mApp.user.mail}<br />*/}
			</div>			
		</div>
		<ZKCard title={<><ZKIcon icon = 'UserOutlined' />&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.personal.base.info')}</>} 
			extra = {<ZKButton disabled = {isEditFlag} onClick={e=>{setIsEditFlag(true);}}>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}</ZKButton>}>
			{isEditFlag?
				<FInitBaseInfoEdit dispatch = {dispatch} loading = {loading} user = {mApp.user} intl = {intl} f_onSetEditFlag = {flag=>{setIsEditFlag(flag);}} />:
				<FInitBaseInfoDetail loading = {loading} user = {mApp.user} intl = {intl} />}
		</ZKCard>
	</Scrollbars>
}


// export default FInitBaseInfo;
export default injectIntl(connect(({ mApp, mPrivateApp, loading }) => ({ mApp, mPrivateApp, loading }))(FInitBaseInfo));








