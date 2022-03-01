/*
* @Author: Vinson
* @Date:   2021-12-07 23:54:07
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-03 15:34:22
* 
* 
* 
*/

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { injectIntl } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button, Form, Input } from 'antd';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKIcon, ZKEditJsonArray } = ZKCustomComponents;
const { ZKForm, ZKModal, ZKButton, ZKInput } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

// console.log("[^_^:20200816-1853-001] : FInitZKIconDemo", ZKIcon);


class CInitFormNode extends React.Component {

	formRef = React.createRef();

	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			values: []
		}
	}

	handleOk = (e)=>{
		this.setState({ visible: false, values: [] });
	}
	handleCancel = (e)=>{
		this.setState({ visible: false });
	}

	render() {

		let { intl } = this.props;

		let labelCol = { xs: { span: 24 }, sm: { span: 6 } };
		let wrapperCol = { xs: { span: 24 }, sm: { span: 14 } };

		let columns = [
			{title: 't1', dataIndex: 't1', key: 't1', width: 100, textAlign: 'left'},
			{title: 't2', dataIndex: 't2', key: 't2', width: 100, textAlign: 'left'}
		];
		let dataSource = [
			{t1:'v1-1-0', t2:'v2'},
			{t1:'v1-1-1', t2:'v2'}
		]

		return (
			<div>
				<Form ref = {this.formRef} layout={'horizontal'} scrollToFirstError = {true}
					onFinish = { (values)=>{
						console.log('[^_^:20181226-1544-001] test Form onFinish: ', values);
						let vs = [];
						for (let index in values) {
							vs.push(zkJsUtils.objToStr(index) + ":" + zkJsUtils.objToStr(values[index]))
						}
						this.setState({ visible: true, values: vs });
					}}
					initialValues = {{
						"input": 'input-000',
						// "jsonArray": dataSource
					}}
					onFinishFailed = {(e)=>{
						// inputJson-required
						console.log('[^_^:20210306-1135-001] test Form onFinishFailed:', e, this.formRef);
						// this.formRef.current.scrollToField('inputJson-required');
					}}
				>
					<Form.Item name = "input" label="input" labelCol={labelCol} wrapperCol={wrapperCol} 
						rules = {[{ required: true, message: "Please input your note!" }]} >
						<Input />
					</Form.Item>
					<Form.Item name ="jsonArray" label="jsonArray" labelCol={labelCol} wrapperCol={wrapperCol}
						rules = {[{ required: false, message: "Please jsonArray your note!" }]} >
						<ZKEditJsonArray columns={columns} ></ZKEditJsonArray>
					</Form.Item>
					
					<Form.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }} >
						<Button type="primary" htmlType="submit" >{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_submit")}</Button>
					</Form.Item>
				</Form>
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
				</ZKModal>
			</div>
		)
	}
}

const TestFormNode = injectIntl(CInitFormNode);


class CInitZKEditJsonArrayDemo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			icon: ''
		};
	}

	onSelect = (v)=>{
		this.setState({icon:v});
	}

	render(){
		let { intl } = this.props;

		let columns = [
			{title: 't1', dataIndex: 't1', key: 't1', width: 100, textAlign: 'left'},
			{title: 't2', dataIndex: 't2', key: 't2', width: 100, textAlign: 'left'}
		];
		let dataSource = [
			{t1:'v1-1', t2:'v2'},
			{t1:'v1-1', t2:'v2'}
		]

		return (
			<div className={styles.sample_detail_panel}>
				<div className={styles.sample_detail_section}>
					<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.editJsonArray')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
					<div>
						<br />
						<font color = "red">ZKEditJsonArray</font>
						<br /><br />
						<ZKEditJsonArray columns={columns} value = {dataSource} ></ZKEditJsonArray>
					    <br /><br />
					    <TestFormNode />
					    <br /><br />
					</div>
				</div>
				<div className={styles.sample_detail_section}>
					<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
					<div>
						ZKEditJsonArray 组件，其他属性同表格属性：<br />
						<table className={styles.sample_detail_section_table}>
							<thead>
								<tr>
									<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
									<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
									<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
									<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
									<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>value</td>
									<td>false</td>
									<td>数组数据值。</td>
									<td>PropTypes.func</td>
									<td>[]</td>
								</tr>
								<tr>
									<td>maxRow</td>
									<td>false</td>
									<td>最大可添加的行</td>
									<td>PropTypes.number</td>
									<td>999</td>
								</tr>
								<tr>
									<td>columns</td>
									<td>true</td>
									<td>数据表格表头 title 名称自行国际化</td>
									<td>PropTypes.array</td>
									<td></td>
								</tr>
								<tr>
									<td>rowKey</td>
									<td>false</td>
									<td>行key, 同表格属性</td>
									<td>默认自动生成的 UUID</td>
									<td></td>
								</tr>
								<tr>
									<td>onChange</td>
									<td>false</td>
									<td>值改变事件</td>
									<td>PropTypes.func</td>
									<td>无</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={styles.sample_detail_section}>
					<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
					<div>
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"参考框架代码",
							].join('\n')}
						</SyntaxHighlighter>
					</div>
				</div>
				<br />
			</div>
		)
	}
}

export default injectIntl(CInitZKEditJsonArrayDemo);


