/*
* @Author: Vinson
* @Date:   2022-05-10 00:25:25
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-10 00:28:07
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
const { ZKEditForm, ZKInputJson, } = ZKCustomComponents;
const { zkToolsUtils, zkToolsMsg, zkToolsAjax } = zkTools;

/**
 * 执行查询 非树形/分页
 */
function f_doingSearch(url, params) {
    // return zkToolsAjax.reqPretreatment(url, {method:'GET', async:false, data:params});
	return zkToolsAjax.req(url, {method:'GET', async:true, data:params});
}

class CInitSetCollectionSelect extends Component {
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
        let { url, dispatch } = this.props;
        try{
        	this.setState({spinning: true});
	        params = { ...params, ...zkToolsUtils.convertPageParam({'current':1, 'pageSize':999}) };
	        f_doingSearch(url, params).done(res=>{
                if (res.code == 'zk.0') {
                    this.setState({listDatas: res.data.result, spinning: false});
                }else{
                    throw new Error("[>_<:20220510-0027-003] request url:[" + url + "] exception, " + res.code);
                    this.setState({spinning: false});
                }   
            });
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
		let { url, onSearch, valueKey, onDropdownVisibleChange, ...otherProps } = this.props;
		return (
			<ZKSelect {...otherProps} loading = { this.state.spinning } 
				onSearch = { this.f_onSearch }
                onSelect = { this.f_onSelect }
                // onChange = { this.f_onChange }
	            onDropdownVisibleChange = { this.f_onDropdownVisibleChange } >
	            {this.state.listDatas.map((item, index)=>{
	                return <ZKSelect.Option key={index} value={item[valueKey]}>{zkToolsMsg.getInternationInfo(item.name)}[{item.code}]</ZKSelect.Option>
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
CInitSetCollectionSelect.propTypes = {
    ...ZKSelect.propTypes,
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	url: PropTypes.string.isRequired, 
	onChange: PropTypes.func,
	// 返回 value 时，取值的 key，默认返回整个数据对象
	valueKey: PropTypes.string.isRequired
}
// 定义属性默认值
CInitSetCollectionSelect.defaultProps = {
    ...ZKSelect.defaultProps,
    placeholder: "",
    allowClear: true,
    showSearch: true,
    filterOption: false,
	url: `/${globalAppConfig.apiPrefixSys}/settings/sysSetCollection/sysSetCollectionsPage`,
	valueKey: 'pkId'
}

export default CInitSetCollectionSelect;





