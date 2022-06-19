/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:41:45
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-26 18:58:38
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
	className: styles.default_class,
}

FWrapInput.Search = Input.Search;
FWrapInput.Search.defaultProps = {
	...FWrapInput.Search.defaultProps,
	className: styles.default_class
}

FWrapInput.Password = Input.Password;
FWrapInput.TextArea = Input.TextArea;

export default FWrapInput;
