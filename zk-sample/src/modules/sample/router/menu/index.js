/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 11:17:13
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 23:09:54
 */

import React from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import stylesSample from "../../styles.less";
import styles from "./styles.less";

import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKRouter } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { Switch, Link } = ZKRouter;

class CInitRouterDemoTemp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <div>CInitRouterDemoTemp ===== </div>
	}
}

// 生成路由 
let childRouters = null;

/*
根据菜单生成路由样例
*/
function FInitMenuRouterDemo({ intl, dvaApp, match, menus, dynamicImportHelper, mSampleMenuRouter }) {

	if (childRouters == null) {
		childRouters = menus ? zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus, dynamicImportHelper) : [];
	}

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.router.menu')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level2', {})}: {match.path}
				<div style={{ height: '100%', flex: '1 1 auto' }} className={styles.menu_router}>

					<div style={{ margin: '3px', padding: '3px', border: '1px solid #00f', height: '120px' }} >
						<font style={{ color: 'red' }} >
							此页中的路由有按菜单生成的也有在页面定义的，混合形成的，可查看样例代码，也可以让子路由的菜单显示
        			</font>
						<br />
						<CInitRouterDemoTemp />
						mSampleMenuRouter.name:{mSampleMenuRouter.name}
					</div>
					<div className={styles.header} >
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
							{childRouters || []}
						</Switch>
					</div>
				</div>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(connect(({ mSampleMenuRouter }) => ({ mSampleMenuRouter }))(FInitMenuRouterDemo));

