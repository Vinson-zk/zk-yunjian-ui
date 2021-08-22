/*
* @Author: Vinson
* @Date:   2021-06-30 18:34:21
* @Last Modified by:   Vinson
* @Last Modified time: 2021-06-30 18:35:57
* 
* 
* 
*/


import React from 'react';
import { Menu } from 'antd';

const FWrapMenu = (props)=>{
	return <Menu {...props} />
}

FWrapMenu.Item = Menu.Item;
FWrapMenu.SubMenu = Menu.SubMenu;
FWrapMenu.ItemGroup = Menu.ItemGroup;
FWrapMenu.Divider = Menu.Divider;


// 定义属性
FWrapMenu.propTypes = {
    ...Menu.propTypes
}
// 定义属性默认值 
FWrapMenu.defaultProps = {
	...Menu.defaultProps
}

export default FWrapMenu;



