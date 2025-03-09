/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 17:14:12
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 18:05:11
*/


import React, { Component } from 'react';
//  import { connect } from 'dva';
// import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSelect, ZKInput } = ZKOriginalComponents;

const { 
	ZKSearchRow, ZKInputJson	
} = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitIotProdInstanceSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mIotProdInstance } = this.props;
        if(!filter){
            filter = mIotProdInstance.initFilter;
        }
        dispatch({ 
            type: "mIotProdInstance/findIotProdInstances", 
            filter: {...mIotProdInstance.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mIotProdInstance, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mIotProdInstance.initFilter} 
                filter={mIotProdInstance.filter||mIotProdInstance.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.name')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={intl.locale} attrs={locales} />
                </ZKSearchItem>
                <ZKSearchItem name = "prodCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.prodCode')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "prodModelCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.prodModelCode')} >
                    <ZKInput style = {{width:"180px"}}   />
                </ZKSearchItem>
                <ZKSearchItem name = "snNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.snNum')} >
                    <ZKInput style = {{width:"180px"}}   />
                </ZKSearchItem>
                <ZKSearchItem name = "macAddr" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.macAddr')} >
                    <ZKInput style = {{width:"180px"}}   />
                </ZKSearchItem>
                <ZKSearchItem name = "ipAddr" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.ipAddr')} >
                    <ZKInput style = {{width:"180px"}}   />
                </ZKSearchItem>
                <ZKSearchItem name = "status" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.status')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.status.1')}</ZKSelect.Option>
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.status.0')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>  
                <ZKSearchItem name = "isIn" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.isIn')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.isIn.true')}</ZKSelect.Option>
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.isIn.false')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>           
            </ZKSearchRow>
        );
    }
}

export default CInitIotProdInstanceSearch;


