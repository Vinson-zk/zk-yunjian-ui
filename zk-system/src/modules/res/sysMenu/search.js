/**
 *
 * @Author: Vinson
 * @Date: 2020-10-26 17:59:53
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-22 21:24:22
 */


import React, { Component } from 'react';
//  import { connect } from 'dva';
import { injectIntl } from 'react-intl';

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

    onSearchNavCodes = value=>{
        let { dispatch } = this.props;
        dispatch({ type: 'mSysMenu/findNavCodes', filter: { code: value }, callback: datas=>{
            this.setState({sysNavs: datas});
        }});
    }

    render(){
        let { intl, loading, lang, filter = {}, onSearch, onResetFilter} = this.props;

        let selLoading = loading.effects['mSysMenu/findNavCodes'];
        return (
            <ZKSearchRow resetFunc={values => {
                    if (onResetFilter instanceof Function) {
                        onResetFilter.call(this, values);
                    }
                    // if(onSearch instanceof Function){
                    // 	onSearch.call(this, null)
                    // }
                }}
                searchFunc={values => {
                    if (onSearch instanceof Function) {
                        onSearch.call(this, values)
                    }
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
                        onDropdownVisibleChange = { open=>{if(open){this.onSearchNavCodes('');}}}
                        onSearch = { this.onSearchNavCodes }
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

export default injectIntl(CInitSysMenuSearch);
