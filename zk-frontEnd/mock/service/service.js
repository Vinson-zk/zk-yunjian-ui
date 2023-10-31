/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-08-28 22:35:53
* @Last Modified by: vinson
* @Last Modified time: 2023-09-05 23:26:22
*/
const mockUtils = require('../../../zk-package/mock/mockUtils.js');

const mockDataFrontEnd = require('../mock.data.front.end.js');
const mockDatasSysMenus = require('../../../zk-system/mock/mock.data.system.menus.js');
const mockDatasFile = require('../../../zk-file/mock/mock.data.file.js');

let sleepTime = 2000;
module.exports = {
    // 取导航栏目
    ['GET /apiMock/res/getNavItems'](req, res) {
        //  req.body, req.params, req.query
        // console.log("[^_^:20190130-2158-001] front-end.mock GET /apiMock/res/getNavItems req.params: ", req.params);
        // let filter = req.query;
        // let parentId = filter.parentId;
        let navItems = mockDataFrontEnd.navItems;

        let resJsonData = { code: 'zk.0', msg: 'front-end.mock GET /apiMock/res/getNavItems ok!', data: navItems };
        // console.log(`[^_^:20190130-2158-001] front-end.mock GET /apiMock/res/getNavItems GET dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] front-end.mock GET /apiMock/res/getNavItems 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    },
    // 取导航栏目下的菜单
    ['GET /apiMock/res/getNavMenus/:navCode'](req, res) {
        //  req.body, req.params, req.query
        console.log("[^_^:20190130-2158-001] front-end.mock GET /apiMock/res/getNavMenus/:navCode ing req.params: ", req.params);
        // let filter = req.query;
        // let parentId = filter.parentId;
        let navCode = req.params.navCode;
        let sourceMenus = mockDataFrontEnd.menus;

        sourceMenus = sourceMenus.concat(mockDatasSysMenus.menus);
        sourceMenus = sourceMenus.concat(mockDatasFile.menus);
        let menus = [];
        for(let m of sourceMenus){
            if(m.navCode == navCode){
                menus.push(m);
            }
        }

        menus = mockUtils.makeTree(menus, null);
        menus = mockUtils.sort(menus);

        let resJsonData = { code: 'zk.0', msg: 'front-end.mock GET /apiMock/res/getNavMenus/:navCode ok!', data: menus };
        // console.log(`[^_^:20190130-2158-001] front-end.mock GET /apiMock/res/getNavMenus/:navCode dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] front-end.mock GET /apiMock/res/getNavMenus/:navCode 休息 ${sleepTime / 1000} 秒 完成!`); 
            res.json(resJsonData)
        }, sleepTime);       
    }
}




