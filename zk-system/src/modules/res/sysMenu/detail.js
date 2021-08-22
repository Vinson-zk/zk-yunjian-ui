/**
 *
 * @Author: Vinson
 * @Date: 2020-10-26 17:59:40
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-05-01 16:54:18
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


class CInitSysMenuDetail extends Component {

	// 1、构造函数
	constructor(props) {
		super(props);
		this.state = {};
    }

    render() {

		let { mApp, mSysMenu, intl, loading } = this.props;
		let { optEntity = {} } = mSysMenu;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = loading.effects['mSysMenu/getSysMenu'];

		return (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.name')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={optEntity.name?optEntity.name:{}} primaryAttr={lang} attrs={locales} />
							{/* {optEntity.name?zkToolsMsg.getInternationInfo(optEntity.name):""} */}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
                    <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.code')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.code}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.navCode')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.navCode}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.funcModuleCode')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.funcModuleCode}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.funcName')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.funcName}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.path')}:</ZKDetailGrid.ColLeft>
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
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isIndex')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.isIndex==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isShow')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.isShow==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.icon')}:</ZKDetailGrid.ColLeft>
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
        let { location, dispatch, match, mSysMenu } = this.props;
		let { params } = match;
		// 地址栏改变了 
		if (mSysMenu.pathname != location.pathname ) {
			let optEntity = location.state ? location.state.optEntity : {};
				dispatch({ type: 'mSysMenu/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
			if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
				
			} else {
				dispatch({ type: 'mSysMenu/getSysMenu', payload: { pkId: params.pkId } });
			}
		}
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysMenu, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysMenu]);
    }
}

export default injectIntl(connect(({ mApp, mSysMenu, loading }) => ({ mApp, mSysMenu, loading }))(CInitSysMenuDetail));