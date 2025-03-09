/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-08-15 22:11:56
* @Last Modified by: vinson
* @Last Modified time: 2025-01-22 10:15:34
*/


import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat, ZKIcon } = ZKCustomComponents;
const { ZKUpload, ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const UploadButton = ({loading})=>(
    <button style={{ border: 1, background: 'none', }} type="button" >
      {loading ? <ZKIcon.AntdIcon icon="LoadingOutlined" /> : <ZKIcon.AntdIcon icon="PlusOutlined" />}
      <div style={{ marginTop: 8, }} >
        Upload
      </div>
    </button>
);

// 将 file 转为 Base64 位置文件
const f_getBase64 = (file, callback)=>{
	const reader = new FileReader();
	reader.addEventListener('load', ()=>callback(reader.result));
	reader.readAsDataURL(file);
};

const showUploadList = {
	showPreviewIcon: true,
  	showDownloadIcon: true,
  	showRemoveIcon: true,
  	previewIcon: 'pIcon',
  	removeIcon: 'rIcon',
  	downloadIcon: 'dIcon',
};

const f_onChange = info => {
  	console.log("[^_^:20240816-0014-001] f_onChange.info: ", info);
}

const f_previewFile = (file)=>{
	console.log("[^_^:20241115-1511-001] f_previewFile.file: ", file);
	return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // reader.addEventListener('load', ()=>resolve(reader.result));
        reader.onload = () => resolve(reader.result);
    }); 
}

function FInitZKUploadDemo({ intl }) {

	const [fileList, setFileList] = useState([
		{
			uid: '1',
			name: 'default',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
		}
	]);

	const baseProps = {
	  name: 'file',
	  // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	  // action: '/api/file/uploadImg',
	  action: 'apiMock/file/upload',
	  headers: {
	    authorization: 'authorization-text',
	  }
	};

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.upload')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<br />
				Test --------------------------------- <br />
				<ZKUpload listType = "picture-card" {...baseProps} 
					onChange = { info=>{
						f_onChange(info);
					   //  if(!info.file.url){
					  	// 	f_getBase64(info.file, (url)=>{
					  	// 		info.file.url = url;
					  	// 		setFileList([...fileList, info.file]);
					  	// 	});
					  	// 	// info.file.url = f_getBase64(info.file.originFileObj);
					  	// }
					}}
					// showUploadList = { showUploadList }
					fileList = { fileList }
					beforeUpload = {(file) => {
						console.log("[^_^:20241115-1552-002.01] beforeUpload.file: ", file);
						if(!file.url){
					  		f_getBase64(file, (url)=>{
					  			file.url = url;
					  			setFileList([...fileList, file]);
					  		});
					  		// info.file.url = f_getBase64(info.file.originFileObj);
					  	}
						console.log("[^_^:20241115-1552-002.02] beforeUpload.file: ", file);
				    	setFileList([...fileList, file]);
				    	return false;
				    }}
				    previewFile = { f_previewFile }
				>
					<UploadButton loading = {false} />
				</ZKUpload>
				--------------------------------- <br />
				<ZKUpload {...baseProps} onChange = { f_onChange }>
					<ZKButton icon={<ZKIcon.AntdIcon icon="UploadOutlined" />}>Click to Upload</ZKButton>
				</ZKUpload>
				--------------------------------- <br />
				<ZKUpload {...baseProps} showUploadList = { showUploadList } onChange = { f_onChange } >
					<ZKButton icon={<ZKIcon.AntdIcon icon="UploadOutlined" />}>ALL show to Upload</ZKButton>
				</ZKUpload>
				--------------------------------- <br />
				<ZKUpload listType = "picture-card" {...baseProps} 
					onChange = { f_onChange } 
					beforeUpload = {(file) => {
						return false;
					}}
					previewFile = {f_previewFile}
				>
					<UploadButton loading = {false} />
				</ZKUpload>
				--------------------------------- <br />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKUpload: 
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKUpload 组件：暂不做处理",
						"原生态封装，接受原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
				<br />

				ZKUpload.getBase64(file, callback): // 将 file 转为 Base64 数据文件
				<table className={styles.sample_detail_section_table}>
					<thead>
						<tr>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>file</td>
							<td>true</td>
							<td>文件</td>
							<td>PropTypes.object</td>
							<td></td>
						</tr>
						<tr>
							<td>callback(result)</td>
							<td>true</td>
							<td>转换完成后的回调函数</td>
							<td>PropTypes.func</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<br />

			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"原生态封装",
						"<ZKUpload >原生态封装</ZKUpload>"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKUploadDemo);



