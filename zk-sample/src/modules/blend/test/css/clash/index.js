/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:51:49
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-12 17:05:13
 */

import React from 'react';

import { ZKCustomComponents } from 'zkFramework';

import cPage1 from './page1';
import cPage2 from './page2';

const { ZKRouter } = ZKCustomComponents;
const { Link, Route } = ZKRouter;

const style = {
	'margin':'0px 12px 0px 12px',
	'padding':'16px 16px',
	"border": "1px solid red"
}

const FInitCss = ({match})=>{

	return (
		<div style={style} >

			<div>测试 css 模块化是否可以解决冲突</div>
			<br />
			<Link to={`${match.path}/page1`} >page 1</Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to={`${match.path}/page2`} >page 2</Link>
			<br /><br />
				<Route path={`${match.path}/page1`} component={cPage1} />
				<Route path={`${match.path}/page2`} component={cPage2} />
			<br /><br />

		</div>
	)
}

export default FInitCss;