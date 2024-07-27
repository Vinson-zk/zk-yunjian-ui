/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 21:26:52
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 22:15:23
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import styles from "../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const FInitComponentsIndex = ({ intl }) => {
    return (
        <ZKContentFormat className={styles.sample_detail_panel} >
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.components')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
                组件封装
            </ZKContentFormat>
            <br />
        </ZKContentFormat>
    );
}

export default injectIntl(FInitComponentsIndex);
