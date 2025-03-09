/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:26:43
 * @Last Modified by: vinson
 * @Last Modified time: 2025-02-05 17:39:48
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkSampleConstant from "../../../zk.sample.constant.js";

function FInitZKNavDemo({ history, match, intl }) {

	let basePath = match.path.split("/").filter((currentValue, index, arr) => { return index < arr.length - 3 }).join("/");
	// let routerSamplePath =  zkSampleConstant.routePath.routerSample;
	let routerSamplePath =  basePath + "/" + zkSampleConstant.routePath.routerSample;

	// console.log("[^_^:20210205-1731] routerSamplePath: ", routerSamplePath);
	// console.log("[^_^:20210205-1731] match.path: ", match.path);
	// console.log("[^_^:20210205-1731] basePath: ", basePath);

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.navigation')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						'<ZKNavigation navItems={navItems} prefixPath={`${match.path}`} />',
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
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
							<td>navItems</td>
							<td>true</td>
							<td>导航栏目的&nbsp; <a size={"small"} onClick={e => {history.push(routerSamplePath);}}>数据对象</a> &nbsp; 数组，数据对象与菜单基本相同；</td>
							<td>PropTypes.arrayOf(PropTypes.object)</td>
							<td></td>
						</tr>
						<tr>
							<td>prefixPath</td>
							<td>false</td>
							<td>路由路径前缀</td>
							<td>PropTypes.string</td>
							<td></td>
						</tr>
					</tbody>
				</table>
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

export default injectIntl(FInitZKNavDemo);




