/*
* @Author: Vinson
* @Date:   2021-06-30 19:02:31
* @Last Modified by:   Vinson
* @Last Modified time: 2021-07-02 11:46:39
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
		const menus = (<ZKMenu selectedKeys = { lang } onClick = { ({item, key})=>{ handleLanguageChange(key) }}>
			{
				Object.keys(locales).map((language) => {
					return <ZKMenu.Item className = { `${styles.languageDropdown_item}` } key={language} >{ locales[language].name }</ZKMenu.Item>
				})
			}
		</ZKMenu>)

		return (
			<ZKDropdown { ...props } className = { `${styles.languageDropdown_default} ${className}` } overlay={menus} >
				<div><ZKIcon.Antd4Icon icon = "GlobalOutlined" />&nbsp;{ locales[lang].name }</div>
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
	className: styles.languageDropdown
}

export default FInitLanguageDropdown;