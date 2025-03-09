/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-25 09:05:43
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:50
*/


import React, { Component } from 'react';
import { MailOutlined, MobileOutlined } from '@ant-design/icons';

import { Space, Button } from 'antd';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKInput, ZKButton, ZKAlert, ZKTabs, ZKCard } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import frontEndStyles from '../../../frontEnd.styles.less';

const FInitRpuSubmitVerifyCode = ({intl, dispatch, loading, history, registerType, formData={}, rpuVerifyCodeWaitTime, ...props})=>{
	let labelVerifyCode = "";
	if(registerType == 'mail'){
		labelVerifyCode = zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.mail');
	}else if(registerType == 'phoneNum'){
		labelVerifyCode = zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.phone');
	}

    // 再次发送邮箱验证码 
    const f_rpuSendVerifyCodeAgain = registerType=>{
        let againFlag = -1;
        if(registerType == 'mail'){
            againFlag = 1;
        }else if(registerType == 'phoneNum'){
            againFlag = 2;
        }
        dispatch({type: 'mPublicApp/rpuSendVerifyCodeAgain', againFlag: 1, callBack: ()=>{} });
    }

    // 提交验证码
    const f_rpuSubmitVerifyCode = (values)=>{
        dispatch({
            type: 'mPublicApp/rpuSubmitVerifyCode', 
            verifyCode: values.verifyCode,
            callbackOk: (res)=>{
                dispatch({
                    type: 'mPublicApp/loginResDispose', 
                    res: res,
                    history: history
                });
            },
        });
    }

    let spinning = loading.effects['mPublicApp/rpuSendVerifyCodeAgain']
                    || loading.effects['mPublicApp/rpuSubmitVerifyCode'];

	return (
        <ZKSpin spinning={spinning === true} >
    		<ZKForm {...props} onFinish = {f_rpuSubmitVerifyCode} >
            	<ZKForm.Item labelCol = {{span: 6}} wrapperCol = {{span:24}} >
        			<ZKAlert style = {{margin: '0 auto'}} type="warning" showIcon 
        				message={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.alert')} />
            	</ZKForm.Item>
                {registerType == 'mail'?
                    <ZKForm.Item name = "mail" labelCol = {{span: 6}} wrapperCol = {{span:24}}
                        initialValue = {formData.mail} label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.mail')}>
                        <ZKInput disabled = {true} prefix = { <MailOutlined className = { frontEndStyles.zk_public_icon_color } /> } />
                    </ZKForm.Item> :
                    <ZKForm.Item name = "phoneNum" labelCol = {{span: 6}} wrapperCol = {{span:24}}
                        initialValue = {formData.phoneNum} label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.phone')}>
                        <ZKInput disabled = {true} prefix = { <MobileOutlined className = { frontEndStyles.zk_public_icon_color } /> }  />
                    </ZKForm.Item>
                }
            	<ZKForm.Item name = "verifyCode" labelCol = {{span: 6}} wrapperCol = {{span:24}}
            		label = {labelVerifyCode}
            		rules = {[ zkToolsValidates.string(intl, 1, 6, true) ]} 
            	>
                    <Space.Compact style={{width: '100%', }}>
                    	<ZKInput placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.mail') } />
                    	<ZKButton onClick={()=>{f_rpuSendVerifyCodeAgain(registerType)}} className="" disabled = {rpuVerifyCodeWaitTime > 0} type="primary">
                    			{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode.again')}{rpuVerifyCodeWaitTime>0?`(${rpuVerifyCodeWaitTime})`:""}
                    	</ZKButton>
                    </Space.Compact>
            	</ZKForm.Item>
                <ZKForm.Item wrapperCol={{ span: 24, offset: 9}} >
                    <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_submit')}</ZKButton>
                </ZKForm.Item>
        	</ZKForm>
        </ZKSpin>
	);
}

export default FInitRpuSubmitVerifyCode;








