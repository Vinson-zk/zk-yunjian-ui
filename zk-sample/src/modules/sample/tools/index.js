/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:35:29
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 00:41:28
 */

import React from 'react';
import { injectIntl } from 'react-intl';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKRouter } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { Switch, Link, Route } = ZKRouter;

let routers = null
const FInitZKToolsDemo = ({ match, dvaApp, menus = [], dynamicImportHelper, intl }) => {

	if (routers == null) {
		routers = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus || [], dynamicImportHelper);
	}
	let liLinks = [];
	menus.forEach(item => {
		liLinks.push(
			<li key={`${item.pkId}-li-link`} >
				<Link key={`${item.pkId}-link`} to={`${match.path}/${item.path}/`}>
					{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function') + ": " + zkToolsNavAndMenu.getMenuName(item, intl)}
				</Link>
			</li>
		)
	})

	return (
		<Switch>
			<Route exact path={`${match.path}`} render={() => {
				return (
					<ZKContentFormat className={styles.sample_detail_panel} >
						<ZKContentFormat className={styles.sample_detail_section} title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
							<ul>
								{liLinks}
							</ul>
						</ZKContentFormat>
						<br />
					</ZKContentFormat>
				)
			}} />
			{routers || []}
		</Switch>
	)
}

export default injectIntl(FInitZKToolsDemo);
