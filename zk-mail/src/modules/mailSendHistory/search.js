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
} = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitMailSendHistorySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mMailSendHistory } = this.props;
        if(!filter){
            filter = mMailSendHistory.initFilter;
        }
        dispatch({ 
            type: "mMailSendHistory/findMailSendHistorys", 
            filter: {...mMailSendHistory.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mMailSendHistory, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mMailSendHistory.initFilter} 
                filter={mMailSendHistory.filter||mMailSendHistory.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "companyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.companyCode')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "typeId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.typeId')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitMailSendHistorySearch;