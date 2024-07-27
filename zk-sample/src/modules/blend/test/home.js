/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:44:53
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-19 10:08:22
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import dayjs from 'dayjs';

import { zkTools, ZKOriginalComponents } from 'zkFramework';
const { ZKDatePicker } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const FInitTryHome = ({intl, match})=>{
	return (
		<div>测试一下，试试；
			<br /><br />
			<font color="red">没有从 mock 中取菜单，菜单改为本地定义了； </font>
			<br /><br />
			match.path: <font color="red">{match.path} </font>
			<br /><br />
			&nbsp;&nbsp;global.message.edit.reset : {zkToolsMsg.msgFormatByIntl(intl, "global.message.edit.reset")}
			<br /><br />
			<ZKDatePicker.RangePicker defaultValue={[, dayjs('2015-01-02', "YYYY-MM-DD")]} format="YYYY-MM-DD" />
			<br /><br />
			<ZKDatePicker.RangePicker defaultValue={[dayjs('2015-01-01', "YYYY-MM-DD"), ]} format="YYYY-MM-DD" />
			<br /><br />
			<ZKDatePicker.RangePicker defaultValue={[dayjs('2015-01-01', "YYYY-MM-DD"), dayjs('2015-01-02', "YYYY-MM-DD")]} format="YYYY-MM-DD" />
			<br /><br />
			<ZKDatePicker.RangePicker defaultValue={[]} format="YYYY-MM-DD" />
			<br /><br />
			<ZKDatePicker.RangePicker format="YYYY年MM月DD日" />
			<br /><br />
			<ZKDatePicker.RangePicker />
		</div>
	)
}

export default injectIntl(FInitTryHome);


