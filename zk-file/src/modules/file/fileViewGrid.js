/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-10-01 19:08:54
* @Last Modified by: runoob
* @Last Modified time: 2023-11-07 10:27:18
*/

import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents } from 'zkFramework';
import styles from './styles.less';
const { zkToolsUtils, zkToolsMsg } = zkTools;
const { ZKInput, ZKEmpty, ZKBreadcrumb } = ZKOriginalComponents;
const { Search } = ZKInput;

const FInitFileViewGrid = ({files=[], dispatch, intl})=>{
	return <>
		<div>文件网格展示</div>
	</>;
}

export default FInitFileViewGrid;




