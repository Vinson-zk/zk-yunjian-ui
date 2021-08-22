/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 11:18:34
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 11:20:58
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import {zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

// 接收参数组件
class CParamsComponent extends React.Component {

    render() {
    	let { match, intl } = this.props;
        let { params } = match;
        let paramStr
        if (JSON.stringify(match.params) == '{}') {
            paramStr = zkToolsMsg.msgFormatByIntl(intl, 'sample.router.index', {});
        }else{
            paramStr = JSON.stringify(match.params)
        }
        return (
        	<div style={{margin: '3px', padding: '3px', border: '1px solid #F0f', height: '100px'}}>
        		{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.name', {})} :{match.path} <br /><br />
        		CRouterSampleEChild-{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.param', {})}: {paramStr}
        	</div>
        );
    }
}

export default injectIntl(CParamsComponent);