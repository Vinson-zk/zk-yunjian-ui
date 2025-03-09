/*
 * @Author: Vinson
 * @CreateDate: 
 * @LastEditors: Vinson
 * @LastEditTime: 2025-02-11 08:58:01
 * @Description: 
 */


import React, { useState } from 'react';
// import { injectIntl } from 'react-intl';
// import { connect } from 'dva';
// import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents, ZKCustomComponents } from "zkFramework";   
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKDivider } = ZKOriginalComponents;
const { ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg, zkToolsUtils } = zkTools;     
// const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect, ZKButton, ZKUpload, ZKCard, ZKDivider } = ZKOriginalComponents;
// const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, ZKIcon, ZKSmartUpload, ZKDetailGrid } = ZKCustomComponents;
// const { ZKDictSelect } = ZKBusinessComponents;
// const { zkToolsAuth, zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkJsUtils from 'zkJsUtils';
// import locales from "../../../locales/index";

import zkStyles from 'zkFramework/style/zk.styles.less';
// import frontEndStyles from '../../frontEnd.styles.less';
import privateStyles from '../private.styles.less';


const FInitLoginRecords = ({ isShow, intl, loading, dispatch, mApp, onSetFlag })=>{
    const [form] = ZKForm.useForm();

    let { user } = mApp;

    let f_handleOk = e=>{
        onSetFlag(false);
    }

    let f_searchLoginRecords = (pagination={}, sorter={})=>{
        let params = zkToolsUtils.convertSortParam({}, sorter); 
        params = {...params, ...zkToolsUtils.convertPageParam(pagination)};

        let startDate = new Date();
        let endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() - 3);
        params['startDate'] = startDate;
        params['endDate'] = endDate;

        dispatch({
            'type': 'mPrivateApp/loginRecords',
            'params': params,
            callBackOk: res=>{ 
                setLoginRecords(res.data.result || []);
                setPagination({
                    "current": res.data.pageNo + 1,
                    "pageSize": res.data.pageSize,
                    // "pageSize": zkToolsUtils.getPageSize(),
                    "total": res.data.totalCount,
                    "showQuickJumper": true
                });
            },
            callBackErr: res=>{},
        });
    }

    let tableColumns = [{
        title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.login.record.grid.col.date'),
        textAlign: 'left', dataIndex: 'createDate', key: 'createDate', width: 200, 
    },{
        title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.login.record.grid.col.ip'),
        textAlign: 'right', dataIndex: 'optIp', key: 'optIp', width: 200, 
    },];

    const [loginRecords, setLoginRecords] = useState([]);
    const [pagination, setPagination] = useState({});
    const [isInit, setIsInit] = useState(false);

    if(isInit == false){
        setIsInit(true);
        f_searchLoginRecords();
    }

    const f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        f_searchLoginRecords(pagination, sorter);
    }

    let spinning = loading.effects['mPrivateApp/loginRecords'];

    return <ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.login.record')} open={isShow}
                // onOk={f_handleOk}
                onCancel={f_handleOk}
                // okButtonProps = {{loading: spinning}}
                // cancelText = {null}
                // cancelButtonProps = {{styles: {"display":"none"}, className: css``}}
                footer={null}
                width = {690}
                // height = {460}
    >
        <div className = {privateStyles.personal_center_login_record_div}>
            <span >{`${user.nickname}[${user.account}]`}</span>
            <span className = {privateStyles.personal_center_login_record_time}>
                {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.login.record')}
            </span>
        </div>
        <ZKScrollTable loading = { spinning }
            // autoHeight = {true}
            rowKey = "pkId"
            rowNum = {{'textAlign': 'center', width: 30}}
            columns = {tableColumns}
            // scroll = {{ y: 900 }}
            scroll = {{ x:630, y: 460 }}
            pagination = {pagination}
            // pagination = {{position: ['topRight'], ...page}}
            dataSource = {loginRecords}
            // (pagination, filters, sorter, extra: { currentDataSource: [] })
            onChange = {f_changeGrid}
            // className = {zkStyles.zk_f_flex_auto_1}
        ></ZKScrollTable>
    </ZKModal>
}

export default FInitLoginRecords;