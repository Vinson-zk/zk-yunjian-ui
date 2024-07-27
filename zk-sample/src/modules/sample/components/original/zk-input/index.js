/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:31:39
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 21:57:24
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKInput } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKInputDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.input')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<div><ZKInput /></div>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKInput 组件：暂不做处理<br />
				          	原生态封装，接受原生属性。<br /><br />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"原生态封装",
						"<ZKInput />"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKInputDemo);


