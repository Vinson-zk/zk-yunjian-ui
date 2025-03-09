/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-25 09:05:31
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:50
*/

import React, { Component, useState } from 'react';
import { MailOutlined, MobileOutlined, LockOutlined} from '@ant-design/icons';

import { Space, Button } from 'antd';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKInput, ZKButton, ZKAlert, ZKTabs, ZKCard } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import frontEndStyles from '../../../frontEnd.styles.less';

const FInitRpuSendVerifyCodeItem = ({intl, registerType, f_rpuSendVerifyCode, ...props})=>{

	return (
		<ZKForm {...props} initialValues = {{}} onFinish = {f_rpuSendVerifyCode} >
        	{registerType === 'mail'?
				<ZKForm.Item name = "mail" labelCol = {{span: 6}} wrapperCol = {{span:24}}
					label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.mail')} 
					rules = {[zkToolsValidates.string(intl, 1, 64, true), zkToolsValidates.email(intl)]} >
	                <ZKInput className="" 
                        prefix = { <MailOutlined className = { frontEndStyles.zk_public_icon_color } /> }
                        placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.mail')}
					/>
	        	</ZKForm.Item> :
	        	<ZKForm.Item name = "phoneNum" labelCol = {{span: 6}} wrapperCol = {{span:24}}
					label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.phone')} 
					rules = {[zkToolsValidates.string(intl, 1, 64, true), zkToolsValidates.phone(intl)]} >
	                <ZKInput className="" 
						prefix = { <MobileOutlined className = { frontEndStyles.zk_public_icon_color } /> } 
						placeholder={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.login.lable.phoneNumber')} 
					/>
	        	</ZKForm.Item>
			}
        	<ZKForm.Item name ="password" labelCol = {{span: 6}} wrapperCol = {{span:24}}
        		label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password')}
				rules = {[ 
					{ required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.set.password') } 
				]} 
			>
				<ZKInput.Password style={{ width: '100%' }} 
					prefix = { <LockOutlined className = { frontEndStyles.zk_public_icon_color } /> }
					placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password') } 
				/>
			</ZKForm.Item>
			<ZKForm.Item name ="pwdAgain" labelCol = {{span: 6}} wrapperCol = {{span:24}}
				label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password.again')}
				dependencies={['password']}
				rules = {[ 
					{ required: true, message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.set.password.again') },
					({ getFieldValue }) => ({
					    validator(_, value) {
					        if (!value || getFieldValue('password') === value) {
					            return Promise.resolve();
					        }
					        return Promise.reject(new Error(zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.vMsg.confirm.pwd.input')));
					    },
					}),
				]} 
			>
				<ZKInput.Password style={{ width: '100%' }} 
					prefix = { <LockOutlined className = { frontEndStyles.zk_public_icon_color } /> }
					placeholder = { zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.password.again') } 
				/>
			</ZKForm.Item>
            <ZKForm.Item wrapperCol={{ span: 24, offset: 9}} >
                <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.register')}</ZKButton>
            </ZKForm.Item>
    	</ZKForm>
	);
}


const FInitRpuSendVerifyCode = ({intl, dispatch, loading, f_nextStep, ...props})=>{

	const [form] = ZKForm.useForm();

	const [registerType, setRegisterType] = useState(props.registerType);
	const [formClassName, setFormClassName] = useState();

	let f_rpuSendVerifyCode = values=>{
		// 请求发送验证码成功后，回调，到下一步
		dispatch({
            type: 'mPublicApp/rpuSendVerifyCode', 
            params: values,
            registerType: registerType,
            callbackOk: ()=>{
                f_nextStep(registerType, values);
            },
            callbackErr: (errors) => {
                if(errors){
                    form.setFields(errors);
                    form.scrollToField(errors[0].name);
                }
            },
        });
	}

	// 设置 registerType
    let f_setRegisterType = (key, e)=>{
    	let formClassName = frontEndStyles.zk_horizontal_slide_animation_right_in;
    	if(key == 'mail'){
    		formClassName = frontEndStyles.zk_horizontal_slide_animation_left_in;
    	}
    	setRegisterType(key);
    	setFormClassName(formClassName);
    }

    let items = [
    	{
    		key: 'mail',
    		label: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.mail'),
    		children: <FInitRpuSendVerifyCodeItem form={form}
    			className = {`${frontEndStyles.zk_horizontal_slide} ${formClassName}`} 
    			intl = {intl} registerType = "mail" f_rpuSendVerifyCode={f_rpuSendVerifyCode} />
    	},
    	{
    		key: 'phoneNum',
    		label: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.phone'),
    		children: <FInitRpuSendVerifyCodeItem form={form}
    			className = {`${frontEndStyles.zk_horizontal_slide} ${formClassName}`} 
    			intl = {intl} registerType = "phoneNum" f_rpuSendVerifyCode={f_rpuSendVerifyCode} />
    	} 
    ]

    let spinning = loading.effects['mPublicApp/rpuSendVerifyCode'];

    return (
    	<ZKSpin spinning={spinning === true} >
            <ZKTabs type="card" tabBarGutter = {2}  className = {frontEndStyles.zk_public_tabs} 
    			items = {items}
    			activeKey = {registerType}
    			onTabClick = {f_setRegisterType}
    		/>
        </ZKSpin>		
    )
}

export default FInitRpuSendVerifyCode;







