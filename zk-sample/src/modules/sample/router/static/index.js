/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 10:27:08
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 23:10:25
 */


import React from 'react';
import { injectIntl } from 'react-intl';

import CParamsComponent from './paramsComponent';

import CChildRouterL2c1 from './level-2/child-router-l2c1.js';
import CChildRouterL2c2 from './level-2/child-router-l2c2.js';
import CChildRouterL2c3 from './level-2/child-router-l2c3.js';
import CChildRouterL2c4 from './level-2/child-router-l2c4.js';

import stylesSample from "../../styles.less";
import styles from "./styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKRouter } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const { Switch, Link, Route } = ZKRouter;

/*
静态路由样例
*/
function FInitStaticRouterDemo({ intl, match }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.router.static')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}: {match.path}
				<div style={{ height: '100%', flex: '1 1 auto' }} className={styles.statc_router}>
					<div className={styles.header}>
						<ul className={styles.nav}>
							<li>
								<Link to={match.path}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}-{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.index', {})}</Link>
							</li>
							<li>
								<Link to={`${match.path}/lever2-c1`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}-1</Link>
							</li>
							<li>
								<Link to={`${match.path}/lever2-c2`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}-2</Link>
							</li>
							<li>
								<Link to={`${match.path}/lever2-c3`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}-3</Link>
							</li>
							<li>
								<Link to={`${match.path}/lever2-c4`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}-4</Link>
							</li>
							<li>
								<Link to={`${match.path}/lever2-c5`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}-5</Link>
							</li>
						</ul>
					</div>
					<div className={styles.content}>
						<Switch>
							<Route exact path={`${match.path}`} component={CParamsComponent} />
							<Route path={`${match.path}/lever2-c1`} component={CChildRouterL2c1} />
							<Route path={`${match.path}/lever2-c2`} component={CChildRouterL2c2} />
							<Route path={`${match.path}/lever2-c3`} component={CChildRouterL2c3} />
							<Route exact path={`${match.path}/lever2-c4`} component={CChildRouterL2c4} />
							<Route path={`${match.path}/lever2-c4/:param`} component={CParamsComponent} />
							<Route path={`${match.path}/:param`} component={CParamsComponent} />
						</Switch>
					</div>
				</div>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitStaticRouterDemo);
