/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:25:20
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-09 23:34:03
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";

import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKLogo } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const FInitZKLogoDemo = ({ intl }) => {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.logo')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<ZKLogo logoImgUrl="assets/picture/favicon_128x128.ico" />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKLogo 组件：<br />
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
								<td>logoImgUrl</td>
								<td>false</td>
								<td>logo 图片地址；<br />
									注意这个地址 url 是指发布后的资源文件地址 url，不是源码的资源文件 url;<br />
									如 demo 中的这两个地址就是不同的，很好的诠释了这一点</td>
								<td>PropTypes.string</td>
								<td></td>
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
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"参考框架代码",
							"<ZKLogo logoImgUrl=\"static/favicon_128x128.ico\" />",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKLogoDemo);




