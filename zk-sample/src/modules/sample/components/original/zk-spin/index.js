/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:33:25
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 22:29:01
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import stylesSample from "../../../styles.less";
import styles from "./styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKSpin, ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function InitZKSpinDemo({ intl }) {
	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.spin')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				原生态封装 <br /><br />
				<ZKButton>按就按把，按得到</ZKButton> 
				<br /><br />
				<ZKSpin >
					<div className={styles.mask_sample_detail_panel}>
						<ZKButton>您按不到</ZKButton>
					</div>
				</ZKSpin>
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKSpin 组件：暂不做处理<br />
				原生态封装，接受原生属性。<br /><br />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"原生态封装",
						'<ZKSpin >',
						'  <div className = { styles.mask_sample_detail_panel }>',
						'    原生态封装 <br /><br />',
						'    <ZKButton>您按不到</ZKButton>',
						'  </div>',
						'</ZKSpin>',
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(InitZKSpinDemo);


