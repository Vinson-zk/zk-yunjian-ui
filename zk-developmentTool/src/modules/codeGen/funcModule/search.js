/*
* @Author: Vinson
* @Date:   2021-03-30 11:55:16
* @Last Modified by: vinson
* @Last Modified time: 2024-12-30 14:52:06
* 
* 
* 
*/

import React, { Component } from 'react';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSelect, ZKInput } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

const FInitFuncModuleSearch = ({ intl, filter = {}, onSearch, lang, onSetFilter }) => {

    return (
        <ZKSearchRow resetFunc={values => {
                if (zkJsUtils.assertObjType(onSetFilter, Function)) {
                    onSetFilter.call(this, values);
                }
            }}
            searchFunc={values => {
                if (zkJsUtils.assertObjType(onSearch, Function)) {
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

export default FInitFuncModuleSearch;