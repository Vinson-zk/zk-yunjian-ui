/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:30:54
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-02 16:08:17
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { Select, Input, Button, Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
import SyntaxHighlighter from 'react-syntax-highlighter';
import moment from 'moment';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import zkJsUtils from 'zkJsUtils';
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKButton, ZKDatePicker, ZKForm, ZKInput, ZKInputNumber, ZKModal, ZKPopconfirm, ZKSelect, ZKTable, } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const { Option } = Select;



import ClassDemo from './class-form.js';
import FuncDemo from './func-form.js';

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

class CInitZKFormDemo extends React.Component {

  formRef = React.createRef();
  // formRef = Form.useForm();

	constructor(props) {
		super(props)
		this.state = {
			initialValues: {
				'ZKInput-value': '联动选择后，不变',
				'ZKDatePicker': moment(new Date(), "YYYY/MM/DD"),
				'ZKInput': 'initValue',
				'ZKInputNumber': 1,
				'test3-prefix': '86',
				'Select-parent': 'guangdong',
				'Select-child': 'zhuhai',
			},
			visible: false,
			values: [],
			valuesRemove: [],
			
		}
	}

	showModal = ()=>{
		this.setState({ visible: true });
	}
	handleOk = (e)=>{
		console.log("ZKModal ok:", e);
		this.setState({ visible: false, values: [], valuesRemove: [] });
	}
	handleCancel = (e)=>{
		console.log("ZKModal cancel:", e);
		this.setState({ visible: false });
	}

	onFinish = (values)=>{
		console.log("[^_^:20210228-1419-001] values: ", values);
		let vs = [];
		for (let index in values) {
			vs.push(zkJsUtils.objToStr(index) + ":" + zkJsUtils.objToStr(values[index]))
		}
		let valuesRemove = zkJsUtils.objToStr(values);
		valuesRemove = valuesRemove.substr(1, valuesRemove.length - 2);
		valuesRemove = valuesRemove.split(",");
		this.setState({ visible: true, values: vs, valuesRemove: valuesRemove });
	}
	onFinishFailed = ({ values, errorFields, outOfDate })=>{
		this.formRef.current.scrollToField('ZKSelect');
	}
	onResetFields = ()=>{
    console.log("[^_^:20210228-1419-001] values: ", this.formRef);
		this.formRef.current.resetFields();
	}

	render() {

		const getAreaTwos = (areaOne) => {
			if (areaOne) {
				for (let area of areas) {
					if (area.key == areaOne) {
						return area.childs || []
					}
				}
			}
			return [];
		}
		let { intl } = this.props;
		// let form = Form.useForm();
		// let form = React.createRef();
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
      }, {
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
    ];
	const columns = [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'sample.table.col1'), dataIndex: 'title', key: 'title', width: 150,
			textAlign: 'left',
			sorter: (a, b) => { if (a.title > b.title) { return 1 } else if (a.title < b.title) { return -1 } else { return 0 } },
			// sortOrder:['ascend','descend'],
		},
		{ title: zkToolsMsg.msgFormatByIntl(intl, 'sample.table.col2'), dataIndex: 'url', key: 'url', width: 150 },
		{ title: zkToolsMsg.msgFormatByIntl(intl, 'sample.table.col3'), dataIndex: 'permission', key: 'permission', width: 150 }
	]

	const selectBefore = (
		<Select defaultValue="Http://" style={{ width: 90 }}>
			<Option value="Http://">Http://</Option>
			<Option value="Https://">Https://</Option>
		</Select>
	)
	const selectAfter = (
		<Select defaultValue=".com" style={{ width: 80 }}>
			<Option value=".com">.com</Option>
			<Option value=".jp">.jp</Option>
			<Option value=".cn">.cn</Option>
			<Option value=".org">.org</Option>
		</Select>
	)
	const prefixSelector = (
		<ZKForm.Item name="test3-prefix" noStyle>
	    	<Select style={{ width: 70 }}>
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			</Select>
	    </ZKForm.Item>
	);

	// let labelCol = {xs: { span: 24 }, sm: { span: 6 }};
	// let wrapperCol = {xs: { span: 24 }, sm: { span: 14 }};

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.form')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<ClassDemo /><br /><br />
		        <FuncDemo /><br /><br />
				<ZKForm ref = {this.formRef} initialValues = {this.state.initialValues}
      					onFinish = { this.onFinish } onFinishFailed = { this.onFinishFailed } >
					<ZKForm.Item label="test 1" name = "test1" rules = {[{ 'required': true, 'message': "Please input your note!" }]} >
						<Input addonBefore="+86" />
					</ZKForm.Item>
					<ZKForm.Item label="test 2" name = "test2">
						<Input addonBefore={selectBefore} addonAfter={selectAfter} />
					</ZKForm.Item>
					<ZKForm.Item label="test 3" name = "test3">
						<Input addonBefore={prefixSelector} />
					</ZKForm.Item>
					<ZKForm.Item label="联动 ZKInput-value" name = "ZKInput-value">
						<ZKInput />
					</ZKForm.Item>
					<ZKForm.Item label="ZKInputNumber" name = 'ZKInputNumber'>
						<ZKInputNumber onChange={(value) => { console.log(" ZKInputNumber onchange; value: ", value) }} />
					</ZKForm.Item>
					<ZKForm.Item label="联动 Select-parent" name = "Select-parent">
						<ZKSelect>
							<ZKSelect.Option value="">请选择</ZKSelect.Option>
							{areas.map(item => {
								return <ZKSelect.Option key={item.key} value={item.key}>{item.name}</ZKSelect.Option>
							})}
						</ZKSelect>
					</ZKForm.Item>
					<ZKForm.Item noStyle shouldUpdate={ (prevValues, curValues) => {return prevValues['Select-parent'] !== curValues['Select-parent'] }}>
						{({ getFieldValue, resetFields, setFieldsValue, isFieldTouched })=>{
							let svParent = getFieldValue('Select-parent');
							let svChild = getFieldValue('Select-child');
							let isOptParent = isFieldTouched('Select-parent');
							let isOptChild = isFieldTouched('Select-child');
							let selChilds = getAreaTwos(svParent);

							console.log("[^_^:20210301-0011-001] Select-child.svParent-svChild-isOptParent-isOptChild: ", svParent, svChild, isOptParent, isOptChild);
							let selChildOpts = selChilds.map(item => {return <ZKSelect.Option key={item.key} value={item.key}>{item.name}</ZKSelect.Option>});
							
							if(isOptParent){
								// 操作过上级节点
								// resetFields(['Select-child']);
								setFieldsValue({'Select-child': ''});
							}
							return (
								<ZKForm.Item label="联动 Select-child" name = 'Select-child' >
									<ZKSelect>
										<ZKSelect.Option value="">请选择</ZKSelect.Option>
										{selChildOpts}
									</ZKSelect>		
								</ZKForm.Item>	
							);
						}}		
					</ZKForm.Item>
					<ZKForm.Item label="Select" name = 'Select'>
						<Select>
							<Select.Option value="1">是</Select.Option>
							<Select.Option value="0">否</Select.Option>
						</Select>
					</ZKForm.Item>
					<ZKForm.Item label="ZKDatePicker" name = 'ZKDatePicker'>
						<ZKDatePicker format="YYYY-MM-DD" rules = {[{ 'required': true, 'message': "Please input your note!" }]}
							onChange={(date, dateStr) => { console.log(" ZKDatePicker onchange; date: ", date, " dateStr: ", dateStr) }} />
					</ZKForm.Item>
					<ZKForm.Item label="ZKInput" name = 'ZKInput' >
						<ZKInput onChange={(e) => { console.log(" ZKInput onchange; e: ", e, " value: ", e.value) }} />
					</ZKForm.Item>
					<ZKForm.Item label="ZKPopconfirm" name = 'ZKPopconfirm'>
						<ZKPopconfirm type="delete" ><ZKButton>Test Popconfirm</ZKButton></ZKPopconfirm>
					</ZKForm.Item>
					<ZKForm.Item label="ZKSelect" name = 'ZKSelect' >
						{
							// wrapperCol={{ sm: { span: 2 } }}
						}
						<ZKSelect fillValue={zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_select")}
								onChange={(value, element) => { console.log(" ZKSelect onchange; value: ", value, " element: ", element) }} >
							<ZKSelect.Option value="1">是</ZKSelect.Option>
							<ZKSelect.Option value="0">否</ZKSelect.Option>
						</ZKSelect>
					</ZKForm.Item>
					<ZKForm.Item label="ZKTable" name = 'ZKTable'>
						<ZKTable key="ZKTable" rowSelection={{ onChange: (selectedRowKeys, selectedRows) => { } }}
							columns={columns}
							rowKey = "id"
							dataSource={[{ id: 91, title: "测试29", age: 28, url: "url", permission: "permission" }]}
							pagination={{}}
							scroll={{ x: true, y: 300 }}
							rowNum={{}} 
							>
						</ZKTable>
					</ZKForm.Item>
					<ZKForm.Item label="ZKModal" >
						<Button onClick={this.showModal}>Test ZKModal</Button>
						<ZKModal
							title="ZKModal"
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}>
							<SyntaxHighlighter language="jsx" style={docco}>
								{
									"{\n" + this.state.values.join(",\n") + "\n}"
								}
							</SyntaxHighlighter>
							<SyntaxHighlighter language="jsx" style={docco}>
								{
									"{\n" + this.state.valuesRemove.join(",\n") + "\n}"
								}
							</SyntaxHighlighter>
						</ZKModal>
					</ZKForm.Item>
					<ZKForm.Item label="test rules" name = "test1-rules" rules = {[{ 'required': true, 'message': "Please input your note!" }]} >
						<Input />
					</ZKForm.Item>

					<ZKForm.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }} >
						<ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_submit")}</ZKButton>
						<ZKButton type="primary" onClick = {this.onResetFields} >{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_reset")}</ZKButton>
					</ZKForm.Item>
				</ZKForm><br /><br />
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKForm 组件：<br />
					原生态封装，接受原生属性<br />
					ZKForm.Item 组件：<br />
					原生态封装，接受原生属性<br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"参考样例代码:",
							"参考组件样例代码"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)}
}

// export default injectIntl(ZKForm.create()(CInitZKFormDemo));
export default injectIntl(CInitZKFormDemo);


