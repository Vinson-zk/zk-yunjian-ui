/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:35:29
 * @Last Modified by:   Vinson
 * @Last Modified time: 2020-08-23 23:41:15
 */

import React from 'react';
import { injectIntl } from 'react-intl';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { ZKRouter } = ZKCustomComponents;
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
					<div className={styles.sample_detail_panel}>
						<h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
						<div className={styles.sample_detail_section}>
							<ul>
								{liLinks}
							</ul>
						</div>
					</div>
				)
			}} />
			{routers || []}
		</Switch>
	)
}

export default injectIntl(FInitZKToolsDemo);
