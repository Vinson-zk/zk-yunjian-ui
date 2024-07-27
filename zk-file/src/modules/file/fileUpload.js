/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-12-27 17:29:22
* @Last Modified by: runoob
* @Last Modified time: 2024-01-15 00:29:42
*/
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents } from 'zkFramework';
import styles from './styles.less';
const { zkToolsUtils, zkToolsMsg } = zkTools;
const { ZKUpload } = ZKOriginalComponents;

const FInitFileUpload = ({children, dispatch, eventCartridge, setUploadProgress})=>{
	
	const uProps = {
		// onChange: ogj=>{
		// 	console.log('[^_^:20240109-0603-001] ogj: ', ogj);
		// },
		// action: file=>{
		// 	console.log('[^_^:20231226-2012-001] action.file: ', file);
		// },
		beforeUpload: file=>{
			console.log('[^_^:20231226-2012-002] beforeUpload.file: ', file.name);
			// onUploadFunc.call(this, file);
			// 在这里实现手动上传，不使用 ZKUpload 的自动上传
			dispatch({
                type: "mFile/upload", 
                params: { 
                	mfs: file 
                },
                upload: {
                	onprogress: function(event) {
	                    let percent = Math.floor(event.loaded/event.total*10000);
	                    // let percent = (event.loaded/event.total).toFixed(4);
                    	console.log("[^_^:20240114-1949-001] onprogress: ", percent);
                    	setUploadProgress(percent);
	                },
                },
                callback: res=> {
                    console.log("[^_^:20231021-1049-001] upload.res: ", res);
                    eventCartridge.action(eventCartridge.saveUpdate);
                }
            });

			return false;
		},
		showUploadList: false,
		// progress: {
		// 	strokeColor: {
		//       '0%': '#108ee9',
		//       '100%': '#87d068',
		//     },
		//     strokeWidth: 3,
		//     format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
		// },
	}

	return <ZKUpload className={styles.zk_file_upload_txt} {...uProps}>{children}</ZKUpload>
}

export default FInitFileUpload;



