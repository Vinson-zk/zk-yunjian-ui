/**
 *
 * @Author: Vinson
 * @Date: 2020-08-24 11:04:53
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 22:26:56
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKRadio } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKRadioDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.radio')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<ZKRadio.Group>
                    <ZKRadio value={1} >Radio 原生态封装 1</ZKRadio>
                    <ZKRadio value={2} >Radio 原生态封装 2</ZKRadio>
                </ZKRadio.Group>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKRadio 组件：暂不做处理",
						"原生态封装，接受原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"原生态封装",
						"<ZKRadio >原生态封装</ZKRadio>"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKRadioDemo);
