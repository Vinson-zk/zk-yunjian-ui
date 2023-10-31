/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:49:48
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 16:27:42
 */

import React from 'react';

import styles from './styles.less';

const FInitCssValue = ()=>{

	return (
		<div>
			css 输入变量；<br />
			<font className={styles.font_color} >CSS Modules 支持使用变量，不过需要安装 PostCSS 和 postcss-modules-values。</font>

			<br /><br />
			<div className = {styles.c_zkGreen} >这个绿色边框是 css 输入变量值；</div>
			<br /><br />
		</div>
	)

}

export default FInitCssValue