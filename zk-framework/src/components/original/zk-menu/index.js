/*
* @Author: Vinson
* @Date:   2021-06-30 18:34:21
* @Last Modified by: runoob
* @Last Modified time: 2023-09-21 23:08:19
* 
* 
* 
*/

import React from 'react';
import { Menu } from 'antd';

import styles from './styles.less';

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
	...Menu.defaultProps,
	className: styles.zk_menu
}

export default FWrapMenu;



