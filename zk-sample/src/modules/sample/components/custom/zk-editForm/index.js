/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:23:27
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-28 16:48:17
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { Input, Checkbox, Radio, Form } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { connect } from 'dva';
import moment from 'moment';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import zkJsUtils from 'zkJsUtils';
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKEditForm, ZKInputJson } = ZKCustomComponents;
const { ZKModal, ZKDatePicker, ZKInput, ZKInputNumber, ZKSelect, ZKForm } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;
const { Option } = ZKSelect;

import FuncEditForm from './func-editForm.js';
import ClassEditForm from './class-editForm.js';

function FInitZKEditFormDemo({ history, intl }) {
	/*
	上传图像  <ClassEditForm />
	*/
	return (
		<div className={styles.sample_detail_panel} style={{ margin: '0px 0px 50px 0px' }}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.editForm')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<font color = "red" >还有个联动的问题没有解决，Form.Item shouldUpdate 死循环的问题</font>
					<br /><br />
					<ClassEditForm />
					<br /><br />
					<FuncEditForm />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					<div style={{ color: 'red' }}>
						注：EditFrom 可接收 From 原生属性；&nbsp;&nbsp;<br />
					</div>
					<br />
					ZKEditForm 组件，接收 Form 的所有原生属性：<br />
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
								<td>viewLayout</td>
								<td>true</td>
								<td>字段布局方式，默认会将连续的 ZKEditForm.Item 每两个设置为一行。</td>
								<td>PropTypes.oneOf(["default", "custom"])</td>
								<td>default</td>
							</tr>
							<tr>
								<td>icon</td>
								<td>false</td>
								<td>编辑框左上角的图标；传入空串时，不显示</td>
								<td>PropTypes.string</td>
								<td>FormOutlined</td>
							</tr>
							<tr>
								<td>title</td>
								<td>false</td>
								<td>编辑框左上角的标题；传入空串时，不显示</td>
								<td>PropTypes.string</td>
								<td>null</td>
							</tr>
							<tr>
								<td>data</td>
								<td>true</td>
								<td>编辑的数据对象</td>
								<td>PropTypes.object</td>
								<td></td>
							</tr>
							<tr>
								<td>leaveConfirm</td>
								<td>false</td>
								<td>路由切换时确认</td>
								<td>PropTypes.bool</td>
								<td>true</td>
							</tr>
							<tr>
								<td>reloadConfirm</td>
								<td>false</td>
								<td>浏览器刷新时确认</td>
								<td>PropTypes.bool</td>
								<td>true</td>
							</tr>
							<tr>
								<td>saveFunc</td>
								<td>true</td>
								<td>保存方法; 方法：{'saveFunc.call(this, data, form, (errs)=>{...}'}; 注: 如果 errs 存在，设置报错状态；如果不存在，返回上一级。</td>
								<td>PropTypes.func</td>
								<td></td>
							</tr>
							<tr>
								<td>resetFunc</td>
								<td>false</td>
								<td>有此函数，显示重置按钮；方法：{'saveFunc.call(this, form'}；注: 方法返回 true 时，才会重置；返回 false 可阻止重置；</td>
								<td>PropTypes.func</td>
								<td>null</td>
							</tr>
							<tr>
								<td>nextFunc</td>
								<td>false</td>
								<td>有此函数，显示下一个按钮；方法：{'saveFunc.call(this, data, form, (errs, data)=>{});'}; 注：如果 errs 存在，设置报错状态；如果不存在，则设置下一个的初始值。初始值 data 不存在，重置编辑的值；存在，则设置成编辑框的值。</td>
								<td>PropTypes.func</td>
								<td>null</td>
							</tr>
							<tr>
								<td>goBackFunc</td>
								<td>false</td>
								<td>有此函数时，返回调用，没有时，则默认调用：history.go(-1){'goBackFunc.call(this);'};</td>
								<td>PropTypes.func</td>
								<td>null</td>
							</tr>
							<tr>
								<td>history</td>
								<td>true</td>
								<td>路由历史</td>
								<td>PropTypes.object</td>
								<td></td>
							</tr>
							<tr>
								<td>children</td>
								<td>true</td>
								<td>子 Item </td>
								<td>ZKEditForm.Item</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<br />
					ZKEditForm.Item 子 Item 组件，接收 Form.Item 的所有原生属性：<br />
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
								<td>name</td>
								<td>true</td>
								<td>字段名称，将会做为id</td>
								<td>PropTypes.string</td>
								<td>{'{}'}</td>
							</tr>
							<tr>
								<td>label</td>
								<td>true</td>
								<td>说明标签，原生属性，不传不显示</td>
								<td>PropTypes.string</td>
								<td></td>
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

export default injectIntl(connect()(FInitZKEditFormDemo));


