/*
* @Author: Vinson
* @Date:   2022-05-02 16:59:17
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-07 17:42:25
* 
* 
* 
*/
import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
// import { injectIntl } from 'react-intl';
// import { Scrollbars } from 'react-custom-scrollbars';
import { DownOutlined } from '@ant-design/icons';

import { ZKTree, ZKSpin } from '../../original';
import { zkToolsUtils, zkToolsAjax, zkToolsMsg } from '../../../tools';

import zkStyles from '../../../../css/styles.less';
import styles from './styles.less';

/**
 * 不分层级的树型查询, 树形/分页
 */
function f_findSysOrgCompanys(url, params) {
	/*
	返回数据详情
  // 上面的是关键字段
}
	*/
	// console.log("[^_^:20220502-1555-001] findSysOrgDeptsSelf: ", url, params);
    // return zkToolsAjax.reqPretreatment(url, {method:'GET', async:false, data:params});
	return zkToolsAjax.req(url, {method:'GET', async:true, data:params});
}

class CInitCompanyTree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spinning: false,
            companyTrees: [],
            expandedKeys: []
        };
    };

    /**
     * 查询公司列表，非树形
     */
    f_findCompanys = (node, params={})=>{
        let { dispatch, optCompany, url } = this.props;
        try{
        	this.setState({spinning: true});
	        if(node == null){
	            // 查询一级公司
	            // let params = zkToolsUtils.convertSortParam({}, {}); 
	            params = { ...params, ...zkToolsUtils.convertPageParam({'current':1, 'pageSize':9999}) };
	            f_findSysOrgCompanys(url, params).done(res=>{
    	            if (res.code == 'zk.0') {
    	            	let expandedKeys = [];
    	                if(optCompany){
    	                    // 当前操作公司存，找出需要展开的 节点
    	                    let s = zkJsUtils.findTreeParent(res.data.result, optCompany.pkId);
    	                    expandedKeys = s.map(item=>{
    	                        return item.pkId;
    	                    });
    	                }
    	                this.setState({companyTrees:res.data.result, expandedKeys:expandedKeys, spinning: false});
    	                if(optCompany){
    	                    if(this.props.onSelect instanceof Function){
    				    		this.props.onSelect.call(this, optCompany);
    				    	}
    				    }
    	            }else{
                        this.setState({spinning: false}); 
                		throw new Error("[>_<:20220502-1744-002] request url:[" + url + "] exception, " + res.code);
    	            }
                });
	        }else{
	            // 查询子公司
	        }
	    }catch(err){
	    	this.setState({spinning: false}); 
            throw err;   	
	    // }finally{
	    // 	this.setState({spinning: false});
	    }
    };
    // 选择节点
    f_onSelect = (selectedKeys, info) => {
    	if(this.props.onSelect instanceof Function){
    		this.props.onSelect.call(this, info.node);
    	}
    };
    // 树形展开
    f_onExpand = (expandedKeys)=>{
        this.setState({expandedKeys: expandedKeys});
    };

    render() {
        let { optCompany, onSelect, ...otherProps } = this.props;
        return (

            <ZKSpin spinning={this.state.spinning === true} style = {{'width':'100%', 'height':'100%'}} >
                <ZKTree {...otherProps} 
                    showLine = {{"showLeafIcon":false}}
                    expandedKeys = { this.state.expandedKeys }
                    selectedKeys = { optCompany?[optCompany.pkId] : [] }
                    titleRender = { nodeData=>{return `${zkToolsMsg.getInternationInfo(nodeData.name)}(${nodeData.code})`} }
                    treeData = { this.state.companyTrees }
                    onExpand = { this.f_onExpand }
                    onSelect={ this.f_onSelect }
                />
            </ZKSpin>
        );
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        this.f_findCompanys(null);
    }
}

// 定义属性
CInitCompanyTree.propTypes = {
	...ZKTree.propTypes,
	// 查询数据接口, 接口为 GET 类型，返回 {code:'zk.0', msg:, data:[]}; code 不为 zk.0 时，为返回数据异常；data 为数据列表，注意这里不树形的数据
	url: PropTypes.string.isRequired, 
	onSelect: PropTypes.func,
	// 返回 value 时，取值的 key，默认返回整个数据对象
	// valueKey: PropTypes.string
}
// 定义属性默认值
CInitCompanyTree.defaultProps = {
	...ZKTree.defaultProps,
	fieldNames: { title: 'pkId', key: 'pkId', children: 'children' },
	// showLine: true, 
	className: `${styles.company_tree}`,
	switcherIcon: <DownOutlined />,
    showLine: {"showLeafIcon":false},
	autoExpandParent: true,
	// url: `/${globalAppConfig.apiPrefixSys}/org/sysOrgCompany/sysOrgCompanys`,
	url: `/${globalAppConfig.apiPrefixSys}/org/sysOrgCompany/sysOrgCompanysTree`,
	// valueKey: 'pkId'
}

// export default injectIntl(CInitCompanyTree);
export default CInitCompanyTree;



