/*
* @Author: Vinson
* @Date:   2021-03-21 10:35:27
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-21 21:20:53
* 
* 
* 
*/
import React from 'react';
// import { Table } from 'antd';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
// import { Scrollbars } from 'react-custom-scrollbars';

import $ from 'zkJquery';

import { zkToolsMsg, zkToolsUtils } from '../../../tools';
import { ZKSelect } from '../../original';

//  pageSize  current  total onPopupScroll = {}

class CInitPageSelect extends React.Component {
	render(){
		return <ZKSelect {...this.props} onPopupScroll = {e=>{console.log("========== ", e)}} />
	}
}

CInitPageSelect.OptGroup = ZKSelect.OptGroup;
CInitPageSelect.Option = ZKSelect.Option;

export default CInitPageSelect;