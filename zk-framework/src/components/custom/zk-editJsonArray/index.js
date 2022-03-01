/*
* @Author: Vinson
* @Date:   2021-12-08 00:01:39
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-25 14:57:29
* 
* 
* 
*/

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import PropTypes from 'prop-types';
// const EditableContext = React.createContext(null);
import { injectIntl } from 'react-intl';
import * as uuid from 'uuid';

// import { ZKInput } from '../../original';
import ZKScrollTable from '../zk-scrollTable';
import ZKOptRow from '../zk-optRow';

import { zkToolsMsg } from '../../../tools';

import styles from './styles.less';

/**
 * @title string.required: 
 * @dataIndex string.required: 
 * @onChange function: 值变化事件
 * @onPressEnter function: 回车事件；返回 true-结束编辑；其他-不会结束编辑；
 * @onBlur function: 失去焦点；返回 true-结束编辑；其他-不会结束编辑；
 */
const FInitEditCell = ({col={}, record, haveEdit=false, children, onChange, onPressEnter, onBlur, className="", ...restProps})=>{

	// console.log('[^_^:20211211-1611-001]: FInitEditCell: ', col.title, col.dataIndex, record);
	// console.log('[^_^:20211211-1611-001]: FInitEditCell: ', col, restProps);
	// title, dataIndex, 


	if(!col.title){
		return <td className={`${styles.edit_table_cell} ${className}`} {...restProps} >{children}</td>
	}

	const [value, setValue] = useState('');
	const [editing, setEditing] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
	    if (editing) {
	    	inputRef.current.focus();
	    }
	}, [editing]);

	/** 进入编辑状态 */
	const f_onToggleEdit = () => {
		// 进入修改状态
	    setEditing(!editing);
	}
	/** 值变化处理函数 */
	const f_onChange = e=>{
	    // console.log('[^_^:20211211-1611-002] e.target.value:', e.target.value);
		if(onChange instanceof Function){
			onChange.call(inputRef, e);
		}
	}
	/** 回车事件处理函数 */
	const f_onPressEnter = e=>{
	    // console.log('[^_^:20211211-1611-003] e.target.value:', e.target.value);
		if(onPressEnter instanceof Function){
			if(onPressEnter.call(inputRef, e)){
				f_onToggleEdit();
			}
		}else{
			f_onToggleEdit();
		}
	}
	/** 失去焦点处理函数 */
	const f_onBlur = e=>{
	    // console.log('[^_^:20211211-1611-004]e.target.value:', e.target.value);
		if(onBlur instanceof Function){
			if(onBlur.call(inputRef, e)){
				f_onToggleEdit();
			}
		}else{
			f_onToggleEdit();
		}
	}

	if(editing){
		return (<td className = {className}>
			<Input ref={inputRef} placeholder={col.title} defaultValue={record[col.dataIndex]} onPressEnter={f_onPressEnter} onBlur={f_onBlur} onChange={f_onChange}  />
		</td>);
	}else{
		// console.log("[^_^:20220103-1435-001] FInitEditCell.children: ", children);
		let cc = [children];
		if(haveEdit){
			cc.push(<div key="_dfdfd" className={styles.edit_table_cell_label}>&nbsp;</div>);
		}
		// console.log("---- haveEdit: ", haveEdit)
		return <td className={`${styles.edit_table_cell} ${className}`} {...restProps} onClick={f_onToggleEdit} >{cc}</td>;
	}
}

class CInitEditJsonArray extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			// value: [],
			value: props.value||[],
			selRowKeys:[],
			maxRow: props.maxRow,
		}
		// console.log("^_^:20220103-111-002 CInitEditJsonArray.constructor", uuid);
	}

	/*** 配合 Form.Item 事件函数 ***/
	f_triggerChange = (value)=>{
		let targetValue = [];
		// Should provide an event to pass value to Form.
		// console.log("[20210307-0005-001] CInitEditJsonArray f_triggerChange:", targetValue);
		const { onChange } = this.props;
		if (onChange) {
			value.forEach(item=>{
				if(zkJsUtils.objToStr(item) != '{}'){
					targetValue.push(item);
				}
			})
			// console.log("[20210307-0005-002] CInitEditJsonArray f_triggerChange:", targetValue);
			onChange(targetValue);
		}
	};
 
	/*** 取编辑的值 */
	// getValue = ()=>{
	// 	let value = this.state.value;
	// 	// Should provide an event to pass value to Form.
	// 	console.log("[20211218-1140-001] CInitEditJsonArray getValue:", value);
	// 	value.forEach(item=>{
	// 		delete onChange[this.itemIndexKey];
	// 		delete onChange[this.itemMappingKey];
	// 	});	
	// }

	// 添加一行
	f_onAddRow = ()=>{
		if(this.state.value.length < this.state.maxRow){
			let value = this.state.value;
			let addRowData = {};
			this.f_genRowKey(addRowData);
			value.push(addRowData);
			this.setState({value: value});
		}else{
			zkToolsMsg.alertMsg(this.props.intl, null, {msg:zkToolsMsg.msgFormatByIntl(this.props.intl, "components.custom.zkEditJsonArray.eidt.maxRow", {'maxRow': this.state.maxRow})});
		}		
	};

	// 删除一行
	f_onDelRow = (selRowKeys, isConfirm)=>{

		// 执行删除
		let executeDelete = (selRowKeys) => {
			// 需要删除的 数据行
			let delRowDatas = [];

			selRowKeys.forEach(rowKey=>{
				delRowDatas.push(this.rowKeyMapping[rowKey]);
				delete this.rowKeyMapping[rowKey];
				delete this.editMapping[rowKey];
			})
			// 保留的结果值
			let resValue = this.state.value.filter((item, index)=>{
				return delRowDatas.findIndex(delItem=>{return delItem == item;}) == -1;
			});

			// let resValue = this.state.value.filter((item, index)=>{
			// 	return selRowKeys.findIndex(filterIndex=>{return filterIndex == index;}) == -1;
			// });
			this.setState({value: resValue, selRowKeys:[]});
			this.f_triggerChange(resValue);
		};

		if (selRowKeys === null || selRowKeys === undefined || selRowKeys.length < 1) {
			zkToolsMsg.alertMsgByType(this.props.intl, null, 'selectData');
		} else {
			if (isConfirm) {
				// 需要提示是否确认删除
				zkToolsMsg.alertMsgByType(this.props.intl, null, 'delConfirm', () => {
					// ok
					executeDelete(selRowKeys);
				}, () => {
					// cancel
				})
			} else {
				// 执行删除
				executeDelete(selRowKeys);
			}
		}
	}; 

	// 选择
	f_onSelRow = (selRowKeys, selRows)=>{
		this.setState({selRowKeys: selRowKeys});
	};

	// 单元格数据操作标识记录映射 
	editMapping = {};
	/*** 单元格是否有编辑处理 ***/
	// 判断单元格数据是否被修改过
	f_isEdit = (record, colIndex)=>{
		let rowKey = this.f_getRowKeyByRecord(record);
		if(rowKey){
			return this.editMapping[rowKey][colIndex] == true;
		}else{
			if(console){
				console.error("[>_<:20220103-1210-001] 未找到 record rowKey", record)
			}
		}
	};
	// 设置单元格数据项被修改过标识
	f_setEditFlag = (record, colIndex, editFlag)=>{
		let rowKey = this.f_getRowKeyByRecord(record);
		if(rowKey){
			return this.editMapping[rowKey][colIndex] = editFlag;
		}else{
			if(console){
				console.error("[>_<:20220103-1210-001] 未找到 record rowKey", record)
			}
		}
	};

	/*** rowKey 生成及映射处理 ***/
	rowKeyMapping = {};
	f_getRowKeyByRecord = record => {
		for(let key in this.rowKeyMapping){
			if(this.rowKeyMapping[key] == record){
				return key;
			}
		}
	};

	// 生成行 key
	f_genRowKey = record=>{
		let rowKey = this.f_getRowKeyByRecord(record);
		if(!rowKey){
			rowKey = 'zk-' + uuid.v4();
			this.rowKeyMapping[rowKey] = record;
			// 同时初始化单元格数据操作标识记录映射
			this.editMapping[rowKey] = {};
		}
		return rowKey;
	};

	render() {
		let { intl, columns=[], className, rowKey, ...restProps } = this.props;

		// 列表字段 - 可编辑
        const mergedColumns = columns.map((col) => {
		    return {
		      ...col,
		      onCell: (record, rowIndex) => ({
		      	// rowIndex,
		      	record,
		        col,
		        haveEdit: this.f_isEdit(record, col.dataIndex),
		        // onChange:(e, data)=>{
		        // 	record[col.dataIndex] = e.target.value;
		        // 	// console.log("[^_^:20211211-1801-001] record: ", record);
		        // },
		        onBlur: (e)=>{
		        	record[col.dataIndex] = e.target.value;
		        	this.f_setEditFlag(record, col.dataIndex, true);
		        	// console.log("[^_^:20211211-1801-002] record: ", e.target.value, record, data, this.state.value);
		        	this.setState({value: this.state.value});
		        	this.f_triggerChange(this.state.value);
		        	return true;
		        },
		        onPressEnter: (e)=>{ 
		        	record[col.dataIndex] = e.target.value;
		        	this.f_setEditFlag(record, col.dataIndex, true);
		        	// console.log("[^_^:20211211-1801-002] record: ", e.target.value, record, this.state.value);
		        	this.setState({value: this.state.value});
		        	this.f_triggerChange(this.state.value);
		        	return true;
		        }
		      }),
		    };
		});

        if(!rowKey){
			rowKey = this.f_genRowKey;
		}

        // let value = this.state.value;
		let value = this.state.value.map((item, index)=>{
			// item['zkIndex'] = this.f_genRowKey(item);
			// this.f_genRowKey(item);
			return item;
		})
		// console.log("[^_^:20220103-1435-001] CInitEditJsonArray.render: ", value, this.rowKeyMapping, this.editMapping);
		return (
			<ZKScrollTable id = "_CInitEditJsonArray_table"
				// rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 30}}
				className = {`${className} ${styles.edit_json_table}`}
				rowKey = { rowKey }
				rowSelection = {{
					onChange: this.f_onSelRow,
					selectedRowKeys: this.state.selRowKeys, 
					columnWidth: '32px'
				}}
				components={{
		          body: {
		            cell: FInitEditCell,
		          },
		        }}
				columns = { mergedColumns }
                dataSource = { value }
                {...restProps}
				>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {this.f_onAddRow();}} >
							{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}
						</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {this.f_onDelRow(this.state.selRowKeys, true);}} >
							{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
						</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

// 定义属性 isRequired
CInitEditJsonArray.propTypes = {
	scroll: PropTypes.object,
	maxRow: PropTypes.number,
	columns: PropTypes.array.isRequired,
}

// 定义属性默认值
CInitEditJsonArray.defaultProps = {
	value: [], // 数据据行 数组
	maxRow: 999, // 最大可编辑的数据行
	scroll: { x:60, y: 90 },
	className: styles.edit_json_table_default_size,
	pagination: false,
	// columns=[], className, rowKey
}

export default injectIntl(CInitEditJsonArray);





