/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-12-27 16:28:40
* @Last Modified by: vinson
* @Last Modified time: 2025-01-22 10:15:05
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

//

// const f_getFileBase64 = (file) =>{
//     new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (error) => reject(error);
//     });
// }

// 将 file 转为 Base64 数据文件
const f_getBase64 = (file, callback)=>{
    const reader = new FileReader();
    reader.addEventListener('load', ()=>callback(reader.result));
    reader.readAsDataURL(file);
}

FWrapUpload.UploadFile = Upload.UploadFile;
FWrapUpload.getBase64 = f_getBase64;

export default FWrapUpload;


