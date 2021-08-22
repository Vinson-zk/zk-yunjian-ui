/*
* @Author: Vinson
* @Date:   2021-06-30 13:02:22
* @Last Modified by:   Vinson
* @Last Modified time: 2021-06-30 13:03:11
* 
* 
* 
*/

import React from 'react';
import { Divider } from 'antd';

const FWrapDivider = (props)=>{
	return <Divider {...props} />
}

// 定义属性
FWrapDivider.propTypes = {
    ...Divider.propTypes
}
// 定义属性默认值 
FWrapDivider.defaultProps = {
	...Divider.defaultProps
}

export default FWrapDivider;


