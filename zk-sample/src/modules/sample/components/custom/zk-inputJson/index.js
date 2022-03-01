/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:24:23
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-26 08:38:20
 */

import React, {useState} from 'react';
import { injectIntl } from 'react-intl';
import { Input, Button, Form, Select } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { connect } from 'dva';

import { docco } from '../../../helper';
import stylesSample from "../../../styles.less";
import styles from "./styles.less";
import zkJsUtils from 'zkJsUtils';
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKInputJson } = ZKCustomComponents;
const { ZKForm, ZKModal, ZKButton, ZKInput } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

let attrs = {
	'zh_CN': { 'name': '简体中文' }, 
	'zh_CN-1': { 'name': ' 夜来风雨声，扁舟横无人； 夜来风雨声，扁舟横无人； 夜来风雨声，扁舟横无人； 夜来风雨声，扁舟横无人； 夜来风雨声，扁舟横无人； 夜来风雨声，扁舟横无人； 夜来风雨声，扁舟横无人；' }, 
	'en_US': { 'name': 'English' }
};
let initData = {
	'zh_CN': ["春江花月夜_百度汉语",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"作者：张若虚",
		"",
		"春江潮水连海平，海上明月共潮生。",
		"滟滟随波千万里，何处春江无月明！",
		"江流宛转绕芳甸，月照花林皆似霰；",
		"空里流霜不觉飞，汀上白沙看不见。",
		"江天一色无纤尘，皎皎空中孤月轮。",
		"江畔何人初见月？江月何年初照人？",
		"人生代代无穷已，江月年年只相似。",
		"不知江月待何人，但见长江送流水。",
		"白云一片去悠悠，青枫浦上不胜愁。",
		"谁家今夜扁舟子？何处相思明月楼？",
		"可怜楼上月徘徊，应照离人妆镜台。",
		"玉户帘中卷不去，捣衣砧上拂还来。",
		"此时相望不相闻，愿逐月华流照君。",
		"鸿雁长飞光不度，鱼龙潜跃水成文。",
		"昨夜闲潭梦落花，可怜春半不还家。",
		"江水流春去欲尽，江潭落月复西斜。",
		"斜月沉沉藏海雾，碣石潇湘无限路。",
		"不知乘月几人归，落月摇情满江树。"].join('\n'),
	'zh_CN-1': ["春江花月夜_百度汉语",
		"",
		"作者：张若虚",
		"",
		"春江潮水连海平，海上明月共潮生。",
		"滟滟随波千万里，何处春江无月明！",
		"江流宛转绕芳甸，月照花林皆似霰；",
		"空里流霜不觉飞，汀上白沙看不见。",
		"江天一色无纤尘，皎皎空中孤月轮。",
		"江畔何人初见月？江月何年初照人？",
		"人生代代无穷已，江月年年只相似。",
		"不知江月待何人，但见长江送流水。",
		"白云一片去悠悠，青枫浦上不胜愁。",
		"谁家今夜扁舟子？何处相思明月楼？",
		"可怜楼上月徘徊，应照离人妆镜台。",
		"玉户帘中卷不去，捣衣砧上拂还来。",
		"此时相望不相闻，愿逐月华流照君。",
		"鸿雁长飞光不度，鱼龙潜跃水成文。",
		"昨夜闲潭梦落花，可怜春半不还家。",
		"江水流春去欲尽，江潭落月复西斜。",
		"斜月沉沉藏海雾，碣石潇湘无限路。",
		"不知乘月几人归，落月摇情满江树。"].join('\n'),
	"en_US": ["adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfa",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
		"adfasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasdffasdfasdfasdfasdfasd",
	].join("\n")
}

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
						"input1": "测试必输，滚动条滚动。",
						"inputJson1": initData,
						"inputJson2": initData,
						"inputJson3": initData,
						"inputJson4": { 'zh_CN': 'v_zh_CN', 'en_US': 'v_en_US' }
					}}
					onFinishFailed = {(e)=>{
						// inputJson-required
						console.log('[^_^:20210306-1135-001] test Form onFinishFailed:', e, this.formRef);
						// this.formRef.current.scrollToField('inputJson-required');
					}}
				>
					<Form.Item name = "input1" label="input-1" labelCol={labelCol} wrapperCol={wrapperCol} 
						rules = {[{ required: true, message: "Please input your note!" }]} >
						<Input />
					</Form.Item>
					<Form.Item name ="inputJson-required" label="inputJson1-required" labelCol={labelCol} wrapperCol={wrapperCol}
						rules = {[{ required: true, message: "Please input your note!" }]} >
						<ZKInputJson styleType="expanding" attrs={attrs}
							onChange={(e) => { console.log('ZKInputJson 2-1 ', e) }} />
					</Form.Item>
					<Form.Item name ="inputJson1" label="inputJson1" labelCol={labelCol} wrapperCol={wrapperCol} >
						<ZKInputJson styleType="expanding" attrs={attrs}
							onChange={(e) => { console.log('ZKInputJson 2-1 ', e) }} />
					</Form.Item>
					<Form.Item name = "inputJson2" label="inputJson 2" labelCol={labelCol} wrapperCol={wrapperCol}>
						<ZKInputJson styleType="compact" primaryAttr="en_US" attrs={attrs}
							onChange={(e) => { console.log('ZKInputJson 2-2 ', e) }} />
					</Form.Item>
					<Form.Item name = "inputJson3" label="inputJson 3" labelCol={labelCol} wrapperCol={wrapperCol}>
						<ZKInputJson primaryAttr="zh_CN" attrs={attrs}
							onChange={(e) => { console.log('ZKInputJson 2-3 ', e) }} />
					</Form.Item>
					<Form.Item name = "input2" label="input-2" labelCol={{ xs: { span: 24 }, sm: { span: 4 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }} >
						<Input />
					</Form.Item>
					<Form.Item name = "inputJson-layout" label="inputJson layout"
						labelCol={{ xs: { span: 24 }, sm: { span: 7 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 12 } }} >
						<ZKInputJson styleType="compact" primaryAttr="zh_CN"
							attrs={{ 'zh_CN': { 'name': '1测试 zh_CN' }, 'en_US': { 'name': '2测试 en_US' } }}
							onChange={(e) => { console.log('ZKInputJson 2-3 ', e) }} />
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

const TestFormNode = injectIntl(connect()(CInitFormNode));

class CInitZKFormNode extends React.Component {

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

	submit = (values)=>{
		let vs = [];
		for (let index in values) {
			vs.push(zkJsUtils.objToStr(index) + ":" + zkJsUtils.objToStr(values[index]))
		}

		this.setState({ visible: true, values: vs });
	}

	render() {

		let { intl } = this.props;

		return (
			<ZKForm onFinish={this.submit} initialValues = {{
				"zk-inputJson1": initData,
				"zk-inputJson2": initData,
				"zk-inputJson3": initData
			}}>
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

				<ZKForm.Item name = "input1" label="input-1" >
					<ZKInput />
				</ZKForm.Item>
				<Form.Item name ="zk-inputJson-required-expanding" label="inputJson1-required" 
					rules = {[{ required: true, message: "Please input your note!" }]} 
					labelCol={{ xs: { span: 24 }, sm: { span: 4 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 19 } }} >
					<ZKInputJson styleType="expanding" attrs={attrs}
						onChange={(e) => { console.log('zk-inputJson-required-expanding ', e) }} />
				</Form.Item>
				<Form.Item name ="zk-inputJson-required-compact" label="inputJson1-required" 
					rules = {[{ required: true, message: "Please input your note!" }]} 
					labelCol={{ xs: { span: 24 }, sm: { span: 4 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 19 } }} >
					<ZKInputJson styleType="compact" attrs={attrs}
						onChange={(e) => { console.log('zk-inputJson-required-compact ', e) }} />
				</Form.Item>
				<Form.Item name ="zk-inputJson-required-smart" label="inputJson1-required" 
					rules = {[{ required: true, message: "Please input your note!" }]} 
					labelCol={{ xs: { span: 24 }, sm: { span: 4 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 19 } }} >
					<ZKInputJson styleType="smart"  attrs={attrs}
						onChange={(e) => { console.log('zk-inputJson-required-smart', e) }} />
				</Form.Item>
				<ZKForm.Item name = "zk-inputJson1" label="inputJson 1" >
					<ZKInputJson styleType="expanding" attrs={attrs} 
						onChange={(e) => { console.log('zk-inputJson1', e) }} />
				</ZKForm.Item>
				<ZKForm.Item name = "zk-inputJson2" label="inputJson 2" rules = {[{ required: true, message: "Please input your note!" }]} >
					<ZKInputJson styleType="compact" primaryAttr="en_US" attrs={attrs}
						onChange={(e) => { console.log('zk-inputJson2', e) }} />
				</ZKForm.Item>
				<ZKForm.Item name = "zk-inputJson3" label="inputJson 3"
					labelCol={{ xs: { span: 24 }, sm: { span: 4 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 19 } }} >
					<ZKInputJson primaryAttr="zh_CN" attrs={attrs}
						onChange={(e) => { console.log('zk-inputJson3', e) }}  />
				</ZKForm.Item>
				<ZKForm.Item name = "input2" label="input-2"
					labelCol={{ xs: { span: 24 }, sm: { span: 5 } }} wrapperCol={{ xs: { span: 24 }, sm: { span: 18 } }} >
					<ZKInput />
				</ZKForm.Item>

				<ZKForm.Item wrapperCol={{ xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }} >
					<ZKButton type="primary" htmlType="submit" >{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_submit")}</ZKButton>
				</ZKForm.Item>

			</ZKForm>
		)
	}
}
const TestZKFormNode = injectIntl(connect()(CInitZKFormNode));

function FInitZKInputJsonDemo({ dispatch, intl }) {

	return (
		<div className={stylesSample.sample_detail_panel}>
			<div className={stylesSample.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.inputJson')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<br />--- 展开、收起、smart <br />
					<ZKInputJson styleType="expanding" style={{ width: 450 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs} value={{ 'zh_CN': 'v_zh_CN' }}
					/><br /><br />
					<ZKInputJson styleType="compact" style={{ width: 430 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs} value={{ 'zh_CN': 'v_zh_CN' }}
					/><br /><br />
					<ZKInputJson styleType="smart" style={{ width: 410 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs} value={{ 'zh_CN': 'v_zh_CN' }}
					/><br /><br />
					<ZKInputJson styleType="expanding" style={{ width: 450 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs} value={initData}
					/><br /><br />
					<ZKInputJson styleType="compact" style={{ width: 430 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={initData}
					/><br /><br />
					<ZKInputJson styleType="smart" style={{ width: 410 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={initData}
					/><br />
					<br /><br />--- isShowExpBtn=false 展开、收起、smart <br />
					<ZKInputJson styleType="expanding" isShowExpBtn={false} style={{ width: 450 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={{ 'zh_CN': 'v_zh_CN' }}
					/><br /><br />
					<ZKInputJson styleType="compact" isShowExpBtn={false} style={{ width: 430 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={{ 'zh_CN': 'v_zh_CN' }}
					/><br /><br />
					<ZKInputJson styleType="smart" isShowExpBtn={false} style={{ width: 410 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={{ 'zh_CN': 'v_zh_CN' }}
					/><br /><br />
					<ZKInputJson styleType="expanding" isShowExpBtn={false} style={{ width: 450 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={initData}
					/><br /><br />
					<ZKInputJson styleType="compact" isShowExpBtn={false} style={{ width: 430 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={initData}
					/><br /><br />
					<ZKInputJson styleType="smart" isShowExpBtn={false} style={{ width: 410 }}
						onChange={(e) => { console.log('ZKInputJson 1-1 ', e) }}
						attrs={attrs}
						value={initData}
					/><br />
					<br /><br />
					<div className={stylesSample.sample_detail_section_row} >
						--- Form ---------------------------------------------- <br />
						<TestFormNode />
					</div><br /><br />
					<div className={stylesSample.sample_detail_section_row} >
						--- ZKForm ---------------------------------------------- <br />
						<TestZKFormNode />
					</div>
				</div>
			</div>
			<div className={stylesSample.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKInputJson 组件：<br />
					<table className={stylesSample.sample_detail_section_table}>
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
								<td>attrs</td>
								<td>true</td>
								<td>需要编辑的属性说明对象 {'{attrName:{name:显示名}}'}</td>
								<td>PropTypes.object</td>
								<td></td>
							</tr>
							<tr>
								<td>primaryAttr</td>
								<td>false</td>
								<td>主要属性，收起时默认选择中的属性。</td>
								<td>PropTypes.string</td>
								<td></td>
							</tr>
							<tr>
								<td>isShowExpBtn</td>
								<td>false</td>
								<td>是否显示收起或展开按钮; true-显示；false-不显示</td>
								<td>PropTypes.bool</td>
								<td>true</td>
							</tr>
							<tr>
								<td>styleType</td>
								<td>false</td>
								<td>编辑风格</td>
								<td>【"expanding", "smart", "compact"】</td>
								<td>smart</td>
							</tr>
							<tr>
								<td>className</td>
								<td>false</td>
								<td>样式类名，与框架样式类共存，所以，当存在样式属性冲突时，需要设置 css 权重 !important 来解决；</td>
								<td>PropTypes.string</td>
								<td>无</td>
							</tr>
							<tr>
								<td>beforeClassName</td>
								<td>false</td>
								<td>编译框前缀结点元素，样式类名，覆盖框架样式类</td>
								<td>PropTypes.string</td>
								<td>无</td>
							</tr>
							<tr>
								<td>beforeSelectClassName</td>
								<td>false</td>
								<td>编译框前缀属性选择结点元素，样式类名，覆盖框架样式类</td>
								<td>PropTypes.string</td>
								<td>无</td>
							</tr>
							<tr>
								<td>inputClassName</td>
								<td>false</td>
								<td>编译框结点元素，样式类名，覆盖框架样式类</td>
								<td>PropTypes.string</td>
								<td>无</td>
							</tr>
							<tr>
								<td>afterClassName</td>
								<td>false</td>
								<td>编译框后缀结点元素，样式类名，覆盖框架样式类</td>
								<td>PropTypes.string</td>
								<td>无</td>
							</tr>
							<tr>
								<td>readOnly</td>
								<td>false</td>
								<td>只读</td>
								<td>PropTypes.bool</td>
								<td>false</td>
							</tr>
							<tr>
								<td>initAttrrEmpty</td>
								<td>false</td>
								<td>初始化所有属性值为空字符串</td>
								<td>PropTypes.bool</td>
								<td>false</td>
							</tr>
							<tr>
								<td>disabled</td>
								<td>false</td>
								<td>失效</td>
								<td>PropTypes.bool</td>
								<td>false</td>
							</tr>
							<tr>
								<td>value</td>
								<td>false</td>
								<td>值，key-value</td>
								<td>PropTypes.object</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<div style={{ color: 'red' }}>
						注：&nbsp;&nbsp;<br />
					</div>
				</div>
			</div>
			<div className={stylesSample.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"参考框架代码",
							"<ZKInputJson />"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(connect(({ editJson }) => ({ editJson }))(FInitZKInputJsonDemo));





