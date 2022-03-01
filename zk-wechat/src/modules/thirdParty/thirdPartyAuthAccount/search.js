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

class CInitThirdPartyAuthAccountSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mThirdPartyAuthAccount } = this.props;
        if(!filter){
            filter = mThirdPartyAuthAccount.initFilter;
        }
        dispatch({ 
            type: "mThirdPartyAuthAccount/findThirdPartyAuthAccounts", 
            filter: {...mThirdPartyAuthAccount.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mThirdPartyAuthAccount, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mThirdPartyAuthAccount.initFilter} 
                filter={mThirdPartyAuthAccount.filter||mThirdPartyAuthAccount.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "dataSpacePlatform" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccount.dataSpacePlatform')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceGroup" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccount.dataSpaceGroup')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceOwner" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccount.dataSpaceOwner')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxThirdPartyAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccount.wxThirdPartyAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxAuthorizerAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccount.wxAuthorizerAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxNickName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccount.wxNickName')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitThirdPartyAuthAccountSearch;