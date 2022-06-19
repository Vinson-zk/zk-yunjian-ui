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

class CInitSysOrgCompanyDetail extends Component {

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

		let { location, mApp, mSysOrgCompanyAdmin, intl, loading } = this.props;
		let { optEntity } = mSysOrgCompanyAdmin;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = !optEntity || loading.effects['mSysOrgCompanyAdmin/getSysOrgCompany'];

		return (optEntity != undefined && mSysOrgCompanyAdmin.pathname == location.pathname) && (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.parentName')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<font color="red">公司详情页可以通用，显示公司的子公司列表、是否是开发者、license 等信息，待完善</font><br />
							{ optEntity.parent?(optEntity.parent.name?zkToolsMsg.getInternationInfo(optEntity.parent.name):optEntity.parent.pkId):zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany._top') }
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.groupCode')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.groupCode}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.code')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.code}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.name')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={optEntity.name?optEntity.name:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.logo')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.logo}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.logoOriginal')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.logoOriginal}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.faxNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.faxNum}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.telNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.telNum}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.phoneNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.phoneNum}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.mail')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.mail}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalPerson')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.legalPerson}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certType')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.certType}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.certNum}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.status==0?zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.0'):optEntity.status==1?zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.1'):zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.2')}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.address')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={optEntity.address?optEntity.address:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.foundDate')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.foundDate}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerDate')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.registerDate}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerAddress')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={optEntity.registerAddress?optEntity.registerAddress:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerAuthority')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.registerAuthority}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.registerNum}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.shortDesc')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={optEntity.shortDesc?optEntity.shortDesc:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceCode')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.sourceCode}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceId')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{optEntity.sourceId}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
				</ZKDetailGrid>
			</ZKSpin>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysOrgCompanyAdmin } = this.props;
        let { params } = match;
        if (mSysOrgCompanyAdmin.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了 
			dispatch({ type: 'mSysOrgCompanyAdmin/setState', payload: { pathname: location.pathname, optEntity: undefined } });
			dispatch({ type: 'mSysOrgCompanyAdmin/getSysOrgCompany', payload: { pkId: params.pkId }});
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysOrgCompanyAdmin, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysOrgCompanyAdmin]);
    }
}

export default injectIntl(connect(({ mApp, mSysOrgCompanyAdmin, loading }) => ({ mApp, mSysOrgCompanyAdmin, loading }))(CInitSysOrgCompanyDetail));



