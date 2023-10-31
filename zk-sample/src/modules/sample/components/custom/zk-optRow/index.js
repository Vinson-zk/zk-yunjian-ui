/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:27:19
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:44
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { Button } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import locales from '../../../../../locales/sample/index.js';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKOptRow, ZKIcon } = ZKCustomComponents;
const { ZKPopconfirm } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const { OptGroup:ZKOptGroup } = ZKOptRow;
const { OptItem:ZKOptItem } = ZKOptGroup;

// console.log("[^_^:20200816-1853-001] : FInitZKOptRowDemo", ZKOptGroup);
// FlagOutlined

function FInitZKOptRowDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel} >
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.optRow')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					1 ------------------------------------------------------------------
					<div className={styles.sample_detail_section_row} >
						1.1、ZKOptRow 为：空
				  		<ZKOptRow />
					</div>
					<div className={styles.sample_detail_section_row} >
						1.2、ZKOptRow 为：字符串
				  		<ZKOptRow >dsfs</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						1.3、ZKOptRow 为：空数组
				  		<ZKOptRow >{[]}</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						1.4、ZKOptRow 为：字符串数组
				        <ZKOptRow>{["undefined"]}</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						1.5、ZKOptRow 为：为：undefined
				  		<ZKOptRow>undefined</ZKOptRow>
					</div>
			  		2 ------------------------------------------------------------------
				    <br />
					<div className={styles.sample_detail_section_row} > 
						2.1、OptGroup 为：空
		    			<ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('---------', obj) }}>
							<ZKOptRow.OptGroup></ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						2.2、OptGroup 为：sdf
				  		<ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('---------', obj) }}>
							<ZKOptRow.OptGroup>sdf</ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						2.3、OptGroup 为：空数组
				  		<ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('---------', obj) }}>
							<ZKOptRow.OptGroup>{[]}</ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						2.4、OptGroup 为：字符串数组
				        <ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('---------', obj) }}>
							<ZKOptRow.OptGroup>{['undefind']}</ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >5、OptGroup 为：undefined
				          		<ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('---------', obj) }}>
							<ZKOptRow.OptGroup>undefined</ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
			      	3 ------------------------------------------------------------------
				    <br />
					<div className={styles.sample_detail_section_row} >
						3.1、同时有：多个 OptGroup 和 多个 OptGroup.OptItem
				        <ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('--------- languageChangeFunc ', obj) }}>
							<ZKOptRow.OptGroup isAutoPurseUp={true}>
								<ZKOptRow.OptGroup.OptItem icon = "FormOutlined" onClick={(e) => { console.log('----- g0-测试1 ', e) }} >
									g0-测试1
								</ZKOptRow.OptGroup.OptItem>
								<ZKOptRow.OptGroup.OptItem children = "g0-测试2" onClick={(e) => { console.log('----- g0-测试2 ', e) }} />
							</ZKOptRow.OptGroup>
							<ZKOptRow.OptGroup.OptItem icon = "FormOutlined" children="ng-测试1" onClick={(e) => { console.log('----- ng-测试1', e) }} />
							<ZKOptRow.OptGroup.OptItem children="ng-测试2" onClick={(e) => { console.log('----- ng-测试2', e) }} />
							<ZKOptRow.OptGroup.OptItem isExpand={false} icon = "FormOutlined" children="ng-测试3" onClick={(e) => { console.log('----- ng-测试3 ', e) }} />
							<ZKOptRow.OptGroup.OptItem children="ng-测试4" onClick={(e) => { console.log('----- ng-测试4', e) }} />
							<ZKOptRow.OptGroup.OptItem isExpand={false} icon = "FormOutlined" children="ng-测试5" onClick={(e) => { console.log('----- ng-测试5 ', e) }} />
							<ZKOptRow.OptGroup.OptItem isExpand={false} children="ng-测试6" onClick={(e) => { console.log('----- ng-测试6 ', e) }} />
							<ZKOptRow.OptGroup >
								<ZKOptRow.OptGroup.OptItem icon = "FormOutlined" onClick={(e) => { console.log('----- g1-0-edit', e) }} />
								<ZKOptRow.OptGroup.OptItem isExpand={false} children="g1-测试2" onClick={(e) => { console.log('----- g1-测试2', e) }} />
								<ZKOptRow.OptGroup.OptItem isExpand={false} children="g1-测试3" onClick={(e) => { console.log('----- g1-测试3', e) }} />
							</ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						3.2、多个 OptGroup
				        <ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('---------', obj) }}>
							<ZKOptRow.OptGroup >
								<ZKOptRow.OptGroup.OptItem icon = "FormOutlined" onClick={(e) => { console.log('----- ', e) }} />
								<ZKOptRow.OptGroup.OptItem children="测试2" onClick={(e) => { console.log('----- ', e) }} />
							</ZKOptRow.OptGroup>
							<ZKOptRow.OptGroup isAutoPurseUp={true}>
								<ZKOptRow.OptGroup.OptItem icon = "FormOutlined" children="测试1" onClick={(e) => { console.log('----- ', e) }} />
								<ZKOptRow.OptGroup.OptItem children="测试2" onClick={(e) => { console.log('----- ', e) }} />
							</ZKOptRow.OptGroup>
							<ZKOptRow.OptGroup>
								<ZKOptRow.OptGroup.OptItem isExpand={false} icon = "FormOutlined" children="测试1" onClick={(e) => { console.log('----- ', e) }} />
								<ZKOptRow.OptGroup.OptItem children="测试2" onClick={(e) => { console.log('----- ', e) }} />
							</ZKOptRow.OptGroup>
							<ZKOptRow.OptGroup>
								<ZKOptRow.OptGroup.OptItem isExpand={false} icon = "FormOutlined" children="测试1" onClick={(e) => { console.log('----- ', e) }} />
								<ZKOptRow.OptGroup.OptItem isExpand={false} children="测试2" onClick={(e) => { console.log('----- ', e) }} />
							</ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						3.3、1个 OptGroup
				        <ZKOptRow locales={locales} languageChangeFunc={(obj) => { console.log('---------', obj) }}>
							<ZKOptRow.OptGroup >
								<ZKOptRow.OptGroup.OptItem icon = "FormOutlined" onClick={(e) => { console.log('----- 1个 OptGroup  ', e) }} />
							</ZKOptRow.OptGroup>
						</ZKOptRow>
					</div>
					<div className={styles.sample_detail_section_row} >
						3.4、测试 OptGroup, OptItem 摆放顺序
				        <ZKOptRow>
							<ZKPopconfirm type="delete" >
								<ZKOptItem icon = "DeleteOutlined">delete no-1</ZKOptItem>
							</ZKPopconfirm>
							<ZKOptGroup>
								<ZKOptItem>
									<ZKPopconfirm type="delete" onConfirm={(e) => { console.log('----- delete g1-1 ', e) }} >
										<Button>delete g1-1</Button>
									</ZKPopconfirm>
								</ZKOptItem>
								<ZKOptItem isExpand={false} >
									<ZKPopconfirm type="delete" onConfirm={(e) => { console.log('----- delete g1-2 ', e) }} >delete g1-2</ZKPopconfirm>
								</ZKOptItem>
								<ZKPopconfirm type="delete" onConfirm={(e) => { console.log('----- delete g1-3 ', e) }} >
									<ZKOptItem icon = "DeleteOutlined">delete g1-3</ZKOptItem>
								</ZKPopconfirm>
								<ZKOptItem isExpand={false} >
									<ZKPopconfirm type="delete" onConfirm={(e) => { console.log('----- delete g1-4 ', e) }} >
										<ZKOptItem>delete g1-4</ZKOptItem>
									</ZKPopconfirm>
								</ZKOptItem>
								<ZKOptItem isExpand={false} >
									<ZKPopconfirm type="delete" onConfirm={(e) => { console.log('----- delete g1-5 ', e) }} >
										<Button>delete g1-5</Button>
									</ZKPopconfirm>
								</ZKOptItem>
							</ZKOptGroup>
							<ZKOptItem children="OptItem-测试1" onClick={(e) => { console.log('----- 1个 OptItem -测试2', e) }} />
							<ZKOptItem isExpand={false} children="OptItem-测试2" onClick={(e) => { console.log('----- 1个 OptItem -测试2', e) }} />
							<ZKOptItem children="OptItem-测试3" onClick={(e) => { console.log('----- 1个 OptItem -测试2', e) }} />
							<ZKPopconfirm type="delete" >
								<ZKOptItem icon = "DeleteOutlined">delete no-2</ZKOptItem>
							</ZKPopconfirm>
						</ZKOptRow>
					</div>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKOptRow, 引入操作行;
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
								<td>locales</td>
								<td>true</td>
								<td>国际化语言信息数据</td>
								<td>PropTypes.object</td>
								<td></td>
							</tr>
							<tr>
								<td>lang</td>
								<td>false</td>
								<td>默认的编辑语言</td>
								<td>PropTypes.string</td>
								<td>zh_CN</td>
							</tr>
							<tr>
								<td>languageChangeFunc</td>
								<td>false</td>
								<td>编辑语言选择回调函数，不传不显示编辑语言选择器，回调时将语言标识做为参数传出：Function(lang) </td>
								<td>PropTypes.func</td>
								<td></td>
							</tr>
							<tr>
								<td>children</td>
								<td>false</td>
								<td>子节点</td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<br />
					OptGroup, 引入操作组;
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
								<td>isAutoPurseUp</td>
								<td>false</td>
								<td>组内操作是否自动收拢操作？默认为否；设置为 true 将忽略 操作 Item 中的展开属性设置</td>
								<td>PropTypes.bool</td>
								<td>false</td>
							</tr>
							<tr>
								<td>children</td>
								<td>false</td>
								<td>子节点 只会处理 OptGroup.OptItem </td>
								<td>OptGroup.OptItem</td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<br />
					OptItem, 引入操作项;
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
								<td>isExpand</td>
								<td>false</td>
								<td>组内操作是否展开，默认展开</td>
								<td>PropTypes.bool</td>
								<td>true</td>
							</tr>
							<tr>
								<td>onClick</td>
								<td>false</td>
								<td>操作回调；item.props.onClick.call(this, e)</td>
								<td>PropTypes.func</td>
								<td></td>
							</tr>
							<tr>
								<td>icon</td>
								<td>false</td>
								<td>操作图标</td>
								<td>PropTypes.string</td>
								<td></td>
							</tr>
							<tr>
								<td>children</td>
								<td>非展开时 必须</td>
								<td>字符串，操作名; 如果为字符串时，会加上 button 来包装。</td>
								<td>PropTypes.string</td>
								<td></td>
							</tr>
							<tr>
								<td>其他</td>
								<td>false</td>
								<td>在展开操作时，所有 原生态 Button 的属性都有效 </td>
								<td>PropTypes.string</td>
								<td></td>
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
							"// 参见样例源码",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKOptRowDemo);







