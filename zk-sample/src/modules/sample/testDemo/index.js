/*
* @Author: Vinson
* @Date:   2022-04-28 09:31:28
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-28 10:29:02
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

import CFormDemo from './demo/formDemo.js';

import stylesSample from "../styles.less";
import styles from "./styles.less";
import { zkTools, ZKCustomComponents } from 'zkFramework';

const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const { Switch, Link, Route } = ZKRouter;

/*
静态路由样例
*/
function FInitDemoRouter({ intl, match }) {

	return (
		<div className={stylesSample.sample_detail_panel}>
			<h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.static')} {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
			<div className={stylesSample.sample_detail_section} >
				{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}: {match.path}
				<div style={{ height: '100%', flex: '1 1 auto' }} className={styles.statc_router}>
					<div className={styles.header}>
						<ul className={styles.nav}>
							<li>
								<Link to={`${match.path}/formDemo`}>formDemo</Link>
							</li>
						</ul>
					</div>
					<div className={styles.content}>
						<Switch>
							<Route exact path={`${match.path}/formDemo`} component={CFormDemo} />
						</Switch>
					</div>
				</div>
			</div>
		</div>
	)
}

export default injectIntl(FInitDemoRouter);


