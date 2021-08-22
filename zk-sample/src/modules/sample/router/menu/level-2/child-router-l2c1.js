/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 11:16:05
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 11:28:02
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import {zkTools, ZKCustomComponents } from "zkFramework";
const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { Switch, Route } = ZKRouter;

let childRouters = null;
class CInitChildRouterL2C1 extends React.Component {
    render() {

    	const { dvaApp, match, menus, dynamicImportHelper, intl } = this.props;
    	const toPath = ()=>{
    		console.log(" 函数控制路径跳转:", this.props.history);
    		this.props.history.push(match.path + "/functionToPath?p6=456")
    	}

        // 生成路由 
        if(childRouters == null){
            childRouters = menus?zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus, dynamicImportHelper):[];
        }
        return (
        	<Switch>
	        	<Route exact path={match.path} component={()=>{
	        		return (
	        			<div>
	        				{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.index', {})}:{match.path} <br /><br />
	        				<input type="button" value={zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})} onClick={toPath} /><br />
	        			</div>
	        		)
	        	}} />
                {childRouters || []}
        	</Switch>
        );
    }
}


export default injectIntl(CInitChildRouterL2C1);