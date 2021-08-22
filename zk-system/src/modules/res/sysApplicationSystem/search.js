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

const FInitSysApplicationSystemSearch = ({ intl, filter = {}, onSearch, lang, onSetFilter, locales }) => {

    return (
        <ZKSearchRow resetFunc={values => {
                if (onSetFilter instanceof Function) {
                    onSetFilter.call(this, values);
                }
            }}
            searchFunc={values => {
                if (onSearch instanceof Function) {
                    onSearch.call(this, values)
                }
            }}
        >
            <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysApplicationSystem.name')} >
                <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
            </ZKSearchItem>       
            <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysApplicationSystem.code')} >
                <ZKInput style = {{width:"180px"}}  />
            </ZKSearchItem>       
        </ZKSearchRow>
    );
}

export default injectIntl(FInitSysApplicationSystemSearch);