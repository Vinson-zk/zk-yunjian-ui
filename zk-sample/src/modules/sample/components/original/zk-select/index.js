/**
 *
 * @Author: Vinson
 * @Date: 2020-08-15 22:46:39
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:41
 */

/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:33:10
 * @Last Modified by:   Vinson
 * @Last Modified time: 2020-08-14 21:13:13
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKSelect } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;
const { Option } = ZKSelect

function FInitZKSelectDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.select')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					默认不填充选择选项：
					<ZKSelect >
						<Option value="1">是</Option>
						<Option value="0">否</Option>
					</ZKSelect><br /><br />
				    填充空选择选项：
					<ZKSelect fillValue={""}>
						<Option value="1">是</Option>
						<Option value="0">否</Option>
					</ZKSelect><br /><br />
					自动填充一个请选择选项：
					<ZKSelect fillValue={zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_select')}>
						<Option value="1">是</Option>
						<Option value="0">否</Option>
					</ZKSelect>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKSelect 组件：<br />
				    原生态封装，接受原生属性。<br /><br />
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
								<td>fillValue</td>
								<td>false</td>
								<td>指定填充一个空选择项的显示名称，未指定时，即 undefined 时，不填充；默认不填充；</td>
								<td>PropTypes.string</td>
								<td></td>
							</tr>
							<tr>
								<td>className</td>
								<td>false</td>
								<td>default_class；注：默认 css 样式中，强制一指定：【width: 180px !important;】如不需要，传入一个 className 值即可覆盖此 css 的引用。</td>
								<td>PropTypes.string</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<br />
			        &nbsp;&nbsp;&nbsp;&nbsp;1、默认添加空选项。可选择是否添加<br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"原生态封装",
							"<ZKSelect >"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKSelectDemo);


