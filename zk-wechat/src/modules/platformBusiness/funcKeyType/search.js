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

class CInitFuncKeyTypeSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mFuncKeyType } = this.props;
        if(!filter){
            filter = mFuncKeyType.initFilter;
        }
        dispatch({ 
            type: "mFuncKeyType/findFuncKeyTypes", 
            filter: {...mFuncKeyType.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mFuncKeyType, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mFuncKeyType.initFilter} 
                filter={mFuncKeyType.filter||mFuncKeyType.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "funcTypeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.funcTypeCode')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "funcTypeName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.platformBusiness.funcKeyType.funcTypeName')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitFuncKeyTypeSearch;