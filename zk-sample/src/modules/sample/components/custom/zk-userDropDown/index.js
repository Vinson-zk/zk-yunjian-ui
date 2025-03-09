/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:29:25
 * @Last Modified by: vinson
 * @Last Modified time: 2025-02-05 16:43:51
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKUserDropDown } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKUserDropDownDemo({ intl }) {

	let optMenuItems = [
    	{
            'key': '_key_add',
            'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_add", null)}</span>,
            'title': zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_add", null)
        },
        {
            'key': '_key_edit',
            'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_edit", null)}</span>,
            'title': zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_edit", null)
        },
        {
            'key': '_key_logout',
            'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_logout", null)}</span>,
            'title': zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_logout", null)
        }
    ];

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.userDropDown')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<div className={styles.sample_detail_section_row_right}>
					<ZKUserDropDown
						user={{}}
						onLogin={() => { console.log('--- onLogin call back - ') }}
					/>
				</div>
				<br />
				<div className={styles.sample_detail_section_row_right}>
					<ZKUserDropDown
						user={{ username: "huaan", nickname: '华安', newMsg: 9 }}
						optMenuItems={optMenuItems}
						onLogin={() => { console.log('--- onLogin call back - ', key) }}
						onNewMsg={(user) => { console.log('--- onNewMsg call back -', user) }}
						onUser={(user) => { console.log('--- onUser call back -', user) }}
						callBack={(optkey, item) => { console.log('--- callBack call back -', optkey, item) }}
					/>
				</div>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKUserDropDown 组件：<br />
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
						<tr><td>user</td><td>false</td><td>当前用户对象</td><td>object</td><td></td></tr>
						<tr><td>user.username</td><td>false</td><td>此属性为空时，做为用户没有登录处理，显示登录按钮</td><td>string</td><td></td></tr>
						<tr><td>user.nickname</td><td>false</td><td>用户已登录时，显示名称</td><td>string</td><td>'global.app.user.nickname' 的国际化信息</td></tr>
						<tr><td>user.newMsg</td><td>false</td><td>新消息数量, 不存时，不显示</td><td>num</td><td></td></tr>
						<tr><td>onLogin</td><td>false</td><td>登录按钮回调</td><td>Function</td><td></td></tr>
						<tr><td>onNewMsg</td><td>false</td><td>新消息点击回调</td><td>Function(user)</td><td></td></tr>
						<tr><td>onUser</td><td>false</td><td>点击用户回调</td><td>Function(user)</td><td></td></tr>
						<tr><td>optMenuItems</td><td>false</td><td>下拉操作的子菜单项，同：Dropdown 的 items </td><td>Array</td><td></td></tr>
						<tr><td>callBack</td><td>false</td><td>操作回调</td><td>Function(optkey, item)；optkey: 下拉操作的子菜单项的key</td><td></td></tr>
					</tbody>
				</table>
				<div style={{ color: 'red' }}>
					注：&nbsp;&nbsp;<br />
				</div>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"参考代码:",
						"<ZKUserDropDown",
						"	user={{}} ",
						"	onLogin={()=>{console.log('--- onLogin call back - ')}} ",
						"/>",
						"<ZKUserDropDown ",
						"	user={{username:\"huaan\", nickname:'华安', newMsg:9}} ",
						"	optMenuItems={optMenuItems}",
						"	onLogin={()=>{console.log('--- onLogin call back - ', key)}} ",
						"	onNewMsg={(user)=>{console.log('--- onNewMsg call back -', user)}} ",
						"	onUser={(user)=>{console.log('--- onUser call back -', user)}}",
						"	callBack={(optkey, item)=>{console.log('--- callBack call back -', optkey, item)}}",
						"/>"
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKUserDropDownDemo);



