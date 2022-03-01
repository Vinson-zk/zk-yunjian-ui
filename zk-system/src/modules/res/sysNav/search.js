/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:54:55
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-03 09:20:03
 */

import React, { Component } from 'react';
//  import { connect } from 'dva';
// import { injectIntl } from 'react-intl';


import { Form } from 'antd';

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSelect, ZKInput } = ZKOriginalComponents;
const { ZKSearchRow, ZKInputJson } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

const FInitSysNavSearch = ({ intl, mApp, mSysNav, dispatch }) => {

    let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

    let f_onSearch = filter=>{
        if(!filter){
            filter = {};
        }
        dispatch({ type: "mSysNav/findSysNavs", filter: {...mSysNav.filter, ...filter}, callback: e => { } });
    }

    return (
        <ZKSearchRow 
            initialValues={ mSysNav.initFilter } 
            filter={mSysNav.filter || mSysNav.initFilter}
            resetFunc={(values, form) => {}}
            searchFunc={values => {
                f_onSearch(values);
            }}
        >
            <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.name')} >
                <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
            </ZKSearchItem>
            <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.code')} >
                <ZKInput style = {{width:"180px"}}  />
            </ZKSearchItem>
            <ZKSearchItem name = "isShow" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isShow')} >
                <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
                    <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show')}</ZKSelect.Option>
                    <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}</ZKSelect.Option>
                </ZKSelect>
            </ZKSearchItem>
        </ZKSearchRow>
    );
}

export default FInitSysNavSearch;
// export default injectIntl(FInitSysNavSearch);
// export default injectIntl(connect(({ mApp, mSysNav }) => ({ mApp, mSysNav }))(FInitSysNavSearch));



// class CInitSysNavSearch extends Component {

//     // formRef = React.createRef();

//     constructor(props) {
//         super(props);
//         this.state = {
//             isResetForm: false, // 是否需要重置 form 
//             form: undefined,
//         }
//     }

//     render() {
//         // console.log("[^_^:202111021635-001]", this.props.mSysNav.filter)


//         let { intl, mApp, mSysNav, dispatch } = this.props;

//         let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

//         let f_onSearch = filter=>{
//             if(!filter){
//                 filter = {};
//             }
//             dispatch({ type: "mSysNav/findSysNavs", filter: {...mSysNav.filter, ...filter}, callback: e => { } });
//         }
//         let f_onResetFilter = (values, form) => {
//             dispatch({ type: "mSysNav/setState", payload: { filter: mSysNav.initFilter } })
//             this.setState({isResetForm:true, form: form});
//             // form.resetFields();
//         }

//         // console.log("[^_^:202111021635-002]", mSysNav.filter)

//         return (
//             <ZKSearchRow 
//                 initialValues={ mSysNav.filter || mSysNav.initFilter } 
//                 // forwardedRef={ this.formRef }
//                 resetFunc={(values, form) => {
//                     f_onResetFilter(values, form);
//                 }}
//                 searchFunc={values => {
//                     f_onSearch(values);
//                 }}
//             >
//                 <ZKSearchItem name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.name')} >
//                     <ZKInputJson style = {{width:"280px"}}  styleType="compact" primaryAttr={lang} attrs={locales} />
//                 </ZKSearchItem>
//                 <ZKSearchItem name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.code')} >
//                     <ZKInput style = {{width:"180px"}}  />
//                 </ZKSearchItem>
//                 <ZKSearchItem name = "isShow" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isShow')} >
//                     <ZKSelect fillValue = {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.all')} >
//                         <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show')}</ZKSelect.Option>
//                         <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}</ZKSelect.Option>
//                     </ZKSelect>
//                 </ZKSearchItem>
//             </ZKSearchRow>
//         );
//     }

//     // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(this.state.isResetForm && this.state.form){
//             this.state.form.resetFields();
//             this.setState({isResetForm: false, form: undefined });
//         }
//     }


// }

// export default CInitSysNavSearch;






