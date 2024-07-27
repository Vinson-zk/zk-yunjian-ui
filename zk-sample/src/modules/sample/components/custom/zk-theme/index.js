/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-25 22:29:11
* @Last Modified by: runoob
* @Last Modified time: 2023-12-27 16:19:49
*/

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { injectIntl } from 'react-intl';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKTheme } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKThemeDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.theme')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				主题选择<br />
				<br />
			    <ZKTheme setThemeFunc={key=>console.log("[^_^:20230925-2250-001] theme select: ", key)} />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
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
							<td>themeFlag</td>
							<td>true</td>
							<td>当前主题标识</td>
							<td>PropTypes.string</td>
							<td>default</td>
						</tr>
						<tr>
							<td>setThemeFunc</td>
							<td>true</td>
							<td>选择主题后设置主题的回调</td>
							<td>PropTypes.func</td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<br />
				<ZKContentFormat title = '使用详细说明' >
					<ZKContentFormat title = '设计思路' >
						通过 CSS 全局属性，结合 less 样式变量[@xxx] 定义，实现动态主题切换。 
						<br />
					</ZKContentFormat>
					<ZKContentFormat title = '样式定义' >
						在 zk-framework 的 style/theme/index.js 中定义主题，一个主题包含：<br />
							name: 主题名称，名称要实现国际化；如：{'"name": {"zh-CN":"征客", "en-US":"ZK"}'},<br />
							base: 主题基础值；<br />
							map: 主题可用变量值，本项目中使用的 antd/lib 中 theme 中的 defaultAlgorithm 算法根据 主题基础算出的可用主题变量<br />
						<br />
					</ZKContentFormat>
					<ZKContentFormat title = 'CSS 全局变量定义' >
						通过 zk-framework 的 style/theme/index.js 中的 f_changeStyleCssVal 方法，读取主题中可用变量值，设置全部 CSS 变量；<br />
						设置示例：{'document.getElementsByTagName("body")[0].style.setProperty(`--${key}`, valMap[key])'};<br />
						key: 主题中的可用变量值的变量名。<br />
						<br />
					</ZKContentFormat>
					<ZKContentFormat title = 'less 样式全局变量定义' >
						在 zk-framework 的 style/theme/zk.theme.variables.less 中定义 less 全局变量，变量中引用 CSS 全局变量值；<br />
						定义示例：@colorBgBase: var(--colorBgBase)；<br />
						然后在其他 less 文件中引入 zk.theme.variables.less 就可以使用定义的样式值。<br />
						<br />
					</ZKContentFormat>
					<ZKContentFormat title = '样式切换' >
						组件 ZKTheme 本身不具备动态主题的能力，他只是动态主题切换的触发组件；<br />
						ZKTheme 使用 定义的主题 name 做成下拉选项；<br />
						选择某个主题时，触发 CSS 全局变量定义，使用选择主题 map 调用 f_changeStyleCssVal 方法，完成全局 CSS 变量值的切换，从而完成主题动态切换。<br />
						<br />
					</ZKContentFormat>
				</ZKContentFormat>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"参考框架代码",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKThemeDemo);



