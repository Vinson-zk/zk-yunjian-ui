/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:26:57
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-07 05:50:13
 */

import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

import { ZKDatePicker } from '../../original/index';

/**
 * 日期范围格式化控件，取值时按设置的 format 格式返回对应格式日期字符串
 */
class CInitDateFormatRangePicker extends DatePicker.RangePicker {

	constructor(props) {
		super(props);
		this.state = {}
	}

	// static getDerivedStateFromProps(props, state){
	// 	return true;
	// }

	// f_onChange = (e)=>{
	// 	let { format, onChange } = this.props;
	// 	if (e&&(onChange instanceof Function)) {
	// 		// console.log("[^_^:20200817-1737-001] ", e);
	// 		onChange([e[0]?e[0].format(format):undefined, e[1]?e[1].format(format):undefined]);
	// 		// onChange([e[0].format(format), e[1].format(format)]);
	// 	}
	// }

	f_onChange = (vMs, vStrs)=>{
		let { onChange } = this.props;
		if (onChange instanceof Function) {
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
					makeProps.value[0] = moment(value[0], format);
				}
				if (value[1]) {
					makeProps.value[1] = moment(value[1], format);
				}
				// makeProps.value = [value[0]?moment(value[0], format):null, value[1]?moment(value[1], format):null]
			}
		}

		if ('defaultValue' in this.props) {
			makeProps.defaultValue = [];
			if (defaultValue) {
				if (defaultValue[0]) {
					makeProps.defaultValue[0] = moment(defaultValue[0], format);
				}
				if (defaultValue[1]) {
					makeProps.defaultValue[1] = moment(defaultValue[1], format);
					// 防止日期范围只初始化了 结束日期，如果只初始化了结束日期，默认将结束日期也设置为开始日期
					if(!defaultValue[0]){
						makeProps.defaultValue[0] = makeProps.defaultValue[1];
					}
				}
				// makeProps.defaultValue = [defaultValue[0]?moment(defaultValue[0], format):null, defaultValue[1]?moment(defaultValue[1], format):null]
			}
		}

		return <DatePicker.RangePicker  {...otherProps} {...makeProps} onChange={this.f_onChange} />
	}
}

CInitDateFormatRangePicker.defaultProps = {
	format: "YYYY-MM-DD"
}

/**
	日期格式化控件，取值时按设置的 format 格式返回对应格式日期字符串
*/
class CInitDateFormatPicker extends DatePicker {

	constructor(props) {
		super(props);
		this.state = {}
	}

	// static getDerivedStateFromProps(props, state){
	// 	return true;
	// }

	f_onChange = (vM, vStr)=>{

		// let { format, onChange } = this.props;
		// if (e&&(onChange instanceof Function)) {
		// 	onChange(e.format(format));
		// }

		let { onChange } = this.props;
		if (onChange instanceof Function) {
			onChange(vStr);
		}
	}

	render() {

		let { format, onChange, value, defaultValue, ...otherProps } = this.props;
		let makeProps = {}
		makeProps.format = format;

		if ('value' in this.props) {
			if (value) {
				makeProps.value = moment(value, format)
			} else {
				makeProps.value = undefined
			}
		}

		if ('defaultValue' in this.props) {
			if (defaultValue) {
				makeProps.defaultValue = moment(defaultValue, format)
			} else {
				makeProps.defaultValue = undefined
			}
		}

		return <ZKDatePicker  {...otherProps} {...makeProps} onChange={this.f_onChange} />
	}
}

CInitDateFormatPicker.defaultProps = {
	format: "YYYY-MM-DD"
}

CInitDateFormatPicker.RangePicker = CInitDateFormatRangePicker;

export default CInitDateFormatPicker

