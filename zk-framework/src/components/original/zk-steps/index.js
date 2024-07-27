/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-08 14:14:45
* @Last Modified by: runoob
* @Last Modified time: 2024-07-08 14:15:18
*/

import React from 'react';
// import PropTypes from 'prop-types';
import { Steps } from 'antd';

// console.log("[^_^:20210227-2027-001] Radio: ", Radio);

const FWrapSteps = (props)=>{
	return <Steps {...props} />
}

// 定义属性
FWrapSteps.propTypes = {
    ...Steps.propTypes
}
// 定义属性默认值 
FWrapSteps.defaultProps = {
	...Steps.defaultProps
}

export default FWrapSteps;



