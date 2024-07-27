/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-12-27 16:28:40
* @Last Modified by: runoob
* @Last Modified time: 2023-12-27 16:30:31
*/

import React from 'react';
import { Upload } from 'antd';

const FWrapUpload = (props)=>{
	let { forwardRef, ...resProps} = props;
    return (
        <Upload {...resProps} ref = { forwardRef } />
    );
}
// 定义属性
FWrapUpload.propTypes = {
    ...Upload.propTypes
}
// 定义属性默认值 
FWrapUpload.defaultProps = {
	...Upload.defaultProps
}

FWrapUpload.UploadFile = Upload.UploadFile;

export default FWrapUpload;


