/*
* @Author: Vinson
* @Date:   2021-06-30 23:10:42
* @Last Modified by:   Vinson
* @Last Modified time: 2021-06-30 23:21:33
* 
* 
* 
*/

import React from 'react';
import { Tabs } from 'antd';

const FWrapTabs = (props)=>{
	return <Tabs {...props} />
}

FWrapTabs.TabPane = Tabs.TabPane;

// 定义属性
FWrapTabs.propTypes = {
    ...Tabs.propTypes
}
// 定义属性默认值 
FWrapTabs.defaultProps = {
	...Tabs.defaultProps
}

export default FWrapTabs;



