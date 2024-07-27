/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:32:39
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 22:27:34
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKPopconfirmDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.popconfirm')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<ZKPopconfirm type="delete" >
					<ZKButton>delete</ZKButton>
				</ZKPopconfirm>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<ZKPopconfirm >
					<ZKButton>undefined</ZKButton>
				</ZKPopconfirm>
				    &nbsp;&nbsp;&nbsp;&nbsp;
				<ZKPopconfirm title="自定义 title" >
					<ZKButton>自定义 title</ZKButton>
				</ZKPopconfirm>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKPopconfirm 组件：<br />
			    原生态封装，接受原生属性。<br /><br />
				<table className={styles.sample_detail_section_table}>
					<thead>
						<tr>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
							<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>type</td>
							<td>false</td>
							<td>提示类型，当 title 没有传入时，title 才会根据 type 去设置；暂支持的类型有：
				            	<br />
				            	&nbsp;&nbsp;1、删除提示：delete
				            </td>
							<td>PropTypes.string</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<div style={{ color: 'red' }}>
					注：&nbsp;&nbsp;<br />
				    如果其他类型需要提示，增加组件支持类型即可；目标是统一同一类型的提示方式及提示的显示内容。
				</div>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"原生态封装",
						"<ZKPopconfirm type=\"delete\">",
						"	<ZKButton>delete</ZKButton>",
						"</ZKPopconfirm>"].join('\n')
					}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKPopconfirmDemo);




