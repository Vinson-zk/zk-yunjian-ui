/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:31:08
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 01:19:05
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKCol } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKColDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.col')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<ZKCol >Col 原生态封装</ZKCol>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKCol 组件：暂不做处理",
						"原生态封装，接受原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"原生态封装\n",
						"<ZKCol >Col 原生态封装</ZKCol>\n"
					].join('')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKColDemo);


