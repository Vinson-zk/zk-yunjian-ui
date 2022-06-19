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
const { ZKInput, } = ZKOriginalComponents;

const { ZKSearchRow } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitAccountsSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mOfficialAccounts } = this.props;
        if(!filter){
            filter = mOfficialAccounts.initFilter;
        }
        dispatch({ 
            type: "mOfficialAccounts/findAccounts", 
            filter: {...mOfficialAccounts.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mOfficialAccounts, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mOfficialAccounts.initFilter} 
                filter={mOfficialAccounts.filter||mOfficialAccounts.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "wxThirdPartyAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxThirdPartyAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxAccountAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxAccountAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxNickName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxNickName')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitAccountsSearch;



