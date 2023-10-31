/**
 *
 * @Author: Vinson
 * @Date: 2020-08-16 08:58:38
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:44
 */

import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import siderStyle from "./styles.less";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSider } = ZKCustomComponents;
const { ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const FInitZKSiderDemo = ({ intl }) => {

	return (
		<div className={styles.sample_detail_panel} >
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.sider')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div className = {siderStyle.zk_sample_sider_div}>
					<ZKSider className = {siderStyle.zk_sample_sider_border} >Test ZKSider</ZKSider>
				</div>
				<br /><br />
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKSider 组件，对 Sider 组件进行了封装；添加了样式和添加了其他功能；",
						"接受 Sider 原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
				一些参数说明：<br />
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
							<td>className</td><td>false</td><td>样式类名</td><td>PropTypes.string</td><td>空</td>
						</tr>
						<tr>
							<td>children</td><td>false</td><td>子节点</td><td>PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.object, PropTypes.string])</td><td>无</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"详见样例源代码",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
			<br />
		</div>
	)
}

export default injectIntl(FInitZKSiderDemo);





