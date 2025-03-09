/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:22:16
 * @Last Modified by: vinson
 * @Last Modified time: 2025-02-05 17:39:56
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

function FInitZKBredcrumbDemo({ history, match, intl }) {

	let basePath = match.path.split("/").filter((currentValue, index, arr) => { return index < arr.length - 3 }).join("/");
	// let routerSamplePath =  zkSampleConstant.routePath.routerSample;
    let routerSamplePath =  basePath + "/" + zkSampleConstant.routePath.routerSample;

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.breadcrumb')}${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"示例参考框架代码",
						"会根据路由路径映射对象，根据当前访问路径，逐级找出菜单(路由)的名称！",
						"如果不需要显示返回按钮，在组件中注释掉即可！",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKBreadcrumb 组件：<br /><br />
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
							<td>routerMappingObj</td>
							<td>true</td>
							<td>
								<a size={"small"} onClick={e => {
									history.push(routerSamplePath);
								}}>路由映射对象</a>
							</td>
							<td>Object</td>
							<td></td>
						</tr>
						<tr>
							<td>isShowFunc</td>
							<td>false</td>
							<td>判断路径映射的对象数据是否需要显示</td>
							<td>Function</td>
							<td>默认根据映射对象的 'funcName' 属性是否为空来判断是否能够显示；不为空认为可是显示。</td>
						</tr>
					</tbody>
				</table>
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

export default injectIntl(FInitZKBredcrumbDemo);

