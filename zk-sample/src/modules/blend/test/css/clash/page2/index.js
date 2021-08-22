/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:53:51
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-12 16:54:39
 */

import React from 'react';

import styles from './styles.less';
// import './styles.less';

const FInitPage2 = ()=>{

	console.log("[^_^:20190214-1714-002] css 模块化是否可以解决冲突 页面 2 ");

	return (
		<div>
			import styles from './styles.less';<br />
			<div className={styles.page2}>
				page 2	
				<div className={styles.page2Css2}> 不冲突 样式: 红色边框 </div>
			</div>
			<div className={styles.pageCss}> 冲突 样式: 红色边框-没有冲突；非红色边框-冲突； </div>

			<br /><br />
			import './styles.less';<br />
			<div className="page2" >
				page 2	
			</div>
			<div className="page2Css2" > 不冲突 样式: 红色边框 </div>
			<div className="pageCss" > 冲突 样式: 红色边框-没有冲突；非红色边框-冲突； </div> 

		</div>
	)
}

export default FInitPage2;