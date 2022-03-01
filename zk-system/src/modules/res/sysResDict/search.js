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

class CInitSysResDictSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resDictTypes:[],  // 字典类型列表；
        }
    }

    f_searchResDictTypes = value=>{
        let { dispatch } = this.props;
        dispatch({ type: 'mSysResDict/findSysResDictTypes', filter: { typeCode: value }, callback: datas=>{
            this.setState({resDictTypes: datas});
        }});
    }

    f_search = filter=>{
        let { dispatch, mSysResDict } = this.props;
        if(!filter){
            filter = mSysResDict.initFilter;
        }
        dispatch({ 
            type: "mSysResDict/findSysResDicts", 
            filter: {...mSysResDict.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysResDict, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        let selLoading = loading.effects['mSysResDict/findSysResDicts'];
        return (
            <ZKSearchRow 
                initialValues={mSysResDict.initFilter} 
                filter={mSysResDict.filter||mSysResDict.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "typeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.typeCode')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} 
                        showSearch = {true} filterOption = {false} loading = { selLoading }
                        onDropdownVisibleChange = { open=>{if(open){this.f_searchResDictTypes('');}}}
                        onSearch = { this.f_searchResDictTypes }
                    >
                        {this.state.resDictTypes.map((item, index)=>{
                            return <ZKSelect.Option key={index} value={item.typeCode}>{item.typeCode}[{zkToolsMsg.getInternationInfo(item.typeName)}]</ZKSelect.Option>
                        })}
                    </ZKSelect>
                </ZKSearchItem>       
                <ZKSearchItem name = "dictCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.dictCode')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>       
                <ZKSearchItem name = "dictName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.dictName')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>       
            </ZKSearchRow>
        );
    }
}

export default CInitSysResDictSearch;



