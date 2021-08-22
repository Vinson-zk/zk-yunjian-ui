/*
* @Author: Vinson
* @Date:   2021-03-31 08:29:59
* @Last Modified by:   Vinson
* @Last Modified time: 2021-08-20 14:44:52
* 
* 
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon, Form, Input } from "antd";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKRadio, ZKModal, ZKButton, ZKPopconfirm, ZKTable, ZKForm } = ZKOriginalComponents;
const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon, ZKScrollTable, ZKOptRow } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import styles from './styles.less';

const f_getEditNode = (intl, itemName, editData, onShowSelIcon)=>{
	let wrapperCol = {
		xs: { span: 24 },
		sm: { span: 24 }
	}

	let labelCol = {
		xs: { span: 24 },
		sm: { span: 0 },
	}

	let itemProps = {
		wrapperCol: wrapperCol,
		labelCol: labelCol,
		name: itemName,
		className: styles.margin_0_im
	}

	if(itemName == 'isTree'){
		return (
			<ZKForm.Item { ...itemProps } rules={[zkToolsValidates.notNull(intl, "boolean")]} >
				<ZKSelect className = { styles.width_100_im } >
	                <ZKSelect.Option value={true}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
	                <ZKSelect.Option value={false}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
	            </ZKSelect>
			</ZKForm.Item>
		)
	}else if("icon" == itemName){
		return (
			<ZKEditForm.Item { ...itemProps } rules = {[ zkToolsValidates.string(intl, 0, 64) ]} >
            	<ZKInput.Search className="" enterButton addonBefore={ <ZKIcon.Antd4Icon icon={editData?editData.icon:""} /> }
                            onSearch={value=>onShowSelIcon(itemName)} />
        	</ZKEditForm.Item>
        )
	}else{
		let rules = [];
		if("tableComments" == itemName){
			rules.push(zkToolsValidates.notNull(intl));
			rules.push(zkToolsValidates.string(intl, 0, 512));
		}else if("pkColName" == itemName){
			rules.push(zkToolsValidates.notNull(intl));
			rules.push(zkToolsValidates.string(intl, 0, 64));
		}else if("className" == itemName){
			rules.push(zkToolsValidates.notNull(intl));
			rules.push(zkToolsValidates.string(intl, 0, 64));
		}else if("subModuleName" == itemName){
			rules.push(zkToolsValidates.string(intl, 0, 64));
		}else if("label" == itemName){
			rules.push(zkToolsValidates.string(intl, 0, 64, true));
		}else if("navCode" == itemName){
			rules.push(zkToolsValidates.string(intl, 0, 64));
		}

		return (
			<ZKForm.Item { ...itemProps } rules={rules} >
				<ZKInput style = {{width: '100%'}} />
			</ZKForm.Item>
		)
		 
	}
}

const FInitEditTableCell = ({ editData, onShowSelIcon, intl, editing, dataIndex, title, record, index, children, ...restProps }) => {
	return (
		<td {...restProps}>
			{ editing ? f_getEditNode(intl, dataIndex, editData, onShowSelIcon) : children }
		</td>
	);
};

const f_getTableColumns = (intl, isRowEditing, onRowEdit, onRowCancelEdit, onRowSave, onUpdateTableInfo, onViewTableCols) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.label'),
			dataIndex: 'label', key: 'label', width: 100, textAlign: 'left', editable: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.tableName'),
			dataIndex: 'tableName', key: 'tableName', width: 100, textAlign: 'left',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.pkColName'),
            dataIndex: 'pkColName', key: 'pkColName', width: 80, textAlign: 'center', editable: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.className'),
            dataIndex: 'className', key: 'className', width: 120, textAlign: 'left', editable: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.subModuleName'),
            dataIndex: 'subModuleName', key: 'subModuleName', width: 90, textAlign: 'center', editable: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.funcName'),
            dataIndex: 'funcName', key: 'funcName', width: 120, textAlign: 'left', editable: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.navCode'),
            dataIndex: 'navCode', key: 'navCode', width: 80, textAlign: 'center', editable: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.icon'),
            dataIndex: 'icon', key: 'icon', width: 120, textAlign: 'center', editable: true,
            render:(text, record, index)=>{
            	if(record.icon){
            		return <React.Fragment><ZKIcon.Antd4Icon icon={record.icon} /><br />{record.icon}</React.Fragment>
            	}else{
            		return "";
            	}
            }
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.isTree'),
			dataIndex: 'isTree', key: 'isTree', width: 60, textAlign: 'center', editable: true,
			render: (text, record, index) => {
				if (record.isTree == true) {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
				} else {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
				}
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.tableComments'),
			dataIndex: 'tableComments', key: 'tableComments', width: 220, textAlign: 'left', editable: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			dataIndex: 'opt', key: 'opt', width: 180, fixed: 'right', 
			render: (text, record, index) => {
				if(isRowEditing(record)){
					return (
						<ZKOptRow key={`grid-${record.pkId}`} >
							<ZKOptRow.OptGroup>
								<ZKOptRow.OptGroup.OptItem onClick={() => { // 保存
									onRowSave(record);
								}}>
									{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_save')}
								</ZKOptRow.OptGroup.OptItem>
								<ZKOptRow.OptGroup.OptItem onClick={() => { // 取消
									onRowCancelEdit(record);
								}}>
									{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_cancel')}
								</ZKOptRow.OptGroup.OptItem>
							</ZKOptRow.OptGroup>
						</ZKOptRow>
					)
				}else{
					return (
						<ZKOptRow key={`grid-${record.pkId}`} >
							<ZKPopconfirm title={zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.msg.update_tableInfo')} placement="left" onConfirm={() => { // 更新表信息
									onUpdateTableInfo(record, index);
								}}>
								<ZKButton>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.opt._key_update_tableInfo')}</ZKButton>
							</ZKPopconfirm>
							<ZKOptRow.OptGroup>
								<ZKOptRow.OptGroup.OptItem onClick={() => { // 查看字段
									onViewTableCols(record, index);
								}}>
									{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.opt._key_view_colInfo')}
								</ZKOptRow.OptGroup.OptItem>
								<ZKOptRow.OptGroup.OptItem onClick={() => { // 编辑
									onRowEdit(record);
								}}>
									{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
								</ZKOptRow.OptGroup.OptItem>
							</ZKOptRow.OptGroup>
							
						</ZKOptRow>
					)
				}
			}
		},
		// { title: '', dataIndex: '_', key: '_' },
	]
};

class CInitTableInfo extends Component {

	refForm = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
        	selIconAttrName:'',   // 选择图标的字段名
        	filterValue:'',       // 过滤值
        	selKeys: [],          // 列表选中的 KEY
        	editData: '',
        }
    }

    // 选择行
	onChangeSelKeysFunc = (selRowKeys, selRows) => {
		this.setState({ selKeys: selRowKeys });
	}
	// 批量生成代码
	onBatchGenCode = ()=>{
		if (this.state.selKeys === null || this.state.selKeys === undefined || this.state.selKeys.length < 1) {
			zkToolsMsg.alertMsgByType(this.props.intl, null, 'selectData')
		}else{
			this.props.dispatch({ type: 'mGen/genCode', moduleId: this.props.mFuncModule.optEntity.pkId, params: {tableIds:this.state.selKeys} });
		}
	}
	// 判断行是否是在编辑中；true-是；false-不是；
	isRowEditing = (record) => {
		return (this.state.editData != null) && (record.pkId === this.state.editData.pkId);
	}
	// 取消编辑 
	onRowCancelEdit = () => {
		this.setState({ editData:null });
	}
	// 编辑行
	onRowEdit = (record) => {
		this.refForm.current.setFieldsValue(record);
		this.setState({ editData: record });
	}
	// 显示选择图标
	onShowSelIcon = (iconAttrName)=>{
		this.setState({ selIconAttrName:iconAttrName });
	}
	// 选择图标
	onSelectIcon = (value)=>{
        let selIconAttrName = this.state.selIconAttrName;
        let setIcon = {};
        setIcon[selIconAttrName] = value;
        this.refForm.current.setFieldsValue(setIcon);
        this.setState({editData: {...this.state.editData, ...setIcon}, selIconAttrName:""});
    }
	// 保存行
	onRowSave = async ()=>{
		try {
			const fData = await this.refForm.current.validateFields();
			const sData = {...this.state.editData, ...fData};
			// console.log("[^_^:20210331-1741-001] edit row data：", sData);
			this.props.dispatch({ 
				type: 'mTableInfo/editTableInfo', 
	            payload: sData, 
	            callback: (errors) => {
	            	if(errors){
	            		this.refForm.current.setFields(errors);
	            	}else{
            			this.props.dispatch({ type: 'mTableInfo/getTables', moduleId: this.props.mFuncModule.optEntity.pkId });	
	            		this.onRowCancelEdit();	
	            	}
	            }
			});
	    } catch (errInfo) {
	    	console.error('[>_<:20210331-1741-001] Validate Failed:', errInfo);
	    }
	}
	// 更新表信息
	onUpdateTableInfo = (record, index)=>{
		this.props.dispatch({ type: "mTableInfo/updateTableInfo", tableId: record.pkId, callback:()=>{
			this.props.dispatch({ type: 'mTableInfo/getTables', moduleId: this.props.mFuncModule.optEntity.pkId, forceUpdate:true });
		} });
	}
	// 查看表字段
	onViewTableCols = (record, index)=>{
		this.props.dispatch({ type: 'mColInfo/setState', payload: { tableInfo: record, colInfos: undefined } });
	}
	// 前端过滤查询
	onSearch = (value, event)=>{
		this.setState({filterValue: value});
	}

    render() {
        let { dispatch, mGen, mTableInfo, mFuncModule, intl, loading, location } = this.props;
        let { tableInfos } = mTableInfo;

        //  列表字段 - 可编辑
        let tableColumns = f_getTableColumns(intl, this.isRowEditing, this.onRowEdit, this.onRowCancelEdit, this.onRowSave, this.onUpdateTableInfo, this.onViewTableCols);
        const mergedColumns = tableColumns.map((col) => {
			// if (!col.editable) {
			//  	return col;
			// }else{
			//     return {
			//       ...col,
			//       onCell: (record) => ({record,
			//         dataIndex: col.dataIndex,
			//         title: col.title,
			//         editing: this.isRowEditing(record),
			//         intl: intl
			//       }),
			//     };
			// }
			return {
		      ...col,
		      onCell: (record) => ({record,
		        dataIndex: col.dataIndex,
		        title: col.title,
		        editing: col.editable && this.isRowEditing(record),
		        intl: intl,
		        editData: this.state.editData,
		        onShowSelIcon: this.onShowSelIcon
		      }),
		    };
		});

        // 列表过滤
		const f_gridFilter = datas=>{
			if(zkJsUtils.isEmpty(this.state.filterValue)){
				return datas;
			}

			let ds = [];
			datas.forEach(item=>{
				if(item.tableName.indexOf(this.state.filterValue) != -1){
					ds.push(item);
				}
			});
			return ds;
		}

		let spanLoading = loading.effects['mTableInfo/getTables'] || loading.effects["mTableInfo/editTableInfo"] || loading.effects["mTableInfo/updateTableInfo"] || loading.effects["mGen/genCode"];

        return (mFuncModule.optEntity != null && mGen.pathname == location.pathname) && (<React.Fragment>
        	<ZKModal
                visible = {this.state.selIconAttrName != ""}
                onCancel  = {()=>{this.setState({selIconAttrName: ""})}}
                title={zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_icon.select')}
                // footer = {<font color="red">* {zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_icon.select.opt")}</font>}
                footer = { null }
                // className=""
                width={700}
            >
                <ZKIcon.ZKIconPanel onSelect={ this.onSelectIcon } />
            </ZKModal>
        	<ZKForm id = "tableInfo-form" ref = {this.refForm} component={false}>
				<ZKScrollTable id = "tableInfo"  loading = { spanLoading }
					// autoHeight = {false}
					rowSelection = {{
						onChange: this.onChangeSelKeysFunc,
						selectedRowKeys: this.state.selKeys, 
						columnWidth: '32px'
					}}
					rowKey = "pkId"
					rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 30}}
					components={{
			          body: {
			            cell: FInitEditTableCell,
			          },
			        }}
					columns = { mergedColumns }
					scroll = {{ x:1440, y: 450 }}
					pagination = {false}
					// pagination = {{position: ['topRight'], ...page}}
	                dataSource = { f_gridFilter(tableInfos) }
	                // (pagination, filters, sorter, extra: { currentDataSource: [] })
	                // onChange = {onChange}
					className = {styles.info_section}
					// onRow = {this.onRowClick}
				>
					<div className = {styles.title_row} >
						<div className = {styles.title}>
							<ZKIcon.Antd4Icon icon = "TableOutlined" /> &nbsp; {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.gen.tables')} 
						</div>
						<div className = {styles.title_opt_left}>
							<ZKInput.Search onSearch = {this.onSearch} onChange = {e=>{this.onSearch(e.target.value)}} placeholder = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.tableInfo.tableName')}  enterButton />
						</div>
						<div className = {styles.title_opt}>
							<ZKButton onClick={this.onBatchGenCode} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.opt._key_batch_genCode')}</ZKButton>
						</div>
					</div>
				</ZKScrollTable>
			</ZKForm>
		</React.Fragment>)
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, match, dispatch, mGen } = this.props;
        let { params } = match;

        // 地址栏改变了 
        if (mGen.pathname != location.pathname) {
            dispatch({ type: 'mGen/setState', payload: { pathname: location.pathname} });
            dispatch({ type: 'mTableInfo/getTables', moduleId: params.funcModuleId, callback:()=>{
            	// 未选择表时，表信息内容显示空
            	// this.props.dispatch({ type: 'mColInfo/setState', payload: { tableInfo: {}, colInfos: [] } });
            } });
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// let { mTableInfo, dvaApp } = this.props;
		// zkToolsNavAndMenu.unRegisterModel(dvaApp, [mTableInfo]);
    }

}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mGen, mTableInfo, loading, mFuncModule }) => ({ mGen, mTableInfo, loading, mFuncModule }))(CInitTableInfo));




