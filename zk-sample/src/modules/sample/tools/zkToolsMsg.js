/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:30:13
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-03 15:05:10
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { Button, Anchor } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

class CInitZKToolsMsgDemo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			msg: "", // 字符串中参数替换时做显示用
		}
	}

	render() {
		let { intl, match, location } = this.props;

		console.log("----- ", match, location);

		return (
			<div className={styles.sample_detail_panel}>
				<div className={styles.sample_detail_top_affix} >
					<ZKAnchor>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#getLocale`} title="getLocale" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#setLocale`} title="getLocale" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#getInternationInfo`} title="getInternationInfo" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#msgFormatByLocales`} title="msgFormatByLocales" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#msgFormatByIntl`} title="msgFormatByIntl" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#msgFormat`} title="msgFormat" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#alertMsg`} title="alertMsg" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#alertModalMsg`} title="alertModalMsg" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#alertMsgByType`} title="alertMsgByType" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#mergeLocalMsgs`} title="mergeLocalMsgs" ></ZKAnchor.Link>
						<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#makeFormFieldsErrorsByMapaData`} title="makeFormFieldsErrorsByMapaData" ></ZKAnchor.Link>
					</ZKAnchor>
				</div>
				<h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkToolsMsg {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h1>
				<div className={styles.sample_detail_section}>
					<font style={{ color: 'red' }}>目的，为了统一提示内容、操作方式、按钮名称；消息的类型可根据需求继续添加实现；</font><br /><br />
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"getLocale             // 取当前国际化语言环境标识 ",
							"setLocale             // 设置当前国际化语言环境标识 ",
							"getInternationInfo    // 从对象中取国际化信息 ",
							"msgFormatByLocales    // 消息国际化, 不建议使用，建议使用 msgFormatIntl ",
							"msgFormatByIntl       // 消息国际化 ",
							"msgFormat             // 消息国际化 ",
							"alertMsg              // 弹出提示消息 ",
							"alertModalMsg         // 模态提示消息 ",
							"alertMsgByType        // 按类型提示消息 ",
							"mergeLocalMsgs        // 合并国际化信息 ",
							"makeFormFieldsErrorsByMapaData // 制作 antd form 对象的字段错误信息；根据响应的字段验证错误信息的 map 制作；",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div className={styles.sample_detail_section}>
					<h2>方法&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
					<div id="getLocale">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 取当前国际化语言环境标识",
								" * @return {string}  返回浏览器本地存储的国际化语言代码；默认为：zh-CN",
								" */",
								"getLocale: f_getLocale(intl) "
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="setLocale">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 设置当前国际化语言环境标识",
								" * @param {string} lang 目标国际标识",
								" * @return void",
								" */",
								"setLocale: f_setLocale(lang)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="getInternationInfo">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 从指定对象中取国际化信息；",
								" * @param {object/string} obj 对象，或对象的 json 字符串；",
								" * @param {string} lang 指定的语言标识；不传时，默认取当前语言标识；",
								" * @return {string} 对应该国际化信息",
								" */",
								"getInternationInfo: f_getInternationInfo(obj, lang)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="msgFormatByLocales">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 消息国际化；",
								" * @param {object} locales 项目国际化语言对象；",
								" * @param {string} id 消息ID",
								" * @param {object} opt 消息其他替换参数对象; 示例：opt = {key1:value}, msg = 'msg-{key1}'; 会替换掉为：msg-value",
								" * @return {string} 对应国际化消息",
								" */",
								"msgFormatByLocales: f_msgFormatByLocales(locales = null, id, opt)"
							].join('\n')}
						</SyntaxHighlighter>
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
									<td>false</td>
									<td>国际化消息数据对象；</td>
									<td>Object</td>
									<td>null</td>
								</tr>
								<tr>
									<td>id</td>
									<td>true</td>
									<td>国际化信息配置的 key</td>
									<td>String</td>
									<td>无</td>
								</tr>
								<tr>
									<td>opt</td>
									<td>false</td>
									<td>消息国际化时需要替换的参数; 在配置的 key 对应的值中，用 {"{ opt 的属性名称 }"} 来配置需要替换的参数</td>
									<td>Object</td>
									<td>{"{}"}</td>
								</tr>
							</tbody>
						</table>
						<br />
						<font style={{ color: 'red' }}>State msg: {this.state.msg}</font><br />
						<Button onClick={e => {
							let msg = zkToolsMsg.msgFormatByLocales(null, "_key.异常ID");
							this.setState({ msg: 'msgFormatByLocales id -> ' + msg });
						}}>msgFormatByLocales 国际化异常; id:'_key.异常ID'</Button>
						<br /><br />
					</div>
					<div id="msgFormatByIntl">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 消息国际化；",
								" * @param {object} intl react-intl injectIntl 国际化对象;",
								" * @param {string} id 消息ID",
								" * @param {object} opt 消息其他替换参数对象 ",
								" * @return {string} 对应国际化消息",
								" */",
								"msgFormatByIntl: f_msgFormatByIntl(intl = null, id, opt)"
							].join('\n')}
						</SyntaxHighlighter>
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
									<td>intl</td>
									<td>false</td>
									<td>react-intl injectIntl 国际化对象;</td>
									<td>Object</td>
									<td>null</td>
								</tr>
								<tr>
									<td>id</td>
									<td>true</td>
									<td>国际化信息配置的 key</td>
									<td>String</td>
									<td>无</td>
								</tr>
								<tr>
									<td>opt</td>
									<td>false</td>
									<td>消息国际化时需要替换的参数; 在配置的 key 对应的值中，用 {"{ + opt 中属性名称 + }"} 来配置需要替换的参数</td>
									<td>Object</td>
									<td>{"{}"}</td>
								</tr>
							</tbody>
						</table>
						<font style={{ color: 'red' }}>State msg: {this.state.msg}</font><br />
						<Button onClick={e => {
							let msg = zkToolsMsg.msgFormatByIntl(intl, "_key.异常ID");
							this.setState({ msg: 'msgFormatByIntl id -> ' + msg });
						}}>msgFormatByIntl 国际化异常; id:'_key.异常ID'</Button>
						<br /><br />
					</div>
					<div id="msgFormat">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 消息国际化；优先从 intl 对象国际化；",
								" * 调用的 msgFormatByIntl 与 msgFormatByLocales 两方法来实现",
								" * @param {object} intl react-intl injectIntl 国际化对象;",
								" * @param {object} locales 项目国际化语言对象；",
								" * @param {string} id 消息ID",
								" * @param {object} opt 消息其他替换参数对象; 示例：opt = {key1:value}, msg = 'msg-{key1}'; 会替换掉为：msg-value",
								" * @return {string} 国际化消息",
								" */",
								"msgFormat: f_msgFormat(intl = null, locales = null, id, opt)"
							].join('\n')}
						</SyntaxHighlighter>
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
									<td>intl</td>
									<td>false</td>
									<td>react-intl injectIntl 国际化对象;</td>
									<td>Object</td>
									<td>null</td>
								</tr>
								<tr>
									<td>locales</td>
									<td>false</td>
									<td>国际化消息数据对象；</td>
									<td>Object</td>
									<td>null</td>
								</tr>
								<tr>
									<td>id</td>
									<td>true</td>
									<td>国际化信息配置的 key</td>
									<td>String</td>
									<td>无</td>
								</tr>
								<tr>
									<td>opt</td>
									<td>false</td>
									<td>消息国际化时需要替换的参数; 在配置的 key 对应的值中，用 {"{ + opt 中属性名称 + }"} 来配置需要替换的参数</td>
									<td>Object</td>
									<td>{"{}"}</td>
								</tr>
							</tbody>
						</table>
						<font style={{ color: 'red' }}>State msg: {this.state.msg}</font><br />
						<Button onClick={e => {
							let msg = zkToolsMsg.msgFormat(this.props.intl, null, "_key.异常ID");
							this.setState({ msg: 'msgFormat id -> ' + msg});
						}}> msgFormat 国际化异常; id:'_key.异常ID'</Button>
						<br /><br />
					</div>
					<div id="alertMsg">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 弹出提示消息; 目的，为了统一提示的一些操作方式",
								" * @param {object} intl react-intl injectIntl 国际化对象; opt 中包含消息 msg 时，不会被使用到；",
								" * @param {object} locales 项目国际化语言对象；opt.msg 有值时，不会被使用到；传入这个参数，是为了 opt.msg 未传入时可以统一重写；会优先使用 intl；",
								" * @param {object} opt 消息对象，{type:['success', 'info', 'warning', 'error', 'loading'], msg:'msg 国际化消息', duration:3[提示时长 默认 3秒], onClose:关闭回调}",
								" * @return void",
								" */",
								"alertMsg: f_alertMsg(intl = null, locales = null, opt)"
							].join('\n')}
						</SyntaxHighlighter>
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
									<td>intl</td>
									<td>false</td>
									<td>react-intl injectIntl 国际化对象; </td>
									<td>Object</td>
									<td>无</td>
								</tr>
								<tr>
									<td>locales</td>
									<td>false</td>
									<td>国际化消息数据对象；会优先使用 intl；</td>
									<td>Object</td>
									<td>null</td>
								</tr>
								<tr>
									<td>opt</td>
									<td>true</td>
									<td>消息对象</td>
									<td>Object</td>
									<td>无</td>
								</tr>
								<tr>
									<td>opt.type</td>
									<td>false</td>
									<td>消息类型; ['success', 'info', 'warning', 'error', 'loading']</td>
									<td>String</td>
									<td>info</td>
								</tr>
								<tr>
									<td>opt.msg</td>
									<td>false</td>
									<td>提示消息内容</td>
									<td>String</td>
									<td>key "global.app.msg.{'${opt.type}'}" 配置的国际化值</td>
								</tr>
								<tr>
									<td>opt.duration</td>
									<td>false</td>
									<td>提示显示的时长，单位秒；</td>
									<td>Number</td>
									<td>1.5</td>
								</tr>
								<tr>
									<td>opt.onClose</td>
									<td>false</td>
									<td>提示关闭时的回调；</td>
									<td>Function</td>
									<td>无</td>
								</tr>
							</tbody>
						</table>
						<br />
						<Button onClick={e => { zkToolsMsg.alertMsg(null, null, { type: 'success', msg: "成功，需要国际化再传入" }) }}>success</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(intl, null, { type: 'info', msg: "info，需要国际化再传入" }) }}>info</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(null, null, { type: 'warning', msg: "警告，需要国际化再传入" }) }}>warning</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(null, null, { type: 'error', msg: "失败，需要国际化再传入" }) }}>error</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(null, null, { type: 'loading', msg: "loading，需要国际化再传入" }) }}>loading</Button>&nbsp;&nbsp;
						<br /><br />
						<Button onClick={e => { zkToolsMsg.alertMsg(intl, null, { type: 'success' }) }}>success default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(intl, null, { type: 'info', msg: null }) }}>info default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(intl, null, { type: 'warning', msg: "" }) }}>warning default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(intl, null, { type: 'error' }) }}>error default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsg(intl, null, { type: 'loading' }) }}>loading default</Button>&nbsp;&nbsp;
						<br /><br />
					</div>
					<div id="alertModalMsg">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 弹出提示框提示消息; 目的，为了统一提示的一些操作方式，及标题、按钮内容",
								" * @param intl react-intl injectIntl 国际化对象; 与 locales 两者传入一个即可；",
								" * @param locales 项目国际化语言对象；会优先使用 intl；",
								" * @param opt @opt: 消息对象，{type:['success', 'info', 'warning', 'error', 'confirm'], msg:'msg 国际化消息', ...其他与原生 Modal.method() 参数一样}",
								" * @return void",
								" */",
								"alertModalMsg: f_alertModalMsg(intl = null, locales = null, opt)"
							].join('\n')}
						</SyntaxHighlighter>
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
									<td>intl</td>
									<td>false</td>
									<td>react-intl injectIntl 国际化对象; 与 locales 两者传入一个即可；</td>
									<td>Object</td>
									<td>无</td>
								</tr>
								<tr>
									<td>locales</td>
									<td>false</td>
									<td>国际化消息数据对象；会优先使用 intl；</td>
									<td>Object</td>
									<td>null</td>
								</tr>
								<tr>
									<td>opt</td>
									<td>true</td>
									<td>消息对象; 可接收原生 Modal.method() 参数</td>
									<td>Object</td>
									<td>无</td>
								</tr>
								<tr>
									<td>opt.type</td>
									<td>false</td>
									<td>消息类型; ['success', 'info', 'warning', 'error', 'confirm']</td>
									<td>String</td>
									<td>info</td>
								</tr>
								<tr>
									<td>opt.msg</td>
									<td>false</td>
									<td>提示消息内容</td>
									<td>String</td>
									<td>key "global.app.msg.error" 配置的国际化值</td>
								</tr>
								<tr>
									<td>opt.okText</td>
									<td>false</td>
									<td>确定按钮名称；</td>
									<td>String</td>
									<td>key "global.popconfirm.name.okText" 配置的国际化值</td>
								</tr>
								<tr>
									<td>opt.cancelText</td>
									<td>false</td>
									<td>取消按钮名称；</td>
									<td>String</td>
									<td>key "global.popconfirm.name.cancelText" 配置的国际化值</td>
								</tr>
							</tbody>
						</table>
						<br />
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'success', msg: "成功，需要国际化再传入" }) }}>success</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'info', msg: "info，需要国际化再传入" }) }}>info</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'warning', msg: "警告，需要国际化再传入" }) }}>warning</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'error', msg: "失败，需要国际化再传入" }) }}>error</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'confirm', msg: "confirm，需要国际化再传入" }) }}>confirm</Button>&nbsp;&nbsp;
						<br /><br />
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'success' }) }}>success default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'info', msg: "" }) }}>info default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'warning', msg: null }) }}>warning default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'error' }) }}>error default</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertModalMsg(intl, null, { type: 'confirm' }) }}>confirm default</Button>&nbsp;&nbsp;
						<br /><br />
					</div>
					<div id="alertMsgByType">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 按类型提示消息; 目标是为了统一提示内容，如果是 modalMsg 会返回 modal 对象",
								" * @param {object} intl react-intl injectIntl 国际化对象; 与 locales 两者传入一个即可；",
								" * @param {object} locales 项目国际化语言对象；会优先使用 intl；",
								" * @param {string} type ['selectData', 'selectDataAlert', 'editExit', 'editReset', 'delConfirm']",
								" * @param {string} onOk 确认回调",
								" * @param {string} onCancel 取消回调",
								" * @return void",
								" */",
								"alertMsgByType: f_alertMsgByType(intl = null, locales = null, type, onOk, onCancel)"
							].join('\n')}
						</SyntaxHighlighter>
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
									<td>intl</td>
									<td>false</td>
									<td>react-intl injectIntl 国际化对象; 与 locales 两者传入一个即可；</td>
									<td>Object</td>
									<td>无</td>
								</tr>
								<tr>
									<td>locales</td>
									<td>false</td>
									<td>国际化消息数据对象；会优先使用 intl；</td>
									<td>Object</td>
									<td>null</td>
								</tr>
								<tr>
									<td>type</td>
									<td>true</td>
									<td>消息类型; ['selectData', 'selectDataAlert', 'editExit', 'editReset', 'delConfirm']</td>
									<td>String</td>
									<td>无</td>
								</tr>
								<tr>
									<td>onOk</td>
									<td>false</td>
									<td>提示中如有确定按钮时，点击确定按钮回调函数；</td>
									<td>Function</td>
									<td>无</td>
								</tr>
								<tr>
									<td>onCancel</td>
									<td>false</td>
									<td>提示中如有取消按钮时，点击取消按钮回调函数；</td>
									<td>Function</td>
									<td>无</td>
								</tr>
							</tbody>
						</table>
						<br />
						<Button onClick={e => { zkToolsMsg.alertMsgByType(intl, null, 'selectData') }}>selectData</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsgByType(intl, null, 'selectDataAlert') }}>selectDataAlert</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsgByType(intl, null, 'editExit') }}>editExit</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsgByType(intl, null, 'editReset') }}>editReset</Button>&nbsp;&nbsp;
						<Button onClick={e => { zkToolsMsg.alertMsgByType(intl, null, 'delConfirm') }}>delConfirm</Button>&nbsp;&nbsp;
						<br /><br />
						type 支持的类型及说明！
						<table className={styles.sample_detail_section_table}>
							<thead>
								<tr>
									<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
									<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
								</tr>
							</thead>
							<tbody>
								<tr><td>selectData</td><td>请选择数据</td></tr>
								<tr><td>selectDataAlert</td><td>请选择数据 弹出</td></tr>
								<tr><td>editExit</td><td>退出编辑</td></tr>
								<tr><td>editReset</td><td>编辑内容重置</td></tr>
								<tr><td>delConfirm</td><td>删除确认</td></tr>
							</tbody>
						</table>
						<br />
					</div>
					<div id="mergeLocalMsgs">
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 合并国际化信息; 主要合并国际化对象中的 messages 属性信息；其他属性存时不处理；不存在时，会赋值记录下来；",
								" * localLanguageDatas 中后出现的 messages 不会覆盖前面的 messages；",
								" * @param {Array.of(object)} localLanguageDatas 需要合并的国际化信息数组;",
								" * @return {object} 返回合并后国际化信息",
								" */",
								"mergeLocalMsgs: f_mergeLocalMsgs(localLanguageDatas)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="makeFormFieldsErrorsByMapaData">
					<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"/** ",
								" * 制作 antd form 对象的字段错误信息；根据响应的字段验证错误信息的 map 制作；",
								" * @param {object} mapData 返回响应的 字段验证错误信息的 map 对象；",
								" * @return {object} form 对象的字段错误信息 对象",
								" */",
								"makeFormFieldsErrorsByMapaData:f_makeFormFieldsErrorsByMapaData(mapData)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
				</div>
				<br />
			</div>
		)
	}
}

export default injectIntl(CInitZKToolsMsgDemo);


