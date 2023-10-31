/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-08-28 14:53:15
* @Last Modified by: vinson
* @Last Modified time: 2023-09-05 23:25:27
*/

const mockUtils = require('../../../zk-package/mock/mockUtils.js');
const mockDevToolDatas = require('../mock.data.developmentTool.js');

/*************************************/
const sleepTime = 1000;
module.exports = {
    //     /apiSys/res/getNavMenus/developmentTool
    ['GET /apiMock/res/getNavMenus/:navCode'](req, res){
        // console.log("[^_^:20190130-2158-001] developmentTool.mock GET /apiMock/res/getNavMenus/:navCode ing req.params: ", req.params);
        // console.log("[^_^:20190130-2158-001] developmentTool.mock GET /apiMock/res/getNavMenus/:navCode ing req.body: ", req.body);
        // let filter = req.query;
        // let parentId = filter.parentId;
        let devToolMenus = mockDevToolDatas.devToolMenus;
        devToolMenus = mockUtils.makeTree(devToolMenus, null);
        devToolMenus = mockUtils.sort(devToolMenus);

        let resJsonData = { code: 'zk.0', msg: 'developmentTool.mock GET /apiMock/res/getNavMenus/:navCode ok!', data: devToolMenus };
        // console.log(`[^_^:20190130-2158-001] developmentTool.mock GET /apiMock/res/getNavMenus/:navCode dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] developmentTool.mock GET /apiMock/res/getNavMenus/:navCode 休息 ${sleepTime / 1000} 秒 完成!`); 
            res.json(resJsonData)
        }, sleepTime);       
    }
}