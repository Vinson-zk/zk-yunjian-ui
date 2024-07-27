/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-08-28 22:35:53
* @Last Modified by: runoob
* @Last Modified time: 2024-06-27 23:31:23
*/
const mockUtils = require('../../../zk-package/mock/mockUtils.js');

const mockDataFrontEnd = require('../mock.data.front.end.js');
const mockDatasSysMenus = require('../../../zk-system/mock/mock.data.system.menus.js');
const mockDatasFile = require('../../../zk-file/mock/mock.data.file.js');
const mockDatasDevelopmentTool = require('../../../zk-developmentTool/mock/mock.data.developmentTool.js');
const mockDatasWechat = require('../../../zk-wechat/mock/mock.data.wechat.js');

let sleepTime = 2000;
module.exports = {
    // 取导航栏目
    ['GET /apiMock/res/getNavItems'](req, res) {
        // 取参数
        console.log("[^_^:20230926-2315-001] GET /apiMock/res/getNavItems, 查询参数 query 为：", req.query);
        // 取请求路径参数
        console.log("[^_^:20230926-2315-002] GET /apiMock/res/getNavItems, 查询参数 params 为：", req.params);
        // post 参数
        console.log("[^_^:20230926-2315-003] GET /apiMock/res/getNavItems, 查询参数 body 为：", req.body);

        //  req.body, req.params, req.query
        // console.log("[^_^:20190130-2158-001] front-end.mock GET /apiMock/res/getNavItems req.params: ", req.params);
        // let filter = req.query;
        // let parentId = filter.parentId;
        let navItems = mockDataFrontEnd.navItems;

        let resJsonData = { code: 'zk.0', ok: true, msg: 'front-end.mock GET /apiMock/res/getNavItems ok!', data: navItems };
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
        sourceMenus = sourceMenus.concat(mockDatasDevelopmentTool.devToolMenus);
        sourceMenus = sourceMenus.concat(mockDatasWechat.menus);

        let menus = [];
        for(let m of sourceMenus){
            // console.log(`[^_^:20230924-2356-001] front-end.mock GET /apiMock/res/getNavMenus/:navCode ==: `, m.navCode, navCode);
            if(m.navCode == navCode){
                menus.push(m);
            }
        }

        // console.log(`[^_^:20230924-2355-001] front-end.mock GET /apiMock/res/getNavMenus/:navCode menus: `, menus);
        // console.log(`[^_^:20230924-2355-001] front-end.mock GET /apiMock/res/getNavMenus/:navCode sourceMenus: `, sourceMenus);

        menus = mockUtils.makeTree(menus, null);
        menus = mockUtils.sort(menus);

        let resJsonData = { code: 'zk.0', ok: true, msg: 'front-end.mock GET /apiMock/res/getNavMenus/:navCode ok!', data: menus };
        // console.log(`[^_^:20190130-2158-001] front-end.mock GET /apiMock/res/getNavMenus/:navCode dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-005] front-end.mock GET /apiMock/res/getNavMenus/:navCode 休息 ${sleepTime / 1000} 秒 完成!`); 
            res.json(resJsonData)
        }, sleepTime);       
    }
}




