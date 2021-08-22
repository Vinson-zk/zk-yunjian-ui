/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 21:39:43
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 14:53:08
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

import SearchItem from "./search.js";
import GridItem from "./grid.js";

import zkStyles from 'zkFramework/css/styles.less';

// const FInitSysNacIndex = (params) => {
//     return (<div>FInitSysNacIndex</div>);
// }

class CInitSysNavIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        // props.dispatch({type: 'xxx/xxx', payload:{}})
    }

    // static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    render() {
        let { mApp, mSysNav, dispatch, history, match, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        let searchItemProps = {
            filter: mSysNav.filter,
            lang: lang,
			onSearch: filter=>{
                if(!filter){
                    filter = mSysNav.initFilter;
                }
                dispatch({ type: "mSysNav/findSysNavs", filter: {...mSysNav.filter, ...filter}, callback: e => { } });
            },
			// onSetFilter: filter=>{
            //     if (!filter) {
            //         filter = mSysNav.initFilter;
            //     }
            //     dispatch({ type: "mSysNav/setState", payload: { filter: filter } })
            // },
        }

        let gridProps = {
            loading: loading.effects['mSysNav/findSysNavs'],
            page: mSysNav.page || {},
            lang: lang,
            gridData: mSysNav.gridData || [],
            gridSelKeys: mSysNav.gridSelKeys,
            onChangeSelKeys: (selKeys)=>{
                dispatch({ type: "mSysNav/setState", payload: { gridSelKeys: selKeys } });
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
                    type: "mSysNav/deleteSysNav", payload: { pkId: pkIds },
                    callback: () => {
                        this.props.dispatch({ type: 'mSysNav/findSysNavs', filter: mSysNav.filter, callback: e => { } })
                    }
                })
            },
            onChange: (pagination, filters, sorter)=>{
                // 注意这里要将 zkToolsUtils.convertSortParam(mSysNav.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
                this.props.dispatch({ type: 'mSysNav/findSysNavs', 
                    filter: mSysNav.filter,
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
        let { location, dispatch, mSysNav } = this.props;
		if (location.pathname != mSysNav.pathname) {
			dispatch({ type: 'mSysNav/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysNav/findSysNavs", payload: mSysNav.filter, callback: e => { } })
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {

    }

}

export default injectIntl(connect(({ mApp, mSysNav, loading }) => ({ mApp, mSysNav, loading }))(CInitSysNavIndex));

