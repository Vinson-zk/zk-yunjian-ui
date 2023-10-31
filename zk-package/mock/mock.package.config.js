/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-08-28 16:49:48
* @Last Modified by: vinson
* @Last Modified time: 2023-09-04 13:36:09
*/

const resolvePath = require('path');
const fs = require('fs');
/**
 * @dir
 * @filterFiles 需要过虑掉的 js 文件或文件夹，需要写绝对路径，过滤文件夹时，不要以 "/" 结尾；
 */
const readMockService = (dir, filterFiles=[]) => {
    let mock = {};
    let targetDir = resolvePath.resolve('', dir);
    // let targetDir = resolvePath.resolve(__dirname, dir);
    // console.log("[^_^:20230828-0701-001] -----targetDir: ", targetDir);

    // 遍历目录下所有文件
    fs.readdirSync(targetDir).forEach(dirOrFile => {
        // console.log("[^_^:20190124-0839-001] 'mock config' read targetDir and dirOrFile：", targetDir, dirOrFile);

        let _sourceDirOrFile = targetDir + "/" + dirOrFile;

        // 判断是文件还是目录
        let fileStats = fs.statSync(_sourceDirOrFile);
        if (fileStats.isFile()) {
            // 是文件，判断后缀是不是 js 不是 js，不处理
            if (dirOrFile.indexOf(".js") != -1) {
                // console.log("[^_^:20190124-0839-002] 'mock config' load mock service: ", dir);
                // console.log("[^_^:20190124-0839-003] 'mock config' load mock service: ", _sourceDirOrFile);
                // console.log("[^_^:20190124-0839-004] 'mock config' load mock service: ", _sourceDirOrFile);
                // console.log("[^_^:20190124-0839-005] 'mock config' load mock service: ", filterFiles.indexOf(_sourceDirOrFile));
                if(filterFiles.indexOf(_sourceDirOrFile) == -1){
                    Object.assign(mock, require(_sourceDirOrFile));
                }
            } else {
                // console.log("[^_^:20190124-0839-006] 'mock config' 非 js 文件不加载: ", _sourceDirOrFile);
            }
        } else {
            // console.log("[^_^:20190124-0839-007] 'mock config' 递归读取 mock 目录: ", _sourceDirOrFile);
            // 当是目录时，递归读取 mock 服务
            if(filterFiles.indexOf(_sourceDirOrFile) == -1){
                Object.assign(mock, readMockService(_sourceDirOrFile));
            }
        }
    });
    return mock;
}

module.exports = {
    "readMockService": readMockService,
} 





