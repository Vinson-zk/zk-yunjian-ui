/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-31 14:06:08
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:50
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Scrollbars } from 'react-custom-scrollbars';

import { Space, Button } from 'antd';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKInput, ZKButton, ZKAlert, ZKTabs, ZKCard, ZKSteps } = ZKOriginalComponents;
const { ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkStyles from 'zkFramework/style/zk.styles.less';
import frontEndStyles from '../../../frontEnd.styles.less';
import styles from './styles.less';

import CRpuSendVerifyCode from './rpuSendVerifyCode.js';
import CRpuSubmitVerifyCode from './rpuSubmitVerifyCode.js';

class CInitRegisterPersonalUser extends Component {

    // formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        let { match } = props; 
        this.state = {
        	registerType: match.params.registerType,
        	step: 0,
        	formData: {},
        }
    };
    
    // 提交注册，发送验证码
    f_nextStep = (registerType, values)=>{
        // console.log("[^_^:20250205-1044-001] f_nextStep: ", registerType, values);
     	this.setState({'step': this.state.step + 1, 'registerType': registerType, formData: values});
    }

    /** 返回 JSX 元素 */
    render() {

        let { dispatch, history, intl, location, mPublicApp, loading } = this.props; 
        let { rpuVerifyCodeWaitTime } = mPublicApp;

        let stepItems = [{
            title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.register.personal.user.step.input'),
            content: <CRpuSendVerifyCode 
                        intl = {intl} 
                        dispatch = {dispatch} 
                        loading = {loading} 
                        registerType = {this.state.registerType} 
                        f_nextStep = {this.f_nextStep} />,
            icon: <ZKIcon.AntdIcon icon = 'FileTextOutlined' />
        },{
            title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.register.personal.user.step.submit.verify.code'),
            content: <CRpuSubmitVerifyCode 
                        intl = {intl} 
                        dispatch = {dispatch} 
                        history = {history}
                        loading = {loading} 
                        registerType = {this.state.registerType} 
                        formData = {this.state.formData} 
                        rpuVerifyCodeWaitTime = {rpuVerifyCodeWaitTime}/>,
            icon: <ZKIcon.AntdIcon icon = 'ContainerOutlined' />
        }];

        // console.log("[^_^:20250205-1045-001] render: ", this.state);
        
        return (<div className={`${zkStyles.zk_f_div_vertical_middle} ${zkStyles.zk_f_full}`}>
        	<div className={`${styles.zk_register_personal_user_div}`}>
        		<div className={`${styles.zk_register_personal_user_title}`} >
        			{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.personal.user')}
        		</div>
	            <div className={styles.zk_register_personal_user_step}>
                    <div className={styles.zk_register_personal_user_step_title}>
                        <ZKSteps current={this.state.step} items={stepItems}  />
                    </div>
                    <div className={styles.zk_register_personal_user_step_content}>
                        <Scrollbars style={{ height: '100%' }}>
                            {stepItems[this.state.step].content}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>)
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
    	// 清除读秒器
    }

}

export default injectIntl(connect(({ mApp, mPublicApp, loading }) => ({ mApp, mPublicApp, loading }))(CInitRegisterPersonalUser));







