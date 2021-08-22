/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 10:20:49
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 10:36:01
 */


import React from 'react';
import { injectIntl } from 'react-intl';

import CParamsComponent from '../paramsComponent';
import { zkTools, ZKCustomComponents } from "zkFramework";

const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const { Switch, Route, routerRedux } = ZKRouter;

class CInitChildRouterL2C1 extends React.Component {
	render() {
		const { match, intl } = this.props;
		const toPath = () => {
			console.log(" 函数控制路径跳转 history :", this.props.history);
			this.props.history.push(match.path + "/functionToPath?p6=456")
		}

		const toPathDva = () => {
			console.log(" 函数控制路径跳转 routerRedux :", routerRedux);
			routerRedux.push(match.path + "/functionToPath?p6=456")
		}
		return (
			<Switch>
				<Route exact path={match.path} component={() => {
					return (
						<div>
							{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.index', {})}:{match.path} <br /><br />
							<input type="button" value={"history: " + zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})} onClick={toPath} /><br />
							<br />
							<input type="button" value={"routerRedux: " + zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {}) + " 已失效"} onClick={toPathDva} /><br />
						</div>
					)
				}} />
				<Route path={`${match.path}/:param1`} component={CParamsComponent} />
			</Switch>
		);
	}
}

export default injectIntl(CInitChildRouterL2C1);

