/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 12:38:35
 * @Last Modified by:   Vinson
 * @Last Modified time: 2020-08-17 10:22:42
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * 递归判断子节点的权限
 * 1、先判断子组件是否需要角色或权限；如果都不需要，显示子节点;
 * 2、先判断子组件是否有需要的 角色或权限，两都满足其一即显示子节点; 都不满足不显示子节点;
 * @param {Array.of(string)} roles 用户信息，角色代码字符串数组；示例: ["r1", "r2"]
 * @param {Array.of(string)} permissions 用户信息，权限代码字符串数组；示例: ['p1', 'p2', 'p4:p5']
 * @param {object} children 子节点，子节点 item 包含一个 permission 和 role 属性；这俩属性经权限判断组件 Permission 处理后，不会下传给 item；
 */
const FInitPermission = ({ roles = [], permissions = [], children }) => {

	// 权限判断; 
	const f_isHavePermission = (role, permission) => {
		/* 
			1、先判断子组件是否需要角色或权限；如果都不需要，返回 true;
			2、先判断子组件是否有需要的 角色或权限，两都满足其一即返回 true; 都不满足返回 false;
		*/
		if (role || permission) {
			if (role && roles.indexOf(role) > -1) {
				// 有组件所需要的角色
				return true;
			}
			if (permission && permissions.indexOf(permission) > -1) {
				// 有组件所需要的权限
				return true;
			}
			return false;
		}

		return true;
	}

	// 断言一个 节点的是否显示，不显示返回 空，显示，返回节点；
	const f_assertionChildNode = (itemNode, key = "_permission_key_") => {
		// 如果结果为空，直接返回 节点 
		if (itemNode == null || itemNode == undefined) {
			return itemNode;
		}

		if (itemNode instanceof Array) {
			return itemNode.filter(i => i).map((item, index) => {
				return f_assertionChildNode(item, key + index);
			});
			// .filter(item=>item!=null)
		}

		if (itemNode.props) {
			let { role, permission, children, ...nodeProps } = itemNode.props;
			if (f_isHavePermission(role, permission)) {
				// if(item.type){
				// 	return <item.type {...itemProps} key={item.key?item.key:index} />
				// }else{
				// 	return item;
				// }
				return <itemNode.type {...nodeProps}
					key={itemNode.key ? itemNode.key : key}
					children={f_assertionChildNode(children)}
				/>
			} else {
				return;
			}
		} else {
			return itemNode
		}

	}

	// 开始判断节点权限
	return f_assertionChildNode(children, "_permission_key_");
}

// 定义属性
FInitPermission.propTypes = {
	roles: PropTypes.arrayOf(PropTypes.string),
	permissions: PropTypes.arrayOf(PropTypes.string),
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired
};

// 定义属性默认值
FInitPermission.defaultProps = {
	roles: [],
	permissions: []
};


export default FInitPermission;
