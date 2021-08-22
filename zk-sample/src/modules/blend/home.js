/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 15:24:06
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-12 15:24:52
 */

import React from 'react';

import { ZKOriginalComponents } from 'zkFramework';

const { ZKButton } = ZKOriginalComponents;

const FInitBlendHome = ()=>{

	return (
		<div>
			一个混合的导航栏目，包含项目本身功能与引入其他打包项目功能： <br />
			<br /><br /> 
			<ZKButton>Sample 按钮</ZKButton>
			<br /> 
		</div>
	)
}

export default FInitBlendHome;