/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-23 12:40:52
* @Last Modified by: runoob
* @Last Modified time: 2023-09-23 17:50:04
*/


import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { injectIntl } from 'react-intl';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKContentFormatDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.contentFormat')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}
			>
				<ZKContentFormat title = {`二级标题-1`}>
					<div>二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,二级标题-1,</div>
				</ZKContentFormat>
				<ZKContentFormat title = {`二级标题-2`}>
					<div>二级标题-2</div>
					<ZKContentFormat title = {`三级标题-1`}>
						<div>三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,三级标题-1,</div>
					</ZKContentFormat>
					<ZKContentFormat title = {`三级标题-2`}>
						<div>三级标题-2</div>
						<ZKContentFormat title = {`四级标题-1`}>
							<div>四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,四级标题-1,</div>
							<ZKContentFormat title = {`五级标题-1`}>
								<div>五级标题-1</div>
							</ZKContentFormat>
							<ZKContentFormat title = {`五级标题-2`}>
								<div>五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,五级标题-2,</div>
								<ZKContentFormat title = {`六级标题-1`}>
									<div>六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1,六级标题-1</div>
								</ZKContentFormat>
								<ZKContentFormat title = {`六级标题-2`}>
									<div>六级标题-2</div>
								</ZKContentFormat>
								<ZKContentFormat title = {`六级标题-3`}>
									<div>六级标题-3</div>
								</ZKContentFormat>
								<ZKContentFormat title = {`六级标题-4`}>
									<div>六级标题-4</div>
								</ZKContentFormat>
								<ZKContentFormat title = {`六级标题-5`}>
									<div>六级标题-5</div>
								</ZKContentFormat>
							</ZKContentFormat>
							<ZKContentFormat title = {`五级标题-3`}>
								<div>五级标题-3</div>
							</ZKContentFormat>
						</ZKContentFormat>
					</ZKContentFormat>
					<ZKContentFormat title = {`三级标题-3`}>
						<div>三级标题-3</div>
					</ZKContentFormat>
				</ZKContentFormat>
				<ZKContentFormat title = {`二级标题-3`}>
					<div>二级标题-3</div>
				</ZKContentFormat>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				<div>
					组件：{'<ZKContentFormat></ZKContentFormat>'}
				</div>
				<br />
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
							<td>serialNum</td>
							<td>false</td>
							<td>-1 时，不显示标题号; 不传入时自动 标题号；其他按传入值显示；</td>
							<td>PropTypes.number</td>
							<td></td>
						</tr>
						<tr>
							<td>title</td>
							<td>false</td>
							<td>标题，不传时，做为一个版式框；</td>
							<td>PropTypes.string</td>
							<td></td>
						</tr>
						<tr>
							<td>separator</td>
							<td>false</td>
							<td>标题与标题号分隔符，默认为 '、'；</td>
							<td>PropTypes.string</td>
							<td>、</td>
						</tr>
						<tr>
							<td>level</td>
							<td>false</td>
							<td>标题等级从 1 开始，传入时，使用传入值；title 为空时，子内容版式等级不会增加；</td>
							<td>PropTypes.number</td>
							<td>1</td>
						</tr>
						<tr>
							<td>parentTitle</td>
							<td>false</td>
							<td>父标题内容，作为子标题的需要添加的前缀</td>
							<td>PropTypes.oneOfType([PropTypes.string, PropTypes.number])</td>
							<td></td>
						</tr>
						<tr>
							<td>handleTitleNumFunc</td>
							<td>false</td>
							<td>标题处理函数，返回一个字符串；</td>
							<td>PropTypes.func</td>
							<td>(parentTitle, serialNum)=>{'{'}return ""{'}'}</td>
						</tr>
					</tbody>
				</table>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"参考 sample 项目代码",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKContentFormatDemo);


