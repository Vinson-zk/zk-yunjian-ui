/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:15:19
 * @Last Modified by:   Vinson
 * @Last Modified time: 2020-08-14 23:39:40
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { withRouter } from 'dva/router';

// import zkJsUtils from 'zkJsUtils';
import { docco } from '../../helper';
import styles from "../../styles.less";

import { ZKException, zkTools, ZKOriginalComponents } from "zkFramework";
const { zkToolsMsg } = zkTools;
const { ZKAnchor } = ZKOriginalComponents;

const FInitExceptionDemo = withRouter(({ intl, match, history, location }) => {

	return (
		<div id="top" className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_top_affix} >
				<ZKAnchor>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#top`} title="top" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#500`} title="500" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#404`} title="404" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#403`} title="403" ></ZKAnchor.Link>
				</ZKAnchor>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>1、ZKException &nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"import { ZKException } from \"zkFramework\";",
							"异常组件！",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKException 组件：<br /><br />
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
								<td>errCode</td>
								<td>false</td>
								<td>错误码，异常码</td>
								<td>[500, 404, 403] 中的一个，注意是数字</td>
								<td>404</td>
							</tr>
							<tr>
								<td>errMsg</td>
								<td>false</td>
								<td>额外的详细信息，目前只有 403 时会显示</td>
								<td>string</td>
								<td></td>
							</tr>
						</tbody>
					</table><br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div id="500" style={{ 'height': '500px' }}>
					<div>
						<a size={"small"} onClick={e => { history.push(`${match.path}/500`); }}>500</a>
					</div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{["<ZKException errCode={500} />"].join('\n')}
					</SyntaxHighlighter>
					<div><ZKException errCode={500} /></div>
				</div>
				<div id="404" style={{ 'height': '500px' }}>
					<div>
						<a size={"small"} onClick={e => { history.push(`${match.path}/404`); }}>404</a>
					</div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{["<ZKException errCode={404} />"].join('\n')}
					</SyntaxHighlighter>
					<div><ZKException errCode={404} /></div>
				</div>
				<div id="403" style={{ 'height': '500px' }}>
					<div>
						<a size={"small"} onClick={e => { history.push(`${match.path}/403`); }}>403</a>
					</div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{["<ZKException errCode={403} />"].join('\n')}
					</SyntaxHighlighter>
					<div><ZKException errCode={403} /></div>
				</div>
			</div>
			<br />
		</div>
	)
})

export default injectIntl(FInitExceptionDemo);
