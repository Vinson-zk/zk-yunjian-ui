/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:12:24
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 21:40:29
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKButtonDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.button')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<ZKButton >Button 原生态封装</ZKButton>
				<ZKButton>Default Button</ZKButton>
				<ZKButton type="primary">Primary Button</ZKButton>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKButton 组件：暂不做处理",
						"原生态封装，接受原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"原生态封装",
						"<ZKButton >原生态封装</ZKButton>"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKButtonDemo);
