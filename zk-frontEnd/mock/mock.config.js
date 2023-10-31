/*
* @Author: Vinson
* @Date:   2021-03-29 16:11:47
* @Last Modified by: vinson
* @Last Modified time: 2023-09-05 00:22:19
* 
*/

const mockPackageConfig = require('../../zk-package/mock/mock.package.config.js');
const path = require('path');

let mockServics = {};
// 相同属性，后面的会覆盖前面的
Object.assign(
	mockServics, 
	mockPackageConfig.readMockService(path.resolve(__dirname, '../../zk-file/mock/service'), [
		path.resolve(__dirname, '../../zk-file/mock/service/service.js')
	])
);
// 相同属性，后面的会覆盖前面的
Object.assign(
	mockServics, 
	mockPackageConfig.readMockService(path.resolve(__dirname, '../../zk-system/mock/service'), [
		path.resolve(__dirname, '../../zk-system/mock/service/service.js')
	])
);
Object.assign(mockServics, mockPackageConfig.readMockService(path.resolve(__dirname, './service')));

// console.log('[^_^:20181106-2053-002] zk-frontEnd mockServics ', mockServics);
module.exports = mockServics;




