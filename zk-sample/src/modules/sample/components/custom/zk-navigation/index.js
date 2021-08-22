/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:26:43
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-17 07:25:06
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

function FInitZKNavDemo({ history, match, intl }) {

	let basePath = match.path.split("/").filter((currentValue, index, arr) => { return index < arr.length - 3 }).join("/");
	let routerSamplePath = basePath + "/" + globalAppConfig.routePath.routerSample;

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.navigation')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							'<ZKNavigation navItems={navItems} prefixPath={`${match.path}`} />',
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
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
								<td>导航栏目的&nbsp; <a size={"small"} onClick={e => {history.push(routerSamplePath);}}>数据对象</a> &nbsp; 数组；</td>
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

export default injectIntl(FInitZKNavDemo);




