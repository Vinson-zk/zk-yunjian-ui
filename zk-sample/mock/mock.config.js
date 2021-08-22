/**
 *
 * @Author: Vinson
 * @Date: 2020-08-10 17:23:50
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-28 08:58:24
 */

const webpackPublicConfig = require('../../zk-package/conf/webpack.public.config.js');
const path = webpackPublicConfig.path;
const mockPublicConfig = webpackPublicConfig.mockPublicConfig;


const mockServics = mockPublicConfig.readMockService(path.resolve(__dirname, './service'));
// console.log('[^_^:20181106-2053-002] mock ', mock)

module.exports = mockServics

