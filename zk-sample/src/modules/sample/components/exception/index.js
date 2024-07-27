/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:15:19
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 01:08:46
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { router } from 'dva';
const { withRouter } = router;

// import zkJsUtils from 'zkJsUtils';
import { docco } from '../../helper';
import styles from "../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents, ZKException } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const FInitExceptionDemo = withRouter(({ intl, match, history, location }) => {

	return (
		<ZKContentFormat id="top" className={styles.sample_detail_panel} >
			<div className={styles.sample_detail_top_affix} >
				<ZKAnchor items = {[
					{
					    'key': `${globalAppConfig.basename}${match.path}/#top`,
					    'href': `${globalAppConfig.basename}${match.path}/#top`,
					    'title': 'top'
					},{
					    'key': `${globalAppConfig.basename}${match.path}/#403`,
					    'href': `${globalAppConfig.basename}${match.path}/#403`,
					    'title': '403'
					},{
					    'key': `${globalAppConfig.basename}${match.path}/#404`,
					    'href': `${globalAppConfig.basename}${match.path}/#404`,
					    'title': '404'
					},{
					    'key': `${globalAppConfig.basename}${match.path}/#500`,
					    'href': `${globalAppConfig.basename}${match.path}/#500`,
					    'title': '500'
					}
				]}/>
			</div>
			<ZKContentFormat  title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"import { ZKException } from \"zkFramework\";\n",
						"异常组件！",
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
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
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<div id="403" style={{ 'height': '500px', 'border': '1px solid var(--colorPrimary)', 'margin-top': '12px' }}>
					<div>
						<a size={"small"} onClick={e => { history.push(`${match.path}/403`); }}>403</a>
					</div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{["<ZKException errCode={403} />"].join('\n')}
					</SyntaxHighlighter>
					<div><ZKException errCode={403} /></div>
				</div>
				<div id="404" style={{ 'height': '500px', 'border': '1px solid var(--colorPrimary)', 'margin-top': '12px' }}>
					<div>
						<a size={"small"} onClick={e => { history.push(`${match.path}/404`); }}>404</a>
					</div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{["<ZKException errCode={404} />"].join('\n')}
					</SyntaxHighlighter>
					<div><ZKException errCode={404} /></div>
				</div>
				<div id="500" style={{ 'height': '500px', 'border': '1px solid var(--colorPrimary)', 'margin-top': '12px' }}>
					<div>
						<a size={"small"} onClick={e => { history.push(`${match.path}/500`); }}>500</a>
					</div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{["<ZKException errCode={500} />"].join('\n')}
					</SyntaxHighlighter>
					<div><ZKException errCode={500} /></div>
				</div>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
})

export default injectIntl(FInitExceptionDemo);



