/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:29:32
 * @Last Modified by: runoob
 * @Last Modified time: 2024-01-13 17:56:05
 */


import React from 'react';
import { Row, Col, Select, Input, Button, InputNumber } from 'antd';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const FInitZKToolsAjaxDemo = ({ intl }) => {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"robe-ajax 所有原生方法",
						"req              // 定制 ajax 请求方式 1 ",
						"reqData          // 定制 ajax 请求方式 2 ",
						"reqPretreatment  // 请求会调用默认预处理；建议使用 ",
						"pretreatment     // 请求消息返回预处理；",
						"auth             // 请求身份认证处理; ",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`方法 ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<div id="req" >
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"/** 定制 ajax 请求方式 1；",
							" * @param {string} url 请求地址",
							" * @param {object} options 同 ajax 请求属性; 部分说明见下表",
							" * @param {function} fCallback 返回前回调处理函数，可进行消息预处理与身份验证判断；",
							" * @return {object} ajax 对象; ",
							" */",
							"req:f_req(url, options, fCallback) "
						].join('\n')}
					</SyntaxHighlighter>
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
								<td>options.method</td>
								<td>false</td>
								<td>请求方法</td>
								<td>string</td>
								<td>GET</td>
							</tr>
							<tr>
								<td>options.data</td>
								<td>false</td>
								<td>请求数据</td>
								<td>object</td>
								<td></td>
							</tr>
							<tr>
								<td>options.processData</td>
								<td>false</td>
								<td></td>
								<td></td>
								<td>undefined</td>
							</tr>
							<tr>
								<td>options.contentType</td>
								<td>false</td>
								<td></td>
								<td></td>
								<td>undefined</td>
							</tr>
							<tr>
								<td>options.dataType</td>
								<td>false</td>
								<td>请求数据类型</td>
								<td>string</td>
								<td>JSON</td>
							</tr>
							<tr>
								<td>options.async</td>
								<td>false</td>
								<td>请求是否异步</td>
								<td>string</td>
								<td>true-异步</td>
							</tr>
							<tr>
								<td>options.headers</td>
								<td>false</td>
								<td>请求头，请求时添加的请求头内容</td>
								<td>object</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<br />
				</div>
				<div id="reqData" >
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"/** ",
							" * 定制 ajax 请求方式 2；不建议使用；建议使用 定制 ajax 请求方式 1",
							" * 这里，注意，异步时，返回的数据不一定是响应的数据，可能还未响应，返回了空数据；",
							" * @param {string} url 请求地址",
							" * @param {object} options 同 ajax 请求属性; 部分说明见 req 方法说明表格",
							" * @param {function} fCallback 返回前回调处理函数，可进行消息预处理与身份验证判断；",
							" * @return {object} 请求结果数据; ",
							" */",
							"reqData: f_reqData(url, options, fCallback) "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="reqPretreatment" >
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"/** ",
							" * 请求会调用默认预处理；建议使用",
							" * @param {string} url 请求地址",
							" * @param {object} options 同 ajax 请求属性; 部分说明见 req 方法说明表格",
							" * @param {function} fFilter 过滤哪些情况不用预处理; 不存在时，默认都进行预处理; 返回: true-不进行预处理；",
							" * @param {function} fCallback 返回前回调处理函数，可进行消息预处理与身份验证判断；",
							" * @return {object} 请求结果数据; ",
							" */",
							"reqPretreatment: f_reqPretreatment(url, options, fFilter, fCallback) "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="auth" >
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"/** ",
							" * 请求身份认证处理；也是默认处理函数；",
							" * @param {object} res 请求响应的数据对象；",
							" * @return {object} 请求响应的数据对象",
							" */",
							"auth: f_auth(res) "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="pretreatment" >
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"/** ",
							" * 请求消息返回预处理；也是默认处理函数；",
							" * @param {object} res 请求响应的数据对象；",
							" * @return {object} 请求响应的数据对象",
							" */",
							"pretreatment: f_pretreatment(res) "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKToolsAjaxDemo);