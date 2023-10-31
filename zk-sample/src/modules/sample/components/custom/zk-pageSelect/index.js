/*
* @Author: Vinson
* @Date:   2021-03-21 10:48:28
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-05 11:46:44
* 
* 
* 
*/
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { injectIntl } from 'react-intl';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKPageSelect } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKPageSelectDemo({ intl }) {

	/*

						<ZKPageSelect.Option value="2"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="3"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="4"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="5"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="6"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="7"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="8"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="9"> ts</ZKPageSelect.Option>
						*/

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.pageSelect')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					下拉分页<br />
					<font color = "red">未完成，暂不提供此控件，如像没有多大意义。</font>
					<br />
					<ZKPageSelect>
						<ZKPageSelect.Option value="0"> ts</ZKPageSelect.Option>
						<ZKPageSelect.Option value="1"> ts</ZKPageSelect.Option>
						<div>下一页</div>
					</ZKPageSelect>					
					<br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKPageSelect 组件：<br />
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
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKPageSelectDemo);



