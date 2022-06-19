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

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKInput, ZKSelect, } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson, } = ZKCustomComponents;
const { ZKApplicationSystemSelect } = ZKBusinessComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysResFuncApiSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysResFuncApi } = this.props;
        if(!filter){
            filter = mSysResFuncApi.initFilter;
        }
        dispatch({ 
            type: "mSysResFuncApi/findSysResFuncApis", 
            filter: {...mSysResFuncApi.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysResFuncApi, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysResFuncApi.initFilter} 
                filter={mSysResFuncApi.filter||mSysResFuncApi.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.name')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
                <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.code')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "systemCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.systemCode')} >
                    <ZKApplicationSystemSelect valueKey="code" />
                </ZKSearchItem>       
                <ZKSearchItem name = "originalUri" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.originalUri')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "agentUri" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.agentUri')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysResFuncApiSearch;