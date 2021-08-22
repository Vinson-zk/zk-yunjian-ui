/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 00:12:11
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 00:12:11
 */

const getTestData = async () => {
	setTimeout(function () {
		console.log('----------- getTestData 休息 2 秒 完成');
		return "getTestData 休息 2 秒 然后返回了测试数据";
	}, 2000);
}

export {
	getTestData
}