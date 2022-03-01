/*
* @Author: Vinson
* @Date:   2021-03-30 11:55:16
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-25 19:27:47
* 
* 
* 
*/

import React, { Component } from 'react';
//  import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSelect, ZKInput } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

const FInitFuncModuleSearch = ({ intl, filter = {}, onSearch, lang, onSetFilter }) => {

    return (
        <ZKSearchRow resetFunc={values => {
                if (onSetFilter instanceof Function) {
                    onSetFilter.call(this, values);
                }
                // if(onSearch instanceof Function){
                //   onSearch.call(this, null)
                // }
            }}
            searchFunc={values => {
                if (onSearch instanceof Function) {
                    onSearch.call(this, values)
                }
            }}
        >
            <ZKSearchItem name = "labelName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.labelName')} >
                <ZKInput style = {{width:"220px"}}  />
            </ZKSearchItem>
        </ZKSearchRow>
    );
}

export default injectIntl(FInitFuncModuleSearch);