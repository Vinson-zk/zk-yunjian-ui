/**
 * Created by bs on 25/01/2018.
 */
import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKInputNumber } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function f_change(value) {
	document.getElementById("ZKInputNumber-info-div").innerText = this.props.id + ": " + value
}

const FInitZKInputNumberDemo = ({ intl }) => {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.inputNumber')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<div id="ZKInputNumber-info-div">&nbsp;</div>
					<br />
					<ZKInputNumber id="ZKInputNumber-1" onChange={f_change} defaultValue="123124324" formatValueFunc={ZKInputNumber.formatValueFunc} /><br />
					<ZKInputNumber id="ZKInputNumber-2" onChange={f_change} defaultValue="123124324" /><br />
					<ZKInputNumber id="ZKInputNumber-3" onChange={f_change} defaultValue="123"
						formatValueFunc={e => {
							return parseInt(e / 100) + " 米 " + e % 100;
						}}
					/><br />
					<ZKInputNumber id="ZKInputNumber-4" onChange={f_change} defaultValue="asdf" formatValueFunc={ZKInputNumber.formatValueFunc} /><br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKInputNumber 组件：<br />
				    原生态封装，接受原生属性。<br /><br />
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
							<tr><td>formatValueFunc</td><td>否</td><td>数值格式化显示函数；函数接收输入框数值，返回格式化后的显示标签；formatValueFunc(value);</td><td>PropTypes.func</td><td>undefined</td></tr>
						</tbody>
					</table>
					<br />
					ZKInputNumber.formatValueFunc 数值格式化函数；<br />
					JS 数字函数处理:<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Math.ceil(1/4)   // 1<br />
					&nbsp;&nbsp;&nbsp;&nbsp;Math.floor(1/4)  // 0<br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"原生态封装"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKInputNumberDemo);


