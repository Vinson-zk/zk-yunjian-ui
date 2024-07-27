/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-25 21:45:56
* @Last Modified by: runoob
* @Last Modified time: 2023-09-25 23:02:58
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Layout, Space } from 'antd';

import ZKSelect from '../../original/zk-select';
import zkToolsMsg from '../../../tools/zkToolsMsg.js';
import zkToolsUtils from '../../../tools/zkToolsUtils.js';
import zkTheme from "../../../../style/theme";

const FInitTheme = ({themeFlag, setThemeFunc})=>{
    // console.log('[^_^:20230909-0053-001] themeFlag: ', themeFlag);

	const f_themeSel = (key, option)=>{
        // console.log('[^_^:20230909-0053-002] themeFlag: ', themeFlag);
		// zkToolsUtils.setTheme(key);
		if(setThemeFunc){
        	// console.log('[^_^:20230909-0053-003] setThemeFunc: ', setThemeFunc);
			setThemeFunc.call(this, key);
		}
    }

	return (
		<ZKSelect style={{'width':'80px'}} value={themeFlag} onSelect={f_themeSel} >
        	<ZKSelect.Option key='default' value='default' >{zkToolsMsg.getInternationInfo(zkTheme['default'].name)}</ZKSelect.Option>
        	<ZKSelect.Option key='dark' value='dark' >{zkToolsMsg.getInternationInfo(zkTheme['dark'].name)}</ZKSelect.Option>
        	<ZKSelect.Option key='zk' value='zk' >{zkToolsMsg.getInternationInfo(zkTheme['zk'].name)}</ZKSelect.Option>
        	<ZKSelect.Option key='antd' value='antd' >{zkToolsMsg.getInternationInfo(zkTheme['antd'].name)}</ZKSelect.Option>
        </ZKSelect>
	)
}

// 定义属性
FInitTheme.propTypes = {
	'themeFlag': PropTypes.string.isRequired,
	'setThemeFunc': PropTypes.func.isRequired,
}
// 定义属性默认值
FInitTheme.defaultProps = { 
	'themeFlag': 'default'
}

export default FInitTheme;


