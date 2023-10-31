/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-04 23:14:18
* @Last Modified by: vinson
* @Last Modified time: 2023-09-06 00:26:43
*/
// const uuid = require('uuid');

const mockUtils = require('../../../../zk-package/mock/mockUtils.js');
const mockDatasFile = require('../../mock.data.file.js');

let sleepTime = 2000;
module.exports = {
    // 查询树形文件或目录
    ['GET /apiMock/fileInfo/pageTree'](req, res) {

        console.log("[^_^:20181220-1652-001] GET /apiMock/fileInfo/pageTree, 查询参数 query 为：", req.query);
        console.log("[^_^:20181220-1652-002] GET /apiMock/fileInfo/pageTree, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1652-003] GET /apiMock/fileInfo/pageTree, 查询参数 body 为：", req.body);

        let dirTrees = [];
        for(let tf of mockDatasFile.mockFs){
            dirTrees.push(tf);
        }

        dirTrees = mockUtils.makeTree(dirTrees, null);
        dirTrees = mockUtils.sort(dirTrees);

        let resJsonData = { code: 'zk.0', msg: 'file.mock GET /apiMock/fileInfo/pageTree ok!', data: {result: dirTrees} };
        // console.log(`[^_^:20190130-2158-001] file.mock GET /apiMock/fileInfo/pageTree dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock GET /apiMock/fileInfo/pageTree 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 取 文件或目录详情
    ['GET /apiMock/fileInfo/fileInfo'](req, res) {

        console.log("[^_^:20181220-1652-001] GET /apiMock/fileInfo/fileInfo, 查询参数 query 为：", req.query);
        console.log("[^_^:20181220-1652-002] GET /apiMock/fileInfo/fileInfo, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1652-003] GET /apiMock/fileInfo/fileInfo, 查询参数 body 为：", req.body);

        let filter = req.query;
        let f = {};
        for(let tf of mockDatasFile.mockFs){
            if(filter.pkId == tf.pkId){
                f = tf;
                break;
            }
        }

        let resJsonData = { code: 'zk.0', msg: 'file.mock GET /apiMock/fileInfo/fileInfo ok!', data: f };
        // console.log(`[^_^:20190130-2158-001] file.mock GET /apiMock/fileInfo/fileInfo dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock GET /apiMock/fileInfo/fileInfo 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 保存
    ['POST /apiMock/fileInfo/dirInfo'](req, res) {

        console.log("[^_^:20181220-1652-001] POST /apiMock/fileInfo/dirInfo, 查询参数 query 为：", req.query);
        console.log("[^_^:20181220-1652-002] POST /apiMock/fileInfo/dirInfo, 查询参数 params 为：", req.params);
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
            reqE.pkId = "test.mock.pkid." + mockDatasFile.mockFs.size() + 100 + "_" + Math.random();
            mockDatasFile.mockFs.push(reqE);
        }

        let resJsonData = { code: 'zk.0', msg: 'file.mock POST /apiMock/fileInfo/fileInfo ok!', data: {result: dirTrees} };
        // console.log(`[^_^:20190130-2158-001] file.mock POST /apiMock/fileInfo/fileInfo dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock POST /apiMock/fileInfo/fileInfo 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 删除
    ['DELETE /apiMock/fileInfo/fileInfo'](req, res) {

        console.log("[^_^:20181220-1652-001] DELETE /apiMock/fileInfo/fileInfo, 查询参数 query 为：", req.query);
        console.log("[^_^:20181220-1652-002] DELETE /apiMock/fileInfo/fileInfo, 查询参数 params 为：", req.params);
        console.log("[^_^:20181220-1652-003] DELETE /apiMock/fileInfo/fileInfo, 查询参数 body 为：", req.body);

        let dataBody = req.body
        let ids = dataBody['pkId[]'] || [];

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

        let resJsonData = { code: 'zk.0', msg: 'file.mock DELETE /apiMock/fileInfo/fileInfo ok!', data: delFs.length };
        // console.log(`[^_^:20190130-2158-001] file.mock DELETE /apiMock/fileInfo/fileInfo dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] file.mock DELETE /apiMock/fileInfo/fileInfo 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    
}







