/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:54:55
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-09 10:22:46
 */

import React, { Component } from 'react';
//  import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSelect, ZKInput } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

const FInitSysNavSearch = ({ intl, filter = {}, onSearch, lang, onSetFilter }) => {

    return (
        <ZKSearchRow resetFunc={values => {
                if (onSetFilter instanceof Function) {
                    onSetFilter.call(this, values);
                }
                // if(onSearch instanceof Function){
                // 	onSearch.call(this, null)
                // }
            }}
            searchFunc={values => {
                if (onSearch instanceof Function) {
                    onSearch.call(this, values)
                }
            }}
        >
            <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.name')} >
                <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
            </ZKSearchItem>
            <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.code')} >
                <ZKInput style = {{width:"180px"}}  />
            </ZKSearchItem>
            <ZKSearchItem name = "isShow" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isShow')} >
                <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                    <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show')}</ZKSelect.Option>
                    <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}</ZKSelect.Option>
                </ZKSelect>
            </ZKSearchItem>
        </ZKSearchRow>
    );
}

export default injectIntl(FInitSysNavSearch);
