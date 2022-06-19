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

class CInitOfficialAccountsUserSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mOfficialAccountsUser } = this.props;
        if(!filter){
            filter = mOfficialAccountsUser.initFilter;
        }
        dispatch({ 
            type: "mOfficialAccountsUser/findOfficialAccountsUsers", 
            filter: {...mOfficialAccountsUser.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mOfficialAccountsUser, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mOfficialAccountsUser.initFilter} 
                filter={mOfficialAccountsUser.filter||mOfficialAccountsUser.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >       
                <ZKSearchItem name = "wxThirdPartyAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxThirdPartyAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxOfficialAccountAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxOfficialAccountAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitOfficialAccountsUserSearch;


