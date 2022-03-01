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
const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon, ZKScrollTable } = ZKCustomComponents;

const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;

class CInitSysResFuncApiDetail extends Component {

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

		let { location, mApp, mSysResFuncApi, intl, loading } = this.props;
		let { optEntity } = mSysResFuncApi;
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let columns = [
            {title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.param.name'), dataIndex:'pName', key:'pName'},
            {title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.param.type'), dataIndex:'pType', key:'pName'},
            {title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.param.isRequired'), dataIndex:'isRequired', key:'pName'},
            {title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.param.defaultValue'), dataIndex:'defaultValue', key:'pName'},
            {title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.param.remark'), dataIndex:'remark', key:'pName'},
        ]

		let spinning = loading.effects['mSysResFuncApi/getSysResFuncApi'];

		return (optEntity != undefined && mSysResFuncApi.pathname == location.pathname) && (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.systemCode')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{`${(optEntity.sysResApplicationSystem&&optEntity.sysResApplicationSystem.name)?zkToolsMsg.getInternationInfo(optEntity.sysResApplicationSystem.name):''}[`}{optEntity.systemCode}{']'}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.name')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							<ZKInputJson disabled styleType="compact" value={optEntity.name?optEntity.name:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row> 
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqDesc')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							<ZKInputJson disabled styleType="compact" value={optEntity.reqDesc?optEntity.reqDesc:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.useContext')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							<ZKInputJson disabled styleType="compact" value={optEntity.useContext?optEntity.useContext:{}} primaryAttr={lang} attrs={locales} />
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row> 
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.code')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{optEntity.code}
						</ZKDetailGrid.ColValue>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqMethods')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue>
							{
								// optEntity.reqMethods
							}
							<ZKSelect disabled={true} className={"-"} style={{ width: '100%' }} mode="multiple" defaultValue = {optEntity.reqMethods} >
	                            <ZKSelect.Option value={1}>GET</ZKSelect.Option>
	                            <ZKSelect.Option value={2}>POST</ZKSelect.Option>
	                            <ZKSelect.Option value={4}>DELETE</ZKSelect.Option>
	                            <ZKSelect.Option value={8}>PUT</ZKSelect.Option>
	                            <ZKSelect.Option value={16}>CONNECT</ZKSelect.Option>
	                            <ZKSelect.Option value={32}>HEAD</ZKSelect.Option>
	                            <ZKSelect.Option value={64}>OPTIONS</ZKSelect.Option>
	                            <ZKSelect.Option value={128}>TRACE</ZKSelect.Option>
	                        </ZKSelect>
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>   
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.originalUri')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue span = {15} >
							{optEntity.originalUri}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.agentUri')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue span = {15} >
							{optEntity.agentUri}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>  
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqContentType')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue span = {15} >
							{optEntity.reqContentType}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>  
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqParamsDesc')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue span = {15} >
							<ZKScrollTable 
								columns = {columns} 
								scroll = {{ x:900, y: 200 }}
								pagination = {false}
                				dataSource = {optEntity.reqParamsDesc||[]} />
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>               
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.resContentType')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue span = {15} >
							{optEntity.resContentType}
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>       
		            <ZKDetailGrid.Row>
						<ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.resDataDesc')}:</ZKDetailGrid.ColLabel>
						<ZKDetailGrid.ColValue span = {15} >
							<ZKScrollTable 
								columns = {columns} 
								scroll = {{ x:900, y: 200 }}
								pagination = {false}
                				dataSource = {optEntity.resDataDesc||[]} />
						</ZKDetailGrid.ColValue>
					</ZKDetailGrid.Row>                    
				</ZKDetailGrid>
			</ZKSpin>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, match, mSysResFuncApi } = this.props;
		let { params } = match;
        if (mSysResFuncApi.pathname != location.pathname) {
        	// 第一次进来或地址栏改变了
			dispatch({ type: 'mSysResFuncApi/setState', payload: { pathname: location.pathname, optEntity: undefined } });
			dispatch({ type: 'mSysResFuncApi/getSysResFuncApi', payload: { pkId: params.pkId }});
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysResFuncApi, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysResFuncApi]);
    }
}

export default injectIntl(connect(({ mApp, mSysResFuncApi, loading }) => ({ mApp, mSysResFuncApi, loading }))(CInitSysResFuncApiDetail));