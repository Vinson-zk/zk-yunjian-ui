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

class CInitOfficialAccountsUserGpsSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mOfficialAccountsUserGps } = this.props;
        if(!filter){
            filter = mOfficialAccountsUserGps.initFilter;
        }
        dispatch({ 
            type: "mOfficialAccountsUserGps/findOfficialAccountsUserGpss", 
            filter: {...mOfficialAccountsUserGps.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mOfficialAccountsUserGps, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mOfficialAccountsUserGps.initFilter} 
                filter={mOfficialAccountsUserGps.filter||mOfficialAccountsUserGps.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "dataSpacePlatform" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.dataSpacePlatform')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceGroup" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.dataSpaceGroup')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceOwner" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.dataSpaceOwner')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxAuthorizerAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxAuthorizerAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxOpenid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxOpenid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitOfficialAccountsUserGpsSearch;



