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

import { zkTools, ZKCustomComponents, ZKOriginalComponents, ZKBusinessComponents } from "zkFramework";        
const { ZKInput, ZKSelect, } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson, } = ZKCustomComponents;
const { ZKApplicationSystemSelect } = ZKBusinessComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysAuthDefinedSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysAuthDefined } = this.props;
        if(!filter){
            filter = mSysAuthDefined.initFilter;
        }
        dispatch({ 
            type: "mSysAuthDefined/findSysAuthDefineds", 
            filter: {...mSysAuthDefined.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysAuthDefined, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysAuthDefined.initFilter} 
                filter={mSysAuthDefined.filter||mSysAuthDefined.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >      
                <ZKSearchItem name = "searchValue" label = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.code')}`} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "systemCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.systemCode')} >
                    <ZKApplicationSystemSelect valueKey="code" />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysAuthDefinedSearch;