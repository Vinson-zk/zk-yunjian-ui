/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:26:57
 * @Last Modified by: runoob
 * @Last Modified time: 2023-10-08 17:54:38
 */

import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { ZKDatePicker } from '../../original/index';

/**
 * 日期范围格式化控件，取值时按设置的 format 格式返回对应格式日期字符串
 */
// class CInitDateFormatRangePicker extends DatePicker.RangePicker {
class CInitDateFormatRangePicker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	// static getDerivedStateFromProps(props, state){
	// 	return true;
	// }

	// f_onChange = (e)=>{
	// 	let { format, onChange } = this.props;
	// 	if (e&&(zkJsUtils.assertObjType(onChange, Function))) {
	// 		// console.log("[^_^:20200817-1737-001] ", e);
	// 		onChange([e[0]?e[0].format(format):undefined, e[1]?e[1].format(format):undefined]);
	// 		// onChange([e[0].format(format), e[1].format(format)]);
	// 	}
	// }

	f_onChange = (vMs, vStrs)=>{
		let { onChange } = this.props;
		if (zkJsUtils.assertObjType(onChange, Function)) {
			// console.log("[^_^:20210307-0550-001] ", e);
			onChange([vStrs[0]?vStrs[0]:undefined, vStrs[1]?vStrs[1]:undefined]);
		}
	}

	render() {

		let { format, onChange, value, defaultValue, ...otherProps } = this.props;

		let makeProps = {}
		makeProps.format = format;

		if ('value' in this.props) {
			makeProps.value = [];
			if (value) {
				if (value[0]) {
					makeProps.value[0] = dayjs(value[0], format);
				}
				if (value[1]) {
					makeProps.value[1] = dayjs(value[1], format);
				}
			}
		}

		if ('defaultValue' in this.props) {
			makeProps.defaultValue = [];
			if (defaultValue) {
				if (defaultValue[0]) {
					makeProps.defaultValue[0] = dayjs(defaultValue[0], format);
				}
				if (defaultValue[1]) {
					makeProps.defaultValue[1] = dayjs(defaultValue[1], format);				}
			}
		}

		return <DatePicker.RangePicker  {...otherProps} {...makeProps} onChange={this.f_onChange} />
	}
}

// 定义属性
CInitDateFormatRangePicker.propTypes = {
	...DatePicker.RangePicker.propTypes
}

// 定义属性默认值
CInitDateFormatRangePicker.defaultProps = {
	...DatePicker.RangePicker.defaultProps,
	format: "YYYY-MM-DD"
}

/**
	日期格式化控件，取值时按设置的 format 格式返回对应格式日期字符串
*/
// class CInitDateFormatPicker extends DatePicker {
class CInitDateFormatPicker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	// static getDerivedStateFromProps(props, state){
	// 	return true;
	// }

	f_onChange = (vM, vStr)=>{

		// let { format, onChange } = this.props;
		// if (e&&(zkJsUtils.assertObjType(onChange, Function))) {
		// 	onChange(e.format(format));
		// }

		let { onChange } = this.props;
		if (zkJsUtils.assertObjType(onChange, Function)) {
			onChange(vStr);
		}
	}

	render() {

		let { format, onChange, value, defaultValue, ...otherProps } = this.props;
		let makeProps = {}
		makeProps.format = format;

		if ('value' in this.props) {
			if (value) {
				makeProps.value = dayjs(value, format)
			} else {
				makeProps.value = undefined
			}
		}

		if ('defaultValue' in this.props) {
			if (defaultValue) {
				makeProps.defaultValue = dayjs(defaultValue, format)
			} else {
				makeProps.defaultValue = undefined
			}
		}

		return <ZKDatePicker  {...otherProps} {...makeProps} onChange={this.f_onChange} />
	}
}

// 定义属性
CInitDateFormatPicker.propTypes = {
	...ZKDatePicker.propTypes
}

// 定义属性默认值
CInitDateFormatPicker.defaultProps = {
	...ZKDatePicker.defaultProps,
	format: "YYYY-MM-DD"
}

CInitDateFormatPicker.RangePicker = CInitDateFormatRangePicker;

export default CInitDateFormatPicker

