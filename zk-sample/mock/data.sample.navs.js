/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 23:03:35
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-20 09:56:15
 */

const navCodeSample = "sample";
const navCodeBlend = "blend";

// 导航数据 Item
const navItems = [
    {
        pkId:"sample",
        name:{"zh-CN":"样例", "en-US":"Sample"},
        navCode:navCodeSample,        // 栏目代码，唯一
        funcModuleCode:navCodeSample, // 不能为空，功能模块代码，在哪个功能模块中实现就写哪个功能模块的代码，也是功能模块目录
        funcName:"navIndex",          // 不能为空，功能名称，导航栏的首页组件名；将根据这名称查找到对应功能组件；
        path:"sample",                // 不能为空
        sort:100,                     // 排序
        isIndex:1,                    // 是否是默认栏目，0-不是；1-是；
        isShow:1,                     // 是否显示；0-不显示；1-显示；
        icon:'',                      // 图标
    },
    {
        pkId:"blend",
        name:{"zh-CN":"混合项目", "en-US":"BlendFunc"},
        navCode:navCodeBlend,
        funcModuleCode:navCodeBlend, 
        funcName:"navIndex",
        path:"blend",
        models:"",
        sort:300,
        isIndex:0,
        isShow:1, 
        icon:'',   
    }
];

module.exports = {
	navItems:navItems,
};