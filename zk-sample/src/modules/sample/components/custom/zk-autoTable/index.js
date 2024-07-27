/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:21:29
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 22:11:06
 */

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { injectIntl } from 'react-intl';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKAutoTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKAutoTableDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.autoTable')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				自动填充数据表格<br />
				<font color = "red">未完成，暂不提供此控件</font>
				<br />
			    <ZKAutoTable />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKAutoTable 组件：<br />
				<div style={{ color: 'red' }}>
					注：&nbsp;&nbsp;<br />
				</div>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"参考框架代码",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKAutoTableDemo);



