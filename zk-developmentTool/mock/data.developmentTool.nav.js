/*
* @Author: Vinson
* @Date:   2021-03-29 16:13:59
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-25 19:27:46
* 
* 
* 
*/

/*** 添加导航栏目 */
const navItems = [
    {
        pkId:"developmentTool",
        name:{"zh-CN":"开发工具", "en-US":"DevelopmentTool"},
        navCode:"developmentTool",        
        funcModuleCode: "developmentTool", 
        funcName:"developmentToolIndex",          
        path:"developmentTool",                
        sort:100,                  
        isIndex:1,                 
        isShow:1,                  
        icon:'CodepenOutlined',                   
    }
];

module.exports = {
  navItems: navItems,
};