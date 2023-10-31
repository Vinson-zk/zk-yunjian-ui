/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:44:53
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 14:30:09
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import moment from 'moment';

import { zkTools, ZKOriginalComponents } from 'zkFramework';
const { ZKDatePicker } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

// 日期 国际化
moment.locale(zkToolsMsg.getLocale());

const FInitTryHome = ({intl, match})=>{
	return (
		<div>测试一下，试试；
			<br /><br />
			<font color="red">没有从 mock 中取菜单，菜单改为本地定义了； </font>
			<br /><br />
			match.path: <font color="red">{match.path} </font>
			<br /><br />
			&nbsp;&nbsp;global.message.edit.reset : {zkToolsMsg.msgFormatByIntl(intl, "global.message.edit.reset")}
			<ZKDatePicker.RangePicker defaultValue={[, moment('2015-01-01', "YYYY-MM-DD")]} format="YYYY-MM-DD" />
			<ZKDatePicker.RangePicker defaultValue={[moment('2015-01-01', "YYYY-MM-DD"), ]} format="YYYY-MM-DD" />
			<ZKDatePicker.RangePicker defaultValue={[]} format="YYYY-MM-DD" />
			<ZKDatePicker.RangePicker format="YYYY-MM-DD" />
		</div>
	)
}

export default injectIntl(FInitTryHome);


