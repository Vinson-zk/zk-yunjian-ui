/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:41:45
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-19 13:46:25
 */

import React from 'react';
import { Input } from 'antd';

import styles from "./styles.less";

const FWrapInput = (props)=>{
	return (<Input {...props} />);
}

FWrapInput.propTypes = {
	...Input.propTypes
}
FWrapInput.defaultProps = {
	...Input.defaultProps,
	className: styles.zk_input_default_class,
}

FWrapInput.Search = Input.Search;
FWrapInput.Search.defaultProps = {
	...FWrapInput.Search.defaultProps,
	className: styles.zk_input_default_class
}

FWrapInput.Password = Input.Password;
FWrapInput.TextArea = Input.TextArea;

export default FWrapInput;
