/**
 *
 * @Author: Vinson
 * @Date: 2020-08-24 11:04:53
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-24 11:11:24
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";

import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKRadio } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKRadioDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.radio')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
                    <ZKRadio.Group>
                        <ZKRadio value={1} >Radio 原生态封装 1</ZKRadio>
                        <ZKRadio value={2} >Radio 原生态封装 2</ZKRadio>
                    </ZKRadio.Group>
                </div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<SyntaxHighlighter language='jsx' style={docco}>
					{[
						"ZKRadio 组件：暂不做处理",
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
							"<ZKRadio >原生态封装</ZKRadio>"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKRadioDemo);
