/*
* @Author: Vinson
* @Date:   2021-03-30 16:58:09
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-26 14:49:43
* 
* 
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKRadio, ZKModal, ZKButton } = ZKOriginalComponents;
const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import styles from './styles.less';

// 编辑页
const FInitFuncModuleEdit = ({dispatch, intl, loading, optEntity, onOpt })=>{
  // 保存
    const save = (values, form, callbackFunc) => {
        dispatch({
            type: 'mFuncModule/editFuncModule', 
            payload: values, 
            callback: (errors) => {
              if(errors){
                callbackFunc(errors);
              }else{
                onOpt();
              }
            }
        });
    };

    let spinning = loading.effects['mFuncModule/editFuncModule'] || loading.effects['mFuncModule/getFuncModule'] || loading.effects["mGen/genCode"];
    return (
        <ZKSpin wrapperClassName={styles.height_auto} spinning={spinning === true} >
            <ZKEditForm data={optEntity} saveFunc={save} goBackFunc = {onOpt} title = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.gen.funcModuleInfo')}>
                <ZKEditForm.Item name = "moduleName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.moduleName')} 
                    rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                    <ZKInput />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "modulePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.modulePrefix')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                    <ZKInput />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "packagePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.packagePrefix')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
                    <ZKInput />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "isRemovePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.isRemovePrefix')} rules = {[zkToolsValidates.notNull(intl, "boolean")]} >
                    <ZKSelect>
                        <ZKSelect.Option value={true}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
                        <ZKSelect.Option value={false}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
                    </ZKSelect>
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "tableNamePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.tableNamePrefix')} rules = {[zkToolsValidates.string(intl, 0, 64)]} >
                    <ZKInput />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "colNamePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.colNamePrefix')} rules = {[zkToolsValidates.string(intl, 0, 64)]} >
                    <ZKInput />
                </ZKEditForm.Item>
            </ZKEditForm>
        </ZKSpin>
    )
}

// 明细显示页
const FInitFuncModuleDetail = ({intl, loading, optEntity, onOpt})=>{
    let spinning = loading.effects['mFuncModule/getFuncModule'] || loading.effects["mGen/genCode"];
    return (
    <ZKSpin wrapperClassName={styles.height_auto} spinning={spinning === true} >
      <ZKDetailGrid title = "">    
        <ZKDetailGrid.TitleRow>
          <ZKDetailGrid.TitleRow.Title>
            <ZKIcon.Antd4Icon icon = "BarsOutlined" /> &nbsp; {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.gen.funcModuleInfo')} 
          </ZKDetailGrid.TitleRow.Title>
          <ZKDetailGrid.TitleRow.Opt>
            <ZKButton onClick={onOpt} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}</ZKButton>
          </ZKDetailGrid.TitleRow.Opt>
        </ZKDetailGrid.TitleRow>
        <ZKDetailGrid.Row>
          <ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.moduleName')}:</ZKDetailGrid.ColLeft>
          <ZKDetailGrid.Row>
            {optEntity.moduleName}
          </ZKDetailGrid.Row>
        </ZKDetailGrid.Row>
                <ZKDetailGrid.Row>
                    <ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.modulePrefix')}:</ZKDetailGrid.ColLeft>
                    <ZKDetailGrid.Row>
                        {optEntity.modulePrefix}
                    </ZKDetailGrid.Row>
                </ZKDetailGrid.Row>
        <ZKDetailGrid.Row>
          <ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.packagePrefix')}:</ZKDetailGrid.ColLeft>
          <ZKDetailGrid.Row>
            {optEntity.packagePrefix}
          </ZKDetailGrid.Row>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row>
          <ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.isRemovePrefix')}:</ZKDetailGrid.ColLeft>
          <ZKDetailGrid.Row>
            {optEntity.isRemovePrefix==true?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
          </ZKDetailGrid.Row>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row>
          <ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.tableNamePrefix')}:</ZKDetailGrid.ColLeft>
          <ZKDetailGrid.Row>
            {optEntity.tableNamePrefix}
          </ZKDetailGrid.Row>
        </ZKDetailGrid.Row>
        <ZKDetailGrid.Row>
          <ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.colNamePrefix')}:</ZKDetailGrid.ColLeft>
          <ZKDetailGrid.Row>
            {optEntity.colNamePrefix}
          </ZKDetailGrid.Row>
        </ZKDetailGrid.Row>
      </ZKDetailGrid>
    </ZKSpin>
    )
}

class CInitFuncModule extends Component {

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
          isEdit: false,
        }
    }

    onOpt = ()=>{
      this.setState({isEdit: !this.state.isEdit});
    }

    render() {

        let { dispatch, mGen, mFuncModule, intl, loading, location } = this.props;
        let { optEntity } = mFuncModule;
        if(this.state.isEdit){
          return(optEntity != null && mGen.pathname == location.pathname) &&  <FInitFuncModuleEdit dispatch = {dispatch} intl = {intl} loading = {loading} optEntity = {optEntity} onOpt={this.onOpt}  />
        }else {
          return(optEntity != null && mGen.pathname == location.pathname) &&  <FInitFuncModuleDetail intl = {intl} loading = {loading} optEntity = {optEntity} onOpt={this.onOpt} />
        }
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mFuncModule, mGen } = this.props;
        let { params } = match;

        // 地址栏改变了 
        if (mGen.pathname != location.pathname) {
            let optEntity = location.state ? location.state.optEntity : undefined;
            if (optEntity && optEntity.pkId && optEntity.pkId == params.funcModuleId) {
                dispatch({ type: 'mGen/setState', payload: { pathname: location.pathname } });
                dispatch({ type: 'mFuncModule/setState', payload: { optEntity: optEntity } });
            } else {
                dispatch({ type: 'mGen/setState', payload: { pathname: location.pathname } });
                dispatch({ type: 'mFuncModule/setState', payload: { optEntity:optEntity } });
                dispatch({ type: 'mFuncModule/getFuncModule', payload: { pkId: params.funcModuleId } });
            }
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
    // let { mFuncModule, dvaApp } = this.props;
    // zkToolsNavAndMenu.unRegisterModel(dvaApp, [mFuncModule]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
//   console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mGen, mFuncModule, loading }) => ({ mGen, mFuncModule, loading }))(CInitFuncModule));


