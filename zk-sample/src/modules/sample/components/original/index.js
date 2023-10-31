/**
 * 原生组件的封装；封装是为了：统一默认情况下的风格与功能；这些默认处理，除个别强制要求的外，都可覆盖，且不影响原生功能与属性；
 * @Author: Vinson
 * @Date: 2020-08-12 09:13:47
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-13 17:34:58
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../helper';
import styles from "../../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

function FInitOriginalIndexDemo({intl}){

	return (
		<div className = { styles.sample_detail_panel }>
			<h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.components.original')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
			<div className = { styles.sample_detail_section } >
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
		        	{[
	        		"对原生组件的封装，要求能接收原生组件的原生属性；",
	        		"封装的原因：",
	        		"  1、统计默认风格",
	        		"  2、强制风格",
	        		"  3、简化代码书写",
					].join('\n')}
		        </SyntaxHighlighter>
			</div>
			<div className = { styles.sample_detail_section } >
		        <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
		        	{[
					"封装原生组件；",
					"    ZKBAnchor",
	        		"    ZKButton",
	        		"    ZKCheckbox 原生封装，无样例",
					"    ZKCol",
					"    ZKDatePicker",
					"    ZKDivider  原生封装，无样例",
					"    ZKDrawer  原生封装，无样例",
					"    ZKDropdown  原生封装，无样例",
					"    ZKEmpty ",
					"    ZKForm",
					"    ZKInput",
					"    ZKInputNumber",
					"    ZKMenu  原生封装，无样例",
					"    ZKModal",
					"    ZKPopconfirm  原生封装，无样例",
					"    ZKRadio",
					"    ZKRow",
					"    ZKSelect",
					"    ZKSpin",
					"    ZKSwitch",
					"    ZKTable",
					"    ZKTabs  原生封装，无样例",
					"    ZKTransfer",
					"    ZKTee",
					"    ZKTreeSelect",
					].join('\n')}
		        </SyntaxHighlighter>
			</div>
		    <br />  
		</div>
	)
}

export default injectIntl(FInitOriginalIndexDemo);
