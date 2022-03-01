/**
 *
 * @Author: Vinson
 * @Date: 2020-10-26 17:59:53
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-11 11:21:13
 */


import React, { Component } from 'react';

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSelect, ZKInput } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitSysMenuSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sysNavs:[]
        }
    }

    f_searchNavCodes = value=>{
        let { dispatch } = this.props;
        dispatch({ type: 'mSysMenu/findNavCodes', filter: { code: value }, callback: datas=>{
            this.setState({sysNavs: datas});
        }});
    }

    f_search = filter=>{
        let { dispatch, mSysMenu } = this.props;
        if(!filter){
            filter = mSysMenu.initFilter;
        }
        dispatch({ type: "mSysMenu/findSysMenusTree", filter: {...mSysMenu.filter, ...filter}, callback: e => { } });
    }

    render(){
        let { intl, mApp, mSysMenu, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        let selLoading = loading.effects['mSysMenu/findNavCodes'];
        return (
            <ZKSearchRow 
                initialValues={ mSysMenu.initFilter } 
                filter={mSysMenu.filter || mSysMenu.initFilter}
                resetFunc={(values, form) => {}}
                searchFunc={values => {
                    this.f_search.call(this, values);
                }}
            >
                <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.name')} >
                    <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
                </ZKSearchItem>
                <ZKSearchItem name = "navCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.navCode')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} 
                        showSearch = {true}
                        filterOption = {false}
                        loading = { selLoading }
                        onDropdownVisibleChange = { open=>{if(open){this.f_searchNavCodes('');}}}
                        onSearch = { this.f_searchNavCodes }
                    >
                        {this.state.sysNavs.map((sysNav, index)=>{
                            return <ZKSelect.Option key={index} value={sysNav.code}>{sysNav.code}[{zkToolsMsg.getInternationInfo(sysNav.name)}]</ZKSelect.Option>
                        })}
                    </ZKSelect>
                </ZKSearchItem>
                <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.code')} >
                    <ZKInput style = {{width:"180px"}}  />
                </ZKSearchItem>
                <ZKSearchItem name = "isShow" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isShow')} >
                    <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                        <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show')}</ZKSelect.Option>
                        <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKSearchItem>
            </ZKSearchRow>
        );
    }
}

export default CInitSysMenuSearch;
// export default injectIntl(CInitSysMenuSearch);
// export default injectIntl(connect(({ mSysMenu }) => ({ mSysMenu}))(CInitSysMenuSearch));




