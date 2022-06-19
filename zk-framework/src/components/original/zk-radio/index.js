/**
 *
 * @Author: Vinson
 * @Date: 2020-08-24 11:02:17
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-09 15:19:19
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Radio } from 'antd';

// console.log("[^_^:20210227-2027-001] Radio: ", Radio);

const FWrapRadio = (props)=>{
	return <Radio {...props} />
}

// 定义属性
FWrapRadio.propTypes = {
    ...Radio.propTypes
}
// 定义属性默认值 
FWrapRadio.defaultProps = {
	...Radio.defaultProps
}

FWrapRadio.Group = Radio.Group;
// 组
FWrapRadio.Group.defaultProps = {
	...FWrapRadio.Group.defaultProps,
	buttonStyle:"solid",
} 

FWrapRadio.Button = Radio.Button;

export default FWrapRadio;




