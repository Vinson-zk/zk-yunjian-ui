/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-05 16:08:17
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:31:29
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Scrollbars } from 'react-custom-scrollbars';

import { Space, Button } from 'antd';

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKInput, ZKButton, ZKMenu, ZKTabs, ZKCard, ZKSteps } = ZKOriginalComponents;
const { ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkStyles from 'zkFramework/style/zk.styles.less';
// import frontEndStyles from '../../frontEnd.styles.less';
import privateStyles from '../private.styles.less';

import CBaseInfo from './baseInfo.js';
import CAccountSettings from './accountSettings.js';

class CInitPersonalCenter extends Component {

    // formRef = React.createRef();

    leftMenuItems = []

    // 1、构造函数
    constructor(props) {
        super(props);
        let { intl, loading, dispatch, mApp, mPrivateApp } = props; 
        this.state = {
            preComponentProps: {},
            // currentComponentProps: {'index': 1, 'key': '_base_info' },
            currentComponentProps: {'index': 2, 'key': '_account_settings' },
            preClassName: '',
        }

        this.leftMenuItems = [
            {
                'index': 1,
                'key': '_base_info',
                'icon': <ZKIcon icon = 'UserOutlined' />,
                'label': zkToolsMsg.msgFormatByIntl(intl, "zk.front.end.label.personal.base.info"),
                'title': zkToolsMsg.msgFormatByIntl(intl, "zk.front.end.label.personal.base.info"),
            },
            {
                'index': 2,
                'key': '_account_settings',
                'icon': <ZKIcon icon = 'SettingOutlined' />,
                'label': zkToolsMsg.msgFormatByIntl(intl, "zk.front.end.label.personal.settings"),
                'title': zkToolsMsg.msgFormatByIntl(intl, "zk.front.end.label.personal.settings"),
            },
        ];

    };

    f_onSelect = ({key, item, ...itemProps})=>{
        // console.log("[^_^:20250206-1015-001] f_onSelect.key: ", key);
        // console.log("[^_^:20250206-1015-001] f_onSelect.item: ", item);
        // console.log("[^_^:20250206-1015-001] f_onSelect.itemProps: ", itemProps);

        if(key === this.state.currentComponentProps.key){
            return;
        }

        let { intl, loading, location, match, dispatch, history, mApp, mPrivateApp } = this.props;

        let preComponentProps = this.state.currentComponentProps;
        let currentComponentProps = {};

        switch(key){
            case '_base_info':
                currentComponentProps['index'] = 1;
                currentComponentProps['key'] = '_base_info';
                break;
            case '_account_settings':
                currentComponentProps['index'] = 2;
                currentComponentProps['key'] = '_account_settings';
                break;
        }

        if(currentComponentProps.index > preComponentProps.index){
            // 从上方滑出
            preComponentProps.className = privateStyles.content_animation_top_out;
            // 从下方滑入
            currentComponentProps.className = privateStyles.content_animation_bottom_in;
        }else{
            // 从下方滑出
            preComponentProps.className = privateStyles.content_animation_bottom_out;
            // 从上方滑入
            currentComponentProps.className = privateStyles.content_animation_top_in;
        }

        // console.log("[^_^:20250206-1015-001] f_onSelect.preComponentProps: ", preComponentProps);
        // console.log("[^_^:20250206-1015-001] f_onSelect.currentComponentProps: ", currentComponentProps);
        this.setState({'preComponentProps': preComponentProps, 'currentComponentProps': currentComponentProps});
    }

    f_makeContent = ({index, key, className})=>{
        switch(key){
            case '_base_info':
                return <div className = {`${className} ${privateStyles.panel_div_right_div}`} ><CBaseInfo /></div>;
            case '_account_settings':
                return <div className = {`${className} ${privateStyles.panel_div_right_div}`} ><CAccountSettings /></div>;
        }
    }
    
    /** 返回 JSX 元素 */
    render() {

        // let { location, mApp, match, dispatch, history, intl, loading } = this.props; 

        // console.log("[^_^:20250205-1725-001] -------------- ", this.props.mApp.user);
        return (<div className={`${zkStyles.zk_f_div_vertical_middle} ${zkStyles.zk_f_full} ${zkStyles.zk_f_display_flex_col}`}>
            <div className = {privateStyles.panel_div}>
            	<div className = {privateStyles.panel_div_left}>
                    <ZKMenu 
                        defaultSelectedKeys = {this.state.currentComponentProps.key}
                        onSelect = {this.f_onSelect}
                        items = {this.leftMenuItems} 
                    />
                </div>
                <div className = {privateStyles.panel_div_right}>
                    {this.f_makeContent(this.state.preComponentProps)}
                    {this.f_makeContent(this.state.currentComponentProps)}
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

export default injectIntl(connect(({ mApp, mPrivateApp, loading }) => ({ mApp, mPrivateApp, loading }))(CInitPersonalCenter));






