/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-25 08:58:32
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:50
*/

import React, { Component, useState } from 'react';
import { MailOutlined, MobileOutlined } from '@ant-design/icons';

import { Space, Button } from 'antd';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKInput, ZKButton, ZKAlert, ZKTabs, ZKCard } = ZKOriginalComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import frontEndStyles from '../../frontEnd.styles.less';

const FInitFpSendVerifyCodeItem = ({intl, type, findBackWay, f_fpSendVerifyCode, ...props})=>{
	return (
		<ZKForm {...props} initialValues = {{}} onFinish = {f_fpSendVerifyCode} >
            {type === 'company'?
                <ZKForm.Item name = "companyCode" labelCol = {{span: 6}} wrapperCol = {{span:24}}
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.code')} 
                    rules = {[zkToolsValidates.string(intl, 1, 64, true), zkToolsValidates.code(intl)]} >
                    <ZKInput />
                </ZKForm.Item>:""
            }
			{findBackWay === 'mail'?
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
            <ZKForm.Item wrapperCol={{ span: 24, offset: 9}} >
                <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_next_step')}</ZKButton>
            </ZKForm.Item>
    	</ZKForm>
	);
}

const FInitFpSendVerifyCode = ({intl, dispatch, loading, type, f_nextStep, ...props})=>{

	const [findBackWay, setFindBackWay] = useState(props.findBackWay);
	const [formClassName, setFormClassName] = useState();

	let f_fpSendVerifyCode = values=>{
        dispatch({
            type: 'mPublicApp/fpSendVerifyCode', 
            formData: values,
            findBackWay: findBackWay,
            callbackOk: ()=>{
                // 请求发送验证码成功后，回调，到下一步
                f_nextStep(findBackWay, values);
            },
            callbackErr: (errors) => {
                if(errors){
                    form.setFields(errors);
                    form.scrollToField(errors[0].name);
                }
            },
        });
	}

	// 设置 findBackWay
    let f_setFindBackWay = (key, e)=>{
    	let formClassName = frontEndStyles.zk_horizontal_slide_animation_right_in;
    	if(key == 'mail'){
    		formClassName = frontEndStyles.zk_horizontal_slide_animation_left_in;
    	}
    	setFindBackWay(key);
    	setFormClassName(formClassName);
    }

    let items = [
    	{
    		key: 'mail',
    		label: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.mail'),
    		children: <FInitFpSendVerifyCodeItem 
    			className = {`${frontEndStyles.zk_horizontal_slide} ${formClassName}`} 
    			intl = {intl} 
                type = {type}
                findBackWay = "mail" 
                f_fpSendVerifyCode={f_fpSendVerifyCode} />
    	},
    	{
    		key: 'phoneNum',
    		label: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.phone'),
    		children: <FInitFpSendVerifyCodeItem 
    			className = {`${frontEndStyles.zk_horizontal_slide} ${formClassName}`} 
    			intl = {intl} 
                type = {type}
                findBackWay = "phoneNum" 
                f_fpSendVerifyCode={f_fpSendVerifyCode} />
    	} 
    ]

    let spinning = loading.effects['mPublicApp/fpSendVerifyCode'];
    return (
    	<ZKSpin spinning={spinning === true} >
            <ZKTabs type="card" tabBarGutter = {2}  className = {frontEndStyles.zk_public_tabs} 
    			items = {items}
    			activeKey = {findBackWay}
    			onTabClick = {f_setFindBackWay}
    		/>
        </ZKSpin>		
    )
}

export default FInitFpSendVerifyCode;







