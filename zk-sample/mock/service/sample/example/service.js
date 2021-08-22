/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 13:57:42
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-08 14:35:54
 */


// 地区
const areas = [
    { id: 1, name: { "zh-CN": '广东', "en-US": 'GuanGdong' }, key: 'guangdong', parentKey: null },
    { id: 2, name: { "zh-CN": '湖南', "en-US": 'HuNan' }, key: 'hunan', parentKey: null },
    { id: 3, name: { "zh-CN": '珠海', "en-US": 'ZhuHai' }, key: 'zhuhai', parentKey: 'guangdong' },
    { id: 4, name: { "zh-CN": '广州', "en-US": 'GuangZhou' }, key: 'guangzhou', parentKey: 'guangdong' },
    { id: 5, name: { "zh-CN": '长沙', "en-US": 'ChuangSha' }, key: 'chuangsha', parentKey: 'hunan' },
    { id: 5, name: { "zh-CN": '益阳', "en-US": 'YiYang' }, key: 'yiyang', parentKey: 'hunan' }
]

// const f_getAreaObj = () => {
//     let areaObj = {
//         getAreaByKey: (key) => {
//             for (let item of areas) {
//                 return item;
//             }
//         },
//         _areas: []
//     }
//     areas.map(item => {
//         if (item.parentKey == null) {
//             areaObj._areas.push(item);
//         } else {
//             if (!areaObj[item.parentKey]) {
//                 areaObj[item.parentKey] = [item];
//             } else {
//                 areaObj[item.parentKey].push(item);
//             }
//         }
//     });
//     return areaObj;
// }

const f_getAreaTree = (areas, parentKey) => {
    let areaChilds = [];
    areas.map(item => {
        if (item.parentKey == parentKey) {
            item.childs = f_getAreaTree(areas, item.key)
            areaChilds.push(item)
        }
    })
    // console.log("----- ", areaPrents, areas)
    return areaChilds
}

const areaTree = f_getAreaTree(areas, null);
// console.log("[^_^:20181223-1159-001] mock 制作地区树形数据：", areaTree)

const f_getList = () => {

    let result = [];

    /*
	name:名称,
	stature:身高,
	birthday:生日,
	sex:性别, //	1 男，其他女
	education:学历,
	hobby:爱好,
	addr:地址,
    areaOne:'', 省
    areaTwo:'', 市
	*/

    let tData;
    let total = 28

    for (let i = 0; i < total; ++i) {
        tData = {
            id: 'sampleData-' + i,
            name: '名称-',
            stature: 1,
            birthday: '2018-',
            sex: 1,
            education: ['本科', '硕士', '博士'],
            hobby: 'hobby',
            addr: 'addr, ',
            areaOne: '',
            areaTwo: '',
        }
        tData.name = tData.name + i;
        tData.stature = '1' + (Math.floor(Math.random() * 10) % 5 + 5) + Math.floor(Math.random() * 10);

        let month = Math.round(Math.random() * 12) % 12 + 1;
        month = month >= 10 ? month : ('0' + month);
        let day = Math.round(Math.random() * 28) % 28 + 1;
        day = day >= 10 ? day : ('0' + day);

        tData.birthday = tData.birthday + month + '-' + day;
        tData.education = tData.education[Math.round(Math.random() * 10) % 3]
        tData.addr = {
            'zh-CN': tData.addr + i + '; zh-CN',
            'en-US': tData.addr + i + '; en-US',
            'zh-TW': tData.addr + i + '; zh-TW'
        }
        tData.sex = Math.round(Math.random() * 10) % 3

        if (tData.sex == 2) {
            tData.sex = '';
        }

        let areaTree = f_getAreaTree(areas, null);
        let areaOne = areaTree[Math.round(Math.random() * 1000) % areaTree.length]
        tData.areaOne = areaOne.key

        let areaChilds = areaOne.childs;
        if (areaChilds instanceof Array && areaChilds.length > 0) {
            let areaTwo = areaChilds[Math.round(Math.random() * 1000) % areaChilds.length]
            tData.areaTwo = areaTwo.key
        }

        // tData.areaTwo = areaOne.chils[Math.round(Math.random() * 1000) % areaTwos.length].key;
        // let areaOnes = areaObj._areas;
        // tData.areaOne = areaOnes[Math.round(Math.random() * 1000) % areaOnes.length].key;
        // let areaTwos = areaObj[tData.areaOne];
        // tData.areaTwo = areaTwos[Math.round(Math.random() * 1000) % areaTwos.length].key;

        result.push(tData)
    }

    return result;
}

// demo list
let sampleDataList = f_getList();

// id 生成器
let idGenerator = 0;

const sleepTime = 1000;

// const printObj = (placeholder, obj)=>{
// 	if(typeof(obj) === 'object'){
// 		console.log("[");
// 		for(let index in obj){
// 			console.log(index + ": ");
// 			printObj(placeholder, obj[index])
// 		}
// 		console.log("]");
// 	}else{
// 		console.log(obj);
// 	}
// }

module.exports = {
    ['GET /apiMock/sample/example/area/get'](req, res) {

        console.log("[^_^:20181220-1651-001] mock GET /apiMock/sample/example/area/get ok");

        let resJsonData = { code: '0', msg: 'mock GET /apiMock/sample/example/area/get ok', data: areaTree };

        setTimeout(function () {
            console.log(`mock ----------- sample findList 休息 ${sleepTime / 1000} 秒 完成`)
            res.json(resJsonData)
        }, sleepTime);
    },
    ['GET /apiMock/sample/example/findList'](req, res) {

        // console.log(req);

        console.log("[^_^:20181220-1652-001] /apiMock/sample/example/findList, 查询参数 query 为：", req.query);
        console.log("[^_^:20181220-1652-002] /apiMock/sample/example/findList, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1652-003] /apiMock/sample/example/findList, 查询参数 body 为：", req.body);

        let filter = req.query;

        let searchSampleDataList = [];

        for (bData of sampleDataList) {

            /*** query: { name: 'name', areaOne: 'guangdong', areaTwo: '', sex: '' }, ***/
            if (filter.name) {
                if (bData.name.indexOf(filter.name) < 0) {
                    continue;
                }
            }

            if (filter.areaOne && filter.areaOne != '') {
                if (bData.areaOne != filter.areaOne) {
                    continue;
                }
            }

            if (filter.areaTwo && filter.areaTwo != '') {
                if (bData.areaTwo != filter.areaTwo) {
                    continue;
                }
            }

            if (filter.birthday instanceof Array) {
                if (filter.birthday[0] && bData.birthday < filter.birthday[0]) {
                    continue;
                }
                if (filter.birthday[1] && bData.birthday > filter.birthday[1]) {
                    continue;
                }
            }

            if (filter.sex && filter.sex != '') {
                if (bData.sex != filter.sex) {
                    continue;
                }
            }

            searchSampleDataList.push(bData);
        }

        let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/example/findList ok', data: searchSampleDataList };
        setTimeout(function () {
            console.log(`mock ----------- sample findList 休息 ${sleepTime / 1000} 秒 完成`)
            res.json(resJsonData)
        }, sleepTime);
    },
    ['GET /apiMock/sample/example/get'](req, res) {

        let params = req.query;

        let sampleData = {}
        if (params.id) {
            for (tData of sampleDataList) {
                if (tData.id == params.id) {
                    sampleData = tData;
                    break;
                }
            }
        }

        let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/example/get ok', data: sampleData };
        setTimeout(function () {
            console.log(`mock ----------- sample get 保存休息 ${sleepTime / 1000} 秒 完成`);
            res.json(resJsonData)
        }, sleepTime);

    },
    ['DELETE /apiMock/sample/example/del'](req, res) {

        // console.log("[^_^:20181220-1653-000] /apiMock/sample/example/del, 查询参数 req 为：", req);
        console.log("[^_^:20181220-1653-001] /apiMock/sample/example/del, 查询参数 query 为：", req.query);
        console.log("[^_^:20181220-1653-002] /apiMock/sample/example/del, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1653-003] /apiMock/sample/example/del, 查询参数 body 为：", req.body);

        let dataBody = req.body
        let ids = dataBody.ids;
        // JSON.stringify(req.body); 
        // JSON.parse(idsStr);

        let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/example/del ok', ids: ids };
        setTimeout(function () {
            let sList = []
            for (tdata of sampleDataList) {
                let td = tdata;
                for (id of ids) {
                    if (tdata.id == id) {
                        td = null;
                        break;
                    }
                }
                if (td != null) {
                    sList.push(td);
                }
            }
            sampleDataList = sList;
            console.log(`mock ----------- sample del 删除休息 ${sleepTime / 1000} 秒 完成`);
            res.json(resJsonData)
        }, sleepTime);
    },
    ['POST /apiMock/sample/example/save'](req, res) {

        console.log("[^_^:20181220-1654-001] /apiMock/sample/example/save, 查询参数 body 为：", req.body);

        let dataBody = req.body;
        let resJsonData = { code: '0', msg: 'mock post /apiMock/sample/example/save ok' }

        if (dataBody.id) {
            let index = 0;
            for (tdata of sampleDataList) {
                if (dataBody.id == tdata.id) {
                    break;
                }
                ++index;
            }
            if (index == sampleDataList.length) {
                resJsonData.code = "mock.sample.001";
                resJsonData.msg = '修改失败：记录不存在或已被删除'
            } else {
                sampleDataList[index] = dataBody;
            }
        } else {
            ++idGenerator;
            dataBody.id = "mock-sample-" + idGenerator
            sampleDataList.push(dataBody)
        }

        if (resJsonData.code == '0') {
            resJsonData.data = dataBody;
        }

        setTimeout(function () {
            console.log(`mock ----------- sample example save 保存休息 ${sleepTime / 1000} 秒 完成`);
            res.json(resJsonData)
        }, sleepTime);
    }
}