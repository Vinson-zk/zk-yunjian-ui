/*
* @Author: Vinson
* @Date:   2021-03-03 22:42:43
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-08 23:33:45
* 
* 
* 
*/

import React from 'react';
import { injectIntl } from 'react-intl';
import { Input, Checkbox, Radio, Form } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import moment from 'moment';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import zkJsUtils from 'zkJsUtils';
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKEditForm, ZKInputJson } = ZKCustomComponents;
const { ZKModal, ZKDatePicker, ZKInput, ZKInputNumber, ZKSelect, ZKForm } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;
const { Option } = ZKSelect;

import f_demoFormItems from './editFormDemoItems.js';

// console.log("[^_^:20210305-1601-001] f_demoFormItems: ", f_demoFormItems);

const initData = {
	'c-initialValue': "联动选择后，不变",
	'c-visible': false,
	'c-values': [],
	'c-ZKSelectChildOptions': [],
	'c-ZKSelectDefaultValue': "",
	'c-Select-parent': 'guangdong',
	'c-Select-child': 'zhuhai',
	'c-Radio': 'C',
	'c-Checkbox': ['B', 'D'],
	'c-ZKInput': '设置了默认值',
	'c-ZKInputNumber': 1,
	'c-ZKInputJson-smart-0': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'c-ZKInputJson-compact': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'c-ZKInputJson-expanding': { 'zh_CN': 'v_zh_CN-1', 'en_US': 'v_en_US-1' },
	'c-ZKInputJson-compact-noButn': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'c-ZKInputJson-expanding-noButn': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'c-ZKSelect': "",
	'c-ZKSelectChild': "",
	'c-ZKDatePicker': [moment('2015/06/06', "YYYY/MM/DD"), moment(new Date(), "YYYY-MM-DD")]
}

class CInitEditFormDemo extends React.Component {

	formRef = React.createRef();

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			values: [],
		};
	}

	handleOk = (e)=>{
		this.setState({ visible: false, values: [] });
	}
	handleCancel = (e)=>{
		this.setState({ visible: false });
	}
	save = (data, form, callBack)=>{
		console.log('----------- edit save begin... ');
		console.log(data);
		let vs = [];
		for (let index in data) {
			vs.push(zkJsUtils.objToStr(index) + ":" + zkJsUtils.objToStr(data[index]))
		}
		this.setState({ visible: true, values: vs });
		setTimeout(function () {
			console.log('----------- edit save  休息完成');
			callBack([{
				'name': 'c-ZKSelect',
				'errors': ['后台返回输入错误']
			}]);
		}, 1500);

		console.log('----------- edit save end... ');
	}
	saveAndNext = (data, form, callBack)=>{
		console.log('----------- edit saveAndNext begin... ');
		console.log(data);
		let vs = [];
		for (let index in data) {
			vs.push(zkJsUtils.objToStr(index) + ":" + zkJsUtils.objToStr(data[index]))
		}
		this.setState({ visible: true, values: vs });
		setTimeout(function () {
			console.log('----------- edit saveAndNext  休息完成');
			data['c-Input'] = "下一个";
			callBack(null, data);
		}, 1500);

		console.log('----------- edit saveAndNext end... ');
	}

	render() {
		let { form, history, intl } = this.props;
		return (
			<div>
				<ZKModal title="ZKModal" visible={this.state.visible}
					onOk={this.handleOk} onCancel={this.handleCancel} >
					<SyntaxHighlighter language="jsx" style={docco}>
						{
							"{\n" + this.state.values.join(",\n") + "\n}"
						}
					</SyntaxHighlighter>
				</ZKModal>
				<ZKEditForm title = "React Class EditForm Demo" ref = {this.formRef} data = { initData }
					leaveConfirm = { false }   // 路由切换时确认
					reloadConfirm = { false }  // 刷新时确认
					saveFunc={ this.save }
					resetFunc={ form => {
						console.log("[^_^:20210303-2223-001] CInitEditFormDemo.formRef: ", form, this.formRef);
						// this.formRef.current.resetFields();
						return true;
					} }
					nextFunc={ this.saveAndNext } >

					{ f_demoFormItems('c') }

				</ZKEditForm>
			</div>
		)
	}
}

export default CInitEditFormDemo;



