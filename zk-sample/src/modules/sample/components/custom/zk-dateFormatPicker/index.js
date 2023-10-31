/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:22:44
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:43
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import moment from 'moment';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKDateFormatPicker, ZKEditForm } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

// const { RangePicker:ZKDateFormatRangePicker } = ZKDateFormatPicker

const FTestForm = ({ history, intl }) => {

	const save = data => {
		console.log("[^_^:20181226-0900-001] InitDataFormatDemo -> TestForm save：", data)
	}

	let data = {
		'dateFormatPicker': '2018-12-26',
		'rangeDate2': ['2015-01-01'],
		'rangeDate3': ['2015-01-01', '2015-01-01']
	}

	return (
		<ZKEditForm saveFunc={save} history={history} data={data} leaveConfirm={false} >
			<ZKEditForm.Item label="dateFormatPicker" name="dateFormatPicker" >
				<ZKDateFormatPicker format="YYYY-MM-DD" />
			</ZKEditForm.Item>
			<ZKEditForm.Item label="rangeDate1" name="rangeDate1" >
				<ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
			</ZKEditForm.Item>
			<ZKEditForm.Item label="rangeDate2" name="rangeDate2"  >
				<ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
			</ZKEditForm.Item>
			<ZKEditForm.Item label="rangeDate3" name="rangeDate3" >
				<ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
			</ZKEditForm.Item>
		</ZKEditForm>
	)
}

const TestForm = FTestForm;

function FInitZKDateFormatPickerDemo({ history, intl }) {

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.dateFormatPicker')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<ZKDateFormatPicker />
					<br /><br />
			        value:&nbsp;&nbsp;&nbsp;&nbsp;
			  		<ZKDateFormatPicker value="2018-12-25" />
					<br /><br />
	          		defaultValue:&nbsp;&nbsp;&nbsp;&nbsp;
					<ZKDateFormatPicker defaultValue="2018-12-25" format="YYYY/MM/DD" />
					<br /><br />
			    	value-defaultValue:&nbsp;&nbsp;&nbsp;&nbsp;
		      		<ZKDateFormatPicker format="YYYY-MM-DD HH" value="2018-12-25" defaultValue="1997-12-25" />
					<br /><br />
			        RangePicker 格式化日期范围:<br />
			  		格式化日期范围:&nbsp;&nbsp;&nbsp;&nbsp;
	          		<ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
					<br /><br />
			 		格式化日期范围1:&nbsp;&nbsp;&nbsp;&nbsp;
	          		<ZKDateFormatPicker.RangePicker defaultValue={["2015-01-01"]} format="YYYY-MM-DD" />
					<br /><br />
		      		格式化日期范围2 - 只给结束日期赋初始值，进入日期选择时会报错；所以这种情况下，封装中默认将结束日期同时也设置为开始日期:&nbsp;&nbsp;&nbsp;&nbsp;
		      		<ZKDateFormatPicker.RangePicker defaultValue={[, "2015-01-01"]} format="YYYY-MM-DD" />
					<br /><br />
		      		格式化日期范围3:&nbsp;&nbsp;&nbsp;&nbsp;
	          		<ZKDateFormatPicker.RangePicker defaultValue={["2015-01-01", "2015-01-02"]} format="YYYY-MM-DD" />
					<br /><br />
					<TestForm history={history} />
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKDateFormatPicker、ZKDateFormatPicker.RangePicker 组件：<br />
					<div style={{ color: 'red' }}>注：组件的 format 属性默认为: YYYY-MM-DD </div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"ZKDateFormatPicker 自定义组件，日期格式化控件，取值时按设置的 format 格式返回对应格式日期字符串；",
							"    可接受原生组件 DatePicker 的原生属性； ",
							"ZKDateFormatPicker.RangePicker 自定义组件，日期范围格式化控件，取值时按设置的 format 格式返回对应格式日期字符串；",
							"    可接受原生组件 DatePicker.RangePicker 的原生属性； ",

						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"参考框架代码",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKDateFormatPickerDemo);


