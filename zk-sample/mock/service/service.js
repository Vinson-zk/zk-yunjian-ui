/**
 *
 * @Author: Vinson
 * @Date: 2020-08-10 17:24:17
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-05 23:30:44
 */

const mockDataNavs = require('../mock.data.sample.navs.js');

/*************************************/
const sleepTime = 1000;
module.exports = {
    ['GET /apiMock/test'](req, res) {
        console.log("[^_^:20200810-1724-001] sample.mock GET /apiMock/test ing!");
        res.json("mock GET /apiMock/test ok!");
    },
    ['GET /apiMock/getNavItems'](req, res) {
        let filter = req.query;
        // console.log("[^_^:20190130-2158-001] sample.mock GET /apiMock/getNavItems ing", filter);
        // let parentId = filter.parentId;
        let navItems = mockDataNavs.navItems;
        let resJsonData = { code: 'zk.0', msg: 'mock GET /apiMock/getNavItems ok!', data: navItems };
        // console.log(`[^_^:20190130-2158-001] sample.mock GET /apiMock/getNavItems dispose finish`, resJsonData);
        setTimeout(function () {
            console.log(`[^_^:20190130-2158-001] sample.mock GET /apiMock/getNavItems 休息 ${sleepTime / 1000} 秒 完成!`); // navItems
            res.json(resJsonData)
        }, sleepTime);       
    }
}