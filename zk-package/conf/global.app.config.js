
/** 
 * 应用的全局常量；
 * 会通过 webpack 变量定义插件 webpack.DefinePlugin 定义为应用的全局常量；
 * 可在应用中通过 直接使用；示例：详见 webpack.public.config.js 中的 webpack.DefinePlugin 定义处；
 * @Author: Vinson 
 * @Date: 2020-08-10 15:37:45 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-21 17:41:42
 */

/*** 应用的全局常量配置 ***/
module.exports = {
    // platformCode: "_default_platform_code_";
    basename: "zk",             // 会在配置值前面自动加 "/" 前缀；且不要以斜扛结尾；
    isAuth: true,               // 是否开启身份认证，默认不开启
    localKey:{  // 本地存储 key
        lang: "_key_lang",             // 国际化标识
        ticket: "_key_ticket_",        // 本地存放令牌名
        pageSize:"_key_page.size",     // 分页数量，本地记录标识；用于记录用户操作习惯；
    },
    transferKey:{ // 与服务器传输 参数名
        ticket: "_tkId",               // 令牌上遂参数名
        page:{                         // 请求后台时的分页参数
            pageNo: "page.no",
            pageSize: "page.size"
        },
        sorter:{
            column:"page.sort.col",
            mode:"page.sort.mode"
        },
    },
    eventType: {            // 系统事件类型
        logout: "_e_logout", // 退出时，toolsAuth 会触发这个事件
    }
}
