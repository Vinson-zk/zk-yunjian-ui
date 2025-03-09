/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-25 08:59:09
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:50
*/

import React, { Component,  } from 'react';
import { MailOutlined, MobileOutlined, LockOutlined } from '@ant-design/icons';

import { Space, Button } from 'antd';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKInput, ZKButton, ZKAlert, ZKTabs, ZKCard } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import frontEndStyles from '../../frontEnd.styles.less';

const FInitForgotPwdSubmitVerifyCode = ({intl, dispatch, loading, history, findBackWay, formData={}, fpVerifyCodeWaitTime, ...props})=>{
	let labelVerifyCode = "";
	if(findBackWay == 'mail'){
		labelVerifyCode = zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.mail');
	}else if(findBackWay == 'phoneNum'){
		labelVerifyCode = zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.verify.code.phone');
	}

    let f_fpSubmitVerifyCode = values=>{
        dispatch({
            type: 'mPublicApp/fpSubmitVerifyCode', 
            formData: values,
            callbackOk: (res)=>{
                history.push("/");
            },
        });
    }

    let f_fpSendVerifyCodeAgain = ()=>{
        // againFlag 1-重发邮箱验证码；2-重发手机验证码；其他-不发；
        let againFlag = findBackWay == 'mail'?1:2;
        dispatch({type: 'mPublicApp/fpSendVerifyCodeAgain', againFlag: againFlag, callBack: ()=>{} });
    }

    let spinning = loading.effects['mPublicApp/fpSubmitVerifyCode']
        || loading.effects['mPublicApp/fpSendVerifyCodeAgain'];

	return (
        <ZKSpin spinning={spinning === true} >
    		<ZKForm {...props} onFinish = {f_fpSubmitVerifyCode} >
            	<ZKForm.Item labelCol = {{span: 6}} wrapperCol = {{span:24}} >
        			<ZKAlert style = {{margin: '0 auto'}} type="warning" showIcon 
        				message={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.verify.code.alert')} />
            	</ZKForm.Item>
                {findBackWay == 'mail'?
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
                    	<ZKButton onClick={()=>{f_fpSendVerifyCodeAgain(findBackWay)}} className="" disabled = {fpVerifyCodeWaitTime > 0} type="primary">
                    			{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_sendVerifyCode.again')}{fpVerifyCodeWaitTime>0?`(${fpVerifyCodeWaitTime})`:""}
                    	</ZKButton>
                    </Space.Compact>
            	</ZKForm.Item>
                <ZKForm.Item name ="newPassword" labelCol = {{span: 6}} wrapperCol = {{span:24}}
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.new.password')}
                    rules = {[ 
                        { required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.set.password') } 
                    ]} 
                >
                    <ZKInput.Password style={{ width: 280 }} 
                        prefix = { <LockOutlined className = { frontEndStyles.zk_public_icon_color } /> }
                        placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password') } 
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
                    <ZKInput.Password style={{ width: 280 }} 
                        prefix = { <LockOutlined className = { frontEndStyles.zk_public_icon_color } /> }
                        placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password.again') } 
                    />
                </ZKForm.Item>
                <ZKForm.Item wrapperCol={{ span: 24, offset: 9}} >
                    <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_submit')}</ZKButton>
                </ZKForm.Item>
        	</ZKForm>
        </ZKSpin>
	);
}

export default FInitForgotPwdSubmitVerifyCode;


