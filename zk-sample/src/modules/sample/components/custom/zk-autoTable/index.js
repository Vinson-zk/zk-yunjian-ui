/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:21:29
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-07 02:30:27
 */

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { injectIntl } from 'react-intl';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKAutoTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKAutoTableDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.autoTable')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					自动填充数据表格<br />
					<font color = "red">未完成，暂不提供此控件</font>
					<br />
				    <ZKAutoTable />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKAutoTable 组件：<br />
					<div style={{ color: 'red' }}>
						注：&nbsp;&nbsp;<br />
					</div>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"参考框架代码",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKAutoTableDemo);



