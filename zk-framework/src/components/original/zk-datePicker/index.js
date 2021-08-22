/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:34:14
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:09:56
 */

import React from 'react';
import { DatePicker } from 'antd';

const FWrapRangePicker = ({ defaultValue, ...res } )=>{
	// 防止日期范围只初始化了 结束日期，如果只初始化了结束日期，默认将结束日期也设置为开始日期
	if(defaultValue && defaultValue.length > 1){
		if(defaultValue[0]  === undefined){
			defaultValue[0] = defaultValue[1];
		}
	}
	return <DatePicker.RangePicker {...res} defaultValue = {defaultValue} />
}

// 定义属性
FWrapRangePicker.propTypes = {
    ...DatePicker.RangePicker.propTypes
}
// 定义属性默认值 
FWrapRangePicker.defaultProps = {
	...DatePicker.RangePicker.defaultProps
}

const FWrapDatePicker = (props)=>{
	return <DatePicker {...props} />
}

// 定义属性
FWrapDatePicker.propTypes = {
    ...DatePicker.propTypes
}
// 定义属性默认值 
FWrapDatePicker.defaultProps = {
	...DatePicker.defaultProps
}

FWrapDatePicker.RangePicker = FWrapRangePicker;

export default FWrapDatePicker
