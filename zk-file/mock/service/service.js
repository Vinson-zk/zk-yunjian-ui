/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-26 13:11:23
* @Last Modified by: runoob
* @Last Modified time: 2024-06-27 23:31:24
*/

const mockUtils = require('../../../zk-package/mock/mockUtils.js');
const mockDatasFile = require('../mock.data.file.js');

// console.log("[^_^:20231007-2330-001] GET /apiMock/fileservice, mockDatasFile.mockFs：", mockDatasFile.mockFs);

// 取指定的节点
const f_get = (pkId, fs)=>{
	for(let tf of fs){
        if(pkId == tf.pkId){
            return tf;
        }
    }
    return null;
}
// 取指定节点的子节点
const f_getChildren = (parentId, fs)=>{
    let resFs = [];
    for(let tf of fs){
        if(parentId == tf.parentId){
            resFs.push(tf);
        }
    }
    return resFs;
}

let sleepTime = 1500;
module.exports = {
    // 查询树形文件或目录
    ['GET /apiMock/fileInfo/pageTree'](req, res) {

        // console.log("[^_^:20181220-1652-001] GET /apiMock/fileInfo/pageTree, 查询参数 query 为：", req.query);
        // console.log("[^_^:20181220-1652-002] GET /apiMock/fileInfo/pageTree, 查询参数 params 为：", req.params);
        // console.log("[^_^:20181220-1652-003] GET /apiMock/fileInfo/pageTree, 查询参数 body 为：", req.body);

        let dirTrees = [];
        for(let tf of mockDatasFile.mockFs){
            dirTrees.push(mockUtils.clone(tf));
        }

        dirTrees = mockUtils.makeTree(dirTrees, null);
        dirTrees = mockUtils.sort(dirTrees);

        // console.log("[^_^:20231007-2330-002] GET /apiMock/fileservice, mockDatasFile.mockFs：", mockDatasFile.mockFs);
        let resJsonData = { code: 'zk.0', ok: true, msg: 'file.mock GET /apiMock/fileInfo/pageTree ok!', data: {result: dirTrees} };
        // console.log(`[^_^:20190130-2158-001] file.mock GET /apiMock/fileInfo/pageTree dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock GET /apiMock/fileInfo/pageTree 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    ['GET /apiMock/fileInfo/page'](req, res) {
    	let params = req.query;
        console.log("[^_^:20181220-1652-001] file.mock GET /apiMock/fileInfo/page, 查询参数 query 为：", req.query);
        // console.log("[^_^:20181220-1652-002] file.mock GET /apiMock/fileInfo/page, 查询参数 params 为：", req.params);
        // console.log("[^_^:20181220-1652-003] file.mock GET /apiMock/fileInfo/page, 查询参数 body 为：", req.body);

        let page = {
            result:[],
            current: 1,
            total: 100,
            pageSize:20
        };

        let tSearchValue = params.searchValue;
        let tParentId = params.parentId;
        let tParentIdIsEmpty = params.parentIdIsEmpty == 'true';
        let f_filter = (item, tParentIdIsEmpty, tParentId, tSearchValue)=>{

        }


        for(let tf of mockDatasFile.mockFs){
            if(tParentId){
                if(tf.parentId != tParentId)continue;
            }else{
                if(tParentIdIsEmpty && tf.parentId)continue;
            }

            if(tSearchValue){
                // name: "TestDir",// 文件名称 
                // code: 'test_dir',   // 文件代码；公司下唯一;
                // originalName: null,  // 文件原始名称  
                let has = false;
                if(tf.name && tf.name.indexOf(tSearchValue) > -1){
                    has = true
                }else if(tf.code && tf.code.indexOf(tSearchValue) > -1){
                    has = true
                }else if(tf.originalName && tf.originalName.indexOf(tSearchValue) > -1){
                    has = true
                }
                if(!has){
                    continue;
                }
            }
            page.result.push(tf);  
        }
        // current: , total: , pageSize: ,
        let resJsonData = { code: 'zk.0', ok: true, msg: 'file.mock GET /apiMock/fileInfo/page ok!', data: page };
        // console.log(`[^_^:20190130-2158-001] file.mock GET /apiMock/fileInfo/pageTree dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock GET /apiMock/fileInfo/page 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 取 文件或目录详情
    ['GET /apiMock/fileInfo/fileInfo'](req, res) {
    	let params = req.query;
        console.log("[^_^:20181220-1652-001] GET /apiMock/fileInfo/fileInfo, 查询参数 query 为：", req.query);
        // console.log("[^_^:20181220-1652-002] GET /apiMock/fileInfo/fileInfo, 查询参数 params 为：", req.params);
        // console.log("[^_^:20181220-1652-003] GET /apiMock/fileInfo/fileInfo, 查询参数 body 为：", req.body);
        // console.log("[^_^:20231007-2330-003] GET /apiMock/fileservice, mockDatasFile.mockFs：", mockDatasFile.mockFs);

        let filter = req.query;
        let result = f_get(filter.pkId, mockDatasFile.mockFs);
        result = mockUtils.clone(result);
        if(filter.isDetail){
        	let t = result;
        	while(t != null){
        		t.parent = f_get(t.parentId, mockDatasFile.mockFs);
                t.parent = mockUtils.clone(t.parent);
        		t = t.parent;
        	}
        }

        let resJsonData = { code: 'zk.0', ok: true, msg: 'file.mock GET /apiMock/fileInfo/fileInfo ok!', data: result };
        // console.log(`[^_^:20190130-2158-001] file.mock GET /apiMock/fileInfo/fileInfo dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock GET /apiMock/fileInfo/fileInfo 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 保存
    ['POST /apiMock/fileInfo/d/dirInfo'](req, res) {

        // console.log("[^_^:20181220-1652-001] POST /apiMock/fileInfo/dirInfo, 查询参数 query 为：", req.query);
        // console.log("[^_^:20181220-1652-002] POST /apiMock/fileInfo/dirInfo, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1652-003] POST /apiMock/fileInfo/dirInfo, 查询参数 body 为：", req.body);

        let reqE = req.body;

        let f = null;
        for(let tf of mockDatasFile.mockFs){
            if(reqE.pkId == tf.pkId){
                f = tf;
                break;
            }
        }

        if(f != null){
            // 修改
            Object.assign(f, reqE);
        }else{
            // 新增
            reqE.pkId = "test.mock.pkId." + mockDatasFile.mockFs.length + "_" + Math.random();
            mockDatasFile.mockFs.push(reqE);
        }

        let resJsonData = { code: 'zk.0', ok: true, msg: 'file.mock POST /apiMock/fileInfo/fileInfo ok!', data: f };
        // console.log(`[^_^:20190130-2158-001] file.mock POST /apiMock/fileInfo/fileInfo dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock POST /apiMock/fileInfo/fileInfo 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 删除
    ['DELETE /apiMock/fileInfo/fileInfo'](req, res) {

        // console.log("[^_^:20181220-1652-001] DELETE /apiMock/fileInfo/fileInfo, 查询参数 query 为：", req.query);
        // console.log("[^_^:20181220-1652-002] DELETE /apiMock/fileInfo/fileInfo, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1652-003] DELETE /apiMock/fileInfo/fileInfo, 查询参数 body 为：", req.body);

        let dataBody = req.body
        let ids = dataBody['pkId[]'] || [];

        let tPids = ids;
        while(tPids.length > 0){
            let ttPids = [];
            for(let tPid of tPids){
                let cs = f_getChildren(tPid, mockDatasFile.mockFs);
                for(let tf of cs){
                    ids.push(tf.pkId);
                    ttPids.push(tf.pkId);
                }
            }
            tPids = ttPids;
        }

        let delFs = [];
        let targetFs = [];
        for(let tf of mockDatasFile.mockFs){
            if(ids.indexOf(tf.pkId) != -1){
                delFs.push(tf);
            }else{
                targetFs.push(tf);
            }
        }
        mockDatasFile.mockFs = targetFs;
        console.log(`[^_^:20230906-0022-001] file.mock DELETE /apiMock/fileInfo/fileInfo delete: `, delFs);

        let resJsonData = { code: 'zk.0', ok: true, msg: 'file.mock DELETE /apiMock/fileInfo/fileInfo ok!', data: delFs.length };
        // console.log(`[^_^:20190130-2158-001] file.mock DELETE /apiMock/fileInfo/fileInfo dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock DELETE /apiMock/fileInfo/fileInfo 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 上传
    ['POST /apiMock/fileInfo/f/upload'](req, res) {

        // console.log("[^_^:20181220-1652-001] POST /apiMock/fileInfo/f/upload, 查询参数 query 为：", req.query);
        // console.log("[^_^:20181220-1652-002] POST /apiMock/fileInfo/f/upload, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1652-003] POST /apiMock/fileInfo/f/upload, 查询参数 body 为：", req.body);

        let resJsonData = { code: 'zk.0', ok: true, msg: 'file.mock POST /apiMock/fileInfo/f/upload ok!', isOk: true, data: []};
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-006] file.mock POST /apiMock/fileInfo/f/upload 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);  
    },
    
}


