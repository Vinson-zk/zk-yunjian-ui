/**
 *
 * @Author: Vinson
 * @Date: 2020-10-26 17:59:42
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-05-01 16:53:25
 */

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitSysMenuEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            sysNavs:[],
            selectIcon: false,
            icon: undefined
        }
    }

    onSearchNavCodes = value=>{
        let { dispatch } = this.props;
        dispatch({ type: 'mSysMenu/findNavCodes', filter: { searchValue: value }, callback: datas=>{
            this.setState({sysNavs: datas});
        }});
    }

    render() {

        let { mApp, dispatch, mSysMenu, intl, loading, location } = this.props;
        let { optEntity = {} } = mSysMenu;
        
		let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

        // 保存
        const save = (values, form, callbackFunc) => {
            dispatch({type: 'mSysMenu/editSysMenu', payload: values, 
                callback: (errors) => {
                    callbackFunc(errors);
                }
            });
        };

        const f_selectIcon = (value)=>{
            this.formRef.current.setFieldsValue({"icon": value});
            this.setState({selectIcon: !this.state.selectIcon, icon: value});
        }
        const f_showSelIconModal = ()=>{
            // form.setFieldsValue({"icon": value});
            this.setState({selectIcon: !this.state.selectIcon});
        }

        // let { name = {} } = optEntity;
        // // 初始化名称各国内容为空，如果允许支持语言输入为空时，不需要这样设置，这个处理主要是给个初始值，然后方便统一校验；也可以为各语言传入指定校验
        // for(let index in locales.localLanguage){
        //     if(!name[index]){
        //         name[index] = "";
        //     }
        // }

        // 各语言指定校验
        let nameRule = {};
        for(let index in locales.localLanguage){
            nameRule[index] = zkToolsValidates.string(intl, 1, 80, true);
        }

        let spinning = loading.effects['mSysMenu/editSysMenu'] || loading.effects['mSysMenu/getSysMenu'];
        let navCodeSelLoading = loading.effects['mSysMenu/findNavCodes'];
        return (optEntity != null && mSysMenu.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKModal
                    visible = {this.state.selectIcon}
                    onCancel  = {()=>{this.setState({selectIcon: !this.state.selectIcon})}}
                    title={zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_icon.select')}
                    // footer = {<font color="red">* {zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_icon.select.opt")}</font>}
                    footer = { null }
                    // className=""
                    width={700}
                >
                    <ZKIcon.ZKIconPanel onSelect={f_selectIcon} />
                </ZKModal>
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    saveFunc={save}
                    resetFunc={() => { this.setState({ areaOneKey: undefined }); }}
                >
                    {
                        // optEntity.parentId?
                        // <ZKEditForm.Item name = "parentName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.navCode')}  >
                        //     {optEntity.parentId}
                        // </ZKEditForm.Item>:""
                    }
                    {
                        <ZKEditForm.Item label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.parentName')}  >
                            { optEntity.parent?zkToolsMsg.getInternationInfo(optEntity.parent.name):zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu._top') }
                        </ZKEditForm.Item>
                    }
                    <ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.name')} 
                        rules = {[
                                // zkToolsValidates.notNull(intl), 
                                zkToolsValidates.object(intl, locales.localLanguage, undefined, nameRule),
                            ]} >
                        <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.code')} 
                        rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "navCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.navCode')} 
                        rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKSelect showSearch = {true} loading = { navCodeSelLoading }
                            onDropdownVisibleChange = { open=>{if(open){this.onSearchNavCodes('');}}}
                            onSearch = { this.onSearchNavCodes }
                        >
                            {this.state.sysNavs.map((sysNav, index)=>{
                                return <ZKSelect.Option key={index} value={sysNav.code}>{sysNav.code}[{zkToolsMsg.getInternationInfo(sysNav.name)}]</ZKSelect.Option>
                            })}
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "funcModuleCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.funcModuleCode')} 
                        rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "funcName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.funcName')} 
                        rules = {[zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "path" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.path')} 
                        rules = {[zkToolsValidates.string(intl, 0, 64)]} >
                        <ZKInput />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "exact" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.exact')} 
                        rules = {[zkToolsValidates.notNull(intl, 'boolean')]
                    }>
                        <ZKSelect>
                            <ZKSelect.Option value={true}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                            <ZKSelect.Option value={false}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "isFrame" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isFrame')} 
                        rules = {[zkToolsValidates.notNull(intl, "integer")]
                    }>
                        <ZKSelect>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "sort" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.sort')} 
                        rules = {[zkToolsValidates.integer(intl, 0, 999999999, true)]} >
                        <ZKInputNumber precision={0} />
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "isIndex" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isIndex')} 
                        rules = {[zkToolsValidates.notNull(intl, "integer")]
                    }>
                        <ZKSelect>
                            <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                            <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                        </ZKSelect>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "isShow" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isShow')} 
                        rules = {[zkToolsValidates.notNull(intl, "integer")]} >
                        <ZKRadio.Group>
                            <ZKRadio.Button value={1} >{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show')}</ZKRadio.Button>
                            <ZKRadio.Button value={0} >{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide')}</ZKRadio.Button>
                        </ZKRadio.Group>
                    </ZKEditForm.Item>
                    <ZKEditForm.Item name = "icon" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.icon')} >
                        <ZKInput.Search enterButton addonBefore={ <ZKIcon.Antd4Icon icon={this.state.icon?this.state.icon:(optEntity.icon?optEntity.icon:"")} /> }
                            onSearch={value=>f_showSelIconModal()} />
                    </ZKEditForm.Item>
                </ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysMenu } = this.props;
        let { params } = match;
        // 第一次创建或地址栏改变了 
        if (mSysMenu.pathname != location.pathname) {
            // 从 state 中取操作编辑的实体
            let optEntity = location.state ? location.state.optEntity : {};
            dispatch({ type: 'mSysMenu/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
            if("_new" == params.pkId){
                // 新增
                if("_top" == params.parentId){
                    // 添加顶级节点
                }else{
                    // 添加子级节点，需要查出父节点；
                    dispatch({ type: 'mSysMenu/getSysMenu', payload: { pkId: params.parentId }, isParent: true});
                }
            }else{
                // 修改，则根据 id 取后台数据；
                dispatch({ type: 'mSysMenu/getSysMenu', payload: { pkId: params.pkId }, isParent: false  });
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

export default injectIntl(connect(({ mApp, mSysMenu, loading }) => ({ mApp, mSysMenu, loading }))(CInitSysMenuEdit));

