/*
* @Author: Vinson
* @Date:   2022-12-06 09:33:58
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-06 09:34:28
*/

import React from 'react';
import { Drawer } from 'antd';

const FWrapDrawer = (props)=>{
	return <Drawer {...props} />
}

// 定义属性
FWrapDrawer.propTypes = {
    ...Drawer.propTypes
}
// 定义属性默认值 
FWrapDrawer.defaultProps = {
	...Drawer.defaultProps
}

export default FWrapDrawer;

