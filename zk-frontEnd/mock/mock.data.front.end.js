/*
* @Author: Vinson
* @Date:   2021-03-29 16:13:59
* @Last Modified by: vinson
* @Last Modified time: 2023-09-04 22:44:42
* 
* 
* 
*/

const sysNavCode = 'sys';
const sysFuncCode = 'sys';

/*** 添加导航栏目 */
const navItems = [
    {
        pkId:"sys",
        name:{"zh-CN":"系统管理", "en-US":"System"},
        code:"sys",        
        funcModuleCode: sysFuncCode, 
        funcName:"sysIndex",          
        path:"sys",                
        sort:100,                  
        isIndex:1,                 
        isShow:1,                  
        icon:'',                   
    },{
        pkId:"sample",
        name:{"zh-CN":"样例", "en-US":"Sample"},
        code:"sample",           // 栏目代码，唯一
        funcModuleCode:"sample", // 不能为空，功能模块代码，在哪个功能模块中实现就写哪个功能模块的代码，也是功能模块目录
        funcName:"sampleIndex",       // 不能为空，功能名称，导航栏的首页组件名；将根据这名称查找到对应功能组件；
        path:"sample",                // 不能为空
        sort:100,                     // 排序
        isIndex:0,                    // 是否是默认栏目，0-不是；1-是；
        isShow:1,                     // 是否显示；0-不显示；1-显示；
        icon:'',                      // 图标
    }
];

module.exports = {
    navCodeSys: sysNavCode,
    funcCodeSys: sysFuncCode,
	navItems: navItems,
    menus: [],
};