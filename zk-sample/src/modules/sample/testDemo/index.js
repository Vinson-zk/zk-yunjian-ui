/*
* @Author: Vinson
* @Date:   2022-04-28 09:31:28
* @Last Modified by: runoob
* @Last Modified time: 2024-07-27 08:35:17
* 
* 
* 
*/
/*
* @Author: Vinson
* @Date:   2021-03-03 22:36:25
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-28 09:28:13
* 
* 
* 
*/

import React from 'react';
import { injectIntl } from 'react-intl';

import stylesSample from "../styles.less";
import styles from "./styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKRouter } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const { Switch, Link, Route } = ZKRouter;

import CFormDemo from './demo/formDemo.js';
import CResizeableTableDemo from './demo/resizeableTableDemo.js';

/*
静态路由样例
*/
function FInitDemoRouter({ intl, match }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.router.static')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}: {match.path}
				<div style={{ height: '100%', flex: '1 1 auto' }} className={styles.statc_router}>
					<div className={styles.header}>
						<ul className={styles.nav}>
							<li>
								<Link to={`${match.path}/formDemo`}>formDemo</Link>
							</li>
							<li>
								<Link to={`${match.path}/resizeableTableDemo`}>resizeableTableDemo</Link>
							</li>
						</ul>
					</div>
					<div className={styles.content}>
						<Switch>
							<Route exact path={`${match.path}/formDemo`} component={CFormDemo} />
							<Route exact path={`${match.path}/resizeableTableDemo`} component={CResizeableTableDemo} />
						</Switch>
					</div>
				</div>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitDemoRouter);






