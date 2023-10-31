/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:12:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:40
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";

import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKButtonDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.button')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div><ZKButton >Button 原生态封装</ZKButton></div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKButton 组件：暂不做处理",
						"原生态封装，接受原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"原生态封装",
							"<ZKButton >原生态封装</ZKButton>"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKButtonDemo);
