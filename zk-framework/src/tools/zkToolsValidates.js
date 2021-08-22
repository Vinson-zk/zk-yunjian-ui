/**
 *
 * @Author: Vinson
 * @Date: 2020-08-25 15:36:02
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-08-21 15:27:16
 */

import AsyncValidator from 'async-validator';

import zkToolsMsg from "./zkToolsMsg.js";

/**
 * 不能为空
 * @param {object} intl 国际化语言对象
 * @param {string} type 选传 校验数据类型；默认 string
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.not.null 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_notNull = (intl, type='string', transform, msg)=>{
    return {
        required: true, 
        type:type,
        transform: transform?transform:undefined,
        message: msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.not.null"),
    }
}
/**
 * 布尔类型
 * @param {object} intl 国际化语言对象
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.not.null 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_boolean = (intl, required=false, transform, msg)=>{
    return {
        type:'boolean',
        required: required,
        transform: transform?transform:undefined,
        message: msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.boolean"),
    }
}
/**
 * 字符串
 * @param {object} intl 国际化语言对象
 * @param {int} min 字符串最小长度；不传时，不限制；
 * @param {int} max 字符串最大长度；不传时，不限制；
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.string/.min/.max/.rang 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_string = (intl, min, max, required=false, transform, msg)=>{
    if(!msg){
        if(min && max){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.string.rang", {"min":min, "max":max});
        }else if(min){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.string.min", {"min":min});
        }else if(max){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.string.max", {"max":max});
        }else{
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.string");
        }
    }
    return {
        type: 'string', 
        required: required,
        min: min?min:undefined,
        max: max?max:undefined,
        transform: transform?transform:undefined,
        message: msg,
    }
}
/**
 * 数字
 * @param {object} intl 国际化语言对象
 * @param {int} min 最小值；不传时，不限制；
 * @param {int} max 最大值；不传时，不限制；
 * @param {boolean} required 是否必须；默认为 false
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.number/.min/.max/.rang 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_number = (intl, min, max, required=false, transform, msg)=>{
    if(!msg){
        if(min && max){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.number.rang", {"min":min, "max":max});
        }else if(min){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.number.min", {"min":min});
        }else if(max){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.number.max", {"max":max});
        }else{
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.number");
        }
    }
    return {
        type: "number", 
        required: required,
        min: min?min:undefined,  
        max: max?max:undefined,
        transform: transform?transform:undefined,
        message: msg,
    }
}
/**
 * 整数
 * @param {object} intl 国际化语言对象
 * @param {int} min 最小值；不传时，不限制；
 * @param {int} max 最大值；不传时，不限制；
 * @param {boolean} required 是否必须；默认为 false
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.integer/.min/.max/.rang 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_integer = (intl, min, max, required=false, transform, msg)=>{
    if(!msg){
        if(min && max){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.integer.rang", {"min":min, "max":max});
        }else if(min){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.integer.min", {"min":min});
        }else if(max){
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.integer.max", {"max":max});
        }else{
            msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.integer");
        }
    }
    return {
        type: "integer", 
        required: required,
        min: min?min:undefined,  
        max: max?max:undefined,
        transform: transform?transform:undefined,
        message: msg,
    }
}
/**
 * 枚举 enum
 * @param {object} intl 国际化语言对象
 * @param {Array.of(object)} enums 允许的枚举值
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.enum 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_enum = (intl, enums=[], required=false, transform, msg)=>{
    return {
        type: 'enum', 
        enum: enums,
        required: required,
        transform: transform?transform:undefined,
        message: msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.enum", {"value":JSON.stringify(enums)}),
    }
}
/**
 * 邮箱
 * @param {object} intl 国际化语言对象
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.email 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_email = (intl, required=false, transform, msg)=>{
    return {
        type: 'email', 
        required: required,
        transform: transform?transform:undefined,
        message: msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.email"),
    }
}
/**
 * URL
 * @param {object} intl 国际化语言对象
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.url 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_url = (intl, required=false, transform, msg)=>{
    return {
        type: 'url', 
        required: required,
        transform: transform?transform:undefined,
        message: msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.url"),
    }
}
/**
 * 正则匹配
 * @param {object} intl 国际化语言对象
 * @param {string} pattern 正则表达式；
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.pattern 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_pattern = (intl, pattern, required=false, transform, msg)=>{
    return {
        pattern: pattern, 
        required: required,
        transform: transform?transform:undefined,
        message: msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.pattern"),
    }
}

/**
 * 
 * @param {object} intl 国际化语言对象
 * @param {*} attrObj 
 * @param {*} defaultField 
 * @param {*} fields 
 * @param {*} required 
 * @param {*} transform 
 * @param {*} msg 
 */
const f_object = (intl, attrObj, defaultField, fields, required, transform, msg)=>{
    if(!msg){
        msg = zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.object");
    }
    if(defaultField || fields){
        let __f_AsyncValidator = new AsyncValidator({
            "__f_v":{
                type: 'object',
                defaultField: defaultField?defaultField:undefined,
                fields: fields?fields:undefined,
                required: required,
                options: { first: true },
                transform: transform?transform:undefined,
                message: msg,
            }
        });
        
        return {
            required: required,
            validator: async (rule, value, callback)=>{
                // console.log("[^_^:20200827-1134-001] value: ", value);
                await __f_AsyncValidator.validate({"__f_v":value||{} }).catch(({ errors, fields })=>{
                    // console.log("[^_^:20200826-1666-001] errors: ", errors);
                    // console.log("[^_^:20200826-1666-002] fields: ", fields);
                    if(errors){
                        let errMsg = "";
                        for(let err of errors){
                            if(attrObj){
                                let attrName = err.field.substr("__f_v".length + 1);
                                errMsg += (attrObj[attrName] && attrObj[attrName].name)?attrObj[attrName].name:attrName
                            }else{
                                errMsg += err.field.substr("__f_v".length + 1);
                            }
                            errMsg += ": " + err.message + "; "
                        }
                        throw new Error(errMsg);
                    }
                });   
            }
        }
    }else{
        return {
            type: "object", 
            required: required,
            transform: transform?transform:undefined,
            message: msg,
        }
    } 
}
/**
 * 自定义校验
 * @param {function}} f_validator(rule, value) 自定义校验函数；返回错误消息，未返回错误消息时，认为无错误；
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_validator = (f_validator)=>{
    return {
        validator: async (rule, value, callback)=>{
            let errMsg = f_validator(rule, value);
            if(errMsg){
                throw new Error(errMsg);
            }
        }
    }
}
// const f_validator = (f_validator)=>{
//     return {
//         validator: (rule, value, callback)=>{
//             try{
//                 let errMsg = f_validator(rule, value);
//                 if(errMsg){
//                     throw new Error(errMsg);
//                 }
//                 callback();
//             }catch(errr){
//                 callback(errr);
//             }
//         }
//     }
// }
/*** */
/**
 * 用户名/登录名
 * @param {object} intl 国际化语言对象
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.username 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_username = (intl, required=false, transform, msg)=>{
    return f_pattern(intl, /^[a-zA-Z_][a-z0-9A-Z_]*$/, required, transform, msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.username"));
}
/**
 * 手机/电话
 * @param {object} intl 国际化语言对象
 * @param {boolean} required 是否必须；默认为 false；
 * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}
 * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.phone 的国际化值
 * @return {object} antd form 字段中 rules 的校验对象；
 */
const f_phone = (intl, required=false, transform, msg)=>{
    /** 
     * pattern:/(?:(\\(\\+?86\\))(0[0-9]{2,3}\\-?)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?)|(?:(86-?)?(0[0-9]{2,3}\\-?)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?)/,
        JS 测试
        let t = "";
    let patt1 = /^([\+]\d{2,3}-)(\d{3,4}-)(\d{7,8})$/;
    t = "+86-1234-12341234";
    document.write(patt1.test(t) + " - true  -> " + t + " <br />");
    t = "+86-123-12341234";
    document.write(patt1.test(t) + " - true  -> " + t + " <br />");
    t = "+86-1234-1234123";
    document.write(patt1.test(t) + " - true  -> " + t + " <br />");
    t = "+861-1234-12341234";
    document.write(patt1.test(t) + " - true  -> " + t + " <br />");
    t = "861-1234-12341234";
    document.write(patt1.test(t) + " - false -> " + t + " <br />");
    t = "1234-12341234";
    document.write(patt1.test(t) + " - false -> " + t + " <br />");
    */
    return f_pattern(intl, /^([\+]\d{2,3}-)(\d{6,11})$/, required, transform, msg?msg:zkToolsMsg.msgFormatByIntl(intl, "global.data.validate.phone"));
}

export default {
    notNull: f_notNull,      // 不能为空
    boolean: f_boolean,      // 布尔类型
    string: f_string,        // 字符串
    number: f_number,        // 数字
    integer: f_integer,      // 整数
    object: f_object,
    enum: f_enum,            // 枚举 enum
    email: f_email,          // email 
    url: f_url,              // URL
    pattern: f_pattern,      // 正则匹配
    validator: f_validator,  // 自定义校验
    /*** */
    username: f_username,  // 用户名/登录名
    phone: f_phone,          // 手机号
};

