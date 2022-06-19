/*
* @Author: Vinson
* @Date:   2022-05-09 15:18:46
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-09 15:19:53
* 
* 
* 
*/

import React from 'react';
// import PropTypes from 'prop-types';
import { Switch } from 'antd';

// console.log("[^_^:20210227-2027-001] Radio: ", Radio);

const FWrapSwitch = (props)=>{
	return <Switch {...props} />
}

// 定义属性
FWrapSwitch.propTypes = {
    ...Switch.propTypes
}
// 定义属性默认值 
FWrapSwitch.defaultProps = {
	...Switch.defaultProps
}

export default FWrapSwitch;


