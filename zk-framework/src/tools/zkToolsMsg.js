/*
 * @Author: Vinson 
 * @Date: 2020-08-07 10:49:19 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-07-02 09:43:07
 */
import { message, Modal } from 'antd';

import zkJsUtils from 'zkJsUtils';

/** 
 * 取当前国际化语言环境标识
 * @return {string}  返回浏览器本地存储的国际化语言代码；默认为：zh-CN
 */
const f_getLocale = () => {
    return localStorage.getItem(globalAppConfig.localKey.lang) || zkJsUtils.getLang('zh_CN');
    // let lang = localStorage.getItem(localFlag) || 'zh-CN';
    // return lang
}

/**
 * 设置当前国际化语言环境标识
 * @param {string} lang 目标国际标识
 * @return void
 */
const f_setLocale = (lang) => {
    lang = zkJsUtils.getLang(lang);
    localStorage.setItem(globalAppConfig.localKey.lang, lang);
}

/**
 * 从指定对象中取国际化信息；
 * @param {object/string} obj 对象，或对象的 json 字符串；
 * @param {string} lang 指定的语言标识；不传时，默认取当前语言标识；
 * @return {string} 对应该国际化信息 
 */
const f_getInternationInfo = (obj, lang) => {
    if (typeof (obj) == 'string') {
        obj = JSON.parse(obj);
    }

    lang = lang ? lang : f_getLocale();
    return obj[lang]
}

/**
 * 消息国际化；
 * @param {object} locales 项目国际化语言对象；
 * @param {string} id 消息ID
 * @param {object} opt 消息其他替换参数对象; 示例：opt = {key1:value}, msg = 'msg-{key1}'; 会替换掉为：msg-value
 * @return {string} 对应国际化消息
 */
const f_msgFormatByLocales = (locales = null, id, opt) => {

    let lang = f_getLocale();
    let msg = undefined;
    if (locales == null) {
        return null;
    } else {
        msg = locales[lang].messages[id]  // 消息
    }

    if (zkJsUtils.isEmpty(msg)) {
        // throw new Error("not find format msg id:" + id);
        if (console) {
            console.error("[>_<:20200815-0020-001] not find format msg id:: ", id);
        }
        return id;
    }

    // msg 替换参数
    opt = opt ? opt : {}
    return zkJsUtils.strReplace(msg, opt)
}

/**
 * 消息国际化；
 * @param {object} intl react-intl injectIntl 国际化对象;
 * @param {string} id 消息ID
 * @param {object} opt 消息其他替换参数对象 
 * @return {string} 对应国际化消息
 */
const f_msgFormatByIntl = (intl = null, id, opt) => {

    if (intl == null) {
        return null;
    }
    opt = opt ? opt : {}
    return intl.formatMessage({ id: id }, opt)
}

/**
 * 消息国际化；优先从 intl 对象国际化；
 * @param {object} intl react-intl injectIntl 国际化对象;
 * @param {object} locales 项目国际化语言对象；
 * @param {string} id 消息ID
 * @param {object} opt 消息其他替换参数对象; 示例：opt = {key1:value}, msg = 'msg-{key1}'; 会替换掉为：msg-value
 * @return {string} 国际化消息
 */
const f_msgFormat = (intl = null, locales = null, id, opt) => {
    let msg = undefined;
    // 优先通 intl 对象国际化；
    msg = f_msgFormatByIntl(intl, id, opt);

    // 没有取到从 locales 项目国际化语言对象中取；
    if (zkJsUtils.isEmpty(msg)) {
        msg = f_msgFormatByLocales(locales, id, opt);
    }

    if (zkJsUtils.isEmpty(msg)) {
        // throw new Error("not find format msg id from intl or locales; id: " + id);
        if (console) {
            console.error("[>_<:20200815-0020-001] not find format msg id from intl or locales; id: " + id);
        }
        return id;
    }
    return msg;
}

/**
 * 弹出提示消息; 目的，为了统一提示的一些操作方式
 * @param {object} intl react-intl injectIntl 国际化对象; opt.msg 有值时，不会被使用到；传入这个参数，是为了 opt.msg 未传入时可以统一重写；
 * @param {object} locales 项目国际化语言对象；opt.msg 有值时，不会被使用到；传入这个参数，是为了 opt.msg 未传入时可以统一重写；会优先使用 intl；
 * @param {object} opt 消息对象，{type:['success', 'info', 'warning', 'error', 'loading'], msg:'msg 国际化消息', duration:3[提示时长 默认 3秒], onClose:关闭回调}
 * @return void
 */
const f_alertMsg = (intl = null, locales = null, opt) => {

    opt.type = opt.type || 'info' // 提示类型
    opt.duration = opt.duration || 1.5      // 提示时长

    switch (opt.type) {
        case 'success':
            opt.msg = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.success', {}); // 如未传入消息，使用默认 global.app.msg.success 消息
            message.success(opt.msg, opt.duration, (opt.onClose ? opt.onClose : null)); // 成功提示
            return null;
            break;
        case 'warning':
            opt.msg = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.warning', {}); // 如未传入消息，使用默认 global.app.msg.warning 消息
            message.warning(opt.msg, opt.duration, (opt.onClose ? opt.onClose : null)); // 警告提示
            return null;
            break;
        case 'error':
            opt.msg = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.error', {}); // 如未传入消息，使用默认 global.app.msg.info 消息
            message.error(opt.msg, opt.duration, (opt.onClose ? opt.onClose : null));    // 错误提示
            return null;
            break;
        case 'loading':
            opt.msg = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.loading', {}); // 如未传入消息，使用默认 global.app.msg.loading 消息
            message.loading(opt.msg, opt.duration, (opt.onClose ? opt.onClose : null));    // 加载提示
            return null;
            break;
        default:
            opt.msg = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.info', {}); // 如未传入消息，使用默认 global.app.msg.info 消息
            message.info(opt.msg, opt.duration, (opt.onClose ? opt.onClose : null)); // 默认为 info提示
            return null;
            break;
    }
}

/**
 * 弹出提示框提示消息; 目的，为了统一提示的一些操作方式，及标题、按钮内容
 * @param intl react-intl injectIntl 国际化对象; 与 locales 两者传入一个即可；
 * @param locales 项目国际化语言对象；会优先使用 intl；
 * @param opt @opt: 消息对象，{type:['success', 'info', 'warning', 'error', 'confirm'], msg:'msg 国际化消息', ...其他与原生 Modal.method() 参数一样}
 * @return void
 */
const f_alertModalMsg = (intl = null, locales = null, opt) => {

    opt.type = opt.type || 'info'     // 提示类型

    // 确认按钮文字
    opt.okText = f_msgFormat(intl, locales, 'global.popconfirm.name.okText');
    // 取消按钮文字
    opt.cancelText = f_msgFormat(intl, locales, 'global.popconfirm.name.cancelText');

    switch (opt.type) {
        case 'success': // 成功提示
            opt.content = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.success', {}); // 如未传入消息，使用默认 global.app.msg.success 消息
            opt.title = f_msgFormat(intl, locales, 'global.popconfirm.title.success') // 提示标题
            return Modal.success(opt)
            break
        case 'warning':  // 警告提示
            opt.content = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.warning', {}); // 如未传入消息，使用默认 global.app.msg.warning 消息
            opt.title = f_msgFormat(intl, locales, 'global.popconfirm.title.warning') // 提示标题
            return Modal.warning(opt)
            break
        case 'error': // 错误提示
            opt.content = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.error', {}); // 如未传入消息，使用默认 global.app.msg.error 消息
            opt.title = f_msgFormat(intl, locales, 'global.popconfirm.title.error') // 提示标题
            return Modal.error(opt)
            break
        case 'confirm':  // 确认提示 警告
            opt.content = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.warning', {}); // 如未传入消息，使用默认 global.app.msg.warning 消息
            opt.title = f_msgFormat(intl, locales, 'global.popconfirm.title.confirm') // 提示标题
            return Modal.confirm(opt)
            break
        default:
            opt.content = opt.msg || f_msgFormat(intl, locales, 'global.app.msg.info', {}); // 如未传入消息，使用默认 global.app.msg.info 消息
            opt.title = f_msgFormat(intl, locales, 'global.popconfirm.title.info') // 提示标题
            return Modal.info(opt) // 默认为 info提示
            break
    }
}

/**
 * 按类型提示消息; 目标是为了统一提示内容，如果是 modalMsg 会返回 modal 对象
 * @param {object} intl react-intl injectIntl 国际化对象; 与 locales 两者传入一个即可；
 * @param {object} locales 项目国际化语言对象；会优先使用 intl；
 * @param {string} type ['selectData', 'selectDataAlert', 'editExit', 'editReset', 'delConfirm']
 * @param {string} onOk 确认回调
 * @param {string} onCancel 取消回调
 * @return void
 */
const f_alertMsgByType = (intl = null, locales = null, type, onOk, onCancel) => {

    let opt = { type: "warning", msg: "", onOk: onOk, onCancel: onCancel };

    switch (type) {
        case 'selectData':   // 请选择数据
            opt.msg = f_msgFormat(intl, locales, 'global.message.select.data');
            return f_alertMsg(intl, locales, opt);
            break;
        case 'selectDataAlert':   // 请选择数据
            opt.msg = f_msgFormat(intl, locales, 'global.message.select.data');
            return f_alertModalMsg(intl, locales, opt);
            break;
        case 'editExit':   // 退出编辑
            opt.type = 'confirm'
            opt.msg = f_msgFormat(intl, locales, 'global.message.edit.exit');
            return f_alertModalMsg(intl, locales, opt);
            break;
        case 'editReset':   // 编辑内容重置
            opt.type = 'confirm'
            opt.msg = f_msgFormat(intl, locales, 'global.message.edit.reset');
            return f_alertModalMsg(intl, locales, opt);
            break;
        case 'delConfirm':   // 编辑内容重置
            opt.type = 'confirm'
            opt.msg = f_msgFormat(intl, locales, 'global.popconfirm.content.delete');
            return f_alertModalMsg(intl, locales, opt);
            break;
        default:
            if(console){
                console.error("[>_<:20200915-1606-001] alertMsgByType 不支持的类型：", type);
            }
    }
}

/**
 * 合并国际化信息; 主要合并国际化对象中的 messages 属性信息；其他属性存时不处理；不存在时，会赋值记录下来；
 * localDatas 中后出现的 messages 不会覆盖前面的 messages；
 * @param {Array.of(object)} localDatas 需要合并的国际化信息数组；
 * @return {object} 返回合并后国际化信息;
 */
const f_mergeLocalMsgs = (localDatas) => {

    if (localDatas instanceof Array) {
        let locale = {};
        localDatas.forEach(item => {
            for (let index in item) {
                if (!locale[index]) {
                    locale[index] = item[index];
                } else {
                    for (let attrName in item[index]) {
                        if (!locale[index][attrName]) {
                            locale[index][attrName] = item[index][attrName];
                        } else {
                            if (attrName == "messages") {
                                locale[index][attrName] = { ...item[index][attrName], ...locale[index][attrName] }
                            }
                        }
                    }
                }
            }
        });
        return locale;
    } else {
        return locale;
    }
}

/**
 * 制作 antd form 对象的字段错误信息；根据响应的字段验证错误信息的 map 制作；
 * @param {object} mapData 返回响应的 字段验证错误信息的 map 对象；
 * @return {object} form 对象的字段错误信息 对象
 */
const f_makeFormFieldsErrorsByMapaData = (mapData) => {
    if (mapData) {
        let errs = [];
        for (let fName in mapData) {
            errs.push({
                'name': fName,
                'errors': [mapData[fName]]
            })
        }
        return errs;
    }
    return [];
}

/**
 * 根据功能模块动态取国际化语言信息
 * @dependentModules 引入的功能模块名字符数组
 * @return 返回各项目功能模块定义的 国际化语言
 */
// const f_dyncImportLocalMsgs = (dependentModules) => {
//     let localMsgArray = [];
//     if (dependentModules instanceof Array) {
//         dependentModules.forEach(item => {
//             let msgFile = item + "/locales";
//             let locales = require(msgFile);
//             if (locales && locales) {
//                 localMsgArray.push(locales);
//             }
//         })
//     }
//     return localMsgArray;
// }

export default {
    getLocale: f_getLocale,                // 取当前国际化语言环境标识
    setLocale: f_setLocale,                // 设置当前国际化语言环境标识
    getInternationInfo: f_getInternationInfo,  // 从对象中取国际化信息
    msgFormatByLocales: f_msgFormatByLocales,  // 消息国际化, 不建议使用，建议使用 msgFormatIntl
    msgFormatByIntl: f_msgFormatByIntl,    // 消息国际化
    msgFormat: f_msgFormat,                // 消息国际化
    alertMsg: f_alertMsg,                  // 弹出提示消息
    alertModalMsg: f_alertModalMsg,        // 模态提示消息
    alertMsgByType: f_alertMsgByType,      // 按类型提示消息;
    mergeLocalMsgs: f_mergeLocalMsgs,      // 合并国际化信息
    makeFormFieldsErrorsByMapaData: f_makeFormFieldsErrorsByMapaData, // 制作 antd form 对象的字段错误信息；根据响应的字段验证错误信息的 map 制作；
};


