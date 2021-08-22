/*
* @Author: Vinson
* @Date:   2021-06-30 11:38:04
* @Last Modified by:   Vinson
* @Last Modified time: 2021-06-30 11:39:49
* 
* 
* 
*/

import React from 'react';
import { Checkbox } from 'antd';

const FWrapCheckbox = (props)=>{
	return <Checkbox {...props} />
}

FWrapCheckbox.Group = Checkbox.Group;

// 定义属性
FWrapCheckbox.propTypes = {
    ...Checkbox.propTypes
}
// 定义属性默认值 
FWrapCheckbox.defaultProps = {
	...Checkbox.defaultProps
}

export default FWrapCheckbox;


