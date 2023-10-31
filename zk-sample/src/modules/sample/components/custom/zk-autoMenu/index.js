/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:25:42
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:43
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

function FInitZKAutoMenuDemo({ history, match, intl }) {

	let basePath = match.path.split("/").filter((currentValue, index, arr) => { return index < arr.length - 3 }).join("/");
	let routerSamplePath = basePath + "/" + globalAppConfig.routePath.routerSample;

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.autoMenu')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							'<ZKAutoMenu menus={menus} path="/sys" routerMappingObj={routerMappingObj} />',
							'',
							'1、会根据传入的树形菜单数据递归生成菜单；',
							'	从根结点开始向子结点逐一生成，遇到叶子结点，则停止对其子结点的递归！',
							'2、根据当前访问路径，在 routerMappingObj 路由映射对象中找出路径的映射对象;',
							'	根据路径的映射对象的菜单 id，在树形菜单数据中查找出此菜单数据及所有的父节点，形成菜单数组：openMenus',
							'	从 openMenus 中最下级子结点开始向上找到第一个显示的菜单；',
							'	此菜单为需要选的菜单，此菜单及此菜单开始所有的父菜单都需要打开；'
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKAutoMenu 组件：<br /><br />
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
								<td>menus</td>
								<td>是</td>
								<td>
									<a size={"small"} onClick={e => {history.push(routerSamplePath);}}>菜单对象</a> &nbsp;的树形数组。
					            </td>
								<td>Array</td>
								<td></td>
							</tr>
							<tr>
								<td>path</td>
								<td>false</td>
								<td>起始路径前缀</td>
								<td>String</td>
								<td>/</td>
							</tr>
							<tr>
								<td>routerMappingObj</td>
								<td>false</td>
								<td>
									<a size={"small"} onClick={e => {history.push(routerSamplePath);}}>路由路径与菜单映射对象</a>
								</td>
								<td>Object</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<div style={{ color: 'red' }}>
						注：&nbsp;&nbsp;<br />
					</div>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
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

export default injectIntl(FInitZKAutoMenuDemo);




