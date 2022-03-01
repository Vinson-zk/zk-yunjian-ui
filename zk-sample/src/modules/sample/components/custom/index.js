/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:36:01
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-12-08 00:00:12
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../helper';
import styles from "../../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

function FInitCustomComponentsDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.components.custom')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
			<div className={styles.sample_detail_section} >
				<SyntaxHighlighter language='jsx' style={docco}>
					{[
						"封装一些业务组件；\n",
						"封装的原因：\n",
						"  1、统计默认风格\n",
						"  2、强制风格\n",
						"  3、简化代码书写\n",
					].join('')}
				</SyntaxHighlighter>
			</div>
			<div className={styles.sample_detail_section} >
				<SyntaxHighlighter language='jsx' style={docco}>
					{[
						"自定义组件；",
						"    ZKAutoMenu",
						"    ZKAutoTable",
						"    ZKBreadcrumb",
						"    ZKDateFormatPicker",
						"    ZKDetailGrid",
						"    ZKEditForm",
						"    ZKEditJsonArray",
						"    ZKInputJson",
						"    ZKLanguageSelect",
						"    ZKLogo",
						"    ZKNavigation",
						"    ZKOptRow",
						"    ZKPageSelect",
						"    ZKPermission",
						"    ZKRouter",
						"    ZKScrollTable",
						"    ZKSearchRow",
						"    ZKSider",
						"    ZKTextEditor",
						"    ZKUpload",
						"    ZKUserDropDown",
						"    ZKVersiionInfo",
					].join('\n')}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default injectIntl(FInitCustomComponentsDemo);

