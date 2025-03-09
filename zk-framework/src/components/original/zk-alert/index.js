/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-08-02 16:59:00
* @Last Modified by: runoob
* @Last Modified time: 2024-08-02 16:59:50
*/

import React from 'react';
import { Alert } from 'antd';

const FWrapAlert = (props)=>{
	return <Alert {...props} />
}

FWrapAlert.ErrorBoundary = Alert.ErrorBoundary;

// 定义属性
FWrapAlert.propTypes = {
    ...Alert.propTypes
}
// 定义属性默认值 
FWrapAlert.defaultProps = {
	...Alert.defaultProps
}

export default FWrapAlert;






