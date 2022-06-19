/*
* @Author: Vinson
* @Date:   2022-04-28 10:09:07
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-28 11:18:43
* 
* 
* 
*/

import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const initData = {
	'pSelect': "",
	'linkSelect-1': "",
	'linkSelect-2': "",
}

const FInitEditFormDemo = ()=>{

	const [form] = Form.useForm();

	let f_save = (data)=>{
		console.log('----------- edit f_save begin... ');
		console.log(data);
		console.log('----------- edit f_save end... ');
	}

	let f_saveAndNext = (data, form, callBack)=>{
		console.log('----------- edit f_saveAndNext begin... ');
		console.log(data);
		console.log('----------- edit f_saveAndNext end... ');
	}

	const pSelectValue = Form.useWatch('pSelect', form);
	console.log("[^_^:20220427-1615-002]", pSelectValue);

	const f_linkSelect = ()=>{

		let isOptParent = form.isFieldTouched('pSelect');

		if(isOptParent){
			// 操作过上级节点
			let v = {};
			v['linkSelect-1'] = '';
			// form.setFieldsValue(v);
			form.resetFields(['linkSelect-1']);
		}
		return f_getChildSelOpt(pSelectValue);
	}

	// 取联动 select option
	const f_getChildSelOpt = (pv)=>{
		let ops = [];
		if (pv == 'c1') {
			ops = [{ value: 'c1-1', name: 'c1-1' }, { value: 'c1-2', name: 'c1-2' }, { value: 'c1-3', name: 'c1-3' }];
		} else if (pv == 'c2') {
			ops = [{ value: 'c2-1', name: 'c2-1' }, { value: 'c2-2', name: 'c2-2' }];
		}
		return ops.map(item => {
			return <Option key={item.value} value={`${item.value}`}>{item.name}</Option>
		});
	}

	return (
		<div>
			<Form icon="" form={form} initialValues={initData} onFinish={ f_save } >				
				<Form.Item key = 'pSelect' name = 'pSelect' label="ZKSelect">
					<Select >
						<Option value="">请选择</Option>
						<Option value="c1">c1</Option>
						<Option value="c2">c2</Option>
					</Select>
				</Form.Item>
				<Form.Item key = 'linkSelect-1' name = 'linkSelect-1' label="联动 linkSelect-1" >
					<Select>
						<Option value="">请选择</Option>
						{
							f_linkSelect()
							// f_getChildSelOpt(pSelectValue)
						}
					</Select>		
				</Form.Item>
				<Form.Item key = 'linkSelect-2-noStyle' noStyle
					shouldUpdate={ (prevValues, curValues) => {
						console.log("[^_^:20220427-1631-001] ", prevValues[`pSelect`] != curValues[`pSelect`]);
						console.log("[^_^:20220427-1631-001-0] ", prevValues[`pSelect`]);
						console.log("[^_^:20220427-1631-001-1] ", curValues[`pSelect`]);
						return false;
						// return prevValues[`pSelect`] != curValues[`pSelect`] 
					}}
				>
					{({ getFieldValue, setFieldsValue, isFieldTouched })=>{
						let svParent = getFieldValue('pSelect');
						let isOptParent = isFieldTouched('pSelect');
						// console.log("[^_^:20220427-1615-002]", isOptParent, pSelectValue);
						let selChildOpts = f_getChildSelOpt(svParent);

						if(isOptParent){
							// 操作过上级节点
							let v = {};
							v['linkSelect-2'] = '';
							// form.setFieldsValue(v);
							form.resetFields(['linkSelect-2']);
						}

						return (
							<Form.Item key = {'linkSelect-2'} name = 'linkSelect-2' label="联动 linkSelect-2" >
								<Select>
									<Option value="">请选择</Option>
									{selChildOpts}
								</Select>		
							</Form.Item>	
						);
					}}
				</Form.Item>
				
			</Form>
		</div>
	)
}

export default FInitEditFormDemo;

/*


*/


