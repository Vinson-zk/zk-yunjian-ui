/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:30:32
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 22:07:18
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import dayjs from 'dayjs';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKDatePicker } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

function FInitZKDatePickerDemo({ intl }) {

	return (
		<ZKContentFormat className={styles.sample_detail_panel} >
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.datePicker')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
				<ZKDatePicker />
				<br /><br />
				<ZKDatePicker value={dayjs("2018/12/25", "YYYY/M/DD")} format="YYYY:MM:DD" />
				<br /><br />
				<ZKDatePicker defaultValue={dayjs("2018/2/11", "YYYY/M/DD")} format="YYYY:MM:DD" />
				<br /><br />
				<ZKDatePicker value={dayjs("2018/12/25", "YYYY/MM/DD")} defaultValue={dayjs("1997/2/11", "YYYY/MM/DD")} format="YYYY:MM:DD" />
				<br /><br />
				RangePicker 日期范围，原生控件:<br />
				RangePicker1:&nbsp;&nbsp;&nbsp;&nbsp;
		        <ZKDatePicker.RangePicker format="YYYY-MM-DD" />
				<br /><br />
		        RangePicker2:&nbsp;&nbsp;&nbsp;&nbsp;
		        <ZKDatePicker.RangePicker defaultValue={[dayjs('2015/01/01', "YYYY/MM/DD")]} format="YYYY-MM-DD" />
				<br /><br />
		        RangePicker3 - 只给结束日期赋初始值，进入日期选择时会报错；所以这种情况下，封装中默认将结束日期同时也设置为开始日期:&nbsp;&nbsp;&nbsp;&nbsp;
		        <ZKDatePicker.RangePicker defaultValue={[, dayjs('2015-01-01', "YYYY-MM-DD")]} format="YYYY-MM-DD" />
				<br /><br />
				RangePicker4:&nbsp;&nbsp;&nbsp;&nbsp;
		        <ZKDatePicker.RangePicker defaultValue={[dayjs('2015/01/01', "YYYY/MM/DD"), dayjs('2014-01-01', "YYYY-MM-DD")]} format="YYYY-MM-DD" />
				<br />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
				ZKDatePicker 组件：暂不做处理<br />
				原生态封装，接受原生属性。<br /><br />
			</ZKContentFormat>
			<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						'原生态封装',
						'    <ZKDatePicker />',
						'    <ZKDatePicker format="YYYY:MM:DD" />',
						'    <ZKDatePicker defaultValue={dayjs("2018/2/11", "YYYY/MM/DD")} format="YYYY:MM:DD" />',
					].join('\n')}
				</SyntaxHighlighter>
			</ZKContentFormat>
			<br />
		</ZKContentFormat>
	)
}

export default injectIntl(FInitZKDatePickerDemo);


