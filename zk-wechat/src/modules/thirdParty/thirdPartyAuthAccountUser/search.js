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

class CInitThirdPartyAuthAccountUserSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mThirdPartyAuthAccountUser } = this.props;
        if(!filter){
            filter = mThirdPartyAuthAccountUser.initFilter;
        }
        dispatch({ 
            type: "mThirdPartyAuthAccountUser/findThirdPartyAuthAccountUsers", 
            filter: {...mThirdPartyAuthAccountUser.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mThirdPartyAuthAccountUser, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mThirdPartyAuthAccountUser.initFilter} 
                filter={mThirdPartyAuthAccountUser.filter||mThirdPartyAuthAccountUser.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "dataSpacePlatform" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUser.dataSpacePlatform')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceGroup" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUser.dataSpaceGroup')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceOwner" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUser.dataSpaceOwner')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxThirdPartyAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUser.wxThirdPartyAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxAuthorizerAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUser.wxAuthorizerAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitThirdPartyAuthAccountUserSearch;