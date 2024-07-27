/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:32:15
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 22:04:36
 */

import React from 'react';
import { Spin, Input, Button } from 'antd';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKModal } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

class CInitZKModalDemo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			visible: false,
			spinModel: false,
			wrapperSpin: false,
		}
	}

	showModal = ()=>{
		this.setState({ visible: true });
	}
	handleOk = (e)=>{
		console.log(e);
		this.setState({ visible: false });
	}
	handleCancel = (e)=>{
		console.log(e);
		this.setState({ visible: false });
	}

	showSpinModal = ()=>{
		this.setState({ spinModel: true });
	}
	handleSpinOk = (e)=>{
		console.log(e);
		this.setState({ spinModel: false });
	}
	handleSpinCancel = (e)=>{
		console.log(e);
		this.setState({ spinModel: false });
	}

	showWrapperModal = ()=>{
		this.setState({ wrapperSpin: true });
	}
	handleWrapperOk = (e)=>{
		console.log(e);
		this.setState({ wrapperSpin: false });
	}
	handleWrapperCancel = (e)=>{
		console.log(e);
		this.setState({ wrapperSpin: false });
	}

	render() {

		let { intl } = this.props;
		return (
			<ZKContentFormat className={styles.sample_detail_panel} >
				<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.modal')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
					<Button onClick={this.showModal}>ZKModal</Button>
					<ZKModal title="ZKModal" open={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
					>
						ZKModal
					</ZKModal>
					<br /><br />
					<Button onClick={this.showSpinModal}>ZKModal Spin</Button>
					<ZKModal title="ZKModal Spin" open={this.state.spinModel}
						onOk={this.handleSpinOk}
						onCancel={this.handleSpinCancel}
					>
						<Spin spinning={this.state.spinModel} >
							<Input />
						</Spin>
					</ZKModal>
				</ZKContentFormat>
				<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
					ZKModal 组件：暂不做处理 <br />
					原生态封装，接受原生属性。<br /><br />
					<ZKContentFormat title = {`ZKModal 成员 ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
						<table className={styles.sample_detail_section_table}>
							<thead>
								<tr>
	                                <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.column.name')}</th>
	                                <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
	                                <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
	                            </tr>
							</thead>
							<tbody>
								<tr>
									<td>staticFunc</td>
									<td>Antd App.useApp() 的对象，为实现动态主题；</td>
									<td>PropTypes.func</td>
								</tr>
								<tr>
									<td>message</td>
									<td>App.useApp().message 的对象，为实现动态主题；</td>
									<td>PropTypes.func</td>
								</tr>
								<tr>
									<td>modal</td>
									<td>App.useApp().modal 的对象，为实现动态主题；</td>
									<td>PropTypes.func</td>
								</tr>
								<tr>
									<td>notification</td>
									<td>App.useApp().notification 的对象，为实现动态主题；</td>
									<td>PropTypes.func</td>
								</tr>

								<tr>
									<td>success</td>
									<td>同 Modal.success，但实现了动态主题</td>
									<td>PropTypes.func</td>
								</tr>
								<tr>
									<td>warning</td>
									<td>同 Modal.warning，但实现了动态主题</td>
									<td>PropTypes.func</td>
								</tr>
								<tr>
									<td>error</td>
									<td>同 Modal.error，但实现了动态主题</td>
									<td>PropTypes.func</td>
								</tr>
								<tr>
									<td>confirm</td>
									<td>同 Modal.confirm，但实现了动态主题</td>
									<td>PropTypes.func</td>
								</tr>
								<tr>
									<td>info</td>
									<td>同 Modal.info，但实现了动态主题</td>
									<td>PropTypes.func</td>
								</tr>
							</tbody>
						</table>
						</ZKContentFormat>
					<br />
				</ZKContentFormat>
				<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"原生态封装",
						].join('\n')}
					</SyntaxHighlighter>
				</ZKContentFormat>
				<br />
			</ZKContentFormat>
		)
	}
}

export default injectIntl(CInitZKModalDemo);






