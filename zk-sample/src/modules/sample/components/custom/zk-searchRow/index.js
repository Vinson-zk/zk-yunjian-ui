/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:28:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:44
 */

import React from 'react';
import { Form } from 'antd';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import moment from 'moment';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKInput, ZKDatePicker, ZKSelect } = ZKOriginalComponents;
const { ZKSearchRow, ZKDateFormatPicker } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;
const { Option } = ZKSelect

const FInitSearchRow1 = (props) => {

	let { form, intl } = props;
	const searchCallback = values => {
		console.log('[^_^:20181212-1409-001] FInitSearchRow1  searchCallback ', values)
	}
	const selectChange = e => {
		console.log('[^_^:20181212-1409-002]  selectChange ', e)
	}

	return (
		<ZKSearchRow searchFunc={searchCallback} initialValues = {{
			'date': 1 == 1 ? undefined : moment(),
			'isShow': '0'
		}} >
			<ZKSearchItem name = "date" label = '测试' >
				<ZKDatePicker disabledDate={(date) => { return (new Date()) < date }} format='YYYY-MM-DD' 
					onChange = {(date, vStr)=>{ console.log("[^_^:20210307-0534-001] ", vStr)}}
				/>
			</ZKSearchItem>
			<ZKSearchItem name = "dateFormat" label = '测试' >
				<ZKDateFormatPicker disabledDate={(date) => { return (new Date()) < date }} format='YYYY-MM-DD' />
			</ZKSearchItem>
			<ZKSearchItem name = "isShow" label = '测试' >
				<ZKSelect style={{ width: 200 }} fillValue={zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_select')} onChange={selectChange} >
					<Option value="1">是</Option>
					<Option value="0">否</Option>
				</ZKSelect>
			</ZKSearchItem>
		</ZKSearchRow>
	)
}

const FInitSearchRow2 = (props) => {
	let { form } = props;

	const searchCallback = values => {
		console.log('[^_^:20181212-1410-001] FInitSearchRow2  searchCallback ', values)
	}

	const selectChange = e => {
		console.log('[^_^:20181212-1410-002]  FInitSearchRow2 selectChange ', e)
	}

	return (
		<ZKSearchRow searchFunc={searchCallback} initialValues = {{
			'title': 'initialValue'
		}} showBtnName={true} >
			<ZKSearchItem name = "title" label = '测试' >
				<ZKInput />
			</ZKSearchItem>
			<ZKSearchItem name = "isShow" label = '测试' >
				<ZKSelect style={{ width: 200 }} onChange={selectChange} >
					<Option value="">&nbsp;</Option>
					<Option value="1">是</Option>
					<Option value="0">否</Option>
				</ZKSelect>
			</ZKSearchItem>
		</ZKSearchRow>
	)
}

const FInitSearchRow3 = (props) => {
	let [form] = ZKSearchRow.useForm();
	const searchCallback = values => {
		console.log('[^_^:20181212-1411-001]  FInitSearchRow3  searchCallback ', values)
	}
	return (
		<ZKSearchRow searchFunc={searchCallback} form={ form } resetFunc={(v, form) => {
				console.log("[^_^:20181212-1411-002] FInitSearchRow3 重置查询条件按钮 ", v)
		}} initialValues = {{
			'title': 'initialValue'
		}}>
			<ZKSearchItem name = "title" label = '测试' >
				<ZKInput />
			</ZKSearchItem>
		</ZKSearchRow>
	)
}

class CInitSearchRowLinkage extends React.Component {

	formRef = React.createRef();

	constructor(props) {
		super(props);
		this.state = {
			initFilter: { isShow: '', 'noChangeInput': '不动' },
			filter: { isShow: '', 'noChangeInput': '不动' },
		}
	}

	render() {

		let { intl } = this.props;

		const searchCallback = values => {
			console.log('[^_^:20181212-1412-001] CInitSearchRowLinkage  searchCallback ', values)
		}

		return (
			<ZKSearchRow ref = {this.formRef} searchFunc={searchCallback} 
				initialValues = {{
					'noChangeInput': this.state.filter.noChangeInput,
					'title2': '被动',
					'isShow': this.state.filter.isShow
				}} 
				resetFunc = {(v) => {
					console.log('[^_^:20181212-1412-002] CInitSearchRowLinkage 重置查询条件按钮 ', v)
					this.setState({ filter: this.state.initFilter })
				}} 
				showBtnName = {false} 
			>
				<ZKSearchItem name = 'noChangeInput' label='不随随联动改变' >
					<ZKInput />
				</ZKSearchItem>
				<ZKSearchItem name = 'title' label = '联动-parent' >
					<ZKInput onChange={(e) => {
						this.formRef.current.setFieldsValue({ title2: 'title 输入了：' + e.target.value });
					}} />
				</ZKSearchItem>
				<ZKSearchItem name = 'title2' label='联动-child1' >
					<ZKInput />
				</ZKSearchItem>
				<ZKSearchItem name = 'isShow' label = '选择' >
					<ZKSelect style={{ width: 200 }} >
						<Option value=''>&nbsp;</Option>
						<Option value='1'>是</Option>
						<Option value='0'>否</Option>
					</ZKSelect>
				</ZKSearchItem>
			</ZKSearchRow>
		)
	}
}
const SearchRowLinkage = injectIntl(CInitSearchRowLinkage);

const CutOffRule = (props) => {
	return <div style={{ 'marginTop': '13px', 'borderBottom': '1px solid #eee', 'fontSize': '24px', }} {...props} />
}

function FInitZKSearchRowDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel} >
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.searchRow')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<CutOffRule >查询 1:</CutOffRule>
					<FInitSearchRow1 />
					<CutOffRule >查询 2:</CutOffRule>
					<FInitSearchRow2 />
					<CutOffRule >查询 3:</CutOffRule>
					<FInitSearchRow3 />
					<CutOffRule >查询 联动:</CutOffRule>
					<SearchRowLinkage />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKSearchRow, 引入查询行; 接收 Form 的所有原生属性；
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
								<td>formObj</td>
								<td>true</td>
								<td>Form.create({})(Node) 创建对象后的 form 属性；</td>
								<td>PropTypes.object</td>
								<td></td>
							</tr>
							<tr>
								<td>showBtnName</td>
								<td>否</td>
								<td>按钮名称是否显示，默认为 true-显示；false-不显示；</td>
								<td>PropTypes.bool</td>
								<td>true</td>
							</tr>
							<tr>
								<td>resetFunc</td>
								<td>否</td>
								<td>查询条件重置函数；有此函数时，会显示查询条件重置按钮，不传不显示重置按钮；resetFunc.call(this, values);注：回调前会先调用 form 的 resetFields() 函数；</td>
								<td>PropTypes.func</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td>searchFunc</td>
								<td>否</td>
								<td>查询按钮点击回调函数 searchFunc.call(this, values);</td>
								<td>PropTypes.func</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td>initialValues</td>
								<td>否</td>
								<td>查询行默认值；重置时优先级高于 filter</td>
								<td>PropTypes.object</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td>filter</td>
								<td>否</td>
								<td>查询行当前值；非重置时，filter 优先级高于 initialValues</td>
								<td>PropTypes.object</td>
								<td>undefined</td>
							</tr>
						</tbody>
					</table>
					<br />
					ZKSearchRow.Item 从查询行中引入查询item; 接收 Form.Item 的所有原生属性；
					<table className={styles.sample_detail_section_table}>
						<thead>
							<tr><th>参数</th><th>必传</th><th>说明</th><th>类型</th><th>默认值</th></tr>
						</thead>
						<tbody>
							<tr>
								<td>id</td>
								<td>true</td>
								<td>getFieldDecorator 中的 id</td>
								<td>PropTypes.string</td>
								<td></td>
							</tr>
							<tr>
								<td>fieldOptions</td>
								<td>false</td>
								<td>getFieldDecorator 中的 options 对象</td>
								<td>PropTypes.object</td>
								<td>{'{}'}</td>
							</tr>
							<tr>
								<td>label</td>
								<td>false</td>
								<td>说明标签，不传不显示</td>
								<td>PropTypes.string</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<div style={{ color: 'red' }}>
						注：ZKSearchItem 下放原生 antd 的原生子标签
							<br />
					</div>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"参考框架代码！",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKSearchRowDemo);







