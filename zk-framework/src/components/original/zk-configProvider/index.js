/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-08 22:01:11
* @Last Modified by: runoob
* @Last Modified time: 2023-09-08 22:22:58
*/

import React from 'react';
import { ConfigProvider } from 'antd';

const FWrapConfigProvider = ({ ...res } )=>{
	return <ConfigProvider {...res} />
}

// 定义属性
FWrapConfigProvider.propTypes = {
    ...ConfigProvider.propTypes
}
// 定义属性默认值 
FWrapConfigProvider.defaultProps = {
	...ConfigProvider.defaultProps
}

export default FWrapConfigProvider



