/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-10-01 19:08:14
* @Last Modified by: runoob
* @Last Modified time: 2024-01-15 00:29:42
*/

import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents, ZKCustomComponents } from 'zkFramework';
const { ZKList, ZKEmpty, ZKAvatar } = ZKOriginalComponents;
const { ZKIcon, ZKOptRow } = ZKCustomComponents;
const { zkToolsUtils, zkToolsMsg } = zkTools;

import styles from './styles.less';
import CFileUpload from './fileUpload.js';

const FInitFileViewList = ({filesPage={}, intl, onOpt, onSelect, uploadProps})=>{
 	
 	const f_onSelect = entity=>{
		if(zkJsUtils.assertObjType(onSelect, Function)){
 			onSelect.call(this, entity);
 		}
 	}

 	const f_opt = (key, entity)=>{
 		if(zkJsUtils.assertObjType(onOpt, Function)){
 			onOpt.call(this, key, entity);
 		}
 	}

 	// 行操作，目录[修改、上传、下载、删除]，文件[详情、下载、删除]
 	const f_getRowOpt = entity=>{
 		let opts = [];
 		// if(entity.type === 1){
 		// 	opts.push(<ZKOptRow.OptGroup.OptItem key={`${entity.pkId}_key_edit_dir`} onClick={()=>{f_opt('_key_edit_dir', entity)}}>
 		// 		{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
 		// 	</ZKOptRow.OptGroup.OptItem>);
 		// 	opts.push(<ZKOptRow.OptGroup.OptItem key={`${entity.pkId}_key_upload`} onClick={()=>{f_opt('_key_upload', entity)}}>
 		// 		{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_upload')}
 		// 	</ZKOptRow.OptGroup.OptItem>);
 		// 	opts.push(<ZKOptRow.OptGroup.OptItem key={`${entity.pkId}_key_download`} onClick={()=>{f_opt('_key_download', entity)}}>
 		// 		{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_download')}
 		// 	</ZKOptRow.OptGroup.OptItem>);
 		// 	opts.push(<ZKOptRow.OptGroup.OptItem key={`${entity.pkId}_key_del_dir`} onClick={()=>{f_opt('_key_del_dir', entity)}}>
 		// 		{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
 		// 	</ZKOptRow.OptGroup.OptItem>);
 		// }else{
 		// 	opts.push(<ZKOptRow.OptGroup.OptItem key={`${entity.pkId}_key_detail`} onClick={()=>{f_opt('_key_detail', entity)}}>
 		// 		zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')
 		// 	</ZKOptRow.OptGroup.OptItem>);
 		// 	opts.push(<ZKOptRow.OptGroup.OptItem key={`${entity.pkId}_key_download`} onClick={()=>{f_opt('_key_download', entity)}}>
 		// 		{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_download')}
 		// 	</ZKOptRow.OptGroup.OptItem>);
 		// 	opts.push(<ZKOptRow.OptGroup.OptItem key={`${entity.pkId}_key_del_dir`} onClick={()=>{f_opt('_key_del_dir', entity)}}>
 		// 		{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
 		// 	</ZKOptRow.OptGroup.OptItem>);
 		// }

 		if(entity.type === 1){
 			opts.push(<a key={`${entity.pkId}_key_edit_dir`} onClick={()=>{f_opt('_key_edit_dir', entity)}}>
 				{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
 			</a>);
 			opts.push(<a key={`${entity.pkId}_key_upload`}>
 				<CFileUpload {...uploadProps} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_upload')}</CFileUpload>
 			</a>);
 			opts.push(<a key={`${entity.pkId}_key_download`} onClick={()=>{f_opt('_key_download', entity)}}>
 				{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_download')}
 			</a>);
 			opts.push(<a key={`${entity.pkId}_key_del_dir`} onClick={()=>{f_opt('_key_del_dir', entity)}}>
 				{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
 			</a>);
 		}else{
 			opts.push(<a key={`${entity.pkId}_key_detail`} onClick={()=>{f_opt('_key_detail', entity)}}>
 				{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}
 			</a>);
 			opts.push(<a key={`${entity.pkId}_key_download`} onClick={()=>{f_opt('_key_download', entity)}}>
 				{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_download')}
 			</a>);
 			opts.push(<a key={`${entity.pkId}_key_del_dir`} onClick={()=>{f_opt('_key_del_dir', entity)}}>
 				{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
 			</a>);
 		}
 		return opts;
 	}

 	// 取展示图标
 	const f_getAvatar = item=>{
 		if(item.type === 1){// 目录
 			return <ZKIcon icon='FolderOpenOutlined' />;
 		}else if(item.contentType === 'xxx'){// 图片
 			return <ZKAvatar src='' />;
 		}else{
 			return <ZKIcon icon='FileTextOutlined' />
 		}
 	}

    if(zkJsUtils.isEmpty(filesPage)||filesPage.total===0){
 		return <div className = { `${styles.zk_file_view_empty_div}` }><ZKEmpty className = { `${styles.zk_file_view_empty_div_content}`} /></div>
 	}
	return <>
		<ZKList dataSource={filesPage.result} className = { styles.zk_file_view_list_div }
	        renderItem={(item) => (
	            <ZKList.Item key={item.pkId} actions={f_getRowOpt(item)} >
	              <ZKList.Item.Meta
	                avatar={item.type === 1?<ZKIcon icon='FolderOpenOutlined' />:<ZKIcon icon='FileTextOutlined' />}
	                title={<a onClick={()=>{f_onSelect(item)}}>{`${item.name}(${item.code})`}</a>}
	                description={item.updateDate}
	              />
	              <div>{item.size}</div>
	            </ZKList.Item>
	        )}
		/>
	</>;
}

export default FInitFileViewList;


