/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:07:02
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 22:05:06
 */

import React from 'react';
import { Modal, App } from 'antd';

import styles from "./styles.less";

const FWrapModal = ({className='', ...resProps})=>{
	return (<Modal className = {`${className} ${styles.zk_modal}`} {...resProps} />)
}

// 定义属性
FWrapModal.propTypes = {
    ...Modal.propTypes
}
// 定义属性默认值 
FWrapModal.defaultProps = {
	...Modal.defaultProps, // 在封装有指定  
	className: styles.zk_modal_body,
}

FWrapModal.staticFunc = {};

FWrapModal.success = ({className=styles.zk_modal_content_left, ...resProps}) => {
	className = `${className} ${styles.zk_modal}`
	FWrapModal.modal.success({ className: className, ...resProps });
}
FWrapModal.warning = ({className=styles.zk_modal_content_left, ...resProps}) => {
	className = `${className} ${styles.zk_modal}`
	FWrapModal.modal.warning({ className: className, ...resProps });
}
FWrapModal.error = ({className=styles.zk_modal_content_left, ...resProps}) => {
	className = `${className} ${styles.zk_modal}`
	FWrapModal.modal.error({ className: className, ...resProps });
}
FWrapModal.confirm = ({className=styles.zk_modal_content_left, ...resProps}) => {
	className = `${className} ${styles.zk_modal}`
	FWrapModal.modal.confirm({ className: className, ...resProps });
}
FWrapModal.info = ({className=styles.zk_modal_content_left, ...resProps}) => {
	// console.log("[^_^:20230924-2130-001] FWrapModal.staticFunc: ", FWrapModal.staticFunc);
	className = `${className} ${styles.zk_modal}`
	FWrapModal.modal.info({ className: className, ...resProps });
}

// let antdApp = {}

const FInitModalStaticFunc = () => {
  const staticFunc = App.useApp();
  // antdApp = staticFunction;
  FWrapModal.staticFunc = staticFunc;
  FWrapModal.message = staticFunc.message;
  FWrapModal.modal = staticFunc.modal;
  FWrapModal.notification = staticFunc.notification;
  // message = staticFunction.message;
  // modal = staticFunction.modal;
  // notification = staticFunction.notification;
  // console.log("[^_^:202309-2150-001] FWrapModal.staticFunc: ", FWrapModal.staticFunc);
  return '';
};

FWrapModal.ModalStaticFunc = FInitModalStaticFunc;

export default FWrapModal;


