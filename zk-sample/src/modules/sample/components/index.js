/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 21:26:52
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-11-30 15:12:04
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import styles from "../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

const FInitComponentsIndex = ({ intl }) => {
    return (
        <div className={styles.sample_detail_panel}>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.components')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section} >
                组件封装
            </div>
            <div className={styles.sample_detail_section} >

            </div>
        </div>
    );
}

export default injectIntl(FInitComponentsIndex);
