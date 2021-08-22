/**
 * webpack 编译时的常量，仅 webpack 编译使用；
 * @Author: Vinson
 * @Date: 2020-08-10 15:54:54
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-07-01 10:24:47
*/

const defaultThemeColor = {
    // "@primary-color":"#8ac007"         // 主题色
    // ,"@label-color":"#888"             // 标签颜色
    // ,"@background-color":"#f7f7f7"     // 背景色

    // "@primary-color": "#1890ff",         // 主题色
     "@primary-color": "#FF0000",         // 主题色
    "@label-color": "#888",              // 标签颜色
    "@background-color": "#f7f7f7"       // 背景色

}

const zkTheme = {
    color: defaultThemeColor
}

/*** webpack 编译配置 ***/
module.exports = {
    zkTheme: zkTheme,
    // lib_nodeModules: "library/lib_nodeModules",
    // lib_funcModules: "library/lib_funcModules",
    // lib_locales: "library/lib_locales",
    // messageFilePath:"locales/index.js",

}
