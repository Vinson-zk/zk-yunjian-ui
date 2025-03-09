/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-11-01 09:58:23
* @Last Modified by: vinson
* @Last Modified time: 2025-01-22 15:08:56
*/


import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat, ZKIcon, ZKSmartUpload } = ZKCustomComponents;
const { ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

import smartUploadStyles from "./styles.less";

function FInitZKSmartUploadDemo({ intl }) {

	const [fileList, setFileList] = useState([
		{
			uid: '1',
			name: 'default',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
		}
	]);

	const [testOneFile, setTestOneFile] = useState();

	const baseProps = {
	  name: 'file',
	  // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	  // action: '/api/file/uploadImg',
	  action: 'apiMock/file/upload',
	  headers: {
	    authorization: 'authorization-text',
	  },
	};

	const showUploadList = {
		showPreviewIcon: true,
	  	showDownloadIcon: true,
	  	showRemoveIcon: true,
	  	previewIcon: 'pIcon',
	  	removeIcon: 'rIcon',
	  	downloadIcon: 'dIcon',
	}

	const f_previewBase64 = base64Data => {
		// 解码base64编码的数据。base64Data.split(',')[1]是提取真正的图像数据（移除了"data:image/jpeg;base64,"部分）
	    const byteCharacters = atob(base64Data.split(',')[1]);
	    // 创建一个数组，用于存储每个字符的ASCII码
	    const byteNumbers = new Array(byteCharacters.length);
	    // 遍历byteCharacters字符串，并将每个字符的ASCII码值存储在byteNumbers数组中
	    for (let i = 0; i < byteCharacters.length; i++) {
	        byteNumbers[i] = byteCharacters.charCodeAt(i);
	    }
	    // 使用byteNumbers数组创建一个Uint8Array对象。Uint8Array是一个字节的数组。
	    const byteArray = new Uint8Array(byteNumbers);
	    // 用byteArray创建一个Blob对象。Blob对象代表一个不可变、原始数据的类文件对象。
	    // Blob对象的内容是由选项type指定的MIME类型。
	    const blob = new Blob([byteArray], {type: 'image/jpeg'});
	    // 创建一个指向存储在Blob对象中的数据的URL。这个URL可以用于文件下载或者用在img标签的src属性中。
	    const imageUrl = URL.createObjectURL(blob);
	    // 在新的浏览器窗口或标签页中打开上面创建的URL，从而显示该图像
		window.open(imageUrl, '_blank');
	}

	const f_preview = file=>{
		if(file.url){
			window.open(file.url, '_blank');
		}else{
			f_previewBase64(file.thumbUrl);
		}
	}

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.smartUpload')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<font color="red">没想到有什么可以统一处理的功能，封装了两个感觉常用的卡片上传组件</font><br />
				<br />
				Test 单个上传 ------------------------- <br />
				<div>
                    <div className = {`${smartUploadStyles.zk_test_smart_upload}`} > {testOneFile != undefined ?
                        <ZKSmartUpload.CardUploadDescItem 
                        	thumbUrl = {testOneFile?testOneFile.thumbUrl:undefined} 
                        	optOnClick = {key=>{
                        		console.log("[^_^:20241216-1637-001] --- FCardUploadDescItem opt key：", key, testOneFile);
                        		if(key == 'del'){
                        			setTestOneFile(undefined);
                        		}else if(key == 'preview'){
								    f_previewBase64(testOneFile.thumbUrl);
                        		}
                        	}}
                        />:
                        <ZKSmartUpload.CardUploadButton 
                        	topics = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sample.tips.cert.front')} 
                    		beforeUpload = {(file, fl) => {
                                console.log("[^_^:20241216-1637-002] --- CardUploadButton ", file, fl);
                                ZKSmartUpload.getBase64(file, src=>{
                                    file.thumbUrl = src;
                                    setTestOneFile(file);
                                });
                                return false;
                            }}
                        />}
                    </div>
                    <div>
                        <span className="ant-upload-hint">
                        	{zkToolsMsg.msgFormatByIntl(intl, 'zk.sample.tips.cert.upload')}
                        </span>
                    </div>
                </div>
                <br />
				Test 多个文件上传 01 ------------------------- <br />
				<div>
					<ZKSmartUpload.CardSmartUpload
						className = {`${smartUploadStyles.zk_test_smart_upload}`}
						fileList = {fileList}
						topics = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sample.tips.cert.front')} 
						uploadProps = {{
                    		beforeUpload: (file, fl) => {
                                console.log("[^_^:20241216-1638-001] --- CardSmartUpload ", file, fileList);
                                ZKSmartUpload.getBase64(file, src=>{
                                    file.thumbUrl = src;
                                    fileList.push(file);
                                    setFileList([].concat(fileList));
                                });
                                return false;
                            }
                    	}}
                    	maxCount = {1}
                    	maxSize = {52428800}
                    	optOnClick = {(key, item, index)=>{
                            console.log("[^_^:20241216-1638-002] --- CardSmartUpload ", key, item, index);
                    		if(key == 'del'){
                    			fileList.splice(index, 1);
                            	console.log("[^_^:20241216-1638-003] --- CardSmartUpload.fls ", fileList);
								setFileList([].concat(fileList));
                    		}else if(key == 'preview'){
							    f_preview(item);
                    		}
                    	}}
					/>
					<div>
                        <span className="ant-upload-hint">
                        	{zkToolsMsg.msgFormatByIntl(intl, 'zk.sample.tips.cert.upload')}
                        </span>
                    </div>
                </div>
                <br />
                Test 多个文件上传 02 ------------------------- <br />
				<div className = {`${smartUploadStyles.zk_test_smart_upload_list}`} >
					<ZKSmartUpload.CardSmartUpload
						className = {`${smartUploadStyles.zk_test_smart_upload_list_item}`}
						fileList = {fileList}
						topics = {"test topics"} 
						uploadProps = {{
                    		beforeUpload: (file, fl) => {
                                console.log("[^_^:20241216-1638-001] --- CardSmartUpload ", file, fileList);
                                ZKSmartUpload.getBase64(file, src=>{
                                    file.thumbUrl = src;
                                    fileList.push(file);
                                    setFileList([].concat(fileList));
                                });
                                return false;
                            }
                    	}}
                    	maxCount = {5}
                    	maxSize = {52428800}
                    	optOnClick = {(key, item, index)=>{
                            console.log("[^_^:20241216-1638-002] --- CardSmartUpload ", key, item, index);
                    		if(key == 'del'){
                    			fileList.splice(index, 1);
                            	console.log("[^_^:20241216-1638-003] --- CardSmartUpload.fls ", fileList);
								setFileList([].concat(fileList));
                    		}else if(key == 'preview'){
							    f_preview(item);
                    		}
                    	}}
					/>
                </div>
                Test ------------------------- <br />

			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKSmartUpload 文件上传：同 ZKUpload；
				<br />
				ZKSmartUpload.CardUploadButton: 卡片上传，上传按钮组件
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
							<td>topics</td>
							<td>false</td>
							<td>上传按钮下放的提示语；</td>
							<td>PropTypes.string</td>
							<td></td>
						</tr>
						<tr>
							<td>ZKUpload 原生属性</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<br />
				ZKSmartUpload.CardUploadDescItem: 卡片上传 缩略展示组件
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
							<td>thumbUrl</td>
							<td>false</td>
							<td>缩略展示的连接</td>
							<td>PropTypes.string</td>
							<td></td>
						</tr>
						<tr>
							<td>optOnClick</td>
							<td>false</td>
							<td>缩略展示的操作，optOnClick(key): preview-预览；del-删除；</td>
							<td>PropTypes.func</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<br />
				ZKSmartUpload.CardSmartUpload: 
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
							<td>intl</td>
							<td>false</td>
							<td>国际化组件</td>
							<td>PropTypes.object</td>
							<td></td>
						</tr>
						<tr>
							<td>className</td>
							<td>false</td>
							<td>css 类名，可覆盖</td>
							<td>PropTypes.string</td>
							<td>zk_card_smart_upload_item_div</td>
						</tr>
						<tr>
							<td>fileList</td>
							<td>false</td>
							<td>文件列表；</td>
							<td>PropTypes.array</td>
							<td></td>
						</tr>
						<tr>
							<td>maxCount</td>
							<td>false</td>
							<td>可上传的文件个数</td>
							<td>PropTypes.number</td>
							<td>1</td>
						</tr>
						<tr>
							<td>maxSize</td>
							<td>false</td>
							<td>单个文件允许的最大值，单位B</td>
							<td>PropTypes.number</td>
							<td>52428800B=50M</td>
						</tr>
						<tr>
							<td>supportTypes</td>
							<td>false</td>
							<td>支持的上传文件格式；[]-空数组时，支持所有；</td>
							<td>PropTypes.array</td>
							<td>[]</td>
						</tr>
						<tr>
							<td>optOnClick</td>
							<td>false</td>
							<td>操作回调，回调参数：操作 key、file实体、file实体在文件列表中的下标索引；</td>
							<td>PropTypes.func</td>
							<td>optOnClick(optKey, fileList[index], index); key 同 CardUploadDescItem.optOnClick 中的 key</td>
						</tr>
						<tr>
							<td>onErr</td>
							<td>false</td>
							<td>错误情况回调；onErr([keys], [msgs]); 回调返回 true-继续上传；flase-中断上传；</td>
							<td>PropTypes.func</td>
							<td>keys-错误代码数组；msgs-错误消息数组；
								<br />&nbsp;&nbsp;&nbsp;&nbsp;_err_max_size: 上传内容超大；
								<br />&nbsp;&nbsp;&nbsp;&nbsp;_err_support_type: 不支持的文件格式；
							</td>
						</tr>
						<tr>
							<td>topics</td>
							<td>false</td>
							<td>上传按钮下放的提示语；</td>
							<td>PropTypes.string</td>
							<td>同：ZKUpload.topics</td>
						</tr>
						<tr>
							<td>uploadProps</td>
							<td>false</td>
							<td>传递给 ZKUpload 的属性</td>
							<td>PropTypes.object</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<br />
				ZKSmartUpload.getBase64: 同 ZKUpload.getBase64(file, callback)
				<br />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"没想到有什么可以统一处理的功能，封装了两个感觉常用的卡片上传组件",
						"<ZKSmartUpload.CardUploadButton>...</ZKSmartUpload.CardUploadButton>",
						"<ZKSmartUpload.CardUploadDescItem>...</ZKSmartUpload.CardUploadDescItem>",
						"<ZKSmartUpload.CardSmartUpload>...</ZKSmartUpload.CardSmartUpload>",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKSmartUploadDemo);



