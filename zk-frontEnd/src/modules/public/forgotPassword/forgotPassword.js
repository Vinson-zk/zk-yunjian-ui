/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-25 09:10:40
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:49
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
import frontEndStyles from '../../frontEnd.styles.less';
import styles from './styles.less';

import CFPSendVerifyCode from './fpSendVerifyCode.js';
import CFPSubmitVerifyCode from './fpSubmitVerifyCode.js';

class CInitForgotPassword extends Component {

    // formRef = React.createRef();

    // stepItems = [];

    // 1、构造函数
    constructor(props) {
        super(props);
        let { match } = props; 
        this.state = {
            // company-企业找回，发给企业注册的邮箱，修改admin的密码； personal-个人用户修改密码
            "type": match.params.type,
            "findBackWay": 'mail', // mail - 邮箱; phoneNum - 电话;
        	"step": 0,
        	"formData": {},
        }

        // let { location, mPublicApp, dispatch, history, intl, loading } = props; 
        // let { fpVerifyCodeWaitTime } = mPublicApp;
        // this.stepItems = [{
        //     title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.step.input'),
        //     content: <CFPSendVerifyCode 
        //             intl = {intl} 
        //             type = {this.state.type}
        //             dispatch = {dispatch} 
        //             loading = {loading} 
        //             findBackWay = {this.state.findBackWay} 
        //             f_nextStep = {this.f_nextStep} />,
        //     icon: <ZKIcon.AntdIcon icon = 'FileTextOutlined' />
        // },{
        //     title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.step.submit.verify.code'),
        //     content: <CFPSubmitVerifyCode 
        //                 intl = {intl} 
        //                 dispatch = {dispatch} 
        //                 loading = {loading} 
        //                 history = {history}
        //                 findBackWay = {this.state.findBackWay} 
        //                 formData = {this.state.formData} 
        //                 fpVerifyCodeWaitTime = {fpVerifyCodeWaitTime}/>,
        //     icon: <ZKIcon.AntdIcon icon = 'ContainerOutlined' />
        // }];
    };
    
    // 发送验证码成功，下一步
    f_nextStep = (key, values)=>{
    	this.setState({'findBackWay': key, formData: values, step: this.state.step + 1});
    }

    /** 返回 JSX 元素 */
    render() {

        let { location, mPublicApp, dispatch, history, intl, loading } = this.props; 
        let { fpVerifyCodeWaitTime } = mPublicApp;

        let stepItems = [{
            title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.step.input'),
            content: <CFPSendVerifyCode 
                    intl = {intl} 
                    type = {this.state.type}
                    dispatch = {dispatch} 
                    loading = {loading} 
                    findBackWay = {this.state.findBackWay} 
                    f_nextStep = {this.f_nextStep} />,
            icon: <ZKIcon.AntdIcon icon = 'FileTextOutlined' />
        },{
            title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.step.submit.verify.code'),
            content: <CFPSubmitVerifyCode 
                        intl = {intl} 
                        dispatch = {dispatch} 
                        loading = {loading} 
                        history = {history}
                        findBackWay = {this.state.findBackWay} 
                        formData = {this.state.formData} 
                        fpVerifyCodeWaitTime = {fpVerifyCodeWaitTime}/>,
            icon: <ZKIcon.AntdIcon icon = 'ContainerOutlined' />
        }];
        
        return (<div className={`${zkStyles.zk_f_div_vertical_middle} ${zkStyles.zk_f_full}`}>
        	<div className={`${styles.zk_forget_password_div}`}>
        		<div className={`${styles.zk_forget_password_title}`} >
        			{this.state.type == 'company'?
                        zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.company'):
                        zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.forgot.password.personal.user')
                    }
        		</div>
	            <div className={styles.zk_forget_password_step}>
                    <div className={styles.zk_forget_password_step_title}>
                        <ZKSteps current={this.state.step} items={stepItems}  />
                    </div>
                    <div className={styles.zk_forget_password_step_content}>
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
        // this.props.dispatch({type: 'mPublicApp/rcCloseReaderSecondCode'});
    }

}

export default injectIntl(connect(({ mApp, mPublicApp, loading }) => ({ mApp, mPublicApp, loading }))(CInitForgotPassword));






