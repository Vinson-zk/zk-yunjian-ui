/*
* @Author: Vinson
* @Date:   2021-03-05 15:42:57
* @Last Modified by:   Vinson
* @Last Modified time: 2023-05-29 17:18:05
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
const { ZKModal, ZKDatePicker, ZKInput, ZKInputNumber, ZKSelect, ZKForm, ZKRow, ZKCol } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;
const { Option } = ZKSelect;

import * as f_itemDataDispose from './itemDataDispose.js';

// <React.Fragment></React.Fragment>
const f_getItems = (namePrefix, form)=>{
	// console.log("[^_^:20220427-1615-001]", namePrefix, form);
	let pSelectValue = "";
	if(form != null){
		pSelectValue = Form.useWatch(`${namePrefix}-ZKSelect`, form);
		console.log("[^_^:20220427-1615-002]", pSelectValue);
	}
	

	const f_selectChild1 = ()=>{
		if(form != null){
			let isOptParent = form.isFieldTouched(namePrefix + '-ZKSelect');
			if(isOptParent){
				
				// 操作过上级节点，重置关联的子选择当前值
				// let v = {};
				// v[`${namePrefix}-ZKSelectChild-1`] = '';
				// form.setFieldsValue(v);
				// form.resetFields([`${namePrefix}-ZKSelectChild-1`]);
			}
		}
		return f_itemDataDispose.f_getChildSelOpt(namePrefix, pSelectValue);
	}

	// <React.Fragment></React.Fragment>
	return [
		<ZKRow key="1">
			<ZKCol key="2" span={24}>
				<ZKEditForm.Item key = {`${namePrefix}-Input-more`} labelCol = {{ span: 5 }} name = {`${namePrefix}-Input-more`} label="Input-more" >
					{/*
					<ZKInputJson styleType="compact" style={{ width: '100px' }} primaryAttr="zh_CN" onChange={(e) => { console.log('ZKInputJson-smart ', e) }} attrs={f_itemDataDispose.d_attrs} />
					<Input style={{ width: 100 }} />
					*/}
					<ZKSelect>
						<ZKSelect.Option value="">请选择</ZKSelect.Option>
						{f_itemDataDispose.d_areas.map((item, index) => {
							return <ZKSelect.Option key={`Select-parent-${index}`} value={item.key}>{item.name}</ZKSelect.Option>
						})}
					</ZKSelect>
				</ZKEditForm.Item>
			</ZKCol>
		</ZKRow>,
		<ZKEditForm.Item key = {`${namePrefix}-Input`} name = {`${namePrefix}-Input`} label="Input" >
			<Input style={{ width: 300 }} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputNumber`} name = {`${namePrefix}-ZKInputNumber`} label="ZKInputNumber" rules  = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputNumber />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-Select-parent`} name = {`${namePrefix}-Select-parent`} label="联动 Select-parent" >
			<ZKSelect>
				<ZKSelect.Option value="">请选择</ZKSelect.Option>
				{f_itemDataDispose.d_areas.map((item, index) => {
					return <ZKSelect.Option key={`Select-parent-${index}`} value={item.key}>{item.name}</ZKSelect.Option>
				})}
			</ZKSelect>
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-noStyle-Select-child-`} noStyle shouldUpdate={ (prevValues, curValues) => {return prevValues[`${namePrefix}-Select-parent`] !== curValues[`${namePrefix}-Select-parent`] }}>
			{({ getFieldValue, setFieldsValue, isFieldTouched, resetFields })=>{
				let svParent = getFieldValue(namePrefix + '-Select-parent');
				let isOptParent = isFieldTouched(namePrefix + '-Select-parent');
				let selChilds = f_itemDataDispose.f_getAreaTwos(svParent);
				// console.log("[^_^:20210301-0011-001] : " + namePrefix + '-Select-parent', svParent, isOptParent, selChilds);
				let selChildOpts = selChilds.map(item => {return <ZKSelect.Option key={`${namePrefix}-${item.key}`} value={item.key}>{item.name}</ZKSelect.Option>});

				if(isOptParent){
					// 操作过上级节点
					// let v = {};
					// v[namePrefix + '-Select-child'] = '';
					// setFieldsValue(v);
					resetFields([namePrefix + '-Select-child']);
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
			<ZKInputJson styleType="smart" primaryAttr="zh_CN" attrs={f_itemDataDispose.d_attrs}
				// value={{'en_US':'v_en_US'}}
				onChange={(e) => { console.log('ZKInputJson-smart-0', e) }} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-smart`} name = {`${namePrefix}-ZKInputJson-smart`} label="ZKInputJson-smart" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="smart" primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-smart ', e) }} attrs={f_itemDataDispose.d_attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-compact`} name = {`${namePrefix}-ZKInputJson-compact`} label="ZKInputJson-compact" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="compact" primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-compact ', e) }} attrs={f_itemDataDispose.d_attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-expanding`} name = {`${namePrefix}-ZKInputJson-expanding`} label="ZKInputJson-expanding" rules = {[{ required: true, message: "Please input your note!" }]}>
			<ZKInputJson styleType="expanding" primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-expanding ', e) }} attrs={f_itemDataDispose.d_attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-compact-noButn`} name = {`${namePrefix}-ZKInputJson-compact-noButn`} label="ZKInputJson-compact-noButn" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="compact" isShowExpBtn={false} primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-compact-noButn ', e) }} attrs={f_itemDataDispose.d_attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKInputJson-expanding-noButn`} name = {`${namePrefix}-ZKInputJson-expanding-noButn`} label="ZKInputJson-expanding-noButn" rules = {[{ required: true, message: "Please input your note!" }]} >
			<ZKInputJson styleType="expanding" isShowExpBtn={false} primaryAttr="zh_CN" 
				onChange={(e) => { console.log('ZKInputJson-expanding-noButn ', e) }} attrs={f_itemDataDispose.d_attrs} />
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKSelect`} name = {`${namePrefix}-ZKSelect`} label="ZKSelect" rules = {[{ required: true}]} >
			<ZKSelect fillValue={"请选择..."} >
				<Option value="c1">c1</Option>
				<Option value="c2">c2</Option>
			</ZKSelect>
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKSelectChild-1`} name = {`${namePrefix}-ZKSelectChild-1`} label="联动 Select-child-1" >
			<ZKSelect>
				<ZKSelect.Option value="">请选择</ZKSelect.Option>
				{f_selectChild1()}
			</ZKSelect>		
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKSelectChild-noStyle`} noStyle 
			shouldUpdate={ (prevValues, curValues) => {
				console.log("[^_^:20220427-1631-001] ", prevValues[`${namePrefix}-ZKSelect`] != curValues[`${namePrefix}-ZKSelect`]);
				console.log("[^_^:20220427-1631-001-0] ", prevValues[`${namePrefix}-ZKSelect`]);
				console.log("[^_^:20220427-1631-001-1] ", curValues[`${namePrefix}-ZKSelect`]);
				// return false;
				return prevValues[`${namePrefix}-ZKSelect`] != curValues[`${namePrefix}-ZKSelect`] 
			}
		}>
			{({ getFieldValue, setFieldsValue, isFieldTouched, resetFields })=>{
				// { getFieldValue, setFieldsValue, isFieldTouched }
				let svParent = getFieldValue(namePrefix + '-ZKSelect');
				let isOptParent = isFieldTouched(namePrefix + '-ZKSelect');
				// console.log("[^_^:20220427-1615-002]", isOptParent, pSelectValue);
				let selChildOpts = f_itemDataDispose.f_getChildSelOpt(namePrefix, svParent);

				if(isOptParent){
					// 操作过上级节点，重置关联的子选择当前值
					// let v = {};
					// v[namePrefix + '-ZKSelectChild-2'] = '';
					// form.setFieldsValue(v);
					// resetFields([namePrefix + '-ZKSelectChild-2'])
				}

				return (
					<ZKEditForm.Item key = {`${namePrefix}-ZKSelectChild-2`} name = {`${namePrefix}-ZKSelectChild-2`} label="联动 Select-child-2" >
						<ZKSelect>
							<ZKSelect.Option value="">请选择</ZKSelect.Option>
							{selChildOpts}
						</ZKSelect>		
					</ZKEditForm.Item>	
				);
			}}
		</ZKEditForm.Item>,
		<ZKEditForm.Item key = {`${namePrefix}-ZKDatePicker`} name = {`${namePrefix}-ZKDatePicker`} label="ZKDatePicker" rules = {[{ type: 'array', required: true, message: 'Please select time!' }]}>
			<ZKDatePicker.RangePicker format="YYYY-MM-DD" />
		</ZKEditForm.Item>
	]
}

export default f_getItems;

/*

		
*/


