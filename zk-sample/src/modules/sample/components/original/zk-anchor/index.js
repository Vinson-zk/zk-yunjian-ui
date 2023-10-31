/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:30:10
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:40
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKAnchorDemo({ intl, match }) {

    return (
        <div id="top" className={styles.sample_detail_panel}>
            <div className={styles.sample_detail_section}>
                <h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.anchor')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
                <div>
                    <ZKAnchor>
                        <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#top`} title="top" ></ZKAnchor.Link>
                        <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#section-2`} title="section-2" ></ZKAnchor.Link>
                        <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#section-3`} title="section-3" ></ZKAnchor.Link>
                        <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#section-test`} title="section-test" ></ZKAnchor.Link>
                    </ZKAnchor>
                </div>
            </div>
            <div id="section-2" className={styles.sample_detail_section}>
                <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
                <div>
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
                </div>
            </div>
            <div id="section-3" className={styles.sample_detail_section}>
                <h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
                <div>
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "原生态封装;",
                            "样例原码"
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div id="section-test" className={styles.sample_detail_section}>
                section-test
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <br />
        </div>
    )
}

export default injectIntl(FInitZKAnchorDemo);

