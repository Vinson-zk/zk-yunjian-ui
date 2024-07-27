/**
 * webpack 编译时的常量，仅 webpack 编译使用；
 * @Author: Vinson
 * @Date: 2020-08-10 15:54:54
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-07 09:01:42
*/

const defaultThemeColor = {

    // "@primary-color": "#1890ff",         // 主题色
    // "@background-color": "#fefefe"       // 背景色

    "@primary-color": "#00bcd4",         // 主题色
    "@background-color": "#fefefe",       // 背景色

    // "@primary-color": "#d7000f",         // 主题色
    // "@background-color": "#f1f2e5",       // 背景色

    // "@primary-color": "#d7000f",         // 主题色
    // "@background-color": "#fefefe",       // 背景色

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
