/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:30:10
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 01:11:09
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKAnchorDemo({ intl, match }) {

    let anchorItems = [
        {
            'key': `${globalAppConfig.basename}${match.path}/#top`,
            'href': `${globalAppConfig.basename}${match.path}/#top`,
            'title': 'top'
        },
        {
            'key': `${globalAppConfig.basename}${match.path}/#section-2`,
            'href': `${globalAppConfig.basename}${match.path}/#section-2`,
            'title': 'section-2'
        },
        {
            'key': `${globalAppConfig.basename}${match.path}/#section-3`,
            'href': `${globalAppConfig.basename}${match.path}/#section-3`,
            'title': 'section-3'
        },
        {
            'key': `${globalAppConfig.basename}${match.path}/#section-test`,
            'href': `${globalAppConfig.basename}${match.path}/#section-test`,
            'title': 'section-test'
        }
    ]

    return (
        <ZKContentFormat id = "top" className={styles.sample_detail_panel} >
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.anchor')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
                <ZKAnchor items = {anchorItems} />
            </ZKContentFormat>
            <ZKContentFormat id="section-2" title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "ZKAnchor 组件: 封装只是设置了一些原生属性的默认值;",
                        "原生态封装，接受原生属性。"
                    ].join('\n')}
                </SyntaxHighlighter>
                <table className={styles.sample_detail_section_table}>
                    <thead>
                        <tr>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>getContainer</td>
                            <td>否</td>
                            <td>取锚点滚去窗口节点</td>
                            <td>PropTypes.function</td>
                            <td>{"() => document.getElementById(\"right-content\")"}</td>
                        </tr>
                        <tr>
                            <td>affix</td>
                            <td>否</td>
                            <td></td>
                            <td>PropTypes.boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>showInkInFixed</td>
                            <td>否</td>
                            <td></td>
                            <td>PropTypes.boolean</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>offsetTop</td>
                            <td>否</td>
                            <td></td>
                            <td>PropTypes.num</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </ZKContentFormat>
            <ZKContentFormat id="section-3" title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "原生态封装;",
                        "样例原码"
                    ].join('\n')}
                </SyntaxHighlighter>
            </ZKContentFormat>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div id="section-test" className={styles.sample_detail_section}>
                section-test
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <br />
        </ZKContentFormat>
    )
}

export default injectIntl(FInitZKAnchorDemo);

