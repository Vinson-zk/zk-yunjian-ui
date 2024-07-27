/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-12-05 17:47:41
* @Last Modified by: runoob
* @Last Modified time: 2023-12-05 17:49:46
*/

import React from 'react';
import { Avatar } from 'antd';

const FWrapAvatar = (props)=>{
	return <Avatar {...props} />
}

FWrapAvatar.Group = Avatar.Group;

// 定义属性
FWrapAvatar.propTypes = {
    ...Avatar.propTypes
}
// 定义属性默认值 
FWrapAvatar.defaultProps = {
	...Avatar.defaultProps
}

export default FWrapAvatar;




