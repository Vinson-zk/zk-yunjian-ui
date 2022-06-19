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
ZKInput, ZKSelect, } = ZKOriginalComponents;

const { 
	ZKSearchRow, 	
} = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitMailTemplateSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mMailTemplate } = this.props;
        if(!filter){
            filter = mMailTemplate.initFilter;
        }
        dispatch({ 
            type: "mMailTemplate/findMailTemplates", 
            filter: {...mMailTemplate.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mMailTemplate, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mMailTemplate.initFilter} 
                filter={mMailTemplate.filter||mMailTemplate.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "typeId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.typeId')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailTemplate.status')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitMailTemplateSearch;