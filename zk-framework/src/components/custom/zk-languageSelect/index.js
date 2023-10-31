/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:29:13
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 09:06:55
 */

import React from 'react';
import { Select } from 'antd'
import PropTypes from 'prop-types'

import styles from "./styles.less";

const { Option } = Select;

const FInitLanguageSelect = ({ locales, changeFunc, lang }) => {

	const handleLanguageChange = (value) => {
		changeFunc(value);
	};
	if(locales){
		return (
			<Select defaultValue={lang} className={styles.languageSelect} onChange={handleLanguageChange}>
				{
					Object.keys(locales).map((language) => {
						return <Option className={styles.languageSelect_option} key={language} value={language}>{locales[language].name}</Option>
					})
				}
			</Select>
		);
	}else{
		return "";
	}
}

// 定义属性
FInitLanguageSelect.propTypes = {
	locales: PropTypes.object,
	changeFunc: PropTypes.func,
	lang: PropTypes.string,
}
// 定义属性默认值
FInitLanguageSelect.defaultProps = {
	lang: 'en-US',
}

export default FInitLanguageSelect;



