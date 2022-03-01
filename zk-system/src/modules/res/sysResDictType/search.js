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
ZKInputJson, } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysResDictTypeSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysResDictType } = this.props;
        if(!filter){
            filter = mSysResDictType.initFilter;
        }
        dispatch({ 
            type: "mSysResDictType/findSysResDictTypes", 
            filter: {...mSysResDictType.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysResDictType, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysResDictType.initFilter} 
                filter={mSysResDictType.filter||mSysResDictType.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "typeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDictType.typeCode')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "typeName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDictType.typeName')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysResDictTypeSearch;