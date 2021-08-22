/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:30:33
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 13:40:26
 */

import React from 'react';
import { injectIntl } from 'react-intl';
// import { Row, Col, Select, Input, Button, InputNumber} from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

const FInitToolsUtilsDemo = ({ intl }) => {

    return (
        <div className={styles.sample_detail_panel}>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkToolsUtils {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section}>
                <SyntaxHighlighter language='jsx' style={docco}>
                    {[
                        "一些项目公共方法，暂未使用",
                        "待补充",
                    ].join('\n')}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default injectIntl(FInitToolsUtilsDemo);