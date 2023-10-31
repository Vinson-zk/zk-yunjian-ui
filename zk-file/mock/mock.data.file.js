/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-04 09:03:19
* @Last Modified by: vinson
* @Last Modified time: 2023-09-06 08:47:33
*/

let navCode = "sys";
let funcModuleCode = "file";

let menus = [];
let tMenu;

// 菜单 -----------------------------------------------
tMenu = {
    pkId: "test.file_FileDirectory", code: "test.file_FileDirectory", name: { "zh-CN": "文件", "en-US": "File" },
    path: "fileDir", navCode: navCode, funcModuleCode: funcModuleCode, funcName: 'dirIndex',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "FolderOpenOutlined", sort: 1000,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

// file data -----------------------------------------------
let mockFs = [];
let f = {};

f = {
    pkId: 'test_dir',
    groupCode: 'yunjian',  // 集团代码
    companyId: 'pk.id.yunjian', // 公司ID 
    companyCode: 'yunjian', // 公司代码
    parentId: null,   // 父目录ID；文件不能做父节点；即 c_type = 0 的数据，不能做为父节点；
    parentCode: null, // 父目录代码；文件不能做父节点；即 c_type = 0 的数据，不能做为父节点；
    name: {"en-US": "TestDir", "zh-CN": "测试目录"},// 文件名称 
    code: 'test_dir',   // 文件代码；公司下唯一;
    originalName: null,  // 文件原始名称  
    contentType: null, // 文件类型 
    size: null, //  文件大小；单位 b
    stauts: 1,   // 状态：0-上传、1-正常、2-失效[上传后在指定时间来，没修改为正常时，会自动失效，会删除实际文件]、3-禁用[不能下载，但能查看] 
    saveUuid: 'test_saveUuid_dir_01',   // 文件保存标识，全表唯一标识，UUID，与ID 作用重复，生成一个保存以备用
    saveGroupCode: 'test_saveGroupCode_dir_g1',   // 文件分组代码，全表唯一，自动生成，UUID；以便附件分组 
    securityType: 1,// 文件权限类型：0-私有[需要有身份才获取]，1-开放[可以通过开放的接口获取]
    actionScope: 0,// 文件作用域：0-普通；1-个人；可以扩展其他作用域，作用域尽量广义一点
    sort: 100, // 排序
    type: 1, // 数据类型；0-文件；1-目录；文件不能做父节点；即 c_type = 0 的数据，不能做为父节点；
    uri: '/', // 访问文件的相对地址；目录时设置为 /
    // children: null
}
mockFs.push(f);

f = {
    pkId: 'test_testDir1',
    groupCode: 'yunjian',  
    companyId: 'pk.id.yunjian', 
    companyCode: 'yunjian', 
    parentId: 'test_dir',   
    parentCode: 'test_dir', 
    name: {"en-US": "testDir1", "zh-CN": "测试目录1"},
    code: 'test_testDir1',   
    originalName: null,  
    contentType: null, 
    size: null, 
    stauts: 1,   
    saveUuid: 'test_saveUuid_dir_01',   
    saveGroupCode: 'test_saveGroupCode_dir_g1',   
    securityType: 1,
    actionScope: 0,
    sort: 200, 
    type: 1, 
    uri: '/', 
}
mockFs.push(f);

f = {
    pkId: 'test_testDir2',
    groupCode: 'yunjian',  
    companyId: 'pk.id.yunjian', 
    companyCode: 'yunjian', 
    parentId: 'test_dir',   
    parentCode: 'test_dir', 
    name: {"en-US": "testDir2", "zh-CN": "测试目录2"},
    code: 'test_testDir2',   
    originalName: null,  
    contentType: null, 
    size: null, 
    stauts: 1,   
    saveUuid: 'test_saveUuid_dir_01',   
    saveGroupCode: 'test_saveGroupCode_dir_g1',   
    securityType: 1,
    actionScope: 0,
    sort: 300, 
    type: 1, 
    uri: '/', 
}
mockFs.push(f);

module.exports = {
	mockFs: mockFs,
    menus: menus,
};





