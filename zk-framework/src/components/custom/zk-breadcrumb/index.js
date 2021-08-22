/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 18:21:19
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-10 19:47:01
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Button } from 'antd';
import { DoubleLeftOutlined } from '@ant-design/icons';
import { Link, withRouter } from 'dva/router';

import zkJsUtils from 'zkJsUtils';
import { zkToolsNavAndMenu } from '../../../tools';

import styles from "./styles.less";

const CInitBreadcrumb = withRouter(({ match, history, location, routerMappingObj, isShowFunc }) => {

    let paths = location.pathname;
    paths = paths.split("?").filter(i => i)[0];
    paths = paths.split("/").filter(i => i);

    let breads = f_getBreadcrumsByMapping(paths, routerMappingObj, isShowFunc)

    // console.log("[^_^:20190129-1416-001] CInitBreadcrumb: ", paths, location, breads, routerMappingObj)
    // size={"small"} 
    return (
        <div className={styles.breadcrumb_div}>
            <Button className={styles.breadcrumb_goBackButton} size={"small"} icon={<DoubleLeftOutlined />}
                onClick={e => {
                    // console.log(length, history)
                    // history.go(-1);
                    // history.length = history.length -1;
                    history.goBack();
                    // length = length - 1;
                }
                } />
            <Breadcrumb className={styles.breadcrumb} separator={'>'}>{breads}</Breadcrumb>
        </div>
    )

})

// 根据 路由路径与菜单映射数据生成面包屑对应对象
const f_getBreadcrumsByMapping = (paths, routerMappingObj, isShowFunc) => {
    let breads = [];
    if (routerMappingObj.getMappingTarget instanceof Function) {
        let path = "";
        let breadName = undefined;
        let targetObj = undefined;
        paths.forEach((item, index, arr) => {
            path = path + "/" + item;

            breadName = undefined;
            targetObj = routerMappingObj.getMappingTarget(path);
            // console.log("[^_^:20190129-1549-001] f_getBreadcrumsByMapping: ", path, targetObj, routerMappingObj)

            if (targetObj != null && isShowFunc(targetObj)) {
                breadName = zkToolsNavAndMenu.getMenuName(targetObj);
                breadName = zkJsUtils.isEmpty(breadName) ? item : breadName;
                if (index === arr.length - 1) {
                    // 最后一级路由 .key 
                    breads.push(<Breadcrumb.Item key={index}>{breadName}</Breadcrumb.Item>)
                } else {
                    breads.push(
                        <Breadcrumb.Item key={index}>
                            <Link to={path}>{breadName}</Link>
                        </Breadcrumb.Item>
                    )
                }
            }
        });
    }
    return breads;
}

// 根据路径对应菜单与树形数据生成面包屑数据
const f_getBreadcrumsByMenus = (location, menus) => {
    let breads = [];
    if (location.menu) {
        let ms = zkJsUtils.findTreeParent(menus, location.menu.id);
        let breadName = undefined;
        return ms.map((item, index) => {
            if (zkJsUtils.isEmpty(item.view)) {
                breadName = undefined;
                breadName = zkToolsNavAndMenu.getMenuName(item);
                breadName = zkJsUtils.isEmpty(breadName) ? item : breadName;
                if (index < ms.length - 1) {
                    <Breadcrumb.Item key={item.id}><Link to={path}>{breadName}</Link></Breadcrumb.Item>
                } else {
                    return <Breadcrumb.Item key={item.id}>{breadName}</Breadcrumb.Item>
                }
            }
        })
    }
    return breads;
}

// 定义属性
CInitBreadcrumb.propTypes = {
    routerMappingObj: PropTypes.object.isRequired,
    isShowFunc: PropTypes.func // 判断菜单是否为有视图的菜单; true-是有视图的；false-没视图的；
}

// 定义属性默认值
CInitBreadcrumb.defaultProps = {
    isShowFunc: item => {
        return !zkJsUtils.isEmpty(item.funcName); // 默认没有功能名称不显示；
    }
}

export default CInitBreadcrumb;


