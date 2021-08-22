/**
 *
 * @Author: Vinson
 * @Date: 2020-08-29 17:39:59
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 14:53:10
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

class CInitSysMenuIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        // props.dispatch({type: 'xxx/xxx', payload:{}})
    }

    // static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    render() {
        let { mApp, mSysMenu, dispatch, history, match, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        let searchItemProps = {
            loading: loading,
            dispatch: dispatch,
            filter: mSysMenu.filter,
            lang: lang,
			onSearch: filter=>{
                if(!filter){
                    filter = mSysMenu.initFilter;
                }
                dispatch({ type: "mSysMenu/findSysMenusTree", filter: {...mSysMenu.filter, ...filter}, callback: e => { } });
            },
        }

        let gridProps = {
            loading: loading.effects['mSysMenu/findSysMenusTree'],
            page: mSysMenu.page || {},
            lang: lang,
            gridData: mSysMenu.gridData || [],
            gridSelKeys: mSysMenu.gridSelKeys,
            onChangeSelKeys: (selKeys)=>{
                dispatch({ type: "mSysMenu/setState", payload: { gridSelKeys: selKeys } });
            },
            onDetail: (entity)=>{
                history.push({ pathname: `${match.path}/detail/${entity.pkId}`, state: { optEntity: entity } });
            },
            onEdit: (entity)=>{
                entity = entity || {};

                let parentId = "_top";
                let pkId = "_new";

                if(!zkJsUtils.isEmpty(entity.parentId)){
                    parentId = entity.parentId ;
                }
                if(entity && entity.pkId){
                    pkId = entity.pkId;
                }

                let state = {optEntity: entity};
                history.push({ pathname: `${match.path}/edit/${parentId}/${pkId}`, state: state });
            },
            onDelete: pkIds=>{
                dispatch({
                    type: "mSysMenu/deleteSysMenu", payload: { pkId: pkIds },
                    callback: () => {
                        this.props.dispatch({ type: 'mSysMenu/findSysMenusTree', filter: mSysMenu.filter, callback: e => { } })
                    }
                })
            },
            onChange: (pagination, filters, sorter)=>{
                this.props.dispatch({ type: 'mSysMenu/findSysMenusTree', 
                    filter: mSysMenu.filter,
                    page: pagination,
                    sorter: sorter
                });
            }
        }

        return (
            <div className={`${zkStyles.display_flex_col} ${zkStyles.flex}`}>
                <SearchItem {...searchItemProps} />
                <GridItem {...gridProps} />
            </div>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysMenu } = this.props;
		if (location.pathname != mSysMenu.pathname) {
			dispatch({ type: 'mSysMenu/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysMenu/findSysMenusTree", filter: mSysMenu.filter, callback: e => { } })
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {

    }

}

export default injectIntl(connect(({ mApp, mSysMenu, loading }) => ({ mApp, mSysMenu, loading }))(CInitSysMenuIndex));
