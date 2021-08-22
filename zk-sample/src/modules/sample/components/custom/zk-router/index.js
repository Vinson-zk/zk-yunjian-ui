/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:27:55
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-16 18:01:32
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { NavLink } from 'dva/router'

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

function FInitZKRouterDemo({ match, history, intl }) {

	let basePath = match.path.split("/").filter((currentValue, index, arr) => { return index < arr.length - 2 }).join("/");
	let routerSamplePath = basePath + "/" + globalAppConfig.routePath.routerSample;

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.router')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"ZKPrivateRoute ",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKPrivateRoute<br />
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
								<td>toComponent</td>
								<td>false</td>
								<td>将会将 toComponent 对象展开，传给路由组件 Component; 即在 Component 中可以 toComponent 对象中的属性名接收对应属性的值；</td>
								<td>PropTypes.object</td>
								<td>{}</td>
							</tr>
							<tr>
								<td>onEnter</td>
								<td>false</td>
								<td>路由拦截钩子，当返回不为空时，会跳转到返回值的路由；</td>
								<td>PropTypes.function</td>
								<td></td>
							</tr>
							<tr>
								<td>其他</td>
								<td></td>
								<td>其他参数与原生 Route 组件相同</td>
								<td></td>
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
					参考: <NavLink to={`${routerSamplePath}`} >{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.name')}</NavLink>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKRouterDemo);



