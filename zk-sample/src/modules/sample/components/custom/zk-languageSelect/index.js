/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:24:55
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:43
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import locales from '../../../../../locales/sample/index.js';
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKLanguageSelect } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;


const FInitZKLanguageSelectDemo = ({ intl }) => {

	const lang = zkToolsMsg.getLocale();
	
	const languageSwitchProps = {
		locales,
		lang,
		changeFunc(lang) {
			console.log('-------- lang->', lang)
		}
	}

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.languageSelect')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<ZKLanguageSelect {...languageSwitchProps} />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKLanguageSelect 组件：<br />
					<table className={styles.sample_detail_section_table}>
						<thead>
							<tr>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>localLanguage</td>
								<td>true</td>
								<td>国际化语言对象，对象参考框架代码</td>
								<td>PropTypes.object</td>
								<td></td>
							</tr>
							<tr>
								<td>lang</td>
								<td>false</td>
								<td>当前国际化语言</td>
								<td>PropTypes.string</td>
								<td>en_US</td>
							</tr>
							<tr>
								<td>changeFunc</td>
								<td>false</td>
								<td>语言切换回调函数 Function(lang)</td>
								<td>PropTypes.func</td>
								<td>无</td>
							</tr>
						</tbody>
					</table>
					<div style={{ color: 'red' }}>
						注：&nbsp;&nbsp;<br />
					</div>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"参考框架代码",
							"const lang = \"en_US\"",
							"const languageSwitchProps={",
							"    localLanguage,",
							"    lang,",
							"    changeFunc(lang){",
							"        console.log('-------- lang->', lang)",
							"    }",
							"}",
							" ",
							"<ZKLanguageSelect {...languageSwitchProps} />",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKLanguageSelectDemo);



