/*
* @Author: Vinson
* @Date:   2021-03-03 22:36:25
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-09 10:18:15
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

const initData = {
	'f-areaOne': undefined,
	'f-initialValue': "联动选择后，不变",
	'f-visible': false,
	'f-values': [],
	'f-ZKSelectChildOptions': [],
	'f-ZKSelectDefaultValue': "",
	'f-Select-parent': 'guangdong',
	'f-Select-child': 'zhuhai',
	'f-Radio': 'C',
	'f-Checkbox': ['B', 'D'],
	'f-ZKInput': '设置了默认值',
	'f-ZKInputNumber': 1,
	'f-ZKInputJson-smart-0': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'f-ZKInputJson-compact': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'f-ZKInputJson-expanding': { 'zh_CN': 'v_zh_CN-1', 'en_US': 'v_en_US-1' },
	'f-ZKInputJson-compact-noButn': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'f-ZKInputJson-expanding-noButn': { 'zh_CN': '朱颜辞镜花辞树', "en_US": "最是人间留不住" },
	'f-ZKSelect': "",
	'f-ZKSelectChild': "",
	'f-ZKDatePicker': [moment('2015/06/06', "YYYY/MM/DD"), moment(new Date(), "YYYY-MM-DD")]
}

const FInitEditFormDemo = ()=>{

	const [form] = Form.useForm();

	let f_save = (data, form, callBack)=>{
		console.log('----------- edit f_save begin... ');
		console.log(data);
		let vs = [];
		for (let index in data) {
			vs.push(zkJsUtils.objToStr(index) + ":" + zkJsUtils.objToStr(data[index]))
		}
		console.log("values: ", vs.join(",\n"));

		setTimeout(function () {
			console.log('----------- edit f_save  休息完成');
			callBack();
		}, 1500);

		console.log('----------- edit f_save end... ');
	}

	let f_saveAndNext = (data, form, callBack)=>{
		console.log('----------- edit f_saveAndNext begin... ');
		console.log(data);
		let vs = [];
		for (let index in data) {
			vs.push(zkJsUtils.objToStr(index) + ":" + zkJsUtils.objToStr(data[index]))
		}
		console.log("values: ", vs.join(",\n"));

		setTimeout(function () {
			console.log('----------- edit f_saveAndNext  休息完成');
			callBack([{
				'name': 'f-ZKSelect',
				'errors': ['后台返回输入错误']
			}]);
		}, 1500);

		console.log('----------- edit f_saveAndNext end... ');
	}

	return (
		<div>
			<ZKEditForm icon="" form={form} data={initData}
				leaveConfirm = {true} // 路由切换时确认
				reloadConfirm = {false} // 刷新时确认
				saveFunc={ f_save }
				resetFunc={e => { 
					console.log("[^_^:20210305-0959-001] FInitEditFormDemo.form: ", form);
					form.resetFields();
					return false;
				}}
				nextFunc={ f_saveAndNext } >
				
				{ f_demoFormItems('f') } 

			</ZKEditForm>
		</div>
	)
}

export default FInitEditFormDemo;


