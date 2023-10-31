/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-08-28 12:06:11
* @Last Modified by: vinson
* @Last Modified time: 2023-08-28 13:29:05
*/

const navCodeSample = "sample";
const navCodeBlend = "blend";

// 导航数据 Item
const navItems = [
    {
        pkId: "id-" + navCodeSample,
        name:{"zh-CN":"样例", "en-US":"Sample"},
        code:navCodeSample,        // 栏目代码，唯一
        funcModuleCode:navCodeSample, // 不能为空，功能模块代码，在哪个功能模块中实现就写哪个功能模块的代码，也是功能模块目录
        funcName:"sampleIndex",          // 不能为空，功能名称，导航栏的首页组件名；将根据这名称查找到对应功能组件；
        path:"sample",                // 不能为空
        sort:100,                     // 排序
        isIndex:1,                    // 是否是默认栏目，0-不是；1-是；
        isShow:1,                     // 是否显示；0-不显示；1-显示；
        icon:'',                      // 图标
    },
    {
        pkId: "id-" + navCodeBlend,
        name:{"zh-CN":"混合项目", "en-US":"BlendFunc"},
        code:navCodeBlend,
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
	navCodeSample: navCodeSample,
	navCodeBlend: navCodeBlend,
	navItems: navItems,
};
