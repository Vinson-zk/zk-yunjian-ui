/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-11-01 09:51:35
* @Last Modified by: vinson
* @Last Modified time: 2025-01-22 15:08:32
*/

import React from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import PropTypes from 'prop-types';

import ZKIcon from '../zk-icon';
import { ZKUpload } from '../../original';
import styles from './styles.less';

import zkJsUtils from 'zkJsUtils';
import { zkToolsMsg } from '../../../tools';

// 卡片上传，上传按钮组件
const FCardUploadButton = ({topics = undefined, ...props })=>{
	return (<div className = {`${styles.zk_card_upload_button_div}`} >
        <ZKUpload className = {`${styles.zk_card_upload_opt_button}`} showUploadList={false} {...props} >
            <ZKIcon.AntdIcon icon="UploadOutlined" /><br />
        </ZKUpload>
        {topics != undefined ? <span>{topics}</span>:""}
    </div>);
}

FCardUploadButton.propTypes = {
	topics: PropTypes.string, // 上传提示
}

// 卡片上传 缩略展示组件
const FCardUploadDescItem = ({thumbUrl = undefined, optOnClick = undefined})=>{

	const f_optOnClick = optKey=>{ // del-删除；preview-预览；
		if (zkJsUtils.assertObjType(optOnClick, Function)){
			optOnClick.call(this, optKey);
		}
	}

	let style = {};
	if(!zkJsUtils.isEmpty(thumbUrl)){
		style["backgroundImage"] = `url(${thumbUrl})`;
	}

	return (<div className = {`${styles.zk_card_upload_desc}`} style = {style} >
        <div className = {`${styles.zk_card_upload_desc_opt_div}`}>
            <ZKIcon.AntdIcon className = {`${styles.zk_card_upload_opt_button}`} icon="EyeOutlined" 
            	onClick = {()=>f_optOnClick('preview')}
            />
            <ZKIcon.AntdIcon className = {`${styles.zk_card_upload_opt_button}`} icon="DeleteOutlined" 
            	onClick = {()=>f_optOnClick('del')}
            />
        </div>
    </div>);
}

FCardUploadDescItem.propTypes = {
	thumbUrl: PropTypes.string, // 缩略展示的连接
	optOnClick: PropTypes.func, // 缩略展示的操作，optOnClick(key): preview-预览；del-删除；
}

/**
 * @fileList: 文件列表；
 * @maxCount: 可上传的文件个数，默认为 1；
 * @maxSize: 单个文件允许的最大值，单位B，默认 52428800B=50M；
 * @optOnClick: 操作回调，回调参数：操作 key、file实体、file实体在文件列表中的下标索引；
 * @supportTypes: 支持的上传文件格式；[]-空数组时，支持所有；
 * @onErr: 错误情况回调；onErr([keys], [msgs]); 回调返回 true-继续上传；flase-中断上传；
 *		keys-错误代码数组；msgs-错误消息数组；
 *			_err_max_size: 上传内容超大；
 *          _err_support_type: 不支持的文件格式；
 * @topics: 上传按钮下放的提示语；
 * @uploadProps: 上传组件的原生属性；
 * @...props: 其他包裹层的属性；
 */
const FCardSmartUpload = ({ intl, fileList, topics, uploadProps, maxCount, maxSize, optOnClick, onErr, supportTypes, ...props })=>{
	let cs = [];
	// console.log("[^_^:20241216-1933-001] fileList: ", fileList);

	for(let index = 0; index < fileList.length && index < maxCount; ++index){
		cs.push(<div key={index}  {...props} >
			<FCardUploadDescItem thumbUrl={fileList[index].thumbUrl?fileList[index].thumbUrl:fileList[index].url} optOnClick={optKey=>{
				if (zkJsUtils.assertObjType(optOnClick, Function)){
					optOnClick.call(this, optKey, fileList[index], index);
				}
			}} />
		</div>); 
	}

	if(maxCount > fileList.length){
		// 添加上传前校验文件大小
		// beforeUpload: (file, fl) => {
		let { beforeUpload, ...nextUploadProps } = uploadProps;
		let onBeforeUpload = (file, fl) => {
			// console.log("[^_^:20250120-1051-001]: ", file, fl);
			// console.log("[^_^:20250120-1051-002] maxSize: ", maxSize);
			// 校验上传文件大小
			let errKeys = [];
			let errMsgs =[];
			if(file.size > maxSize){ 
				errKeys.push("_err_max_size");
				let rParam = Math.floor(maxSize/1024/1024) + 'M';
				// console.log("[^_^:20250120-1051-004] rParam: ", rParam);
				errMsgs.push(zkToolsMsg.msgFormatByIntl(intl, 'components.custom.zkSmartUpload.msg.err.max.size', {'maxSize': rParam}));
			}
			// 校验上传文件类型
			if(supportTypes && supportTypes.length > 0 && supportTypes.indexOf(file.type) == -1){// 不支持的格式
				errKeys.push("_err_support_type");
				errMsgs.push(zkToolsMsg.msgFormatByIntl(intl, 'components.custom.zkSmartUpload.msg.err.type', {'supportTypes': zkJsUtils.objToStr(supportTypes)}));
				
			}

			if(errKeys.length > 0 && zkJsUtils.assertObjType(onErr, Function)){
				// console.log("[^_^:20250122-1455-001] errKeys: ", errKeys);
				// console.log("[^_^:20250122-1455-001] errMsgs: ", errMsgs);
				if(!onErr(errKeys, errMsgs)){
					return false;
				}
			}

			if(zkJsUtils.assertObjType(beforeUpload, Function)){
				return beforeUpload(file, fl);
			}
			return true;
		}
		cs.push(<div key={-1}  {...props} >
			<FCardUploadButton topics = {topics} beforeUpload = {onBeforeUpload} {...nextUploadProps} maxCount = {maxCount} />
		</div>);
	}
	return cs;
}

// 定义属性
FCardSmartUpload.propTypes = {
	intl: PropTypes.object,
	fileList: PropTypes.array,
	topics: PropTypes.string,
	uploadProps: PropTypes.object,
	maxCount: PropTypes.number,
	maxSize: PropTypes.number,
	optOnClick: PropTypes.func, 
    onErr: PropTypes.func,
    supportTypes: PropTypes.array,
}

FCardSmartUpload.defaultProps = {
	className: styles.zk_card_smart_upload_item_div,
	fileList: [],
	uploadProps: {},
	maxCount: 1,
	maxSize: 52428800, 
	supportTypes: [], 
	optOnClick: undefined, 
	topics: undefined,
}

class CInitSmartUpload extends React.Component {
	render() {
		return <ZKUpload {...this.props} />
	}
}

CInitSmartUpload.CardSmartUpload = FCardSmartUpload;
CInitSmartUpload.CardUploadButton = FCardUploadButton;
CInitSmartUpload.CardUploadDescItem = FCardUploadDescItem;
CInitSmartUpload.getBase64 = ZKUpload.getBase64;

export default CInitSmartUpload;




