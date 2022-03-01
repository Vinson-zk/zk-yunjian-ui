/*
* @Author: Vinson
* @Date:   2021-03-30 15:52:41
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-25 19:27:47
* 
* 
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import FuncModule from './funcModule.js';
import TableInfo from './tableInfo.js';
import ColInfo from './colInfo.js';

import styles from './styles.less';

class CInitGenCodeIndex extends Component {

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
      // return (
      //   <div className={styles.info_panel}>
      //     <FuncModule match = {this.props.match} location = {this.props.location} dispatch = {this.props.dispatch} />
      //     <TableInfo match = {this.props.match} location = {this.props.location} dispatch = {this.props.dispatch} />
      //     <ColInfo location = {this.props.location} dispatch = {this.props.dispatch} />
     //            <div>&nbsp;</div>
      //   </div>
      // )

        return (
            <React.Fragment>
                <FuncModule match = {this.props.match} location = {this.props.location} dispatch = {this.props.dispatch} />
                <TableInfo match = {this.props.match} location = {this.props.location} dispatch = {this.props.dispatch} />
                <ColInfo location = {this.props.location} dispatch = {this.props.dispatch} />
                <div>&nbsp;</div>
            </React.Fragment>
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
    // let { mFuncModule, dvaApp } = this.props;
    // zkToolsNavAndMenu.unRegisterModel(dvaApp, [mFuncModule]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
//   console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mGen, mFuncModule, loading }) => ({ mGen, mFuncModule, loading }))(CInitGenCodeIndex));

