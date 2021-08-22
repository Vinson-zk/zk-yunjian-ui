/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:09:47
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-08 09:11:50
 */

import React from 'react';
import { Select } from 'antd'
import PropTypes from 'prop-types'

import styles from "./styles.less";

/*
	fillValue:    // 指定填充一个空选择项的显示名称，未指定时，即 undefined 时，不填充；默认不填充；
*/
/*** 做一层封装，以使用 Form 的其他函数 ***/
const FWrapSelect = ({ fillValue, className, ...props })=>{
	// <div className = {`${className}`} > </div>
	return (
		<Select {...props} className = {`${className}`} >
			{fillValue === undefined ? "" : (<Select.Option key="" value="" >{fillValue}&nbsp;</Select.Option>)}
			{props.children}
		</Select>
	)
}

FWrapSelect.OptGroup = Select.OptGroup;
FWrapSelect.Option = Select.Option;

// 定义属性
FWrapSelect.propTypes = {
	...Select.propTypes,     // 在封装有指定
	fillValue: PropTypes.string, // 指定填充一个空选择项的显示名称，未指定时，即 undefined 时，不填充；默认不填充；
}
// 定义属性默认值
FWrapSelect.defaultProps = {
	...Select.defaultProps, // 在封装有指定  
	fillValue: undefined,
	className: styles.default_class
}


export default FWrapSelect;


