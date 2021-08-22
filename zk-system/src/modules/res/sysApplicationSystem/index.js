/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
 */


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import GridItem from "./grid.js";

import zkStyles from 'zkFramework/css/styles.less';

import locales from "../../../locales/index";

// const FInitSysNacIndex = (params) => {
//     return (<div>FInitSysNacIndex</div>);
// }

class CInitSysApplicationSystemIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        // props.dispatch({type: 'xxx/xxx', payload:{}})
    }

    // static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    render() {
        let { mApp, mSysApplicationSystem, dispatch, history, match, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        let searchItemProps = {
        	locales: locales,
            filter: mSysApplicationSystem.filter,
            lang: lang,
			onSearch: filter=>{
                if(!filter){
                    filter = mSysApplicationSystem.initFilter;
                }
                dispatch({ type: "mSysApplicationSystem/findSysApplicationSystems", filter: {...mSysApplicationSystem.filter, ...filter}, callback: e => { } });
            },
			// onSetFilter: filter=>{
            //     if (!filter) {
            //         filter = mSysApplicationSystem.initFilter;
            //     }
            //     dispatch({ type: "mSysApplicationSystem/setState", payload: { filter: filter } })
            // },
        }

        let gridProps = {
        	locales: locales,
            loading: loading.effects['mSysApplicationSystem/findSysApplicationSystems'],
            page: mSysApplicationSystem.page || {},
            lang: lang,
            gridData: mSysApplicationSystem.gridData || [],
            gridSelKeys: mSysApplicationSystem.gridSelKeys,
            onChangeSelKeys: (selKeys)=>{
                dispatch({ type: "mSysApplicationSystem/setState", payload: { gridSelKeys: selKeys } });
            },
            onDetail: (entity)=>{
                history.push({ pathname: `${match.path}/detail/${entity.pkId}`, state: { optEntity: entity } });
            },
            onEdit: (entity)=>{
                let state = {
                    optEntity: {}
                };
                if(entity && entity.pkId){
                    state.optEntity = entity;
                    history.push({ pathname: `${match.path}/edit/${entity.pkId}`, state: state });
                }else{
                    history.push({ pathname: `${match.path}/edit/_new`, state: state });
                }
            },
            onDelete: pkIds=>{
                dispatch({
                    type: "mSysApplicationSystem/delSysApplicationSystem", payload: { pkId: pkIds },
                    callback: () => {
                        this.props.dispatch({ type: 'mSysApplicationSystem/findSysApplicationSystems', filter: mSysApplicationSystem.filter, callback: e => { } })
                    }
                })
            },
            onChange: (pagination, filters, sorter)=>{
                // 注意这里要将 zkToolsUtils.convertSortParam(mSysApplicationSystem.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
                this.props.dispatch({ type: 'mSysApplicationSystem/findSysApplicationSystems', 
                    filter: mSysApplicationSystem.filter,
                    page: pagination,
                    sorter: sorter
                });
            }
        }

        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex}`} >
                <SearchItem {...searchItemProps} />
                <GridItem {...gridProps} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysApplicationSystem } = this.props;
		if (location.pathname != mSysApplicationSystem.pathname) {
			dispatch({ type: 'mSysApplicationSystem/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysApplicationSystem/findSysApplicationSystems", payload: mSysApplicationSystem.filter, callback: e => { } })
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {

    }

}

export default injectIntl(connect(({ mApp, mSysApplicationSystem, loading }) => ({ mApp, mSysApplicationSystem, loading }))(CInitSysApplicationSystemIndex));