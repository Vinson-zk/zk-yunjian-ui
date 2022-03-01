/**
 * ajax 请求处理
 * @Author: Vinson
 * @Date: 2020-08-11 09:05:30
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-20 09:16:20
 */

// jquery ajax 暂未使用 
// import JqAjax from 'jquery-ajax';

import Ajax from 'robe-ajax';
// import fetch from 'dva/fetch';

import zkJsUtils from 'zkJsUtils';
import zkToolsMsg from './zkToolsMsg.js';
import zkToolsAuth from './zkToolsAuth.js';

import locales from '../locales';

// console.log("----------------- jQuery.parseJSON: ", jQuery.parseJSON)

/**
 * 根据请求制作一个请求体
 * @param {string} url 请求地址 
 * @param {object} options ajax 请求体属性；请求方式，分页等；与 ajax 请求属性相同；
 * @param {boolean} async 是否异常；true-异步；false-同步；
 * @return {object} ajax 请求体
 */
const f_makeRequstBody = (url, options, async) => {

    // if(options.async === undefined){
    //     // 默认为异步请求
    //     options.async = true;
    // }
    options.method = options.method || 'GET';
    options.method = options.method.toUpperCase();

    // if (options.method === 'POST' ||
    //     options.method === 'PUT' ||
    //     options.method === 'DELETE'){
    //     if(options.data){
    //         options.data = JSON.stringify(options.data);
    //     }
    // }

    // console.log('[^_^:20200817-1727-001] options.data: ', options.data);

    let reqBody = {
        url: url,
        method: options.method || 'GET',
        // timeout : 2000,
        data: options.data,
        processData: options.processData !== undefined ? options.processData : undefined,
        contentType: options.contentType !== undefined ? options.contentType : undefined,
        dataType: options.dataType || 'JSON',
        async: options.async != false,
        beforeSend: function (xhr) {
            // console.log("[^_^:20210417-1832-001] beforeSend.xhr: ", xhr);
            // console.log("url, options -> ", url, options)
            xhr.setRequestHeader("locale", zkToolsMsg.getLocale());
            // xhr.setRequestHeader("Accept", 'application/json');
            let tId = zkToolsAuth.getTicket();
            xhr.setRequestHeader(globalAppConfig.transferKey.ticket, tId);           
        }
    };
    // blob 类型返回数据，做处理
    if(options.dataType == 'blob' || options.dataType == 'binary'){
        // 响应内容转换器，blob 和 binary 内容不转换
        reqBody["converters"] = {
            "binary binary": true,
            "binary blob": true,
            "text blob": jQuery.parseJSON,   // 当期望的响应内容类型是 application/octet-stream，但实际是 application/text 内容时；
            "text binary": jQuery.parseJSON, // 当期望的响应内容类型是 application/octet-stream，但实际是 application/text 内容时；
        };

        reqBody["responseFields"] = {
            "binary": "responseBinary",
            "blob": "responseBlob",
        };

        reqBody["accepts"] = {
            "binary": "application/octet-stream"
        },

        reqBody["xhr"] = function() {
            // console.log("[^_^:20210417-1832-002] xhr: ");
            let xhr = new XMLHttpRequest();
            // xhr.onload = function(res){
            //     console.log("------ xhr.onload: ", res);
            //     return res;
            // }
            xhr.responseType = "text";
            xhr.onreadystatechange = function() {
                // console.log("[^_^:20210419-0947-001] xhr.onreadystatechange: ", xhr);
                // console.log("[^_^:20210419-0947-001] xhr.onreadystatechange: ", xhr.readyState, xhr.getResponseHeader('Content-type'));
                if (xhr.readyState == 2) {
                    // 仅当响应的数据类型为 application/octet-stream 时，做为 blob 数据类型处理，其他响应的数据类型做 text 处理
                    let resContentType = xhr.getResponseHeader('Content-type');
                    if(resContentType && resContentType.indexOf("application/octet-stream") > -1){
                        xhr.responseType = "blob";         
                    }
                }
            };
            return xhr;
        };
    }

    // reqBody["complete"] = function(xhr, status){
    //     console.log("[^_^:20210417-1823-001] complete: ", status, xhr);
    // }

    // reqBody["dataFilter"] = function(data, type){
    //     // data
    //     console.log("[^_^:20210417-1823-002] dataFilter:", type, this);
    //     // if(type == 'application/octet-stream'){
    //     if(type == 'blob'){
    //         // console.log("[^_^:20210417-1823-003] blob.data", data);
    //         // const objectUrl = window.URL.createObjectURL(data);
    //         // f_downloadFile(objectUrl, 20000, ()=>{});
    //         // return {};
    //         // if(data.type == "")
    //     }
    //     return data;
    // }

    // reqBody["success"] = function(result, status, xhr){
    //     console.log("[^_^:20210417-1850-001] success: ", result, status, xhr);
    // }

    return reqBody;
};

/**
 * 请求消息返回预处理；也是默认处理函数；
 * @param {object} res 请求响应的数据对象；
 * @return {object} 请求响应的数据对象
 */
const f_pretreatment = (res) => {
    if (res && !zkJsUtils.isEmpty(res.code)) {
        if (res.code === 'zk.0') {
            return res;
        } else {
            let msgOpt = { type: "error", msg: res.msg }
            if (!msgOpt.msg) {
                // 在这里无 intl 无法用 zkToolsMsg 取国际化消息；使用本地国际化消息对象，国际化消息
                // let lang = zkToolsMsg.getLocale();
                // 默认提示信息
                msgOpt.msg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error');
            }
            zkToolsMsg.alertMsg(null, null, msgOpt);
        }
        // 以后这里返回 null，请求遇到 null 时，就不用再处理了。
        return res;
    }
    return res;
};

/**
 * 请求身份认证处理；也是默认处理函数；
 * @param {object} res 请求响应的数据对象；
 * @return {object} 请求响应的数据对象
 */
const f_auth = (res) => {
    // 是否开启身份认证，默认不开启，开启进行登录跳转等操作
    if (globalAppConfig.isAuth) {
        if (res && !zkJsUtils.isEmpty(res.code)) {
            if (res.code === '119302') {
                zkToolsAuth.logout();
            }
        }
    }
    return res;
};

/**
 * 服务器响应错误处理
 * @param {object} err 请求响应的数据对象；
 * @return {object} 请求响应的数据对象
 */
const f_responseError = (xhr, status, err) => {
    /***
    // console.log("[20181022-0849-003]-------", err)
    // console.log('[20181022-0849-004]-------', err.readyState);
    // console.log('[20181022-0849-005]-------', err.status);
    // console.log('[20181022-0849-006]-------', err.responseText);
    let data = {"code":"-2","msg":"请求错误","data":err.readyState}

    err.msg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error'); // 提示信息
    // zkToolsMsg.alertMsg(null, null, {type:'error', msg:err.msg})
    resultData = data;
    ***/

    if(console)console.error('[>_<:20190507-1538-002]  - ajax.request err :', xhr, status, err);

    // 默认提示信息
    let errMsg = null
    if(err){
        if(err.status = 404){
            errMsg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error.404');
        }else if(err.status = 403){
            errMsg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error.403');
        }else if(err.status = 500){
            errMsg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error.500');
        }else{
            errMsg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error');
        }
        
        // zkToolsMsg.alertMsg(null, null, {type:'error', msg:`${errMsg}:${err.readyState}`}, null, null)
        return { "code": "-2", "msg": errMsg, "data": err.readyState };
    }else{
        errMsg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error.connect.failed');
        return { "code": "-3", "msg": errMsg };
    }
    
};

/**
 * 定制 ajax 请求方式 1；建议使用
 * 可同步异步；
 * @param {string} url 请求地址
 * @param {object} options 同 ajax 请求属性
 * @param {function} fCallback 返回前回调处理函数，可进行消息预处理与身份验证判断；
 * @return {object} ajax 对象; 
 */
const f_req = (url, options, fCallback) => {

    let requstBody = f_makeRequstBody(url, options);

    // console.log("[^_^:20190123-1452-001] requstBody:", requstBody);
    // console.log("[^_^:20190123-1452-001] Ajax.ajax:", Ajax.ajax);

    return Ajax.ajax(requstBody).done(function(data, status, xhr){
        let rData = data;
        // 如果有返回前回调处理函数，先回调，再返回
        if (fCallback) {
            fCallback.call(this, data, status, xhr);
        }
        return rData;
    }).fail((xhr, status, error) => {
        return f_responseError.call(this, xhr, status, error);
    })
};

/**
 * 定制 ajax 请求方式 2；不建议使用；建议使用 定制 ajax 请求方式 1
 * 这里，注意，异步时，返回的数据不一定是响应的数据，可能还未响应，返回了空数据；
 * @param {string} url 
 * @param {object} options 同 ajax 请求属性
 * @param {function} fCallback 返回前回调处理函数，可进行消息预处理与身份验证判断；
 * @return {object} 请求结果数据; 
 */
const f_reqData = (url, options, fCallback) => {

    let requstBody = f_makeRequstBody(url, options);
    let resultData = undefined;

    // console.log("[^_^:20190123-1452-002] requstBody:", requstBody)

    Ajax.ajax(requstBody).done(function(data){
        resultData = data;
        // if(isResponsePretreatment == true){
        //     // 如需要预处理；默认为 true
        //     resultData = f_pretreatment(data);
        // }else{
        //     resultData = data;
        // }
        // f_auth(data);

        // 如果有返回前回调处理函数，先回调，再返回
        if (fCallback) {
            fCallback.call(this, data, status, error);
        }
    }).fail((xhr, status, error) => {
        resultData = f_responseError.call(this, xhr, status, error);
    });
    return resultData;
};

/**
 * 请求会调用默认预处理；建议使用
 * @param {string} url 请求地址
 * @param {object} options 同 ajax 请求属性
 * @param {function} fFilter 过滤哪些情况不用预处理; 不存在时，默认都进行预处理; 返回: true-不进行预处理；
 * @param {function} fCallback 返回前回调处理函数；会在预算前调用；
 * @return {object} ajax 对象; 
 */
const f_reqPretreatment = (url, options, fFilter, fCallback) => {

    let requstBody = f_makeRequstBody(url, options);

    // console.log("[^_^:20190123-1452-001] requstBody:", requstBody);

    const f_disposeResult = (data)=>{
        // 如果有返回前回调处理函数，先回调，再返回
        if (fCallback) {
            fCallback.call(this, data);
        }
        if(fFilter){
            if(!fFilter.call(this, data)){
                data = f_pretreatment(data);
            }
        }else{
            data = f_pretreatment(data);
        }
        return data;
    }

    return Ajax.ajax(requstBody).done((data) => {
        return f_disposeResult(data);
    }).fail((err) => {
        let rData = f_responseError(err);
        return f_disposeResult(rData);
    })
};

// ajax 下载文件
const f_downloadByAjax = (url, options, timeout)=>{
    options.dataType = "binary"; // binary";
    // dataType: "blob", processData:true

    f_req(url, options, function(resData, status, xhr){
        // console.log("[^_^:20210419-0947-001] f_downloadByAjax: ", status, xhr, resData);
        if (resData.code) {
            let msgOpt = { type: "error", msg: resData.msg }
            if (!msgOpt.msg) {
                // 在这里无 intl 无法用 zkToolsMsg 取国际化消息；使用本地国际化消息对象，国际化消息
                // let lang = zkToolsMsg.getLocale();
                // 默认提示信息
                msgOpt.msg = zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error');
            }
            zkToolsMsg.alertMsg(null, null, msgOpt);
        }else{
            // 下载文件
            let fileName = xhr.getResponseHeader('Content-Disposition');
            fileName = fileName?fileName.split(';')[1]:undefined;
            fileName = fileName?fileName.split('filename=')[1]:undefined;
            fileName = fileName?fileName:undefined;
            // console.log("[^_^:20210419-0947-001] f_downloadByAjax.fileName: ", fileName);
            const objectUrl = window.URL.createObjectURL(resData);
            f_downloadFile(objectUrl, timeout, fileName);   
        }
    })
}


/*** 下载方式一 */
const f_downloadFileByLocation = (url, timeout)=>{
  window.location.href = u
}

/*** 下载方式二 */
const f_downloadFile = (url, timeout, fileName, callBack)=>{
  timeout = timeout || 1500;
  // let downloadDom = document.createElement('iframe');
  // downloadDom.setAttribute('src', url);
  // downloadDom.setAttribute('name', fileName);

  // 用 a 标签才能重定义文件名
  let downloadDom = document.createElement('a');
  downloadDom.setAttribute('href', url);
  downloadDom.style.display = "none";
  if(fileName){
    downloadDom.setAttribute('download', fileName);
    // downloadDom.download = fileName;
  }

  // console.log("[^_^:20210419-0947-001] f_downloadFile.fileName: ", fileName);

  let removeDownloadDom = ()=>{
    setTimeout(function() {
        downloadDom.remove();
        if(typeof(callBack) === 'function'){
            callBack.call(this);
        }
    }, timeout);
  }

  if (!!window.ActiveXObject || "ActiveXObject" in window){
    document.getElementsByTagName('body')[0].appendChild(downloadDom);
    downloadDom.click();
    removeDownloadDom();
  }else{
    document.body.append(downloadDom);
    downloadDom.click();
    removeDownloadDom();
  }
}


const defaultModule = {
    ...Ajax,            // ajax 原生方法
    req: f_req,          // 定制 ajax 请求方式 1；建议使用
    reqData: f_reqData,  // 定制 ajax 请求方式 2；不建议使用；建议使用 定制 ajax 请求方式 1
    reqPretreatment: f_reqPretreatment,  // 请求会调用默认预处理；
    pretreatment: f_pretreatment,  // 请求消息返回预处理；
    auth: f_auth,                  // 请求身份认证处理
    downloadByAjax: f_downloadByAjax,
    downloadFileByLocation: f_downloadFileByLocation
};

// export {
//     defaultModule as default,
//     f_req as req,
//     // requestFetch as default,
//     // requestFetch as request,
//     // requestResult:requestResult,
// }

export default defaultModule;



/*** dva/Fetch ***/
// const mackOptions = options=>{
//     const defaultOptions = {
//         // credentials: 'include',
//     };
//     const newOptions = { ...defaultOptions, ...options };
//     newOptions.method = newOptions.method.toUpperCase()
//     if (
//         newOptions.method === 'POST' ||
//         newOptions.method === 'PUT' ||
//         newOptions.method === 'DELETE'
//     ) {
//         newOptions.body = newOptions.data;
//         if (!(newOptions.body instanceof FormData)) {
//             newOptions.headers = {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json; charset=utf-8',
//                 ...newOptions.headers,
//             };
//             newOptions.body = JSON.stringify(newOptions.body);
//         } else {
//             // newOptions.body is FormData
//             newOptions.headers = {
//                 Accept: 'application/json',
//                 ...newOptions.headers,
//             };
//         }
//     }
//     return newOptions;
// }

// const requestFetch = (url, options)=>{
//     let newOptions = options;
//     // mackOptions(options);
//     console.log("=== newOptions", newOptions, JSON.stringify(newOptions))
//     return fetch(url, newOptions)
//     .then(response => {
//       if (response.method === 'DELETE' || response.status === 204) {
//         return response.text();
//       }
//       return response.json();
//     })
//     .catch(e => {
//       console.log("requestFetch-catch", e);
//     });
// }





