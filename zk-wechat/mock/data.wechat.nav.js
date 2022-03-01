/*
* @Author: Vinson
* @Date:   2021-03-29 16:13:59
* @Last Modified by:   Vinson
* @Last Modified time: 2021-11-03 19:34:53
* 
* 
* 
*/

/*** 添加导航栏目 */
const navItems = [
    {
        pkId:"wechat",
        name:{"zh-CN":"微信平台", "en-US":"Wechat"},
        code:"wechat",        
        funcModuleCode: "wechat", 
        funcName:"wechatIndex",          
        path:"wechat",                
        sort:100,                  
        isIndex:1,                 
        isShow:1,                  
        icon:'',                   
    },{
        pkId:"codeGen",
        name:{"zh-CN":"代码生成", "en-US":"Code Gen"},
        navCode:"codeGen",        
        funcModuleCode: "codeGen", 
        funcName:"codeGenIndex",          
        path:"codeGen",                
        sort:100,                  
        isIndex:1,                 
        isShow:1,                  
        icon:'CodepenOutlined',                   
    }
];

module.exports = {
	navItems: navItems,
};