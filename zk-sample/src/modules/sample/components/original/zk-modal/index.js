/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:32:15
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-06 20:09:25
 */

import React from 'react';
import { Spin, Input, Button } from 'antd';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
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
			<div className={styles.sample_detail_panel}>
				<div className={styles.sample_detail_section}>
					<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.modal')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
					<div>
						<Button onClick={this.showModal}>ZKModal</Button>
						<ZKModal title="ZKModal" visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}
						>
							ZKModal
						</ZKModal>
						<br /><br />
						<Button onClick={this.showSpinModal}>ZKModal Spin</Button>
						<ZKModal title="ZKModal Spin" visible={this.state.spinModel}
							onOk={this.handleSpinOk}
							onCancel={this.handleSpinCancel}
						>
							<Spin spinning={this.state.spinModel} >
								<Input />
							</Spin>
						</ZKModal>
					</div>
				</div>
				<div className={styles.sample_detail_section}>
					<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
					<div>
						ZKModal 组件：暂不做处理 <br />
					    原生态封装，接受原生属性。<br /><br />
					</div>
				</div>
				<div className={styles.sample_detail_section}>
					<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
					<div>
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"原生态封装",
							].join('\n')}
						</SyntaxHighlighter>
					</div>
				</div>
				<br />
			</div>
		)
	}
}

export default injectIntl(CInitZKModalDemo);






