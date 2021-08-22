/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 13:48:14
 * @Last Modified by:   Vinson
 * @Last Modified time: 2020-08-23 23:41:27
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import styles from "../styles.less";

import { ZKCustomComponents, zkTools } from "zkFramework";
const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { Switch, Link, Route } = ZKRouter;

let routers = null;

const FInitJsHome = ({ match, dvaApp, menus = [], dynamicImportHelper, intl }) => {

	if (routers == null) {
		routers = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus || [], dynamicImportHelper);
	}
	let liLinks = [];
	menus.forEach(item => {
		liLinks.push(
			<li key={`${item.pkId}-li-link`} >
				<Link key={`${item.pkId}-link`} to={`${match.path}/${item.path}/#frist-index`}>
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
						<div className={styles.sample_detail_section} >
							<ul >
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

export default injectIntl(FInitJsHome);
