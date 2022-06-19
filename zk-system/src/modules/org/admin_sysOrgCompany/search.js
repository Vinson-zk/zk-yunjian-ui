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
ZKInputJson, ZKDateFormatPicker, } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysOrgCompanySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysOrgCompanyAdmin } = this.props;
        if(!filter){
            filter = mSysOrgCompanyAdmin.initFilter;
        }
        dispatch({ 
            type: "mSysOrgCompanyAdmin/findSysOrgCompanysTree", 
            filter: {...mSysOrgCompanyAdmin.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysOrgCompanyAdmin, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

/*
<ZKSearchItem name = "foundDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.foundDate')} >
                    <ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
                </ZKSearchItem>   

*/
        return (
            <ZKSearchRow 
                initialValues={mSysOrgCompanyAdmin.initFilter} 
                filter={mSysOrgCompanyAdmin.filter||mSysOrgCompanyAdmin.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.groupCode')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.code')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.name')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
                <ZKSearchItem name = "legalPerson" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalPerson')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.0')}</ZKSelect.Option>
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.1')}</ZKSelect.Option>
                        <ZKSelect.Option value={2}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.2')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
                
                <ZKSearchItem name = "registerNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerNum')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysOrgCompanySearch;