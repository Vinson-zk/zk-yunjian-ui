/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:27:55
 * @Last Modified by: vinson
 * @Last Modified time: 2025-02-05 17:39:21
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { router } from 'dva';
const { NavLink } = router;

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkSampleConstant from "../../../zk.sample.constant.js";

function FInitZKRouterDemo({ match, history, intl }) {

	let basePath = match.path.split("/").filter((currentValue, index, arr) => { return index < arr.length - 3 }).join("/");
	// let routerSamplePath =  zkSampleConstant.routePath.routerSample;
    let routerSamplePath =  basePath + "/" + zkSampleConstant.routePath.routerSample;

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.router')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKPrivateRoute ",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
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
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<div>
					参考: <NavLink to={`${routerSamplePath}`} >{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.name')}</NavLink>
				</div>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKRouterDemo);



