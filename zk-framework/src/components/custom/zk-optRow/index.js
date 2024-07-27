/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:54:24
 * @Last Modified by: runoob
 * @Last Modified time: 2023-10-08 21:24:27
 */

import React from 'react';
import { BarsOutlined, DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { Button, Dropdown, Menu } from 'antd';

// import Menu from '../../original/zk-menu';

import ZKLanguageSelect from '../zk-languageSelect';
import ZKIcon from '../zk-icon';
import styles from "./styles.less";

/*** 操作 Item ***/
const FInitOptItem = ({ isExpand, icon, ...props }) => {
	// console.log("[^_^:20210307-1530-001] FInitOptItem: ", icon);
	if (props.children === undefined || zkJsUtils.assertObjType(props.children, String)) {
		return <Button {...props} icon = {icon?<ZKIcon.AntdIcon icon = {icon} /> : ""} />
	} else {
		return props.children;
	}
}

// 操作 Item 属性类型
FInitOptItem.propTypes = {
	isExpand: PropTypes.bool,           // 组内操作是否展开，默认展开
	onClick: PropTypes.func,            // 操作回调
	// children:PropTypes.string,       // 操作名称
}
// 操作 Item 属性默认值
FInitOptItem.defaultProps = {
	isExpand: true,
}

FInitOptItem.typeName = "FInitOptItem";

/*** 操作组 ***/
const FInitOptGroup = ({ children, isAutoPurseUp, key }) => {
	let optItems = []    // 操作 item; 展开的操作，直接做为操作 item;
	let purseUpOpts = [] // 收起的操作

	let f_disposeItem = item => {
		if (zkJsUtils.assertObjType(item, Object) && item.type.typeName === 'FInitOptItem') {
			if (isAutoPurseUp || !item.props.isExpand) {
				purseUpOpts.push(item)
			} else {
				optItems.push(item)
			}
		} else {
			optItems.push(item)
		}
	}

	// 如果 children 不是数组转为数组
	if (zkJsUtils.assertObjType(children, Array)) {
		children.map((item, index) => {
			f_disposeItem(item);
		})
	} else {
		f_disposeItem(children);
	}

	if (purseUpOpts.length > 0) {
		const menuOptFun = (e, event) => {
			if (zkJsUtils.assertObjType(purseUpOpts[e.key].props.onClick, Function)) {
				purseUpOpts[e.key].props.onClick.call(this, e)
			}
		}
		/*** 生成菜单2, >=4.20.0 可用，推荐的写法 ***/
		let menuItems = purseUpOpts.map((item, index) => {
			return{
				'key': index,
                'icon': item.props.icon?<ZKIcon.AntdIcon icon = {item.props.icon} /> : "",
                'label': item.props.children,
                'title': item.props.children
			}
		})
		let menuProps = {
			onClick: menuOptFun,
			items: menuItems
		}

		optItems.push(
			<Dropdown key={'_InitOptGroup_key_dropdown' + key} menu={menuProps}>
				<Button><BarsOutlined style={{ marginRight: 1 }}  /><DownOutlined /></Button>
			</Dropdown>
		);
	}

	return optItems;
}

FInitOptGroup.typeName = "FInitOptGroup";

// 操作组 属性类型
FInitOptGroup.propTypes = {
	isAutoPurseUp: PropTypes.bool, // 组内操作是否自动收拢操作？默认为否；设置为 true 将忽略 操作 Item 中的展开属性设置
	// children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, undefined]),
}
// 操作组 属性默认值
FInitOptGroup.defaultProps = {
	isAutoPurseUp: false,
}
FInitOptGroup.OptItem = FInitOptItem;

/*** 操作行 ***/
const FInitOptRow = ({ children, lang, languageChangeFunc, locales }) => {

	const f_getOpt = (els) => {
		let items = []
		let noGropItems = []
		let f_disposeItem = (item, index) => {
			if (zkJsUtils.assertObjType(item, Object)) {
				if (item.type.typeName === 'FInitOptGroup') {
					items.push(FInitOptGroup({ ...item.props, key: '_key_' + index }))
				} else if (item.type.typeName === 'FInitOptItem') {
					noGropItems.push(item)
				} else {
					items.push(item);
				}
			}
		}

		if (zkJsUtils.assertObjType(els, Array)) {
			els.map((item, index) => {
				f_disposeItem(item, index);
			})
		} else {
			f_disposeItem(els, 0);
		}

		// 未分组操作
		if (noGropItems.length > 0) {
			items = items.concat(FInitOptGroup({ children: noGropItems, isAutoPurseUp: false, key: '_key_' }))
		}

		return items
	}

	let languageHtmlElement = null;

	if (zkJsUtils.assertObjType(languageChangeFunc, Function)) {
		const languageSwitchProps = {
			locales,
			lang,
			changeFunc(lang) {
				languageChangeFunc(lang)
			}
		}

		languageHtmlElement = (
			<div key="ZKOptRow-ZKLanguageSelect-0" className={styles.zk_opt_language}>
				<ZKLanguageSelect {...languageSwitchProps} />
			</div>
		)
	}

	return (
		<div className={styles.zk_opt_row_style}>
			<div key="ZKOptRow-0" className={styles.zk_opt_item}>
				{children ? f_getOpt(children) : children}
			</div>
			{languageHtmlElement ? languageHtmlElement : undefined}
		</div>
	)
}

// 操作行 属性类型 
FInitOptRow.propTypes = {
	locales: PropTypes.object, 
	lang: PropTypes.string,                 // 默认的编辑语言
	languageChangeFunc: PropTypes.func // 编辑语言选择回调函数，不传不显示编辑语言选择器，回调时将语言标识做为参数传出：Function(lang)
	// ,children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element.isRequired), PropTypes.element.isRequired, undefined])
}

// 操作行 属性默认值
FInitOptRow.defaultProps = {
	lang: 'zh-CN'
}
FInitOptRow.OptGroup = FInitOptGroup;

export default FInitOptRow;


