/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 19:50:32
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 20:30:40
*/


import React, { Component } from 'react';
//  import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents, ZKBusinessComponents } from "zkFramework";        
const { ZKInput, ZKSelect, } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson, } = ZKCustomComponents;
const { ZKApplicationSystemSelect } = ZKBusinessComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysAuthCompanySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysAuthCompany } = this.props;
        if(!filter){
            filter = mSysAuthCompany.initFilter;
        }

        dispatch({ 
            type: "mSysAuthCompany/findAuthPage", 
            filter: {...mSysAuthCompany.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysAuthCompany, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysAuthCompany.initFilter} 
                filter={mSysAuthCompany.filter||mSysAuthCompany.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >      
                <ZKSearchItem name = "searchValue" label = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.code')}`} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "ownerType" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.ownerType')} >
                    <ZKSelect style = {{width:"90px"}} fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                	   <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.ownerType.0')}</ZKSelect.Option>
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.ownerType.1')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysAuthCompanySearch;

