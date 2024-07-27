/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:30:33
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 00:04:52
 */

import React from 'react';
import { injectIntl } from 'react-intl';
// import { Row, Col, Select, Input, Button, InputNumber} from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const FInitToolsUtilsDemo = ({ intl }) => {

    return (
        <ZKContentFormat className={styles.sample_detail_panel} >
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkToolsUtils ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "一些项目公共方法",
                        "待补充",
                    ].join('\n')}
                </SyntaxHighlighter>
            </ZKContentFormat>
            <br />
        </ZKContentFormat>
    )
}

export default injectIntl(FInitToolsUtilsDemo);