/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:23:07
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:43
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { Row, Col } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKDetailGrid } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKDetailGridDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel} >
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.detailGrid')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<ZKDetailGrid>
					<Row>
						<Col>原生 Row, 原生 Col</Col>
					</Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>标签: </ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>👈</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>内容值: </ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>👉🏻</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>
				</ZKDetailGrid>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKDetailGrid, &nbsp;&nbsp;ZKDetailGrid.Row, &nbsp;&nbsp;ZKDetailGrid.ColLabel, &nbsp;&nbsp;ZKDetailGrid.ColValue &nbsp;&nbsp;组件：<br />
					<div style={{ color: 'red' }}>注：这些封装就是给 原生 Row, 原生 Col 定义了一些默认值；</div>
					<table className={styles.sample_detail_section_table}>
						<thead>
							<tr>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>title</td>
								<td>ZKDetailGrid 的 属性，传入空值时，不显示；默认：空值</td>
							</tr>
							<tr>
								<td>ZKDetailGrid</td>
								<td>自定义组件，可接受组件 原生 Row, 原生 Col, ZKRow, ZKCol</td>
							</tr>
							<tr>
								<td>TitleRow</td>
								<td>自定义组件，</td>
							</tr>
							<tr>
								<td>TitleRow.Title</td>
								<td>自定义组件，</td>
							</tr>
							<tr>
								<td>TitleRow.Opt</td>
								<td>自定义组件，</td>
							</tr>
							<tr>
								<td>ZKDetailGrid.Row</td>
								<td>行；接受 Row 原生属性</td>
							</tr>
							<tr>
								<td>ZKDetailGrid.ColLabel</td>
								<td>左边列：接受 Col 原生属性; 默认占 3 格，偏移 2 格</td>
							</tr>
							<tr>
								<td>ZKDetailGrid.ColValue</td>
								<td>右边列：接受 Col 原生属性; 默认占 5格，偏移 0 格</td>
							</tr>
						</tbody>
					</table>
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

export default injectIntl(FInitZKDetailGridDemo);







