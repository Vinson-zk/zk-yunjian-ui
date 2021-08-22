/**
 *
 * @Author: Vinson
 * @Date: 2020-08-10 17:24:17
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-02-21 23:57:32
 */

const sampleNavs = require('../data.sample.navs.js');
const sampleMenus = require('../data.sample.menus.js');

/*************************************/
const sleepTime = 1000;
module.exports = {
    ['GET /apiMock/test'](req, res) {
        console.log("[^_^:20200810-1724-001] mock GET /apiMock/test ok!");
        res.json("mock GET /apiMock/test ok!");
    },
    ['GET /apiMock/getNavItems'](req, res) {
        console.log("[^_^:20190130-2158-001] framework mock GET /apiMock/getNavItems ok!");
        let resJsonData = { code: 'zk.0', msg: 'mock GET /apiMock/getNavItems ok!', data: sampleNavs.navItems };
        setTimeout(function () {
            console.log(`mock ----------- framework sample getMenus 休息 ${sleepTime / 1000} 秒 完成!`)
            res.json(resJsonData)
        }, sleepTime);
    },
    ['GET /apiMock/getMenus'](req, res) {
        let filter = req.query;
        console.log("[^_^:20190124-1413-001] framework mock GET /apiMock/getMenus ok!", filter);
        let navCode = filter.navCode;

        let resJsonData = { code: 'zk.0', msg: 'mock GET /apiMock/getMenus ok!', data: null };
        let menus = sampleMenus.menus;
        if (navCode) {
            let navMenus = [];
            for (let menu of menus) {
                if (menu.navCode == navCode) {
                    navMenus.push(menu)
                }
            }
            resJsonData.data = navMenus
        } else {
            resJsonData = { code: 'res.000001', msg: 'navCode 不能为空!' };
        }

        setTimeout(function () {
            console.log(`mock ----------- framework sample getMenus 休息 ${sleepTime / 1000} 秒 完成!`)
            res.json(resJsonData)
        }, sleepTime);
    }
}