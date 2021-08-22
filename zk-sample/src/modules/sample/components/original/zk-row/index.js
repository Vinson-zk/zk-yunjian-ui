/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:32:51
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-16 09:17:37
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKRow } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKRowDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.row')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div><ZKRow >Row 原生态封装</ZKRow></div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<SyntaxHighlighter language='jsx' style={docco}>
					{[
						"ZKRow 组件：暂不做处理",
						"原生态封装，接受原生属性。"
					].join('\n')}
				</SyntaxHighlighter>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"原生态封装\n",
							"<ZKRow >Row 原生态封装</ZKRow>\n"
						].join('')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKRowDemo);
