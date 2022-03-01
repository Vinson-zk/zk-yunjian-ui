/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:33:59
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-12-06 18:44:34
 */

import React from 'react';
import { Input, Select, Popover } from 'antd';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import zkJsUtils from 'zkJsUtils';
import { zkToolsMsg } from '../../../tools';

import styles from "./styles.less";
const { Option } = Select

class CInitInputJson extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			// value: props.value || {},
			value: {},
			// attrs: props.attrs            // attributers 需要编辑的属性说明对象 {attrName:{name:显示名}}
			primaryAttr: props.primaryAttr,   // 首要属性; 也是当前维护的属性；
			styleType: props.styleType,       // Input Json UI 类型 
			isInput: false,                    // 是否是输入来修改值；
		}
		// 初始化所有属性值为空字符串
		if (props.initAttrrEmpty) {
			for (let index in this.props.attrs) {
				this.state.value[index] = "";
			}
		}
	}

	static getDerivedStateFromProps(props, state) {
		// console.log("----- getDerivedStateFromProps ", props, state);
		if (!state.isInput) {
			if ('value' in props) {
				// console.log("----- getDerivedStateFromProps ", props.value, state.value);
				state.value = { ...props.value } 
			} else {
				state.value = {};
			}
			// console.log("----- getDerivedStateFromProps -- 1: ", state.primaryAttr)
			state.primaryAttr = state.primaryAttr ? state.primaryAttr : props.primaryAttr;
			if (zkJsUtils.isEmpty(state.primaryAttr)) {
				for (let index in props.attrs) {
					state.primaryAttr = index;
					break;
				}
			}
		} else {
			// console.log("----- getDerivedStateFromProps -- 2: ", state)
		}

		state.isInput = false;
		return true;
	}

	/*** 配合 Form.Item 事件函数 ***/
	triggerChange = (changedValue)=>{
		// Should provide an event to pass value to Form.
		// console.log("[20210307-0005-001] zk-inputJson triggerChange:", changedValue);
		const { onChange } = this.props;
		if (onChange) {
			onChange(changedValue);
		}
	}

	/*** JSON 编辑 ***/
	// 取编辑的 JSON 值
	getValue = ()=>{
		return this.state.value || {}
	}
	// 编辑某个属性的值
	editAttr = (key, value)=>{
		if (key) {
			let aData = this.getValue();
			aData[key] = value;
			this.setState({ value: aData, isInput: true });
			this.triggerChange(aData);
		}
	}
	// 当前维护属性改变
	changePrimaryAttr = (key)=>{
		this.setState({ primaryAttr: key, isInput: true });
	}

	/*** 取 需要编辑的属性数组 ***/
	getEditAttrs = ()=>{
		const attrs = []
		for (let index in this.props.attrs) {
			attrs.push({ key: index, name: this.props.attrs[index].name })
		}
		return attrs
	}

	/************************************************************/
	/*** UI 处理 ***/
	/************************************************************/

	/*** Json 编辑框前缀结点 element ***/
	getBeforeNodeElement = (flag = "select", label = "")=>{
		/*** 属性选择框 前缀元素 ***/
		const f_selectNodeElement = () => {
			// 需要编辑的属性数组
			const attrs = this.getEditAttrs()
			// 属性选项
			const optionKeys = attrs.map((item, index) => {
				return (<Option title={item.name} key={item.key} value={item.key} >{item.name}</Option>)
			})
			// 属性选择框，属性选择框前缀
			return (<Select style = {{'width': '100px'}} className={`${this.props.beforeSelectClassName} ${styles.attr_before_color}`}
				onChange={(e) => {
					this.changePrimaryAttr(e);
				}}
				// defaultValue={this.state.primaryAttr?this.state.primaryAttr:attrs[0].key} 
				// defaultValue={this.state.primaryAttr} 
				value={this.state.primaryAttr}
			>{optionKeys}
			</Select>
			);
		}

		const f_normalNodeElement = children => {
			return <div title={children} className={this.props.beforeClassName}>{children}</div>
		}

		switch (flag) {
			case "select":
				return f_selectNodeElement()
				break;
			default:
				return f_normalNodeElement(label)
				break;
		}

	}

	/*** Json 编辑框后缀结点 element ***/
	getAfterNodeElement = (flag = "smart")=>{

		/*** 展开与收起触发开关 后缀元素 ***/
		const f_switchNodeElement = (styleType, label) => {
			return (
				<div className={`${this.props.afterClassName} ${styles.attr_after_color}`}
					onClick={() => {
						this.setState({ styleType: styleType })
					}}>
					{label}
				</div>
			)
		}

		/*** 全部属性详情展示卡片 后缀元素 ***/
		const f_attrCardNodeElement = label => {
			let c = []
			for (let index in this.getValue()) {
				let attrName = index;
				if (this.props.attrs[index]) {
					attrName = this.props.attrs[index].name ? this.props.attrs[index].name : index;
				}
				c.push(<div className={styles.attr_popover_panel} key={"p-" + index}>
					<span title={attrName} >{attrName}:</span><pre>{this.getValue()[index]}</pre>
				</div>);
			}

			// 当前所有属性都无值；
			if (c.length < 1) {
				c.push(
					<div key="no-data-" className="ant-empty">
						<div className="ant-empty-image">
							<img alt={zkToolsMsg.msgFormatByIntl(this.props.intl, "global.message.no.data")}
								src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxlbGxpcHNlIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ii8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgIDxwYXRoIGQ9Ik01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHoiLz4KICAgICAgPHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" />
						</div>
						<p className="ant-empty-description">{zkToolsMsg.msgFormatByIntl(this.props.intl, "global.message.no.data")}</p>
					</div>
				)
			}

			const content = (
				<div className={styles.attr_popver_div} >
					{c}
				</div>
			);

			return (<Popover className={this.props.afterClassName} placement="bottomRight" content={content} trigger="click">
				<div className={styles.attr_after_color}>{label}</div>
			</Popover>
			)
		}
		switch (flag) {
			case 'expanding': // 取展开开关；
				return f_switchNodeElement("expanding", zkToolsMsg.msgFormatByIntl(this.props.intl, "global.opt.name._key_expanding"));
				break;
			case 'compact': // 取展开开关；
				return f_switchNodeElement("compact", zkToolsMsg.msgFormatByIntl(this.props.intl, "global.opt.name._key_compact"));
				break;
			default: // 默认取 全部属性详情展示卡片
				return f_attrCardNodeElement(zkToolsMsg.msgFormatByIntl(this.props.intl, "global.opt.name._key_detail"))
				break;
		}
	}

	/*** 展开风格的编辑UI ***/
	getExpandingEditNode = ()=>{
		// 需要编辑的属性数组
		const attrs = this.getEditAttrs()

		// 收起开关后缀元素
		let addonAfter = undefined
		if (this.props.isShowExpBtn) {
			addonAfter = this.getAfterNodeElement("compact");
		}

		return attrs.map((item, index) => {
			// 前缀节点元素
			const addonBefore = this.getBeforeNodeElement("nolmal", item.name);
			if (index === 0) {
				return (
					<Input
						disabled={this.props.disabled}
						readOnly={this.props.readOnly}
						key={item.key}
						className={this.props.inputClassName}
						onChange={(e) => {
							const { value } = e.target;
							this.editAttr(item.key, value)
						}}
						value={this.getValue()[item.key]}
						title={this.getValue()[this.state.primaryAttr]}
						addonBefore={addonBefore}
						addonAfter={addonAfter}
					/>
				)
			}
			return (
				<Input
					disabled={this.props.disabled}
					readOnly={this.props.readOnly}
					key={item.key}
					className={this.props.inputClassName}
					onChange={(e) => {
						const { value } = e.target;
						this.editAttr(item.key, value)
					}}
					value={this.getValue()[item.key]}
					title={this.getValue()[this.state.primaryAttr]}
					addonBefore={addonBefore}
				/>
			)
		})
	}

	/*** 紧凑风格的编辑UI ***/
	getCompactEditNode = ()=>{

		// 前缀节点元素
		const addonBefore = this.getBeforeNodeElement("select", null);
		// 展开开关后缀元素
		let addonAfter = undefined
		if (this.props.isShowExpBtn) {
			addonAfter = this.getAfterNodeElement("expanding");
		}
		// 属性选择框
		return (
			<Input
				disabled={this.props.disabled} readOnly={this.props.readOnly}
				className={this.props.inputClassName}
				onChange={(e) => {
					this.editAttr(this.state.primaryAttr, e.target.value)
				}}
				value={this.getValue()[this.state.primaryAttr]}
				title={this.getValue()[this.state.primaryAttr]}
				addonBefore={addonBefore}
				addonAfter={addonAfter}
			/>
		)
	}

	/*** 聪明风格的编辑的UI ***/
	getSmartEditNode = ()=>{
		// 前缀节点元素
		const addonBefore = this.getBeforeNodeElement("select", null);
		// 后缀节点元素
		const addonAfter = this.getAfterNodeElement("smart");
		// 属性选择框
		return (
			<Input
				className={this.props.inputClassName}
				disabled={this.props.disabled}
				readOnly={this.props.readOnly}
				onChange={(e) => {
					this.editAttr(this.state.primaryAttr, e.target.value)
				}}
				value={this.getValue()[this.state.primaryAttr]}
				title={this.getValue()[this.state.primaryAttr]}
				addonBefore={addonBefore}
				addonAfter={addonAfter}
			/>
		)
	}

	render() {
		// console.log("[^_^:20210306-2346-001] CInitInputJson: ", this.props);
		let { style = {}, className = "", 
			attrs, primaryAttr, isShowExpBtn, styleType, beforeClassName, beforeSelectClassName, inputClassName, 
			afterClassName, readOnly, initAttrrEmpty, disabled, onChange,
			...itemProps
		} = this.props;

		switch (this.state.styleType) {
			case "smart":
				return (<div {...itemProps} style={style} className={`${className} ${styles.edit_json}`}>{this.getSmartEditNode()}</div>)
				break;
			case "compact":
				return (<div {...itemProps} style={style} className={`${className} ${styles.edit_json}`}>{this.getCompactEditNode()}</div>)
				break;
			default:
				return (<div {...itemProps} style={style} className={`${className} ${styles.edit_json}`}>{this.getExpandingEditNode()}</div>)
				break;
		}
	}
}

// 定义属性 isRequired
CInitInputJson.propTypes = {
	id: PropTypes.string,
	attrs: PropTypes.object.isRequired,
	primaryAttr: PropTypes.string,
	isShowExpBtn: PropTypes.bool,
	styleType: PropTypes.oneOf(["expanding", "smart", "compact"]),
	beforeClassName: PropTypes.string,
	beforeSelectClassName: PropTypes.string,
	inputClassName: PropTypes.string,
	afterClassName: PropTypes.string,
	readOnly: PropTypes.bool,
	initAttrrEmpty: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
}

// 定义属性默认值
CInitInputJson.defaultProps = {
	primaryAttr: undefined,
	styleType: "smart",
	isShowExpBtn: true,
	className: styles.edit_json_default_class,
	beforeClassName: styles.attr_before,
	beforeSelectClassName: styles.attr_before_select,
	inputClassName: styles.input_json,
	afterClassName: styles.attr_after,
	readOnly: false,
	initAttrrEmpty: false,
	disabled: false,
}

export default injectIntl(CInitInputJson);


