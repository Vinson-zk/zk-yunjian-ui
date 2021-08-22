/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:54:44
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-30 12:46:08
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

class CInitSysNavDetail extends Component {

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

	render() {

		let { mApp, mSysNav, intl, loading } = this.props;
		let { optEntity = {} } = mSysNav;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = loading.effects['mSysNav/getSysNav'];

		return (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.name')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={optEntity.name?optEntity.name:{}} primaryAttr={lang} attrs={locales} />
							{/* {optEntity.name?zkToolsMsg.getInternationInfo(optEntity.name):""} */}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.code')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.code}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.funcModuleCode')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.funcModuleCode}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.funcName')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.funcName}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.path')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.path}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.sort')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.sort}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isIndex')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.isIndex==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isShow')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.isShow==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.icon')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.icon}&nbsp;&nbsp;&nbsp;&nbsp;{optEntity.icon?<ZKIcon.Antd4Icon icon = {optEntity.icon} />:""} 
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
				</ZKDetailGrid>
			</ZKSpin>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, match, mSysNav } = this.props;
		let { params } = match;
		// 地址栏改变了 
		if (mSysNav.pathname != location.pathname ) {
			let optEntity = location.state ? location.state.optEntity : {};
			if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
				dispatch({ type: 'mSysNav/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
			} else {
				dispatch({ type: 'mSysNav/setState', payload: { pathname: location.pathname } });
				dispatch({ type: 'mSysNav/getSysNav', payload: { pkId: params.pkId } });
			}
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysNav, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysNav]);
    }
}

export default injectIntl(connect(({ mApp, mSysNav, loading }) => ({ mApp, mSysNav, loading }))(CInitSysNavDetail));


