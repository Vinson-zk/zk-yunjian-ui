/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:07:02
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:16:05
 */

import React from 'react';
import { Modal } from 'antd';

import styles from "./styles.less";

const FWrapModal = (props)=>{
	return (<Modal {...props} />)
}

// 定义属性
FWrapModal.propTypes = {
    ...Modal.propTypes
}
// 定义属性默认值 
FWrapModal.defaultProps = {
	...Modal.defaultProps, // 在封装有指定  
	className: styles.modal_body,
}

FWrapModal.info = (props) => {
	Modal.info({ className: styles.modal_content_left, ...props });
}


export default FWrapModal;