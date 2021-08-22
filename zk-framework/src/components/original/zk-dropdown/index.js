/*
* @Author: Vinson
* @Date:   2021-06-30 18:24:50
* @Last Modified by:   Vinson
* @Last Modified time: 2021-06-30 18:26:04
* 
* 
* 
*/

import React from 'react';
import { Dropdown } from 'antd';

const FWrapDropdown = (props)=>{
	return <Dropdown {...props} />
}

FWrapDropdown.Button = Dropdown.Button;

// 定义属性
FWrapDropdown.propTypes = {
    ...Dropdown.propTypes
}
// 定义属性默认值 
FWrapDropdown.defaultProps = {
	...Dropdown.defaultProps
}

export default FWrapDropdown;



