/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 09:16:33
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:42
 */

import React from 'react';
import { injectIntl } from 'react-intl';
// import { Row, Col, Select, Input, Button, InputNumber} from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';

import styles from "../styles.less";

import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

const FInitJsSortTwoArrayDemo = ({ intl }) => {

    return (
        <div className={styles.sample_detail_panel}>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkJsSortTwoArray {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section}>
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "反序函数",
                        "待补充",
                    ].join('\n')}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default injectIntl(FInitJsSortTwoArrayDemo);