/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:38:35
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 18:43:09
 */


import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'dva/router';

import ZKIcon from '../zk-icon';

import { zkToolsMsg, zkToolsNavAndMenu } from '../../../tools';
import styles from "./styles.less";

const FInitNavItem = ({ path, children, selected }) => {

	let className = "";
	if (selected) {
		className = `${styles.nav_item_div} ${styles.nav_item_selected}`;
	} else {
		className = `${styles.nav_item_div}`;
	}

	return (
		<div className={className} >
			<Link to={path}>{children}</Link>
		</div>
	)
}

const FInitNavigation = withRouter(({ prefixPath, navItems, location }) => {

	prefixPath = prefixPath == '/' ? "" : prefixPath;

	let selectNavItemPath = "";
	let path = "";
	navItems.forEach(item => {
		path = `${prefixPath}/${item.path}`;
		if (location.pathname.startsWith(path)) {
			if (path.startsWith(selectNavItemPath)) {
				selectNavItemPath = path;
			}
		}
	})

	return (
		<div className={styles.nav}>
			{navItems.map(item => {
				// 不显示时，不生成导航节点
				if(zkToolsNavAndMenu.navIsShow(item)){
					path = `${prefixPath}/${item.path}`;
					return (
						<FInitNavItem key={item.pkId} path={path} selected={path === selectNavItemPath} >
							<span>
								{zkJsUtils.isEmpty(item.icon) ? '' : (<ZKIcon.Antd4Icon icon = {item.icon} />)}&nbsp;
								{zkToolsMsg.getInternationInfo(item.name)}
							</span>
						</FInitNavItem>
					)
				}
			})}
		</div>
	)

})

// 定义属性
FInitNavigation.propTypes = {
	navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
	prefixPath: PropTypes.string
}

// 定义属性默认值
FInitNavigation.defaultProps = {
	prefixPath: '/'
}

export default FInitNavigation;

