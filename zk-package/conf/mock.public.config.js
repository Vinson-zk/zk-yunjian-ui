/**
 * mock 配置，能用 mock 文件加载方法定义；
 * 
 * @Author: Vinson
 * @Date: 2020-08-10 17:19:51
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-10 17:22:03
 */
const resolvePath = require('path');
const fs = require('fs');

const readMockService = (dir) => {
    let mock = {};
    let targetDir = resolvePath.resolve('', dir);

    // 遍历目录下所有文件
    fs.readdirSync(targetDir).forEach(dirOrFile => {
        // console.log("[^_^:20190124-0839-001] 'mock config' read targetDir and dirOrFile：", targetDir, dirOrFile);

        let _sourceDirOrFile = targetDir + "/" + dirOrFile;

        // 判断是文件还是目录
        let fileStats = fs.statSync(_sourceDirOrFile);
        if (fileStats.isFile()) {
            // 是文件，判断后缀是不是 js 不是 js，不处理
            if (dirOrFile.indexOf(".js") != -1) {
                // console.log("[^_^:20190124-0839-002] 'mock config' load mock service: ", _sourceDirOrFile);
                Object.assign(mock, require(_sourceDirOrFile))
            } else {
                // console.log("[^_^:20190124-0839-003] 'mock config' 非 js 文件不加载: ", _sourceDirOrFile);
            }
        } else {
            // console.log("[^_^:20190124-0839-004] 'mock config' 递归读取 mock 目录: ", _sourceDirOrFile);
            // 当是目录时，递归读取 mock 服务
            Object.assign(mock, readMockService(_sourceDirOrFile))
        }
    });
    return mock;
}

module.exports = {
    "readMockService": readMockService,
} 