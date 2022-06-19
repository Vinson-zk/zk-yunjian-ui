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
const { ZKInput } = ZKOriginalComponents;
const { ZKSearchRow, } = ZKCustomComponents;

const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysSetCollectionSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    f_search = filter=>{
        let { dispatch, mSysSetCollection } = this.props;
        if(!filter){
            filter = mSysSetCollection.initFilter;
        }
        dispatch({ 
            type: "mSysSetCollection/findSysSetCollections", 
            filter: {...mSysSetCollection.filter, ...filter}, 
            callback: e => { } 
        });
    }
    
    render(){
        let { intl, mApp, mSysSetCollection, locales, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        return (
            <ZKSearchRow 
                initialValues={mSysSetCollection.initFilter} 
                filter={mSysSetCollection.filter||mSysSetCollection.initFilter} 
                resetFunc={values => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "searchValue" label = {`${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetCollection.name')}/${zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetCollection.code')}`} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>    
            </ZKSearchRow>
        );
    }
}

export default CInitSysSetCollectionSearch;



