/*
 * @Author: Vinson 
 * @Date: 2020-08-06 13:41:03 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 16:29:21
 */
(function (global) {

	/**
	* 0 相等；1 array1>array2；-1 array1<array2
	*/
    let _func_compare = function (array1, array2, params) {

        if (array1 instanceof Array && array2 instanceof Array) {
            if (array1.length > array2.length) {
                return 1;
            } else if (array1.length < array2.length) {
                return -1
            } else {
                for (let p of params) {
                    let index = p.index * 1;
                    let order = p.order || 1;
                    if (array1.length > index) {
                        if (array1[index] > array2[index]) {
                            return 1 * order;
                        } else if (array1[index] < array2[index]) {
                            return -1 * order;
                        }
                    }
                }
                return 0;
            }
        } else {
            throw new Error("比较参数不是数组！");
        }

    }

	/**
	* @array： 需要排序的源 二维数组；
	* @params：指定排序的对象；{index:数组索引，必传, order:选择(1,-1), 1：升序；-1：降序; 默认升序 1}
	* @flag：
	*/
    let _func_sort = function (array, params) {

        if (params instanceof Array) {
            // 先升序排出序顺
            let sortItems = [] // 结果数组
            if (array instanceof Array && array.length > 1) {
                let item = null
                while (array.length > 1) {
                    item = array[0]
                    let nextItems = []
                    // 每次找出最小的对象，插入结果数组中
                    for (let i = 1; i < array.length; ++i) {
                        if (_func_compare(item, array[i], params) < 0) {
                            nextItems.push(array[i])
                        } else {
                            nextItems.push(item)
                            item = array[i]
                        }
                    }
                    array = nextItems
                    // 将找出的最小的对象，放到结果数组最后
                    sortItems.push(item)
                }
                // 将最后的那个对象，放到结果数组最后
                item = array[0]
                sortItems.push(item)
            }
            return sortItems;
        } else {
            throw new Error("指定比较参数不是数组！");
        }
    }

    global.zkJsSortTwoArray = _func_sort
    return _func_sort;
})(typeof window !== "undefined" ? window : this);




