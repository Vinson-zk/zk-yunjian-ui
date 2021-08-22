/*
 * @Author: Vinson 
 * @Date: 2020-08-06 14:01:38 
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-06 14:02:13
 */

(function (global) {
    const _Validates = (intl) => {
        return {
            required: { required: true, message: intl.formatMessage({ id: "global.validate.notNull" }) },  //必填
            username: { type: 'string', message: intl.formatMessage({ id: "global.validate.username" }) }, //用户名占位
            loginname: {
                pattern: /^[a-zA-Z_][a-z0-9A-Z_]*$/,
                message: intl.formatMessage({ id: "global.validate.input.login" })
            },
            mail: {
                pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                message: intl.formatMessage({ id: "global.validate.input.mail" })
            },                                                                                    //邮箱
            phone: {
                pattern: /^([\+]\d{2,3}-)(\d{11})$/,
                message: intl.formatMessage({ id: "global.validate.input.phoneNum" })
            },                                                                                    //手机号码
            mobile: {
                // pattern:/(?:(\\(\\+?86\\))(0[0-9]{2,3}\\-?)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?)|(?:(86-?)?(0[0-9]{2,3}\\-?)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?)/,
                /*
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
                pattern: /^([\+]\d{2,3}-)(\d{3,4}-)(\d{7,8})$/,
                message: intl.formatMessage({ id: "global.validate.input.mobileNum" })
            },                                                                                     //座机号码
            url: { type: 'url', message: intl.formatMessage({ id: "global.validate.url" }) },               //URL
            string: { type: 'string', message: intl.formatMessage({ id: "global.validate.string" }) },      //字符串
            number: { type: 'number', message: intl.formatMessage({ id: "global.validate.number" }) },      //数字
            integer: { type: 'integer', message: intl.formatMessage({ id: "global.validate.integer" }) },   //整数
            float: { type: 'float', message: intl.formatMessage({ id: "global.validate.float" }) },         //浮点数
            boolean: { type: 'float', message: intl.formatMessage({ id: "global.validate.boolean" }) },     //布尔型
            object: { type: 'object', message: intl.formatMessage({ id: "global.validate.object" }) },      //对象
            array: { type: 'array', message: intl.formatMessage({ id: "global.validate.array" }) },         //数组
            date: { type: 'date', message: intl.formatMessage({ id: "global.validate.date" }) },            //日期
            enum: (arr = []) => {
                return {
                    type: 'enum',
                    enum: arr,
                    message: intl.formatMessage({ id: "global.validate.enum" }, { value: JSON.stringify(arr) })
                }                                                                                    //枚举类型,传入一个枚举数组
            },
            len: (num) => {
                return { len: num, message: intl.formatMessage({ id: "global.validate.len", value: num }, { value: num }) }    //长度，传入一个number
            },
            max: (num) => {
                return { max: num, message: intl.formatMessage({ id: "global.validate.max", value: num }, { value: num }) }     // 最大长度，传入一个number
            },
            min: (num) => {
                return { min: num, message: intl.formatMessage({ id: "global.validate.min", value: num }, { value: num }) }     // 最小长度，传入一个number
            },
            confirm: (name, form) => {
                return {
                    validator: (rule, value, callback) => {
                        // console.log(form)
                    }
                }
            },
            validator: (validator) => {
                return { validator: validator }                                                           //自定义校验
            }

        }
    }

    global.zkJsValidates = _Validates;

})(typeof window !== "undefined" ? window : this);