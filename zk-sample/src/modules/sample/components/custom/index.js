/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:36:01
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-25 21:50:32
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../helper';
import styles from "../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitCustomComponentsDemo({ intl }) {
	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.components.custom')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"一些自定义组件；\n",
						"封装的原因：\n",
						"  1、统计默认风格\n",
						"  2、强制风格\n",
						"  3、简化代码书写\n",
					].join('')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
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
						"    ZKPopoverPanel",
						"    ZKRouter",
						"    ZKScrollTable",
						"    ZKSearchRow",
						"    ZKSider",
						"    ZKTextEditor",
						"    ZKTheme",
						"    ZKTouchControl",
						"    ZKUpload",
						"    ZKUserDropDown",
						"    ZKVersiionInfo",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitCustomComponentsDemo);

