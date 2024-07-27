/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-11-30 10:14:40
* @Last Modified by: runoob
* @Last Modified time: 2023-11-30 10:39:22
*/

import React from 'react';
import { List } from 'antd';

const FWrapList = (props)=>{
	return <List {...props} />
}

FWrapList.Item = List.Item;

// 定义属性
FWrapList.propTypes = {
    ...List.propTypes
}
// 定义属性默认值 
FWrapList.defaultProps = {
	...List.defaultProps
}

export default FWrapList;


