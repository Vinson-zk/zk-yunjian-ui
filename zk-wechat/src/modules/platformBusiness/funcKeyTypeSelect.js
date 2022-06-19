

/*
* @Author: Vinson
* @Date:   2022-05-03 15:13:29
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-07 17:43:17
* 
* 
* 
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
// import { injectIntl } from 'react-intl';
import { DownOutlined } from '@ant-design/icons';
// import * as uuid from 'uuid';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";   

const { ZKSelect } = ZKOriginalComponents;
const { zkToolsUtils, zkToolsMsg, zkToolsAjax } = zkTools;

import { findFuncKeyTypes } from "./funcKeyType/service.js";

class CInitFuncKeyConfigTypeSelect extends Component {
	constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            searchValue: '',
            listDatas:[],
        };
        // this.f_getCompany(null);
    };
    /*** 配合 Form.Item 事件函数 ***/
	f_triggerChange = (value)=>{
        // Should provide an event to pass value to Form.
        const { onChange } = this.props;
		// console.log("[20220502-1652-001] CInitDictSelect f_triggerChange:", value);
		if (onChange) {
            if(zkJsUtils.isEmpty(value)){
                onChange(undefined);
            }else{
                onChange(value);
            }
		}
	};
    // 查询 
    f_findListDatas = (params={})=>{
        let { dispatch } = this.props;
        try{
        	this.setState({spinning: true});
	        params = { ...params, ...zkToolsUtils.convertPageParam({'current':1, 'pageSize':999}) };
	        findFuncKeyTypes(params).then(res=>{
	        	if (res.code == 'zk.0') {
                    this.setState({listDatas: res.data.result, spinning: false});
                }else{
                	this.setState({spinning: false});
                    throw new Error("[>_<:20220523-1558-001] request findFunckeyConfigTypes exception, " + res.code);
                }  
	        })
	    }catch(err){
	    	this.setState({spinning: false});
            throw err;
	    }
    };
    // 查询 
    f_onSearch = value=>{
        this.f_findListDatas({'searchValue':value});
    };
    // 打开下拉
    f_onDropdownVisibleChange = open=>{
    	if(open && this.state.listDatas.length < 1){
    		this.f_onSearch('');
    	}
    };
    // 选择
    f_onSelect = value=>{
        this.f_triggerChange(value);
    };
    // 改变
    f_onChange = (value, option)=>{
        if(!value){
            this.f_triggerChange();
        }
    };
	render(){
		let { onSearch, valueKey, onDropdownVisibleChange, ...otherProps } = this.props;
		return (
			<ZKSelect style={{width: 360}} {...otherProps}  loading = { this.state.spinning } 
				onSearch = { this.f_onSearch }
                onSelect = { this.f_onSelect }
                // onChange = { this.f_onChange }
	            onDropdownVisibleChange = { this.f_onDropdownVisibleChange } >
	            {this.state.listDatas.map((item, index)=>{
	                return <ZKSelect.Option key={index} value={item[valueKey]}>{zkToolsMsg.getInternationInfo(item.funcTypeName)}[{item.funcTypeCode}]</ZKSelect.Option>
	            })}
	        </ZKSelect>
	    )
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        // this.f_loadData(null);
        this.f_onSearch('');
    }
}

// 定义属性
CInitFuncKeyConfigTypeSelect.propTypes = {
    ...ZKSelect.propTypes,
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	onChange: PropTypes.func,
	// 返回 value 时，取值的 key，默认返回整个数据对象
	valueKey: PropTypes.string.isRequired
}
// 定义属性默认值
CInitFuncKeyConfigTypeSelect.defaultProps = {
    ...ZKSelect.defaultProps,
    placeholder: "",
    allowClear: true,
    showSearch: true,
    filterOption: false,
	valueKey: 'pkId',
    className: "-"
}

export default CInitFuncKeyConfigTypeSelect;





