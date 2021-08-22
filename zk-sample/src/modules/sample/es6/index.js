/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 11:24:13
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-12 11:33:43
 */

import React from 'react';

import styles from "../styles.less";

const f_tPromise1 = () => {

	function timeout(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(e => {
				console.log('[20181113-0059-001] 休息了 ' + ms + ' 毫秒 ');
				resolve(' timeout-Promise')
			}, ms, 'done');
		});
	}

	timeout(1500).then((value) => {
		console.log('[20181113-0059-002] ' + value + ' 执行完了 ');
	});

	console.log('[20181113-0059-003] 主线程 执行完了 ');
}

class CInitEs6 extends React.Component {

	render() {
		f_tPromise1();

		return (
			<div className={styles.sample_detail_panel}>
				<h1>ES6 语法笔记</h1>
				<div className={styles.sample_detail_section} >
					<font style={{ "color": "red" }}>待续 ... ... </font>
				</div>
			</div>
		)
	}
}

export default CInitEs6;