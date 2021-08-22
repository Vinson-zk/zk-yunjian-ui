/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 13:55:47
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-21 17:19:26
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

// 取地区接口
export async function getArea(params) {
	return zkToolsAjax.req('/apiMock/sample/example/area/get', {method:'GET', data:params})
}

// 取单个实体接口
export async function get(params) {
	return zkToolsAjax.req('/apiMock/sample/example/get', {method:'GET', data:params})
}

// 查找接口
export async function findList(params) {
	return zkToolsAjax.req('/apiMock/sample/example/findList', {method:'GET', data:params})
}

// 删除接口
export async function del(params) {
	// return request('/apiMock/sample/example/del', {method:'DELETE', data:params})
	// return request('/apiMock/sample/example/del', {method:'DELETE', data:JSON.stringify(params)});
	return zkToolsAjax.req('/apiMock/sample/example/del', {method:'DELETE', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'})
	// return request('/apiMock/sample/example/del', {method:'DELETE', data:params, contentType:'application/x-www-form-urlencoded; charset=UTF-8'})
}

// 保存接口
export async function save(params) {
	// console.log("[^_^:20200817-1723-001] save.params: ", JSON.stringify(params));
	return zkToolsAjax.req('/apiMock/sample/example/save', {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'})
}


// /*** 无代理样例 ***/
// // 地区
// const areas = [
//     { id: 1, name: { zh_CN: '广东', en_US: 'guangdong' }, key: 'guangdong', parentKey: null }, 
//     { id: 2, name: { zh_CN: '湖南', en_US: 'hunan' }, key: 'hunan', parentKey: null }, 
//     { id: 3, name: { zh_CN: '珠海', en_US: 'zhuhai' }, key: 'zhuhai', parentKey: 'guangdong' }, 
//     { id: 4, name: { zh_CN: '广州', en_US: 'guangzhou' }, key: 'guangzhou', parentKey: 'guangdong' }, 
//     { id: 5, name: { zh_CN: '长沙', en_US: 'chuangsha' }, key: 'chuangsha', parentKey: 'hunan' }
// ]

// const f_getAreaTree = (areas, parentKey)=>{
//     let areaChilds = [];
//     areas.map(item=>{
//         if(item.parentKey == parentKey){
//             item.childs = f_getAreaTree(areas, item.key)
//             areaChilds.push(item)
//         }
//     })
//     // console.log("----- ", areaPrents, areas)
//     return areaChilds
// }

// const areaTree = f_getAreaTree(areas, null);
// // console.log("[^_^:20181223-1159-001] mock 制作地区树形数据：", areaTree)

// const f_getList = () => {

//     let result = [];

//     /*
// 	name:名称,
// 	stature:身高,
// 	birthday:生日,
// 	sex:性别, //	1 男，其他女
// 	education:学历,
// 	hobby:爱好,
// 	addr:地址,
//     areaOne:'', 省
//     areaTwo:'', 市
// 	*/

//     let tData;
//     let total = 28

//     for (let i = 0; i < total; ++i) {
//         tData = {
//             id: 'sampleData-' + i,
//             name: '名称-',
//             stature: 1,
//             birthday: '2018-',
//             sex: 1,
//             education: ['本科', '硕士', '博士'],
//             hobby: 'hobby',
//             addr: 'addr, ',
//             areaOne: '',
//             areaTwo: '',
//         }
//         tData.name = tData.name + i;
//         tData.stature = '1' + (Math.floor(Math.random() * 10) % 5 + 5) + Math.floor(Math.random() * 10);

//         let month = Math.round(Math.random() * 12) % 12 + 1;
//         month = month >= 10 ? month:('0'+month);
//         let day = Math.round(Math.random() * 28) % 28 + 1;
//         day = day >= 10 ? day:('0'+day);

//         tData.birthday = tData.birthday + month + '-' + day;
//         tData.education = tData.education[Math.round(Math.random() * 10) % 3]
//         tData.addr = {
//             'zh_CN': tData.addr + i + '; zh_CN',
//             'en_US': tData.addr + i + '; en_US',
//             'zh_TW': tData.addr + i + '; zh_TW'
//         }
//         tData.sex = Math.round(Math.random() * 10) % 3

//         if (tData.sex == 2) {
//             tData.sex = '';
//         }

//         let areaTree = f_getAreaTree(areas, null);
//         let areaOne = areaTree[Math.round(Math.random() * 1000) % areaTree.length]
//         tData.areaOne = areaOne.key

//         let areaChilds = areaOne.childs;
//         if(areaChilds instanceof Array && areaChilds.length > 0){
//             let areaTwo = areaChilds[Math.round(Math.random() * 1000) % areaChilds.length]
//             tData.areaTwo = areaTwo.key
//         }

//         // tData.areaTwo = areaOne.chils[Math.round(Math.random() * 1000) % areaTwos.length].key;
//         // let areaOnes = areaObj._areas;
//         // tData.areaOne = areaOnes[Math.round(Math.random() * 1000) % areaOnes.length].key;
//         // let areaTwos = areaObj[tData.areaOne];
//         // tData.areaTwo = areaTwos[Math.round(Math.random() * 1000) % areaTwos.length].key;

//         result.push(tData)
//     }

//     return result;
// }

// // demo list
// let sampleDataList = f_getList();

// // demo Data
// const sampleData = {
//     id: 'sampleData-6',
//     name: '名称-6',
//     stature: 1,
//     birthday: '2018-11-30',
//     sex: 1,
//     education: '本科',
//     hobby: 'hobby',
//     addr: 'addr, ',
//     areaOne: '',
//     areaTwo: '',

// }

// // id 生成器
// let idGenerator = 0;


// // 取地区接口
// export async function getArea(params) {
// 	let resJsonData = { code: '0', msg: 'mock post /apiMock/area/get ok', data: areaTree };
// 	return resJsonData;
// }

// // 取单个实体接口
// export async function get(params) {

//     let sampleData = {}
//     if (params.id) {
//         for (let tData of sampleDataList) {
//             if (tData.id == params.id) {
//                 sampleData = tData;
//                 break;
//             }
//         }
//     }
//     let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/get ok', data: sampleData };
// 	return resJsonData;
// }

// // 查找接口
// export async function findList(params) {
// 	let filter = params;
//     let searchSampleDataList = [];
//     for (let bData of sampleDataList) {

//         /*** query: { name: 'name', areaOne: 'guangdong', areaTwo: '', sex: '' }, ***/
//         if (filter.name) {
//             if (bData.name.indexOf(filter.name) < 0) {
//                 continue;
//             }
//         }

//         if (filter.areaOne && filter.areaOne != '') {
//             if (bData.areaOne != filter.areaOne) {
//                 continue;
//             }
//         }

//         if (filter.areaTwo && filter.areaTwo != '') {
//             if (bData.areaTwo != filter.areaTwo) {
//                 continue;
//             }
//         }

//         if (filter.birthday instanceof Array) {
//             if (filter.birthday[0] && bData.birthday < filter.birthday[0]) {
//                 continue;
//             }
//             if (filter.birthday[1] && bData.birthday > filter.birthday[1]) {
//                 continue;
//             }
//         }

//         if (filter.sex && filter.sex != '') {
//             if (bData.sex != filter.sex) {
//                 continue;
//             }
//         }


//         searchSampleDataList.push(bData);
//     }

//     let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/findList ok', data: searchSampleDataList };
//     return resJsonData;
// }

// // 删除接口
// export async function del(params) {

//     let ids = params.ids;
//     let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/del ok', data: sampleData };
//     let sList = []
//     for (let tdata of sampleDataList) {
//         let td = tdata;
//         for (let id of ids) {
//             if (tdata.id == id) {
//                 td = null;
//                 break;
//             }
//         }
//         if (td != null) {
//             sList.push(td);
//         }
//     }
//     sampleDataList = sList;
//     return resJsonData
// }

// // 保存接口
// export async function save(params) {
// 	let dataBody = params;
//     let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/save ok' }

//     if (dataBody.id) {
//         let index = 0;
//         for (let tdata of sampleDataList) {
//             if (dataBody.id == tdata.id) {
//                 break;
//             }
//             ++index;
//         }
//         if (index == sampleDataList.length) {
//             resJsonData.code = "mock.sample.001";
//             resJsonData.msg = '修改失败：记录不存在或已被删除'
//         } else {
//             sampleDataList[index] = dataBody;
//         }
//     } else {
//         ++idGenerator;
//         dataBody.id = "mock-sample-" + idGenerator
//         sampleDataList.push(dataBody)
//     }

//     if (resJsonData.code == '0') {
//         resJsonData.data = dataBody;
//     }
//     return resJsonData;
// }
