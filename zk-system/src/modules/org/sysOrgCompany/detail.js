/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:06:15
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 19:25:24
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal, ZKButton } = ZKOriginalComponents;
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

		let { location, mApp, onOpt, company, intl, loading } = this.props;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let spinning = !company;

		return (company != undefined) && (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
					<ZKDetailGrid.TitleRow>
						<ZKDetailGrid.TitleRow.Title>
							<ZKIcon.AntdIcon icon = "BarsOutlined" /> &nbsp; {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.info')} 
						</ZKDetailGrid.TitleRow.Title>
						<ZKDetailGrid.TitleRow.Opt>
							<ZKButton onClick={onOpt} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}</ZKButton>
						</ZKDetailGrid.TitleRow.Opt>
			        </ZKDetailGrid.TitleRow>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.parentName')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<font color="red">公司详情页可以通用，显示公司的子公司列表、是否是开发者、license 等信息，待完善</font><br />
							{ company.parent?(company.parent.name?zkToolsMsg.getInternationInfo(company.parent.name):company.parent.pkId):zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany._top') }
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.groupCode')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.groupCode}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.code')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.code}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.name')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={company.name?company.name:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.logo')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.logo}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.logoOriginal')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.logoOriginal}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.faxNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.faxNum}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.telNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.telNum}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.phoneNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.phoneNum}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.mail')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.mail}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalPerson')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.legalPerson}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certType')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.certType}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.certNum}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.status==0?zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.0'):company.status==1?zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.1'):zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.2')}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.address')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={company.address?company.address:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.foundDate')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.foundDate}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerDate')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.registerDate}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerAddress')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={company.registerAddress?company.registerAddress:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerAuthority')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.registerAuthority}
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerNum')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.registerNum}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.shortDesc')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							<ZKInputJson disabled styleType="compact" value={company.shortDesc?company.shortDesc:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColRight>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceCode')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.sourceCode}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceId')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>
							{company.sourceId}
						</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>       
				</ZKDetailGrid>
			</ZKSpin>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

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

export default injectIntl(connect(({ mApp, mSysOrgCompany, loading }) => ({ mApp, mSysOrgCompany, loading }))(CInitSysOrgCompanyDetail));





