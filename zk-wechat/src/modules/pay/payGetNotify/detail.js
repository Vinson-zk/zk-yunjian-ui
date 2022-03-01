/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
 */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal } = ZKOriginalComponents;
const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;

const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;

class CInitPayGetNotifyDetail extends Component {

	// 1、构造函数
	constructor(props) {
		super(props);
		this.state = {};
	}

	// 2、调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
	// static getDerivedStateFromProps(props, state) {
	// 	return true;
	// }

	// 3、更新时调用，此方法仅作为性能优化存在。不要依赖它来“防止”渲染
	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log("[^_^:20181207-1800-002] CInitE1_Detail -> shouldComponentUpdate ", 
	// 		(this.props.location == nextProps.location)) 
	// 	return true;
	// }

	/** 返回 JSX 元素 */
	render() {

		let { mApp, mPayGetNotify, intl, loading } = this.props;
		let { optEntity = {} } = mPayGetNotify;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = loading.effects['mPayGetNotify/getPayGetNotify'];

		return (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.payOrderPkId')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.payOrderPkId}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxWechatpayTimestam')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxWechatpayTimestam}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxWechatpayNonce')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxWechatpayNonce}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxWechatpaySerial')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxWechatpaySerial}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxBody')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxBody}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.disposeStatus')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.disposeStatus==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.resource')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							<ZKInputJson disabled styleType="compact" value={optEntity.resource?optEntity.resource:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.signature')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.signature}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
				</ZKDetailGrid>
			</ZKSpin>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, match, mPayGetNotify } = this.props;
		let { params } = match;
		// 第一次进来或地址栏改变了 
		if (mPayGetNotify.pathname != location.pathname ) {
			let optEntity = location.state ? location.state.optEntity : {};
			if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
				dispatch({ type: 'mPayGetNotify/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
			} else {
				dispatch({ type: 'mPayGetNotify/setState', payload: { pathname: location.pathname } });
				dispatch({ type: 'mPayGetNotify/getPayGetNotify', payload: { pkId: params.pkId } });
			}
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mPayGetNotify, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mPayGetNotify]);
    }
}

export default injectIntl(connect(({ mApp, mPayGetNotify, loading }) => ({ mApp, mPayGetNotify, loading }))(CInitPayGetNotifyDetail));