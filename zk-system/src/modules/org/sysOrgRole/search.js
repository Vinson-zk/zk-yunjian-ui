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

import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKInput, ZKSelect, } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson, } = ZKCustomComponents;
const { ZKDeptSelect } = ZKBusinessComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysOrgRoleSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        console.log("-----------", filter);
        let { dispatch, mSysOrgRole } = this.props;
        if(!filter){
            filter = mSysOrgRole.initFilter;
        }
        dispatch({ 
            type: "mSysOrgRole/findSysOrgRoles", 
            filter: {...mSysOrgRole.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysOrgRole, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysOrgRole.initFilter} 
                filter={mSysOrgRole.filter||mSysOrgRole.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >     
                <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.name')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
                <ZKSearchItem name = "type" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type.0')}</ZKSelect.Option>
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.type.1')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
                <ZKSearchItem name = "deptId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.deptId')} >
                    <ZKDeptSelect valueKey="pkId" />
                </ZKSearchItem>       
                <ZKSearchItem name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status.0')}</ZKSelect.Option>
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.status.1')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysOrgRoleSearch;






