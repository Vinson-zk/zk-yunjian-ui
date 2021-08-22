/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:47:01
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-15 23:01:17
 */

import React from 'react';
import { InputNumber } from 'antd';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { zkToolsMsg } from '../../../tools';
import styles from "./styles.less";

/**
 * 数字格式化对象；
 * @param {int} value 数字值
 * @param {object} intl react-intl injectIntl 国际化对象;
 */
const f_formatValueFunc = (value, intl) => {

	if (intl == null || intl == undefined) {
		if (100000000 > value && value > 10000) {
			return value / 10000 + " " + zkToolsMsg.msgFormatByIntl(intl, 'global.unit.name.w')
		} else if (value > 100000000) {
			return value / 100000000 + " " + zkToolsMsg.msgFormatByIntl(intl, 'global.unit.name.bn')
		} else {
			return value
		}
	} else {
		if (100000000 > value && value > 10000) {
			return value / 10000 + " " + zkToolsMsg.msgFormatByIntl(intl, 'global.unit.name.w')
		} else if (value > 100000000) {
			return value / 100000000 + " " + zkToolsMsg.msgFormatByIntl(intl, 'global.unit.name.bn')
		} else {
			return value
		}
	}
}

/*
isShowNumLabel:   // 是否优化显示；true-显示；false-不显示；默认 false 不显示
*/
// class CWrapInputNumber extends InputNumber {
class CWrapInputNumber extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			value: undefined,
		};

		if (!isNaN(props.defaultValue)) {
			this.state.value = props.defaultValue;
		}
	}

	static getDerivedStateFromProps(props, state) {
		if ('value' in props) {
			if (!isNaN(props.value)) {
				state.value = props.value;
			} else {
				state.value = undefined;
			}
		}

		return true;
	}

	onChange = (value)=>{
		if (!isNaN(value)) {
			this.setState({ value: value * 1.0 })
			if (this.props.onChange instanceof Function) {
				this.props.onChange.call(this, value)
			}
		}
		// return value;
	}

	render() {
		let { formatValueFunc, ...itemProps } = this.props

		const f_formatInput = value => {
			if (!isNaN(value)) {
				return formatValueFunc(value * 1.0, this.props.intl)
			} else {
				return formatValueFunc(0 * 1.0, this.props.intl)
			}
		}

		return (
			<div>
				<InputNumber {...itemProps} onChange={this.onChange}/>
				{(formatValueFunc instanceof Function) ? f_formatInput(this.state.value) : ""}
			</div>
		)
	}
}

// 定义属性
CWrapInputNumber.propTypes = {
	...InputNumber.propTypes,
	formatValueFunc: PropTypes.func,
}
// 定义属性默认值
CWrapInputNumber.defaultProps = {
	...InputNumber.defaultProps,
	formatValueFunc: undefined,
	onChange: undefined,
	className: styles.default_class,
}

// 组件提供的数值格式化函数
CWrapInputNumber.formatValueFunc = f_formatValueFunc;

export default injectIntl(CWrapInputNumber);

