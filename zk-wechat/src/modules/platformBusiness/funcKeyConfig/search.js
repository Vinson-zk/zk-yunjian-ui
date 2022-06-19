/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
 */

import React, { Component } from 'react';
//  import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";        
const {
ZKInput, } = ZKOriginalComponents;

const { 
	ZKSearchRow, 	
} = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitFuncKeyConfigSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mFuncKeyConfig } = this.props;
        if(!filter){
            filter = mFuncKeyConfig.initFilter;
        }
        dispatch({ 
            type: "mFuncKeyConfig/findFuncKeyConfigs", 
            filter: {...mFuncKeyConfig.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mFuncKeyConfig, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mFuncKeyConfig.initFilter} 
                filter={mFuncKeyConfig.filter||mFuncKeyConfig.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "funcKey" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyConfig.funcKey')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "redirectOriginalUrl" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyConfig.redirectOriginalUrl')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "redirectProxyUrl" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyConfig.redirectProxyUrl')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitFuncKeyConfigSearch;