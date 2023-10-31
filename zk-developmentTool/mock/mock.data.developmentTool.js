/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:02:44
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 16:43:46
 */

let navCode = "developmentTool";
let funcModuleCode = "developmentTool";

let devToolMenus = [];

tMenu = {
    pkId: 'test_CodeGen_Block', code: 'test_CodeGen_Block', name: { "zh-CN": "代码生成器", "en-US": "CodeGenBlock" },
    path: 'codeGenBlock', funcModuleCode: navCode,  funcName: null,
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "", sort: 300,
  /* permission:,*/ parentId: null, //children:null
}
devToolMenus.push(tMenu);

/*** 功能模块维护 ***/
tMenu = {
    pkId: "test_codeGen_module", code: "test_codeGen_module", name: { "zh-CN": "功能模块", "en-US": "FuncModule" },
    path: "codeGenFuncModule", navCode: navCode, funcModuleCode: funcModuleCode,
    funcName: 'codeGenFuncModule',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "DiffOutlined", sort: 300,
  /* permission:,*/ parentId: 'test_CodeGen_Block', //children:null
}
devToolMenus.push(tMenu);
tMenu = {
    pkId: "test_codeGen_module_detail", code: "test_codeGen_module_detail", name: { "zh-CN": "明细", "en-US": "detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: funcModuleCode,
    funcName: 'codeGenFuncModuleDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
  /* permission:,*/ parentId: "test_codeGen_module", //children:null
}
devToolMenus.push(tMenu);
tMenu = {
    pkId: "test_codeGen_module_edit", code: "test_codeGen_module_edit", name: { "zh-CN": "编辑", "en-US": "edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: funcModuleCode,
    funcName: 'codeGenFuncModuleEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
  /* permission:,*/ parentId: "test_codeGen_module", //children:null
}
devToolMenus.push(tMenu);
// 生成代码
tMenu = {
    pkId: "test_codeGen_module_gen", code: "test_codeGen_module_gen", name: { "zh-CN": "生成代码", "en-US": "GenCode" },
    path: "genCode/:funcModuleId", navCode: navCode, funcModuleCode: funcModuleCode,
    funcName: 'genCode',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_codeGen_module", //children:null
}
devToolMenus.push(tMenu);
    
/*** 菜单 - 生成测试的静态菜单  ***/
tMenu = {
    pkId: "test_CodeGenTestCodeGenTest", code: "CodeGenTestCodeGenTest", name: { "zh-CN": "生成测试", "en-US": "CodeGenTestCodeGenTest" },
    path: "codeGenTestCodeGenTest", navCode: navCode, funcModuleCode: funcModuleCode,
    funcName: 'codeGenTestCodeGenTestIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "AccountBookOutlined", sort: 300,
    /* permission:,*/ parentId: 'test_CodeGen_Block', //children:null
}
devToolMenus.push(tMenu);
tMenu = {
    pkId: "test_CodeGenTestCodeGenTest_detail", code: "CodeGenTestCodeGenTest_detail", name: { "zh-CN": "生成测试明细", "en-US": "CodeGenTestCodeGenTest-detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: funcModuleCode,
    funcName: 'codeGenTestCodeGenTestDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_CodeGenTestCodeGenTest", //children:null
}
devToolMenus.push(tMenu);
tMenu = {
    pkId: "test_CodeGenTestCodeGenTest_edit", code: "CodeGenTestCodeGenTest_edit", name: { "zh-CN": "生成测试编辑", "en-US": "CodeGenTestCodeGenTest-edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: funcModuleCode,
    funcName: 'codeGenTestCodeGenTestEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_CodeGenTestCodeGenTest", //children:null
}
devToolMenus.push(tMenu);

module.exports = {
    devToolMenus: devToolMenus,
    navItems: [{
        pkId: "id-" + navCode,
        name: {"zh-CN":"开发工具", "en-US":"DevelopmentTool"},
        code: navCode,        
        funcModuleCode: navCode, 
        funcName: "developmentToolIndex",          
        path: "developmentTool",                
        sort: 100,                  
        isIndex: 1,                 
        isShow: 1,                  
        icon: 'CodepenOutlined',    
    }]
};

