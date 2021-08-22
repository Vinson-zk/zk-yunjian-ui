/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 10:31:13
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-19 18:10:08
 */

import React from 'react';
import { Row, Col, Select, Input, Button, InputNumber } from 'antd';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from 'dva/router';
import { docco } from '../helper';

import styles from "../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

const FRouteDemoHome = ({ match, intl }) => {

    // console.log("[^_^:20190215-1134-001] stylesDemo: ", stylesDemo)

    return (
        <div className={styles.sample_detail_panel}>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.name')} {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section} >
                <ul>
                    <li>
                        <Link to={`${match.path}/static`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.static')}</Link>
                    </li>
                    <li>
                        <Link to={`${match.path}/menu`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.menu')}</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.sample_detail_section} >
                <h2>1、导航栏目数据结构定义</h2>
                <SyntaxHighlighter language='jsx' style={docco}>
                    {[
                        "生成导航栏目及对应路由！",
                    ].join('\n')}
                </SyntaxHighlighter>
                <table className = {styles.sample_detail_section_table}>
                    <thead>
                        <tr>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.column.name')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>pkId</td>
                            <td>true</td>
                            <td>数据的唯一 pkId，也是根据数据生成组件时的做为组件 key 的关键；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>true</td>
                            <td>菜单(路由)的名称, 国际化json对象；</td>
                            <td>Json</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>navCode</td>
                            <td>true</td>
                            <td>导航栏目代码，唯一</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>funcModuleCode</td>
                            <td>true</td>
                            <td>功能模块代码，在哪个功能模块中实现就写哪个功能模块的代码，也是功能模块目录；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>funcName</td>
                            <td>true</td>
                            <td>功能名称，将根据这名称查找到对应功能组件；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>path</td>
                            <td>false</td>
                            <td>不能为空</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>isIndex</td>
                            <td>false</td>
                            <td>是否是默认栏目，1-是；0-不是</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>sort</td>
                            <td>false</td>
                            <td>排序</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>2、菜单数据结构定义</h2>
                <SyntaxHighlighter language='jsx' style={docco}>
                    {[
                        "生成菜单及对应路由！",
                    ].join('\n')}
                </SyntaxHighlighter>
                <table className = {styles.sample_detail_section_table}>
                    <thead>
                        <tr>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.column.name')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>pkId</td>
                            <td>true</td>
                            <td>数据的唯一 pkId，也是根据数据生成组件时的做为组件 key 的关键；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>code</td>
                            <td>true</td>
                            <td>唯一；自定义菜单标识 code</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>true</td>
                            <td>菜单(路由)的名称, 国际化json对象；</td>
                            <td>Json</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>navCode</td>
                            <td>true</td>
                            <td>导航栏目代码，即功能菜单的分组代码；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>funcModuleCode</td>
                            <td>true</td>
                            <td>功能模块代码；也是功能模块目录;</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>funcName</td>
                            <td>false</td>
                            <td>功能名称，在同功能模块下要求唯一；将根据这名称查找到对应功能组件；注：为空时，不会生成面包屑！及路由</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>path</td>
                            <td>false</td>
                            <td>访问路径；注意当路径为 ':param'，要排在同级路由的最后，否则后面的路由会匹配不到！</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>isIndex</td>
                            <td>false</td>
                            <td>是否是默认栏目，1-是；0-不是</td>
                            <td>Number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>exact</td>
                            <td>false</td>
                            <td>生成路由时的 exact 属性；当为true时，仅当路径与位置匹配时才匹配; <br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;1、当 isFrame 0-不为路由容器，又有子路由时，要为 true 子路由才能显示出来；？要不要默认设置为true<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;2、当 isFrame 0-路由容器，此配置不起作用；值为 false；
                                        </td>
                            <td>Boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>isFrame</td>
                            <td>true</td>
                            <td>1-路由容器；否则为正常的一般路由</td>
                            <td>int</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>isShow</td>
                            <td>true</td>
                            <td>是否显示；1-显示；其他不显示；</td>
                            <td>int</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>false</td>
                            <td>菜单图标,【生成菜单属性，不影响路由生成】；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>sort</td>
                            <td>true</td>
                            <td>排序字段,【生成菜单属性，不影响路由生成】；</td>
                            <td>int</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>permission</td>
                            <td>false</td>
                            <td>权限标识，与后对对应控制代码一至；多个权限标识时用英文 ";" 号分隔；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>parentId</td>
                            <td>false</td>
                            <td>菜单(路由)的上级结点 id，制作树形结构关键属性；</td>
                            <td>String</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>false</td>
                            <td>子菜单(子路由)数组；</td>
                            <td>Array</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>3、routerMappingObj 路径映射对象；</h2>
                <SyntaxHighlighter language='jsx' style={docco}>
                    {[
                        "映射对象供面包屑与菜单使用来级联打开菜单的显示面包屑；",
                    ].join('\n')}
                </SyntaxHighlighter>
                <table className = {styles.sample_detail_section_table}>
                    <thead>
                        <tr>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.column.name')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>normalHandles</td>
                            <td>true</td>
                            <td>一般的路由路径映射句柄；即路由路径句柄要完全匹配；
                                            也就是以完整路由路径为 normalHandles 对象的属性句柄，来保存一个菜单数据对象，数据对象供后续面包屑处理、菜单级联打开时使用；</td>
                            <td>Object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>regExpHandles</td>
                            <td>true</td>
                            <td>正则匹配的路由路径映射句柄；即路由路径句柄用生成的正则匹配；
                                            与 normalHandles regExpHandles 中是以路由路径的正则匹配表达式来做属性名称的；相同的是都是保存一个菜单数据对象；</td>
                            <td>Object</td>
                            <td>无</td>
                        </tr>
                        <tr>
                            <td>getMappingTarget(path)</td>
                            <td>true</td>
                            <td>取路由路径对应的映射对象；先从 normalHandles 映射数据中取，不存在；再从 regExpHandles 映射中取；</td>
                            <td>Funtion</td>
                            <td>无</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
        </div>
    );
}

export default injectIntl(FRouteDemoHome);
