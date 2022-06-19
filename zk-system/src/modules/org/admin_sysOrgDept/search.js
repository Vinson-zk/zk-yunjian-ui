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
ZKInputJson, } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysOrgDeptSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysOrgDeptAdmin } = this.props;
        if(!filter){
            filter = mSysOrgDeptAdmin.initFilter;
        }
        dispatch({ 
            type: "mSysOrgDeptAdmin/findSysOrgDeptsTree", 
            companyId: mSysOrgDeptAdmin.targetCompany.pkId, 
            filter: {...mSysOrgDeptAdmin.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysOrgDeptAdmin, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysOrgDeptAdmin.initFilter} 
                filter={mSysOrgDeptAdmin.filter||mSysOrgDeptAdmin.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >   
                <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.code')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.name')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
                <ZKSearchItem name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status.0')}</ZKSelect.Option>
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status.1')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysOrgDeptSearch;


