/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-08-28 18:07:49
* @Last Modified by: vinson
* @Last Modified time: 2023-09-05 23:31:08
*/


const mockUtils = require('../../../zk-package/mock/mockUtils.js');
const mockDatasSysMenus = require('../mock.data.system.menus.js');

/*************************************/
const sleepTime = 1000;
module.exports = {
    ['GET /apiMock/res/getNavMenus/:navCode'](req, res) {
        //  req.body, req.params, req.query
        // console.log("[^_^:20190130-2158-001] sys.mock GET /apiMock/res/getNavMenus/:navCode ing req.params: ", req.params);
        // let filter = req.query;
        // let parentId = filter.parentId;
        let menus = mockDatasSysMenus.menus;
        menus = mockUtils.makeTree(menus, null);
        menus = mockUtils.sort(menus);

        let resJsonData = { code: 'zk.0', msg: 'sys.mock GET /apiMock/res/getNavMenus/:navCode ok!', data: menus };
        // console.log(`[^_^:20190130-2158-001] sys.mock GET /apiMock/res/getNavMenus/:navCode dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] sys.mock GET /apiMock/res/getNavMenus/:navCode 休息 ${sleepTime / 1000} 秒 完成!`); 
            res.json(resJsonData)
        }, sleepTime);       
    }
}
