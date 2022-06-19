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
ZKSelect, } = ZKOriginalComponents;

const { 
	ZKSearchRow, 	
ZKInputJson, } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitMailTypeSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mMailType } = this.props;
        if(!filter){
            filter = mMailType.initFilter;
        }
        dispatch({ 
            type: "mMailType/findMailTypes", 
            filter: {...mMailType.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mMailType, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mMailType.initFilter} 
                filter={mMailType.filter||mMailType.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "typeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailType.typeCode')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
                <ZKSearchItem name = "typeName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailType.typeName')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
                <ZKSearchItem name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailType.status')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitMailTypeSearch;