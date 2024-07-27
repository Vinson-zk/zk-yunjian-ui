/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 09:16:33
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 23:53:31
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

const FInitJsSortTwoArrayDemo = ({ intl }) => {

    return (
        <ZKContentFormat className={styles.sample_detail_panel} >
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "反序函数",
                        "待补充",
                    ].join('\n')}
                </SyntaxHighlighter>
            </ZKContentFormat>
            <br />
        </ZKContentFormat>
    )
}

export default injectIntl(FInitJsSortTwoArrayDemo);