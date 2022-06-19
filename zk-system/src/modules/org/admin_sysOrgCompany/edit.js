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
import moment from 'moment';

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, } = ZKCustomComponents;
const { ZKDictSelect } = ZKBusinessComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

// 日期 国际化
moment.locale(zkToolsMsg.getLocale());

class CInitSysOrgCompanyEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            resDicts: []
        }
    };
	
	/** 保存 */
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mSysOrgCompanyAdmin/editSysOrgCompany', 
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.setState({loading: true});
                }
                callbackFunc(errors);
            }
        });
    };

    // // 查询证件类型字典项
    // f_searchCertTypes = value=>{
    //     let { dispatch } = this.props;
    //     dispatch({ type: 'mSysOrgCompanyAdmin/findCertTypes', filter: { searchValue: value }, callback: datas=>{
    //         this.setState({resDicts: datas});
    //     }});
    // };

    /** 返回 JSX 元素 */
    render() {

        let { location, mApp, dispatch, mSysOrgCompanyAdmin, intl, loading } = this.props;
        let { optEntity } = mSysOrgCompanyAdmin;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 80, required);
            }
            return objRule;
        }
        
        let spinning = !optEntity || this.state.loading
        	 || loading.effects['mSysOrgCompanyAdmin/editSysOrgCompany'] || loading.effects['mSysOrgCompanyAdmin/getSysOrgCompany'];
        // let certTypesLoading = loading.effects['mSysOrgCompanyAdmin/findCertTypes'];

        // 处理一些默认值
        if(optEntity && zkJsUtils.isEmpty(optEntity.pkId)){
            optEntity.foundDate = new Date();
            optEntity.registerDate = new Date();
        }

        if(optEntity && optEntity.parent){
            optEntity.groupCode = optEntity.parent.groupCode;
        }
        
        return (optEntity != undefined && mSysOrgCompanyAdmin.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.parentName')}  >
                            { optEntity.parent?(optEntity.parent.name?zkToolsMsg.getInternationInfo(optEntity.parent.name):optEntity.parent.pkId):zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany._top') }
                        </ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.name')} 
                            rules = {[
                                zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
                        >
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                        </ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.groupCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.parentId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.code')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "logo" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.logo')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "logoOriginal" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.logoOriginal')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "faxNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.faxNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "telNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.telNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "phoneNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.phoneNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "mail" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.mail')} 
                		rules = {[
							zkToolsValidates.string(intl, 1, 64, true), 
                        ]} 
					>
                        <ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "legalPerson" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalPerson')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "certType" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certType')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        {
                        //     <ZKSelect showSearch = {true} filterOption = {false} loading = { certTypesLoading } onSearch = { this.f_searchCertTypes }
                        //     onDropdownVisibleChange = { open=>{if(open){this.f_searchCertTypes('');}}} >
                        //     {this.state.resDicts.map((item, index)=>{
                        //         return <ZKSelect.Option key={index} value={item.pkId}>{zkToolsMsg.getInternationInfo(item.dictName)}[{item.dictCode}]</ZKSelect.Option>
                        //     })}
                        // </ZKSelect>
                        <ZKDictSelect typeCode = "cert_type" />
                        }
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "certNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "address" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.address')} 
                            rules = {[
                                zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
                        >
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                        </ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "foundDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.foundDate')} 
                		rules = {[
                        ]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD' />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "registerDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerDate')} 
                		rules = {[
                        ]} 
					>
                        <ZKDateFormatPicker format='YYYY-MM-DD' />
                	</ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                    	<ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "registerAddress" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerAddress')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "registerAuthority" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerAuthority')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "registerNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerNum')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
                        <ZKInput />
                	</ZKEditForm.Item>
                    <ZKRow><ZKCol span = {24} >
                    	<ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "shortDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.shortDesc')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                	<ZKEditForm.Item name = "sourceCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceCode')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
            			<ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
                	<ZKEditForm.Item name = "sourceId" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceId')} 
                		rules = {[
							zkToolsValidates.string(intl, 0, 64), 
                        ]} 
					>
            			<ZKInput disabled = {optEntity.pkId?true:false} />
                	</ZKEditForm.Item>
            	</ZKEditForm>
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
            if("_new" == params.pkId){
                if("_top" == params.parentId){
                    // 新增根结点；不需要查父节点信息；
                    dispatch({ type: 'mSysOrgCompanyAdmin/setState', payload: { optEntity:{} } });
                }else{
                	// 新增子节点；需要查父节点信息；不管父节点存不存在，都从后台查询
                    dispatch({ type: 'mSysOrgCompanyAdmin/getSysOrgCompany', payload: { pkId: params.parentId }, isParent:true });
                }
            }else{
                // 编辑；则根据 id 取后台数据；
                dispatch({ type: 'mSysOrgCompanyAdmin/getSysOrgCompany', payload: { pkId: params.pkId } });
            }
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

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysOrgCompanyAdmin, loading }) => ({ mApp, mSysOrgCompanyAdmin, loading }))(CInitSysOrgCompanyEdit));