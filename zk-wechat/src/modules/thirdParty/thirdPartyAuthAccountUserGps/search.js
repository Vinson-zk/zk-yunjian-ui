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

class CInitThirdPartyAuthAccountUserGpsSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mThirdPartyAuthAccountUserGps } = this.props;
        if(!filter){
            filter = mThirdPartyAuthAccountUserGps.initFilter;
        }
        dispatch({ 
            type: "mThirdPartyAuthAccountUserGps/findThirdPartyAuthAccountUserGpss", 
            filter: {...mThirdPartyAuthAccountUserGps.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mThirdPartyAuthAccountUserGps, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mThirdPartyAuthAccountUserGps.initFilter} 
                filter={mThirdPartyAuthAccountUserGps.filter||mThirdPartyAuthAccountUserGps.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "dataSpacePlatform" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUserGps.dataSpacePlatform')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceGroup" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUserGps.dataSpaceGroup')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dataSpaceOwner" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUserGps.dataSpaceOwner')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxAuthorizerAppid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUserGps.wxAuthorizerAppid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "wxOpenid" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.thirdParty.ThirdPartyAuthAccountUserGps.wxOpenid')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitThirdPartyAuthAccountUserGpsSearch;