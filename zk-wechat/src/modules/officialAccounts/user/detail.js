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

class CInitOfficialAccountsUserDetail extends Component {

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

		let { mApp, mOfficialAccountsUser, intl, loading } = this.props;
		let { optEntity = {} } = mOfficialAccountsUser;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = loading.effects['mOfficialAccountsUser/getOfficialAccountsUser'];

		return (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.dataSpacePlatform')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.dataSpacePlatform}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.dataSpaceGroup')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.dataSpaceGroup}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.dataSpaceOwner')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.dataSpaceOwner}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxThirdPartyAppid')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxThirdPartyAppid}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxAuthorizerAppid')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxAuthorizerAppid}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxOpenid')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxOpenid}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxNickname')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxNickname}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSex')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxSex==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxCity')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxCity}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxCountry')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxCountry}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxProvince')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxProvince}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxLanguage')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxLanguage}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxHeadimgurl')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxHeadimgurl}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSubscribeTime')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxSubscribeTime}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxUnionid')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxUnionid}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxRemark')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxRemark}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxGroupid')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxGroupid}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxTagidList')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxTagidList}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSubscribeScene')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxSubscribeScene}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxQrScene')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxQrScene}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxQrSceneStr')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.wxQrSceneStr}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
				</ZKDetailGrid>
			</ZKSpin>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, match, mOfficialAccountsUser } = this.props;
		let { params } = match;
		// 第一次进来或地址栏改变了 
		if (mOfficialAccountsUser.pathname != location.pathname ) {
			let optEntity = location.state ? location.state.optEntity : {};
			if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
				dispatch({ type: 'mOfficialAccountsUser/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
			} else {
				dispatch({ type: 'mOfficialAccountsUser/setState', payload: { pathname: location.pathname } });
				dispatch({ type: 'mOfficialAccountsUser/getOfficialAccountsUser', payload: { pkId: params.pkId } });
			}
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mOfficialAccountsUser, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mOfficialAccountsUser]);
    }
}

export default injectIntl(connect(({ mApp, mOfficialAccountsUser, loading }) => ({ mApp, mOfficialAccountsUser, loading }))(CInitOfficialAccountsUserDetail));