/*
* @Author: Vinson
* @Date:   2021-06-30 19:02:31
* @Last Modified by: runoob
* @Last Modified time: 2023-09-25 22:14:42
* 
* 
* 
*/

import React from 'react';
import { Select } from 'antd'
import PropTypes from 'prop-types'

import styles from "./styles.less";

import ZKIcon from "../zk-icon/index.js";
import { ZKDropdown, ZKMenu, ZKButton } from "../../original/index.js";

const FInitLanguageDropdown = ({ locales, changeFunc, lang, className, ...props }) => {

	const handleLanguageChange = (languageKey) => {
		changeFunc(languageKey);
	};

	if(locales){
		// const menus = (<ZKMenu selectedKeys = { lang } onClick = { ({item, key})=>{ handleLanguageChange(key) }}>
		// 	{
		// 		Object.keys(locales).map((language) => {
		// 			return <ZKMenu.Item className = { `${styles.zk_languageDropdown_item}` } key={language} >{ locales[language].name }</ZKMenu.Item>
		// 		})
		// 	}
		// </ZKMenu>)
		const menuItems = Object.keys(locales).map((language) => {
			return {
				'className': `${styles.zk_languageDropdown_item}`,
				'key': language,
				'label': locales[language].name,
			}
		})

		return (
			<ZKDropdown { ...props } className = { `${styles.zk_languageDropdown_default} ${className}` } 
				menu={{
					items: menuItems,
					onClick: ({item, key})=>{ handleLanguageChange(key) }
				}} 
			>
				<div><ZKIcon.AntdIcon icon = "GlobalOutlined" />&nbsp;{ locales[lang].name }</div>
      		</ZKDropdown>
		);
	}else{
		return "";
	}
}

// 定义属性
FInitLanguageDropdown.propTypes = {
	locales: PropTypes.object,
	changeFunc: PropTypes.func,
	lang: PropTypes.string,
}
// 定义属性默认值
FInitLanguageDropdown.defaultProps = {
	lang: 'en-US',
	placement: 'bottomRight',
	className: styles.zk_languageDropdown
}

export default FInitLanguageDropdown;






