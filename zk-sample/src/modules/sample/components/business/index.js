/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-24 14:41:12
* @Last Modified by: runoob
* @Last Modified time: 2023-09-24 14:47:40
*/


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../helper';
import styles from "../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitBusinessComponentsDemo({ intl }) {
	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.components.business')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"封装一些业务组件；[zk-system]\n",
						"封装的原因：\n",
						"  1、统计默认风格\n",
						"  2、强制风格\n",
						"  3、简化代码书写\n",
					].join('')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<font color="red">组件使用 demo 待补充</font>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"业务组件；",
						"    [zk-system]ZKApplicationSystemSelect",
						"    [zk-system]ZKCompanyTree",
						"    [zk-system]ZKDeptSelect",
						"    [zk-system]ZKDictSelect",
						"    [zk-system]ZKRankSelect",
						"    [zk-system]ZKUserTypeSelect",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitBusinessComponentsDemo);


