/*
* @Author: Vinson
* @Date:   2021-03-09 08:12:34
* @Last Modified by: vinson
* @Last Modified time: 2023-08-28 16:55:45
* 
* 
* 
*/

const mockPackageConfig = require('../../zk-package/mock/mock.package.config.js');
const path = require('path');

const mockServics = mockPackageConfig.readMockService(path.resolve(__dirname, './service'));
// console.log('[^_^:20181106-2053-002] sample mockServics ', mockServics);

module.exports = mockServics;

