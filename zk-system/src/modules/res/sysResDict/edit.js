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
const { ZKSpin, ZKModal, ZKInput, ZKSelect, ZKRow, ZKCol } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitSysResDictEdit extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            resDictTypes: []
        }
    };
	
	// static getDerivedStateFromProps(props, state) {
    //     return true;
    // }

    f_searchResDictTypes = value=>{
        let { dispatch } = this.props;
        dispatch({ type: 'mSysResDict/findSysResDictTypes', filter: { typeCode: value }, callback: datas=>{
            this.setState({resDictTypes: datas});
        }});
    };

    /** 保存 */
    f_save = (values, form, callbackFunc) => {
        this.props.dispatch({
            type: 'mSysResDict/editSysResDict', 
            payload: values, 
            callback: (errors) => {
                if(!errors){
                    this.setState({loading: true});
                }
                callbackFunc(errors);
            }
        });
    }

    /** 返回 JSX 元素 */
    render() {

        let { mApp, dispatch, mSysResDict, intl, loading, location } = this.props;
        let { optEntity } = mSysResDict;
        
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
            || loading.effects['mSysResDict/editSysResDict'] || loading.effects['mSysResDict/getSysResDict'];
        let typeCodeSelLoading = loading.effects['mSysResDict/findSysResDictTypes'];

        return (optEntity != undefined && mSysResDict.pathname == location.pathname) && (
            <ZKSpin spinning={spinning === true} >
                <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
                    viewLayout = "custom"
                    saveFunc={this.f_save}
                    resetFunc={form => { return true; }}
                >
                    <ZKRow>
                        <ZKCol span={8} offset={2} >
                            <ZKEditForm.Item label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.parentName')}  >
                                { optEntity.parent?(optEntity.parent.dictName?zkToolsMsg.getInternationInfo(optEntity.parent.dictName):optEntity.parent.pkId):zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict._top') }
                            </ZKEditForm.Item>
                        </ZKCol>
                    </ZKRow>
                    <ZKRow>
                        <ZKCol span={8} offset={2}>
                        	<ZKEditForm.Item name = "typeCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.typeCode')} 
                        		rules = {[ zkToolsValidates.string(intl, 1, 64, true), ]} >
                                {optEntity.typeCode?
                                    (
                                        <ZKSelect disabled={true} loading = { typeCodeSelLoading }>
                                            <ZKSelect.Option selected={true} key={optEntity.typeCode} value={optEntity.typeCode}>
                                                {
                                                    `${(optEntity.dictType&&optEntity.dictType.typeName)?zkToolsMsg.getInternationInfo(optEntity.dictType.typeName):''}[`}{optEntity.typeCode}{']'
                                                }
                                            </ZKSelect.Option>
                                        </ZKSelect>
                                    ):(
                                        <ZKSelect showSearch = {true} filterOption = {false} loading = { typeCodeSelLoading } onSearch = { this.f_searchResDictTypes }
                                            onDropdownVisibleChange = { open=>{if(open){this.f_searchResDictTypes('');}}} >
                                            {this.state.resDictTypes.map((item, index)=>{
                                                return <ZKSelect.Option key={index} value={item.typeCode}>{zkToolsMsg.getInternationInfo(item.typeName)}[{item.typeCode}]</ZKSelect.Option>
                                            })}
                                        </ZKSelect>
                                    )
                                }
                        	</ZKEditForm.Item>
                        </ZKCol>
                        <ZKCol span={8} offset = {2} >
                            <ZKEditForm.Item name = "dictCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.dictCode')} 
                                rules = {[
                                    zkToolsValidates.string(intl, 1, 64, true), 
                                ]} 
                            >
                                <ZKInput disabled = {optEntity.pkId?true:false} />
                            </ZKEditForm.Item>
                        </ZKCol>
                    </ZKRow>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "dictName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.dictName')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
                    <ZKRow><ZKCol span = {24} >
                        <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "dictDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResDict.dictDesc')} 
                    		rules = {[
    							zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
                            ]} 
    					>
                            <ZKInputJson styleType="compact" primaryAttr={lang} attrs={locales} />
                    	</ZKEditForm.Item>
                    </ZKCol></ZKRow>
            	</ZKEditForm>
            </ZKSpin>
        )
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mSysResDict } = this.props;
        let { params } = match;
        // 第一次进来或地址栏改变了 
        if (mSysResDict.pathname != location.pathname) {
            // 从 state 中取操作编辑的实体
            // let optEntity = location.state ? location.state.optEntity : {};
            // let parentEntity = location.state ? location.state.parentEntity : {};

            dispatch({ type: 'mSysResDict/setState', payload: { pathname: location.pathname, optEntity: undefined } });
            if("_new" == params.pkId){
                if("_top" == params.parentId){
                    // 新增根结点；不需要查父节点信息；
                    dispatch({ type: 'mSysResDict/setState', payload: { optEntity:{} } });
                }else{
                    // 新增子节点；需要查父节点信息；不管父节点存不存在，都从后台查询
                    dispatch({ type: 'mSysResDict/getSysResDict', payload: { pkId: params.parentId }, isParent:true });
                }
            }else{
                // 编辑；
                dispatch({ type: 'mSysResDict/getSysResDict', payload: { pkId: params.pkId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mSysResDict, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysResDict]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysResDict, loading }) => ({ mApp, mSysResDict, loading }))(CInitSysResDictEdit));