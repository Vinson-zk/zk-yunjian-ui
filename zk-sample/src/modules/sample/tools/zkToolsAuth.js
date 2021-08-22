/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 12:29:44
 * @Last Modified by:   Vinson
 * @Last Modified time: 2020-08-14 23:39:43
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const FInitZKToolsAuthDemo = ({ intl, match }) => {

	return (
		<div id = "top" className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_top_affix} >
				<ZKAnchor>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#top`} title="top" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#getTicket`} title="getTicket" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#setTicket`} title="setTicket" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#removeTicket`} title="removeTicket" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#isLogin`} title="isLogin" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#cleanLoginInfo`} title="cleanLoginInfo" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#logout`} title="logout" ></ZKAnchor.Link>
					<ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}#isPublicItem`} title="isPublicItem" ></ZKAnchor.Link>
				</ZKAnchor>
			</div>
			<h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkToolsAuth {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
			<div className={styles.sample_detail_section} >
				<SyntaxHighlighter language='jsx' style={docco}>
					{[
						"一些用户权限处理函数",
						"getTicket         // 取当前用户令牌",
						"setTicket         // 设置当前用户令牌",
						"removeTicket      // 移除当前用户令牌",
						"isLogin           // 判断是否已登录；返回 false 未登录；true 已登录；",
						"cleanLoginInfo    // 清理用户登录信息，可删除用户信息，cookie 等信息",
						"logout            // 登出",
						"isPublicItem      // 判断当前打开的路由地址是否为开放的路由 item",
					].join('\n')}
				</SyntaxHighlighter>
			</div>
			<div className={styles.sample_detail_section} >
				<h2>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
				<div id="getTicket">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/**",
							" * 取当前用户令牌",
							" * @return {string} 用户令牌ID",
							" */",
							"getTicket: f_getTicket() "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="f_setTicket">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/**",
							" * 设置当前用户令牌",
							" * @param {string} tkId 令牌ID",
							" * @return void",
							" */",
							"setTicket: f_setTicket(tkId) "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="removeTicket">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/**",
							" * 移除当前用户令牌",
							" * @return void",
							" */",
							"removeTicket: f_removeTicket() "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="isLogin">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/**",
							" * 判断是否已登录；",
							" * @return {string} 返回 false 未登录；true 已登录；",
							" */",
							"isLogin:f_isLogin() "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="cleanLoginInfo">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/**",
							" * 清理用户登录信息，可删除用户信息，cookie 等信息",
							" * @return void",
							" */",
							"cleanLoginInfo: f_cleanLoginInfo() "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="logout">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** 登出；",
							" * @param {object} match ",
							" * @param {object} history ",
							" * @param {object} location ",
							" * @return: void",
							" */",
							"logout:f_logout() "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="isPublicItem">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/**",
							" * 判断当前打开的路由地址是否为开放的路由 item；",
							" * @param {Array.of(string)} publicItems 开放的路由菜单",
							" * @param {string} currentPath 当前路由地址，注意，不包括路由的 basename",
							" * @return {boolean} 返回 true 是；false 不是；",
							" */",
							"isPublicItem:f_isPublicItem(publicItems, currentPath) "
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
};

export default injectIntl(FInitZKToolsAuthDemo);
