/**
 *
 * @Author: Vinson
 * @Date: 2020-08-10 17:23:50
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 16:53:09
 */

const mockPackageConfig = require('../../zk-package/mock/mock.package.config.js');
const path = require('path');

const mockServics = mockPackageConfig.readMockService(path.resolve(__dirname, './service'));
// console.log('[^_^:20181106-2053-002] sample mockServics ', mockServics);

module.exports = mockServics;
