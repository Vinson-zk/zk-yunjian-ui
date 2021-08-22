/*
* @Author: Vinson
* @Date:   2021-03-05 15:42:57
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-08 12:06:32
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

const areas = [
	{
		name: '湖南',
		key: 'hunan',
		childs: [
			{
				name: '长沙',
				key: 'changsha',
			}, 
			{
				name: '益阳',
				key: 'yiyang',
			}
		]
	},
	{
		name: '广东',
		key: 'guangdong',
		childs: [
			{
				name: '广州',
				key: 'guangzhu',
			}, 
			{
				name: '东莞',
				key: 'dongguan',
			}, 
			{
				name: '珠海',
				key: 'zhuhai',
			}
		]
	}
]

const f_getAreaTwos = (areaOne) => {
	if (areaOne) {
		for (let area of areas) {
			if (area.key == areaOne) {
				return area.childs || []
			}
		}
	}
	return [];
}

const attrs = { 'zh_CN': { 'name': '简体中文' }, 'en_US': { 'name': 'English' } };

// <React.Fragment></React.Fragment>
const f_getItems = (namePrefix)=>{
	return [
		<ZKEditForm.Item key = {`${namePrefix}-Input`} name = {`${namePrefix}-Input`} label="Input" >
			<Input style={{ width: 300 }} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputNumber`} name = {`${namePrefix}-ZKInputNumber`} label="ZKInputNumber" rules  = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputNumber />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-Select-parent`} name = {`${namePrefix}-Select-parent`} label="联动 Select-parent" >
			<ZKSelect>
				<ZKSelect.Option value="">请选择</ZKSelect.Option>
				{areas.map((item, index) => {
					return <ZKSelect.Option key={`Select-parent-${index}`} value={item.key}>{item.name}</ZKSelect.Option>
				})}
			</ZKSelect>
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-noStyle-Select-child-`} noStyle shouldUpdate={ (prevValues, curValues) => {return prevValues[`${namePrefix}-Select-parent`] !== curValues[`${namePrefix}-Select-parent`] }}>
			{({ getFieldValue, setFieldsValue, isFieldTouched })=>{
				let svParent = getFieldValue(namePrefix + '-Select-parent');
				let isOptParent = isFieldTouched(namePrefix + '-Select-parent');
				let selChilds = f_getAreaTwos(svParent);
				// console.log("[^_^:20210301-0011-001] : " + namePrefix + '-Select-parent', svParent, isOptParent, selChilds);
				let selChildOpts = selChilds.map(item => {return <ZKSelect.Option key={`${namePrefix}-${item.key}`} value={item.key}>{item.name}</ZKSelect.Option>});

				if(isOptParent){
					// 操作过上级节点
					let v = {};
					v[namePrefix + '-Select-child'] = '';
					setFieldsValue(v);
				}
				return (
					<ZKForm.Item key = {`${namePrefix}-Select-child`} name = {`${namePrefix}-Select-child`} label="联动 Select-child" >
						<ZKSelect>
							<ZKSelect.Option value="">请选择</ZKSelect.Option>
							{selChildOpts}
						</ZKSelect>		
					</ZKForm.Item>	
				);
			}}
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-Radio`} name = {`${namePrefix}-Radio`} label="Radio" >
			<Radio.Group >
				<Radio value="A">A</Radio>
				<Radio value="B">B</Radio>
				<Radio value="C">C</Radio>
			</Radio.Group>
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-Checkbox`} name = {`${namePrefix}-Checkbox`} label="Checkbox" >
			<Checkbox.Group >
				<Checkbox value="A">A</Checkbox>
				<Checkbox value="B">B</Checkbox>
				<Checkbox value="C">C</Checkbox>
				<Checkbox value="D">D</Checkbox>
			</Checkbox.Group>
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInput`} name = {`${namePrefix}-ZKInput`} label="ZKInput" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInput />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-smart-0`} name = {`${namePrefix}-ZKInputJson-smart-0`} label="ZKInputJson-smart-0" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="smart" primaryAttr="zh_CN" attrs={attrs}
				// value={{'en_US':'v_en_US'}}
				onChange={(e) => { console.log('ZKInputJson-smart-0', e) }} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-smart`} name = {`${namePrefix}-ZKInputJson-smart`} label="ZKInputJson-smart" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="smart" primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-smart ', e) }} attrs={attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-compact`} name = {`${namePrefix}-ZKInputJson-compact`} label="ZKInputJson-compact" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="compact" primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-compact ', e) }} attrs={attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-expanding`} name = {`${namePrefix}-ZKInputJson-expanding`} label="ZKInputJson-expanding" rules = {[{ required: true, message: "Please input your note!" }]}>
			<ZKInputJson styleType="expanding" primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-expanding ', e) }} attrs={attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-compact-noButn`} name = {`${namePrefix}-ZKInputJson-compact-noButn`} label="ZKInputJson-compact-noButn" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="compact" isShowExpBtn={false} primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-compact-noButn ', e) }} attrs={attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-expanding-noButn`} name = {`${namePrefix}-ZKInputJson-expanding-noButn`} label="ZKInputJson-expanding-noButn" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="expanding" isShowExpBtn={false} primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-expanding-noButn ', e) }} attrs={attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKSelect`} name = {`${namePrefix}-ZKSelect`} label="ZKSelect" rules = {[{ required: true}]} >
			<ZKSelect fillValue={"请选择..."} >
				<Option value="c1">c1</Option>
				<Option value="c2">c2</Option>
			</ZKSelect>
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKSelectChild-noStyle`} noStyle shouldUpdate={ (prevValues, curValues) => {return prevValues[`${namePrefix}-ZKSelect`] !== curValues[`${namePrefix}-ZKSelect`] }}>
			{({ getFieldValue, setFieldsValue, isFieldTouched })=>{
				let svParent = getFieldValue(namePrefix + '-ZKSelect');
				let isOptParent = isFieldTouched(namePrefix + '-ZKSelect');

				let ops = [];
				if (svParent == 'c1') {
					ops = [{ value: 'c1-1', name: 'c1-1' }, { value: 'c1-2', name: 'c1-2' }, { value: 'c1-3', name: 'c1-3' }];
				} else if (svParent == 'c2') {
					ops = [{ value: 'c2-1', name: 'c2-1' }, { value: 'c2-2', name: 'c2-2' }];
				}

				let selChildOpts = ops.map(item => {
					return <ZKSelect.Option key={item.value} value={`${namePrefix}-${item.value}`}>{item.name}</ZKSelect.Option>
				});

				if(isOptParent){
					// 操作过上级节点
					let v = {};
					v[namePrefix + '-ZKSelectChild'] = '';
					setFieldsValue(v);
				}

				return (
					<ZKForm.Item key = {`${namePrefix}-ZKSelectChild`} name = {`${namePrefix}-ZKSelectChild`} label="联动 Select-child" >
						<ZKSelect>
							<ZKSelect.Option value="">请选择</ZKSelect.Option>
							{selChildOpts}
						</ZKSelect>		
					</ZKForm.Item>	
				);
			}}
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKDatePicker`} name = {`${namePrefix}-ZKDatePicker`} label="ZKDatePicker" rules = {[{ type: 'array', required: true, message: 'Please select time!' }]}>
			<ZKDatePicker.RangePicker format="YYYY-MM-DD" />
		</ZKEditForm.Item>
	]
}

export default f_getItems;


