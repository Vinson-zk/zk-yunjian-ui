/*
* @Author: Vinson
* @Date:   2022-04-28 09:06:00
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-28 11:45:44
* 
* 
* 
*/

import React from 'react';
import { ZKOriginalComponents } from "zkFramework";
const { ZKSelect } = ZKOriginalComponents;

// 一级地区
const d_areas = [
	{
		name: '湖南',
		key: 'hunan',
		childs: [
			{
				name: '长沙',
				key: 'changsha',
			}, 
			{
				name: '益阳',
				key: 'yiyang',
			}
		]
	},
	{
		name: '广东',
		key: 'guangdong',
		childs: [
			{
				name: '广州',
				key: 'guangzhu',
			}, 
			{
				name: '东莞',
				key: 'dongguan',
			}, 
			{
				name: '珠海',
				key: 'zhuhai',
			}
		]
	}
]
// 二级地区
const f_getAreaTwos = (areaOne) => {
	if (areaOne) {
		for (let area of d_areas) {
			if (area.key == areaOne) {
				return area.childs || []
			}
		}
	}
	return [];
}

// 根据父节点值返回不同了子选择节点
const f_getChildSelOpt = (namePrefix, pv)=>{
	
	let ops = [];
	if (pv == 'c1') {
		ops = [{ value: 'c1-1', name: 'c1-1' }, { value: 'c1-2', name: 'c1-2' }, { value: 'c1-3', name: 'c1-3' }];
	} else if (pv == 'c2') {
		ops = [{ value: 'c2-1', name: 'c2-1' }, { value: 'c2-2', name: 'c2-2' }];
	}
	return ops.map(item => {
		return <ZKSelect.Option key={item.value} value={`${namePrefix}-${item.value}`}>{item.name}</ZKSelect.Option>
	});
}

const d_attrs = { 'zh_CN': { 'name': '简体中文' }, 'en_US': { 'name': 'English' } };

export {
	d_areas, f_getAreaTwos, f_getChildSelOpt, d_attrs,
}




