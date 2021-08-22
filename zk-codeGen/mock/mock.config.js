/*
* @Author: Vinson
* @Date:   2021-03-09 08:12:34
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-09 08:12:41
* 
* 
* 
*/

const webpackPublicConfig = require('../../zk-package/conf/webpack.public.config.js');
const path = webpackPublicConfig.path;
const mockPublicConfig = webpackPublicConfig.mockPublicConfig;


const mockServics = mockPublicConfig.readMockService(path.resolve(__dirname, './service'));
// console.log('[^_^:20181106-2053-002] mock ', mock)

module.exports = mockServics;


