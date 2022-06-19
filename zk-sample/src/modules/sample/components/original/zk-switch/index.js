/*
* @Author: Vinson
* @Date:   2022-05-09 15:20:46
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-09 15:22:33
* 
* 
* 
*/

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";

import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKSwitch } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKSwitchDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.switch')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div><ZKSwitch >Switch 原生态封装</ZKSwitch></div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<SyntaxHighlighter language='jsx' style={docco}>
					{[
						"ZKSwitch 组件：暂不做处理",
						"原生态封装，接受原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"原生态封装",
							"<ZKSwitch >原生态封装</ZKSwitch>"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKSwitchDemo);



