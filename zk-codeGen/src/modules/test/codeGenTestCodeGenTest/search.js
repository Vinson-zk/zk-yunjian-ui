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
ZKInputNumber, } = ZKOriginalComponents;
const { 
	ZKSearchRow, 	
ZKDateFormatPicker, } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

const FInitCodeGenTestCodeGenTestSearch = ({ intl, filter = {}, onSearch, lang, onSetFilter, locales }) => {

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
            <ZKSearchItem name = "valueDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueDate')} >
                <ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
            </ZKSearchItem>   
            <ZKSearchItem name = "valueInt" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.test.CodeGenTestCodeGenTest.valueInt')} >
                <ZKInputNumber />
            </ZKSearchItem>  
        </ZKSearchRow>
    );
}

export default injectIntl(FInitCodeGenTestCodeGenTestSearch);