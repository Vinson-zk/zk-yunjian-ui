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
const { ZKDeptSelect, ZKDictSelect, ZKUserTypeSelect, ZKRankSelect } = ZKBusinessComponents;
const { ZKSearchRow, ZKInputJson, ZKDateFormatPicker, } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysOrgUserSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysOrgUser } = this.props;
        if(!filter){
            filter = mSysOrgUser.initFilter;
        }
        dispatch({ 
            type: "mSysOrgUser/findSysOrgUsers", 
            filter: {...mSysOrgUser.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysOrgUser, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysOrgUser.initFilter} 
                filter={mSysOrgUser.filter||mSysOrgUser.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >     
                <ZKSearchItem name = "userTypeId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.userTypeId')} >
                    <ZKUserTypeSelect />
                </ZKSearchItem>       
                <ZKSearchItem name = "rankId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.rankId')} >
                    <ZKRankSelect />
                </ZKSearchItem>       
                <ZKSearchItem name = "deptId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.deptId')} >
                    <ZKDeptSelect />
                </ZKSearchItem>       
                <ZKSearchItem name = "account" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.account')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>   
                <ZKSearchItem name = "jobNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.jobNum')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>      
                <ZKSearchItem name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status.0')}</ZKSelect.Option>
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status.1')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
                <ZKSearchItem name = "familyName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.familyName')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "secondName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.secondName')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "nickname" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.nickname')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "birthday" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.birthday')} >
                    <ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
                </ZKSearchItem>   
                <ZKSearchItem name = "sex" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sex')} >
                    <ZKDictSelect typeCode="sex" />
                </ZKSearchItem>     
            </ZKSearchRow>
        );
    }
}

export default CInitSysOrgUserSearch;