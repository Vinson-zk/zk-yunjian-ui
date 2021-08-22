/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:30:32
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-17 18:15:51
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import moment from 'moment';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { ZKDatePicker } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

// 日期 国际化
moment.locale(zkToolsMsg.getLocale());

function FInitZKDatePickerDemo({ intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.datePicker')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<ZKDatePicker />
					<br /><br />
					<ZKDatePicker value={moment("2018/12/25", "YYYY/MM/DD")} format="YYYY:MM:DD" />
					<br /><br />
					<ZKDatePicker defaultValue={moment("2018/2/11", "YYYY/MM/DD")} format="YYYY:MM:DD" />
					<br /><br />
					<ZKDatePicker value={moment("2018/12/25", "YYYY/MM/DD")} defaultValue={moment("1997/2/11", "YYYY/MM/DD")} format="YYYY:MM:DD" />
					<br /><br />
					RangePicker 日期范围，原生控件:<br />
					RangePicker1:&nbsp;&nbsp;&nbsp;&nbsp;
			        <ZKDatePicker.RangePicker format="YYYY-MM-DD" />
					<br /><br />
			        RangePicker2:&nbsp;&nbsp;&nbsp;&nbsp;
			        <ZKDatePicker.RangePicker defaultValue={[moment('2015/01/01', "YYYY/MM/DD")]} format="YYYY-MM-DD" />
					<br /><br />
			        RangePicker3 - 只给结束日期赋初始值，进入日期选择时会报错；所以这种情况下，封装中默认将结束日期同时也设置为开始日期:&nbsp;&nbsp;&nbsp;&nbsp;
			        <ZKDatePicker.RangePicker defaultValue={[, moment('2015-01-01', "YYYY-MM-DD")]} format="YYYY-MM-DD" />
					<br /><br />
					RangePicker4:&nbsp;&nbsp;&nbsp;&nbsp;
			        <ZKDatePicker.RangePicker defaultValue={[moment('2015/01/01', "YYYY/MM/DD"), moment('2014-01-01', "YYYY-MM-DD")]} format="YYYY-MM-DD" />
					<br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKDatePicker 组件：暂不做处理<br />
				    原生态封装，接受原生属性。<br /><br />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							'原生态封装',
							'    <ZKDatePicker />',
							'    <ZKDatePicker format="YYYY:MM:DD" />',
							'    <ZKDatePicker defaultValue={moment("2018/2/11", "YYYY/MM/DD")} format="YYYY:MM:DD" />',
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKDatePickerDemo);


