/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:43:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-06-30 18:40:19
 */

import React from 'react';
import { connect } from 'dva';
import { Menu } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'dva/router';

import ZKIcon from '../zk-icon';
import zkJsUtils from 'zkJsUtils';
import { zkToolsNavAndMenu } from '../../../tools';

import styles from "./styles.less";

/********************************************/
/*** 生成菜单 ***/
const f_genMenu = (menus, path, history, openKeys, selMenuIds, toPathFunc) => {
    path = path || '';
    openKeys = openKeys || []
    return menus.map(item => {
        // 判断是否是显示
        if (zkToolsNavAndMenu.menuIsShow(item)) {
            let tPath = zkJsUtils.isEmpty(item.path) ? path : (path + '/' + item.path);
            // 判断是否为叶子结点 
            if (zkToolsNavAndMenu.menuIsLeaf(item)) {
                // 是叶子结点 
                return (
                    <Menu.Item key={item.pkId} title={zkToolsNavAndMenu.getMenuName(item)}>
                        <NavLink to={tPath}>
                            {zkJsUtils.isEmpty(item.icon) ? '' : <ZKIcon.Antd4Icon icon = {item.icon} />}
                            <span>{zkToolsNavAndMenu.getMenuName(item)}</span>
                        </NavLink>
                    </Menu.Item>
                )
            } else {
                openKeys.push(item.pkId);
                const f_subMenuOnClick = (e) => {
                    if (!zkJsUtils.isEmpty(item.path)) {
                        // console.log("[20181022-0846-002] 点击了菜单", item, tPath)
                        toPathFunc(tPath, openKeys, item);
                    }
                }
                return (
                    <Menu.SubMenu key={item.pkId}
                        className={`${styles.menu_sub} ${(selMenuIds.indexOf(item.pkId) === -1) ? "" : styles.menu_sub_selected}`}
                        title={
                            (<span onClick={f_subMenuOnClick}>
                                {zkJsUtils.isEmpty(item.icon) ? '' : (<ZKIcon.Antd4Icon icon = {item.icon} />)}
                                {zkToolsNavAndMenu.getMenuName(item)}
                            </span>)
                        }
                    >
                        {f_genMenu(item.children, tPath, history, openKeys, selMenuIds, toPathFunc)}
                    </Menu.SubMenu>
                )
            }
        }
    })
}

/*** 根据菜单 pkId 数组取 需要选择的菜单 pkId 数组 和 需要打开的菜单 pkId 数组
返回对象：{selIds:[需要选择的菜单 pkId 数组], openIds:[需要打开的菜单 pkId 数组]}
***/
const f_getSelMenuAndOpenMenuIdsByMenuIds = (menus, menuIds) => {

    let optMenuState = {
        selIds: [],
        openIds: []
    };
    let ms = [];
    let mObj = null;
    for (let menuId of menuIds) {
        ms = [];
        // 找出菜单 pkId 的所有父菜单数组，再做分析出选中菜单 pkId 与打开
        ms = zkJsUtils.findTreeParent(menus, menuId);
        mObj = null;
        mObj = f_getSelMenuAndOpenMenuIds(ms);
        if (mObj != null) {
            optMenuState.selIds.push(mObj.selMenu.pkId)
            optMenuState.openIds = optMenuState.openIds.concat(mObj.openIds)
        }
    }
    // console.log("[^_^:20210216-2200-001] f_getSelMenuAndOpenMenuIdsByMenuIds:", optMenuState);
    return optMenuState
}

/*** 根据当前路由操作菜单数组取 需要选择的菜单 和 需要打开的菜单 pkId 数组
1、操作菜单数组中，从最小的子菜单开始向最终父节点遍历，第一个做为菜单显示的菜单为需要选中的菜单
2、操作菜单数组中，所有显示的菜单的 pkId
返回对象：{selMenu:需要选择的菜单, openIds:[需要打开的菜单 pkId 数组]}
***/
const f_getSelMenuAndOpenMenuIds = (optMenus) => {

    let optMenuState = null
    for (let m of optMenus) {
        // 判断是否是显示
        if (zkToolsNavAndMenu.menuIsShow(m)) {
            // 第一个显示的菜单为要选中的菜单；他的父菜单只是要打开的菜单
            if (optMenuState == null) {
                optMenuState = {
                    selMenu: m,
                    openIds: [m.pkId]
                }
            } else {
                optMenuState.openIds.push(m.pkId)
            }
        }
    }
    return optMenuState
}

/*** 根据当前访问路径，查找需要打开的和选择中的菜单，返回 optMenuState 数据对象 
根据每一个路径层级来取 路由映射对象中 路由路径对应的菜单的ID，要求第一个菜单都有路由路径映射对应，即每一个显示的路由菜单都要有路由路径！
1、selId 需要选中的菜单 ID
2、openIds 需要打开的菜单 ID，包含了需要选中的菜单ID
***/
const f_getOpenAndSelMenuIdsByPathnameAndMapping = (pathname, routerMappingObj) => {

    let optMenuState = {
        selIds: [],
        openIds: []
    };

    if (routerMappingObj.getMappingTarget instanceof Function) {
        pathname = pathname.split("?").filter(i => i)[0];
        let paths = pathname.split("/").filter(i => i);
        let path = "";

        for (let item of paths) {
            path = path + "/" + item;
            let targetObj = routerMappingObj.getMappingTarget(path);
            if (targetObj != null) {
                // 是显示的
                if (zkToolsNavAndMenu.menuIsShow(targetObj) || optMenuState.selIds.length < 1) {
                    optMenuState.selIds[0] = targetObj.pkId;
                    optMenuState.openIds.push(targetObj.pkId);
                } else {
                    // break;
                }
            }
        }
    }
    return optMenuState;
}

/**
 * 根据当前访问路径，查找需要打开的和选择中的菜单，返回 optMenuState 数据对象 
 * 根据当前路由路径，取路由映射对象中，此路由路径对应的菜单的ID，根据此菜单ID，遍历菜单数据，计算出需要打开和选中的菜单；
 *
 * 1、selId 需要选中的菜单 ID
 * 2、openIds 需要打开的菜单 ID，包含了需要选中的菜单ID
 * @param {string} pathname 
 * @param {object} routerMappingObj 
 * @param {Array.of(object)} menus 
 * @return {object} 返回选择及需求打开的菜单ID；返回示例：
 *  {
 *      selId:[需要选中的菜单 ID 数组]
 *      openIds: [需要打开的菜单 ID 数组，包含了需要选中的菜单ID]
 *  }
 */
const f_getOpenAndSelMenuIdsByPathnameAndMenus = (pathname, routerMappingObj, menus) => {

    let optMenuState = {
        selIds: [],
        openIds: []
    };

    if (routerMappingObj.getMappingTarget instanceof Function) {
        pathname = pathname.split("?").filter(i => i)[0];

        let paths = pathname.split("/").filter(i => i);
        let pathIndex = paths.length;

        let targetObj = null;
        while (pathIndex > 0 && targetObj == null) {
            targetObj = routerMappingObj.getMappingTarget(pathname);
            if (targetObj != null) {
                optMenuState = f_getSelMenuAndOpenMenuIdsByMenuIds(menus, [targetObj.pkId])
            } else {
                pathIndex = pathIndex - 1;
                pathname = '/' + paths.slice(0, pathIndex).join('/')
            }
        }
    }
    // console.log("[^_^:20210216-2159-001] f_getOpenAndSelMenuIdsByPathnameAndMenus: ", optMenuState);
    return optMenuState;
}

/********************************************/
/**
 * 菜单组件
 */
class CInitAutoMenu extends React.Component {

    constructor(props) {
        super(props);

        let { match, history, location, menus, beforePath = 'ccc' } = props;

        this.state = {
            location: undefined,
            isMenu: menus.length > 0, // 当前菜单为空时认为还未有菜单；为 false
            isForce: 0, // 是否强制更新菜单选择状态；0 - 自动处理；1 - 强制不更新；-1 - 强制更新
            selMenuIds: [], // 选中的菜单 pkId 数组
            openMenuIds: [], // 打开的菜单 pkId 数组
        }
        // console.log("[^_^:20190131-0827-001] CInitAutoMenu.constructor ... ...    ");
    }

    static getDerivedStateFromProps(props, state) {

        let { location, routerMappingObj, menus } = props;

        if ((state.isForce != 1 && state.location != location) || (state.isMenu == false)) {
            let optMenuState = f_getOpenAndSelMenuIdsByPathnameAndMenus(location.pathname, routerMappingObj, menus);
            if (optMenuState != null) {
                state.selMenuIds = optMenuState.selIds;
                state.openMenuIds = optMenuState.openIds;
            }
        }
        state.location = location;
        state.isForce = 0;
        state.isMenu = menus.length > 0
        return true;
    }

    /*
    参数 currentOpenMenuIds 中是当前要打开的菜单；
    1、
    */
    onOpenChange = (currentOpenMenuIds) => {
        // console.log("[^_^:20190131-1423-001] CInitAutoMenu.onOpenChange", currentOpenMenuIds)
        // 最终确定要打开的菜单 pkId 数组
        let latestOpenIds = [];

        // 1、找出新打开的菜单；不在已打开菜单中的菜单为新打开的菜单
        for (let currentMenuId of currentOpenMenuIds) {
            // 不在已打开菜单中的菜单为新打开的菜单
            if (this.state.openMenuIds.indexOf(currentMenuId) === -1) {
                latestOpenIds.push(currentMenuId)
            }
        }

        // 2、判断是否有需要新打开的菜单
        if (latestOpenIds.length > 0) {
            // 有需要新打开的菜单，根据新打开的菜单 pkId 数组，找出需要关联打开的父菜单 pkId 数组
            let optMenuState = f_getSelMenuAndOpenMenuIdsByMenuIds(this.props.menus, latestOpenIds);
            latestOpenIds = optMenuState.openIds;
            latestOpenIds.removeSameValue();
        } else {
            // 没有新打开的菜单，直接打开当前需要打开的菜单
            latestOpenIds = currentOpenMenuIds;
        }
        this.setState({ openMenuIds: latestOpenIds })
    }

    // onSelect(obj){
    //     // 
    //     console.log("---- 333 ", obj)
    // }

    render() {
        // console.log("[^_^:20190131-0827-002] CInitAutoMenu.render ... ...    ", this.props);

        const { selMenuIds, openMenuIds } = this.state;
        const { path, history, location, menus } = this.props;

        const f_toPathFunc = (targetPath, openKeys, selItem) => {
            // this.setState({ isForce: 1, openMenuIds: openKeys, selMenuIds: [selItem.pkId] });
            if (!zkJsUtils.isEmpty(selItem.funcName)) {
                history.push(targetPath);
            }
        }

        // const f_menuLinkOnClik = e => {
        //     // Menu onClick callback executed when a menu item is clicked   
        //     let { key, keyPath } = e;
        //     this.setState({ isForce: 1, openMenuIds: keyPath, selMenuIds: [key] })
        // }

        let prefixPath = path == '/' ? '' : path

        let menusElement = f_genMenu(menus, prefixPath, history, [], selMenuIds, f_toPathFunc);

        return (
            <Scrollbars style={{ height: '100%' }}>
                <Menu className={styles.menu}
                    selectedKeys={selMenuIds}
                    openKeys={openMenuIds}
                    onOpenChange={this.onOpenChange}
                    // onClick={f_menuLinkOnClik}
                    // theme="dark"
                    mode="inline" >
                    {menusElement}
                </Menu>
                <br />
            </Scrollbars>
        )
    }
}

// 定义属性
CInitAutoMenu.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.object).isRequired,
    path: PropTypes.string,
    routerMappingObj: PropTypes.object
}

// 定义属性默认值
CInitAutoMenu.defaultProps = {
    path: '/'
}

export default withRouter(CInitAutoMenu);