/*
* @Author: Vinson
* @Date:   2022-11-28 17:02:15
* @Last Modified by: runoob
* @Last Modified time: 2023-09-23 22:12:50
*/
import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat, ZKPopoverPanel } = ZKCustomComponents;
const { ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const FInitZKPopoverPanelDemo = ({ intl }) => {

	const [popoverPanelIsShow, setPopoverPanelIsShow] = useState(false);

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.popoverPanel')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<div style = {{'height':'300px'}}>
					<ZKButton onClick = {e=>{setPopoverPanelIsShow(!popoverPanelIsShow)}}>Click 点我</ZKButton>
					<ZKPopoverPanel isShow = {popoverPanelIsShow} position = {{x: 300, y:200}} data=" ZKPopoverPanel sample " >
						Test ZKPopoverPanel
						<ZKPopoverPanel.PanelButton onClick={(e, d)=>{console.log("[^_^:20221129-1047-001] ZKPopoverPanel.PanelButton: ", d)}}>
							bb
						</ZKPopoverPanel.PanelButton>
					</ZKPopoverPanel>
				</div>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKPopoverPanel "
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
							<td>isShow</td><td>true</td><td>是否显示</td><td>PropTypes.bool.isRequired</td><td>true</td>
						</tr>
						<tr>
							<td>position</td><td>true</td><td>位置; {`{x:300, y:350}`}</td><td>PropTypes.object.isRequired</td><td>空</td>
						</tr>
						<tr>
							<td>width</td><td>false</td><td>宽</td><td>PropTypes.number</td><td>105</td>
						</tr>
						<tr>
							<td>height</td><td>false</td><td>高</td><td>PropTypes.number</td><td>104</td>
						</tr>
						<tr>
							<td>data</td><td>false</td><td>ZKPopoverPanel.PanelButton 事件点击事件回调时，做为参数回传</td><td>任意值</td><td>空</td>
						</tr>
					</tbody>
				</table>
				<br />
				ZKPopoverPanel.PanelButton 
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
							<td>onClick</td><td>false</td><td>点击事件; {`(e, data)=>{}`}</td><td>PropTypes.func</td><td></td>
						</tr>
					</tbody>
				</table>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"详见样例源代码",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKPopoverPanelDemo);


