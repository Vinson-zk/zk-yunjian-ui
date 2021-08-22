/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:53:33
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-12 16:54:51
 */


import React from 'react';

import styles from './styles.less';
import './styles.less';

const FInitPage1 = ()=>{

	console.log("[^_^:20190214-1714-001] css 模块化是否可以解决冲突 页面 1");

	return (
		<div>
			import styles from './styles.less';<br />
			<div className={styles.page1}>
				page 1
				<div className={styles.childCss1}> page1 子样式: 在 page1 样式外不生效；此处生效；蓝色边框 </div>
			</div>
			<div className={styles.childCss1}> page1 子样式，在 page1 样式外不生效；此处不生效；无蓝色边框 </div>
			<div className={styles.page1Css1}> 不冲突 样式: 蓝色边框 </div>
			<div className={styles.pageCss}> 冲突 样式: 蓝色边框-没有冲突；非蓝色边框-冲突； </div>

			<br /><br />
			import './styles.less';<br />
			<div className="page1" >
				page 1
				<div className="childCss1" > page1 子样式: 在 page1 样式外不生效；此处生效；蓝色边框 </div>
			</div>
			<div className="childCss1" > page1 子样式，在 page1 样式外不生效；此处不生效；无蓝色边框 </div>
			<div className="page1Css1" > 不冲突 样式: 蓝色边框 </div>
			<div className="pageCss" > 冲突 样式: 蓝色边框-没有冲突；非蓝色边框-冲突； </div>

		</div>
	)

}

export default FInitPage1;
