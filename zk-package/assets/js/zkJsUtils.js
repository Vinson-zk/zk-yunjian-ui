/*
 * @Author: Vinson 
 * @Date: 2020-08-06 13:59:32 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-03 11:25:21
 */

(function (global) {

    /* 暂未启用，感觉可以自定义的全局函数
        //用于生成uuid
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        }
        function guid() {
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        }
    */

    /*** 数组属性扩展 ***/
    // 查询元素，不存在返回 -1; 存在 返回其位置
    Array.prototype.indexOf = function (val) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
    // 移除指定元素
    Array.prototype.remove = function (val) {
        let index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };
    // 替换指定元素
    Array.prototype.replace = function (val, sub) {
        let index = this.indexOf(val);
        if (index > -1) {
            this[index] = sub
        }
    }
    // 统计数据某个值的个数；f_compare 为比较函数，返回0为相等，默认用 == 比较
    Array.prototype.countValue = function (val, f_compare) {
        let count = 0
        for (let i = 0; i < this.length; i++) {
            if (this[i] == val) ++count;
        }
        return count;
    }
    // 数组去重，不递归; f_compare 为比较函数，返回0为相等，默认用 == 比较
    Array.prototype.removeSameValue = function (f_compare) {
        // 第一种去重方式 
        // let tmp = [].concat(this)
        // // 清空数组 
        // this.splice(0, this.length);
        // for(let i=0; i<tmp.length; ++i){
        //	 if(this.indexOf(tmp[i]) === -1){
        //		 this.push(tmp[i])
        //	 }
        // }
        // 第二种去重方式 
        for (let i = 0; i < this.length; ++i) {
            while (this.countValue(this[i]) > 1) {
                this.remove(this[i])
            }
        }
    }
    /*** Separator - end 数组属性扩展 --------------------------------------------------------------------- ***/

	/** 获取 url 中的参数；
	 * @href: 为url;
	 * @paramName: 为参数名;
	 * @return: 返回参数值，不存在时返回 null 
	 */
    const f_queryURL = (href, paramName) => {
        let reg = new RegExp(`(^|&)${paramName}=([^&]*)(&|$)`, 'i')
        // let href = window.location.href
        href = href.substr(href.indexOf('?'))
        let r = href.substr(1).match(reg)
        if (r != null) return decodeURI(r[2])
        return null
    }

    /*** Base64 解码 ***/
    const Base64 = {
        characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        decode: function (string) {
            let characters = Base64.characters;
            let result = '';

            let i = 0;
            do {
                let b1 = Base64.characters.indexOf(string.charAt(i++));
                let b2 = Base64.characters.indexOf(string.charAt(i++));
                let b3 = Base64.characters.indexOf(string.charAt(i++));
                let b4 = Base64.characters.indexOf(string.charAt(i++));

                let a = ((b1 & 0x3F) << 2) | ((b2 >> 4) & 0x3);
                let b = ((b2 & 0xF) << 4) | ((b3 >> 2) & 0xF);
                let c = ((b3 & 0x3) << 6) | (b4 & 0x3F);

                result += String.fromCharCode(a) + (b ? String.fromCharCode(b) : '') + (c ? String.fromCharCode(c) : '');

            } while (i < string.length);
            return result;
        }
    }
	/** 64 解码
	 * @str: 待解码的字符串；
	 * @return: 解码字符串；
	 */
    const f_Base64Decode = str => {
        return Base64.decode(str)
    }

	/** 删除对象 undefined 属性
	 * @obj: 待处理对象;
	 * @return: 处理后的对象
	 */
    const f_removeObjUnAttr = obj => {
        for (let ix in obj) {
            if (!obj[ix]) {
                delete obj[ix]
            }
        }
        return obj
    }

	/** 判断一个对象是否为空
	 * 返回：null-true、undefined-true、''-true;
	 */
    const f_isEmpty = obj => {
        // if(obj instanceof Object && obj === null){
        // 	// console.log("1-f_isEmpty ", obj)
        // 	return true
        // }
        if (obj === null) {
            // console.log("1-f_isEmpty ", obj)
            return true
        }
        if (obj === '') {
            // console.log("2-f_isEmpty ", obj)
            return true
        }
        if (obj === undefined) {
            // console.log("3-f_isEmpty ", obj)
            return true
        }
        return false
    }

	/*** json 字符串转为 json 对象 
	 * @str: 需要转的字符串或字符串数组;
	 * @return: 转成后的json 对象 或对象数组；
	 */
    const f_strToObj = (str) => {
        if (str instanceof Array) {
            return str.map(item => {
                return JSON.parse(item);
            })
        } else {
            return JSON.parse(str);
        }
    }
	/** json 对象 转为 json 字符串
	 * @obj: 需要转的 json 对象; 
	 * @return: 转成后的 json 字符串
	 */
    const f_objToStr = (obj) => {
        if (obj) {
            return JSON.stringify(obj);
        } else {
            return;
        }
    }

	/** url 重定向 
	 * @location: 请求 location; location.pathname 为请求地址字符串；
	 * @replace: 跳转函数;
	 * @redirectUrl: 重定向地址;
	 * @routesRedirectSwitch: 重定向开关;
	 * @openRoutes: 开放的 url;
	 * @noUserRoutes:  不需要用户的 url;
	 * @return: void 
	 */
    const f_redirectUrl = (location, replace, redirectUrl, routesRedirectSwitch, openRoutes, noUserRoutes) => {

        // if(!globalAppConfig.routesRedirectSwitch){
        if (!routesRedirectSwitch) {
            // 路由访问重定向开关是关闭的
            return
        }

        // 重定向标志，true 需要重定向，false 不需要重定向。默认需要重定向
        let redirectFlag = true
        // 请求地址
        const localUrl = location.pathname

        /*** 判断用户状态是否需要重定向 ***/
        // 用户状态是否需要重定向标志，true-需要；false-不需要； 默认需要
        let userStatus = false

        // console.log('f_redirectUrl --- 000 ', localUrl, redirectUrl)
        if (userStatus) {
            // 用户状态需要重定向
            /*** 判断请求地址是否需要重定向 ***/
            // for(let url of globalAppConfig.openRoutes){
            for (let url of openRoutes) {
                let patt1 = new RegExp("^" + url + "*$");
                // console.log('- ', url, localUrl, patt1.test(localUrl))
                if (patt1.test(localUrl)) {
                    redirectFlag = false
                    break;
                }
            }
            //【用户状态需要重定向，请求地址非开放时，需要制作 from url】
            if (redirectFlag) {
                // 制作 from url
                redirectUrl = `${redirectUrl}from=${localUrl}`
            }
        } else {
            // 用户状态不需要重定向
            redirectFlag = false
            /*** 判断请求地址是否在无用户路由中 ***/
            // for(let url of globalAppConfig.noUserRoutes){
            for (let url of noUserRoutes) {
                let patt1 = new RegExp("^" + url + "*$");
                if (patt1.test(localUrl)) {
                    redirectFlag = true
                    break;
                }
            }
            //【用户状态不需要重定向，请求地址在无用户路由中；需要重定向到 首页 或 from url 】
            if (redirectFlag) {
                // 请求地址在需要重定向到 首页 或 from url 中
                let fromUrl = f_queryURL('from')
                if (f_isEmpty(fromUrl)) {
                    redirectUrl = '/'
                } else {
                    redirectUrl = fromUrl
                }
            }
        }
        // console.log('f_redirectUrl --- 111 ', userStatus, redirectFlag, localUrl, redirectUrl)

        if (redirectFlag) {
            // 重定向
            replace(redirectUrl)
            // window.location = `${window.location.origin}${redirectUrl}`
        }
    }

	// /** 做成树状结构
	//  * @objList: 数据对象数组，对象包含: pkId, parentId 两个属性；处理完后对象会增加一个 children 属性，无子节点是此属性为空；
	//  * @parentId: 根结点的 pkId;
	//  * @return: 做成树状结构后的数组 
	//  */
    // const f_makeTree = (objList, parentId) => {
    //     let treeObjs = []
    //     if (objList instanceof Array) {
    //         let otherObjs = [];
    //         objList.map((item, index) => {
    //             if ((f_isEmpty(parentId) && f_isEmpty(item.parentId)) || (item.parentId == parentId)) {
    //                 treeObjs.push(item);
    //                 // children = f_makeTree(objList, item.pkId)
    //                 // if (children.length > 0) {
    //                 //     item.children = children
    //                 // } else {
    //                 //     item.children = []
    //                 // }
    //             } else {
    //                 otherObjs.push(item);
    //             }
    //         })
    //         // 给父节点，查找子节点
    //         treeObjs.map(item => {
    //             item.children = f_makeTree(otherObjs, item.pkId);
    //         });
    //     }
    //     return treeObjs
    // }

    /**
     * 将树形数据列表做成做开结构
     * @param {Array.of(object)} objList 树形数据列表，树形数据对象包含一个 id 和一个 parent id;
     * @param {string} rootId 查找的根结点 id, undefined 时，自动查找根结点(即，没有上级结点的都为根结点)；
     */
    const f_makeTree = (objList, rootId, keyId="pkId", keyParentId="parentId") => {
        let outTreeObjs = [];
        let otherObjs = [];
        if (objList instanceof Array) {
            if (rootId === undefined) {
                // 找出所有根结点；
                objList.forEach(item => {
                    if (objList.findIndex(cObj => cObj[keyId] == item[keyParentId]) == -1) {
                        // 没有找到 item 的上结节点，则 item 做为根结点
                        outTreeObjs.push(item);
                    } else {
                        otherObjs.push(item);
                    }
                });
                // 递归给子节点找子结点；
                outTreeObjs.forEach(item => {
                    item.children = f_makeTree(otherObjs, item[keyId]);
                    if (item.children && item.children.length < 1) {
                        item.children = undefined;
                    }
                });
            } else {
                // 找到子结点
                outTreeObjs = objList.filter(item => { return (f_isEmpty(item[keyParentId]) && rootId === null) || (item[keyParentId] == rootId) });
                // 找到 其他结点
                // otherObjs = objList.filter(item=>{ return !((f_isEmpty(item[keyParentId]) && rootId === null) || (item[keyParentId] == rootId)) });

                // 递归给子节点找子结点；
                outTreeObjs.forEach(item => {
                    item.children = f_makeTree(objList, item[keyId]);
                    if (item.children && item.children.length < 1) {
                        item.children = undefined;
                    }
                });
            }
        }
        return outTreeObjs;
    }

	/** 
     * 从树形结构结构数组中递归查找 父节点;
	 * @pObjs: 数据对象树形结构数组; 对象包含 pkId, parentId，children 三个属性；
	 * @childId: 子节点的 pkId;
	 * @return: 查出的所有父节点的数组，数组中包含子节点本身。 
	 */
    const f_findTreeParent = (pObjs, childId) => {
        let parentObjs = [] // 结果集
        for (let item of pObjs) {
            if (item.pkId == childId) {
                parentObjs.push(item);
                return parentObjs;
            } else {
                if (item.children instanceof Array) {
                    parentObjs = f_findTreeParent(item.children, childId);
                    if (parentObjs.length > 0) {
                        parentObjs.push(item);
                        return parentObjs;
                    }
                }
            }
        }
        return parentObjs;
    }

	/** 国际化转换，将国际化标识转在本项目中对应的格式 
	 * @lang: 待转换的标识; 
	 * @return: 转换后的标识; 
	 */
    const f_getLang = (lang) => {

        lang = f_isEmpty(lang) ? "zh-CN" : lang

        switch (lang.toLowerCase()) {
            case 'zh':
            case 'zh-cn':
            case 'zh_cn':
            case 'zh-CN':
            case 'zh_CN':
            case 'zh-hans-cn':
                return 'zh-CN'
            case 'zh-TW':
            case 'zh-HK':
            case 'zh-MO':
            case 'zh-SG':
            case 'zh_TW':
            case 'zh_HK':
            case 'zh_MO':
            case 'zh_SG':
                return 'zh-TW'
            default:
                return 'en-US'
        }
    }

	/** 字符串 按参数名 {argName} 替换成对象的值 
	 * @msg: 源字符串; 
	 * @opt: 替换的参数名与参数值的键值对 object; 
	 * @return: 替换后的字符串; 
	 */
    const f_strReplace = (msg, opt) => {
        // msg 替换参数
        if (typeof (msg) === 'string' && opt instanceof Object) {
            for (let arg in opt) {
                msg = msg.replace("{" + arg + "}", opt[arg])
            }
        }
        return msg
    }

	/** 不推荐使用，将会移除此方法；取 json 字符串 或 json 对象中的某个属性 
	 * @objStr: 源 json 对象或json 字符串；
	 * @attrName: 目标属性名；
	 * @return: 目标属性对应的值；
	 */
    const f_getJsonAttr = (objStr, attrName) => {
        let value = ''
        if (f_isEmpty(value)) {
            try {
                value = objStr[attrName]
            } catch (e) {
                value = ''
            }
        }
        if (f_isEmpty(value)) {
            try {
                value = JSON.parse(objStr)[attrName]
            } catch (e) {
                value = ''
            }
        }
        return value
    }

	/** 比较函数，
	 * 返回: 小于0 - item1<item2;  等于0 - item1<==item2;  大于0 - item1>item2;
	 */
    const f_compare = (item1, item2) => {
        if (f_isEmpty(item1.sort) || f_isEmpty(item2.sort)) {
            return 0
        }
        return item1.sort * 1 - item2.sort * 1;
    }

	/** 排序函数 
	 * @items：源数据对象数组；
	 * @flag：排序标识 大于 0 升序， 反之降序；默认大于 0 升序;
	 * @compareFunc：排序函数，默认按对象的 sort 字段的数字排序，可自定义实现传入；
	 * @optChildren：是否级联操作排序子点，0-不排序子结点；1-排序子结点；默认为 1;
	 * @return: 结果数组；
	 */
    const f_sort = (items, flag = 1, compareFunc, optChildren = 1) => {

        compareFunc = compareFunc || f_compare

        // 先升序排出序顺
        let sortItems = [] // 结果数组
        if (items instanceof Array && items.length > 0) {
            let item = null
            while (items.length > 1) {
                item = items[0]
                let nextItems = []
                // 每次找出最小的对象，插入结果数组中
                for (let i = 1; i < items.length; ++i) {
                    if (compareFunc(item, items[i]) < 0) {
                        nextItems.push(items[i])
                    } else {
                        nextItems.push(item)
                        item = items[i]
                    }
                }
                items = nextItems
                // 将找出的最小的对象，放到结果数组最后
                sortItems.push(item)
            }
            // 将最后的那个对象，放到结果数组最后
            item = items[0]
            sortItems.push(item)
            if (optChildren == 1) {
                for (item of sortItems) {
                    if (item.children) {
                        item.children = f_sort(item.children, flag, compareFunc, optChildren);
                    }
                }
            }
        }

        // 如果果降序排序，反转按升序排序的数组
        return flag > 0 ? sortItems : sortItems.reverse()
    }

    const _zkJsUtils = {
        queryURL: f_queryURL,					     // 查询获取 url 中的参数，
        base64Decode: f_Base64Decode,			 // 64 编码解密
        removeObjUnAttr: f_removeObjUnAttr,	     // 删除对象一个属性
        isEmpty: f_isEmpty,						 // 对象是否是空
        strToObj: f_strToObj,					 // json 字符串或json 字符串数组 转 json对象，
        objToStr: f_objToStr,					 // json对象 转 json字符串，
        redirectUrl: f_redirectUrl,				 // url 重定向
        makeTree: f_makeTree,					 // 做成树状结构
        findTreeParent: f_findTreeParent,		 // 从树形结构结构数组中递归查找 父节点;
        getLang: f_getLang,						 // 国际化转换
        strReplace: f_strReplace,				 // 字符串 按参数名 {argName} 替换成对象的值
        getJsonAttr: f_getJsonAttr,				 // 取 JSON 字符中的某个属性
        sort: f_sort,                             // 排序
    }
    global.zkJsUtils = _zkJsUtils
})(typeof window !== "undefined" ? window : this);

