/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:33:25
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:41
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import stylesSample from "../../../styles.less";
import styles from "./styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKButton } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function InitZKSpinDemo({ intl }) {
	return (
		<div className={stylesSample.sample_detail_panel}>
			<div className={stylesSample.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.spin')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					原生态封装 <br /><br />
					<ZKButton>按就按把，按得到</ZKButton> 
					<br /><br />
					<ZKSpin >
						<div className={styles.mask_sample_detail_panel}>
							<ZKButton>您按不到</ZKButton>
						</div>
					</ZKSpin>
				</div>
			</div>
			<div className={stylesSample.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKSpin 组件：暂不做处理<br />
				    原生态封装，接受原生属性。<br /><br />
				</div>
			</div>
			<div className={stylesSample.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
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
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(InitZKSpinDemo);


