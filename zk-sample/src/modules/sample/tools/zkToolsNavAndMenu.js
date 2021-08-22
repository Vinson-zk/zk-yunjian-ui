/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:29:58
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-04-02 15:16:23
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from 'dva/router';

import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const FInitZKToolsNavAndMenuDemo = ({ match, intl }) => {

    let basePath = match.path.split("/").filter((currentValue, index, arr) => { return index < arr.length - 2 }).join("/");
    let routerSamplePath = basePath + "/" + globalAppConfig.routePath.routerSample;

    // let targetDom = scrollDom ? scrollDom.parentElement : undefined;
    return (
        <div className={styles.sample_detail_panel}>
            <div className={styles.sample_detail_top_affix} >
                <ZKAnchor>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#registerModel`}          title = "registerModel" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#unRegisterModel`}        title = "unRegisterModel" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#makeDynamicComponent`}   title = "makeDynamicComponent" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#getRoutesByNavs`}        title = "getRoutesByNavs" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#getIndexNav`}            title = "getIndexNav" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#navIsShow`}              title = "navIsShow" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#getRoutesByMenus`}       title = "getRoutesByMenus" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#getIndexMenu`}           title = "getIndexMenu" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#getMenuName`}            title = "getMenuName" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#menuIsShow`}             title = "menuIsShow" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#menuIsLeaf`}             title = "menuIsLeaf" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#getRouterMapping`}       title = "getRouterMapping" ></ZKAnchor.Link>
                    <ZKAnchor.Link href = {`${globalAppConfig.basename}${match.path}/#getDynamicImportHelper`} title = "getDynamicImportHelper" ></ZKAnchor.Link>
                </ZKAnchor>
            </div>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkToolsNavAndMenu {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section} >
                <SyntaxHighlighter language='jsx' style={docco}>
                    {[
                        "// ***** Separator : 公共函数",
                        "registerModel          // 注册数据模型 model ",
                        "unRegisterModel        // 注销数据模型 model ",
                        "makeDynamicComponent   // 制作路由组件，按需要生成 dva 动态组件 dynamic({}) 或 react 组件 ",
                        "// ***** Separator : 头部导航相关处理函数",
                        "getRoutesByNavs        // 导航 item 根据功能模块数据生成函数",
                        "getIndexNav            // 查询默认导航栏",
                        "navIsShow              // 判断导航栏是否是显示；",
                        "// ***** Separator : 菜单路由处理函数",
                        "getRoutesByMenus       // 根据菜单数据生成路由函数 ",
                        "getIndexMenu           // 查找默认菜单",
                        "getMenuName            // 取菜单(路由)的国际化名称",
                        "menuIsShow                 // 判断菜单是否显示",
                        "menuIsLeaf                 // 判断菜单是否为叶子菜单",
                        "// ***** Separator : 路由路径的映射",
                        "getRouterMapping       // 生成路由路径的映射",
                        "// ***** Separator : 其他导入或菜单处理函数 ",
	                    "getDynamicImportHelper // 动态加载组件助手"
                    ].join('\n')}
                </SyntaxHighlighter>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>1、公共函数&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
                <div id="registerModel">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 数据模型注册与替换，一个 model 只能注册一次; ",
                            " * 注：需要替换或重新注册时，需要先注销，然后现注册；",
                            " * @param {object} dvaApp dva app 对象",
                            " * @param {Array.of(object)} models 数据模型对象数组，默认为 空数组",
                            " * @return {boolean} true-注册成功；false-注册失败；",
                            " */",
                            "registerModel:f_registerModel(dvaApp, models = []) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="unRegisterModel">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 数据模型 model 注销；",
                            " * @param {object} dvaApp dva app 对象",
                            " * @param {Array.of(object)} models 数据模型对象数组，默认为 空数组",
                            " * @return: void",
                            " */",
                            "unRegisterModel:f_unRegisterModel(dvaApp, models = []) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="makeDynamicComponent">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 制作路由组件，按需要生成 dva 动态组件 dynamic({})",
                            " * @param {object} dvaApp dva app 对象，注意在dynamic({}) 中这个参数的参数名只能是 'app' ",
                            " * @param {Array.of(object)} models 数据模型对象数组，不存在时不生成 dva 动态组件 dynamic({}) 组件，直接返回react 目标组件；",
                            " * @param {object} component react 目标组件  ",
                            " * @return {object} 生成的 dva 动态组件或react 目标组件；",
                            " */",
                            "makeDynamicComponent:f_makeDynamicComponent(app, models, component) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>2、导航栏目函数&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
                <div id="getRoutesByNavs">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 生成头部导航及头部导航的路由;  注意，导航栏不显示时，不生成路由，这一点和菜单 menu 不同；",
                            " * 生成的导航路由会向路由的组件中传入：{dvaApp:dvaApp, navCode:item.navCode, dynamicImportHelper:dynamicImportHelper} 这三个属性； ",
                            " * @param {object} dvaApp dva app 对象； ",
                            " * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined； ",
                            " * @param {Array.of(object)} navDatas 导航栏目数据数组，不支持树形结构； ",
                            " * @param {object} dynamicImportHelper 动态导入组件助手对象；含一个动态加载组件的函数 'dynamicImport(item)'，入参为导航 item 数据； ",
                            " *    这里传入对象而不直接传入函数的原因是要保证加载时，其他的相关依赖不发生变化，如上下文 context 或组件功能对象。 ",
                            " *    dynamicImport(item) 返回要求示例: ",
                            " *    {  ",
                            " *      onEnter: undefined, // 生成路由的跳转钩子 ",
                            " *      component: 组件,  ",
                            " *      models: 数据模型-数组, 不存在时，必须为空数组。 ",
                            " *    } ",
                            " * @return {Array.of(object)} 生成导航栏目路由 ",
                            " */",
                            "getRoutesByNavs:f_getRoutesByNavs(dvaApp, prefixPath, navDatas, dynamicImportHelper) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                    <Link to={`${routerSamplePath}`}>导航栏目数据结构</Link>
                    <br /><br />
                </div>
                <div id="getIndexNav">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 查找默认导航栏目",
                            " * @param {Array.of(object)} navDatas 导航栏目数据数组，不处理树形结构子结点；默认为空数组；",
                            " * @return {object} 遇到的第一个设置为默认的导航栏目数据对象，不存在时，返回 null；",
                            " */",
                            "getIndexNav:f_getIndexNav(navDatas = []) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="navIsShow">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/** ",
                            " * 判断导航栏是否是显示；",
                            " * @param {object} nav navItem.isShow 为数字 1-显示；其他不显示；",
                            " * @return {boolean} true-显示；false-不显示； ",
                            " */",
                            "navIsShow: f_navIsShow(m) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>3、菜单路由处理函数&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
                <div id="getRoutesByMenus">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 生成菜单路由； ",
                            " *   1、从树形菜单数据根结点开始，向子结点递归逐一生成路由; 生成的路由组件 component 中，会传入 {dvaApp:dvaApp} 属性，供子组件使用； ",
                            " *   2、路由路径，从根结点到此结点的各个不为空的path用 / 连接；再在前面加上传的 前缀路径；为此路由的访问路径。 ",
                            " *   3、如果此菜单(路由)结点通过 dynamicImportHelper 未取到功能组件对象，则不生成路由，也不会注册数据模型！但path是有效的！ ",
                            " *   4、如果此菜单(路由)结点的 isFrame 为 1，即为路由容器，则停止对其子结点的递归； ",
                            " *      向生成的路由组件 component 中，传入{dvaApp:dvaApp, menus:menu.children, dynamicImportHelper:dynamicImportHelper} 这三个属性； ",
                            " *      在生成的路由组件 component 中，自行决定对子菜单数据的处理！ ",
                            " *   5、递归生成菜单； ",
                            " * @param {object} dvaApp dva app 对象； ",
                            " * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined； ",
                            " * @param {Array.of(object)} menus 菜单数据数组； ",
                            " * @param {object} dynamicImportHelper 动态导入组件助手对象；动态导入组件助手对象；同 genRoutesByNavs 导航栏目路由中生成的动态导入组件助手对象； ",
                            " *  dynamicImport(item) 返回要求示例: ",
                            " *    {  ",
                            " *      onEnter: undefined, // 生成路由的跳转钩子 ",
                            " *      component: 组件,  ",
                            " *      models: 数据模型-数组, 不存在时，必须为空数组。 ",
                            " *    } ",
                            " * @return {Array.of(object)} 生成菜单路由； ",
                            " */",
                            "getRoutesByMenus: f_getRoutesByMenus(dvaApp, prefixPath, menus, dynamicImportHelper)"
                        ].join('\n')}
                    </SyntaxHighlighter>
                    <Link to={`${routerSamplePath}`}>菜单数据结构</Link>
                    <br /><br />
                </div>
                <div id="getIndexMenu">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 查找默认菜单；遇到的第一个设置为默认的菜单，再递归查找子菜单的默认菜单；",
                            " * @param {Array.of(object)} menus 菜单数据数组；",
                            " * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined；",
                            " * @return {object} 默认菜单路由对象; 不存在时，返回 null; ",
                            " *    默认菜单路由对象示例: ",
                            " *    { ",
                            " *       path: 默认菜单访问路径 ",
                            " *       menu: 默认菜单数组对象 ",
                            " *    };",
                            " */",
                            "getIndexMenu:f_getIndexMenu(menus, prefixPath) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="getMenuName">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 根据当前国际化语言取菜单的对应名称；",
                            " * @param {object} menu 菜单数据对象；menu.name 为名称属性；",
                            " * @param {object} intl react-intl injectIntl 国际化对象;",
                            " * @return {string} 菜单在当前语言环境中的对应名称；不存在对应环境名称时，取 menu.name. + m.key 对象国际化配置，也不存在时，返回空；",
                            " */",
                            "getMenuName:f_getMenuName(m, intl) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="menuIsShow">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/** ",
                            " * 判断菜单是否是显示；",
                            " * @param {object} menu 菜单数据对象；menu.menuIsShow 为数字 1-显示；其他不显示；",
                            " * @return {boolean} true-显示；false-不显示； ",
                            " */",
                            "menuIsShow:f_menuIsShow(m) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="menuIsLeaf">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 判断菜单是否为叶子菜单；需要显示且无显示的子菜单，则为叶子节点；",
                            " * @param {object} menu 菜单数据对象；menu.menuIsShow 为数字 1-显示；其他不显示；",
                            " * @return: true-是叶子节点；false-不是叶子节点；",
                            " */",
                            "menuIsLeaf:f_menuIsLeaf(m) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>4、路由路径的映射&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
                <div id="getRouterMapping">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 生成路由路径的映射对象，映射对象供面包屑与菜单使用来级联打开菜单的显示面包屑；具体功能见生成方法原码注释；",
                            " * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined；",
                            " * @param {Array.of(object)} items 菜单数据数组；",
                            " * @param {object} routerMappingObj 路径映射对象，传入 null 时自动创建对象，不存在时；存在时，只新增映射",
                            " * @return: routerMappingObj 路径映射对象; ",
                            " */",
                            "getRouterMapping:f_getRouterMapping(prefixPath, items, routerMappingObj) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                    <Link to={`${routerSamplePath}`}>routerMappingObj 路径映射对象结构</Link>
                    <br />
                </div>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>5、其他导入或菜单处理函数&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
                <div id="getDynamicImportHelper">
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "/**",
                            " * 动态加载组件助手",
                            " * @param {object} funcModuleMppingObj 功能模块的功能映射对象",
                            " * @return {object} 动态组件；返回示例:",
                            " * { ",
                            " *     onEnter: undefined, // 生成路由的跳转钩子",
                            " *     component: 组件, ",
                            " *     models: 数据模型-数组, 不存在时，必须为空数组。",
                            " * }",
                            " */",
                            "getDynamicImportHelper:f_getDynamicImportHelper(prefixPath, items, routerMappingObj) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                    <br />
                </div>
            </div>
            <br />
        </div>
    )
}

export default injectIntl(FInitZKToolsNavAndMenuDemo);