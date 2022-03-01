/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:08:52
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-26 14:48:55
 */

import React from 'react';
// import PropTypes from 'prop-types';

import ZKIcon from '../zk-icon';

import { ZKRow, ZKCol } from '../../original';
import styles from "./styles.less";

/////////////////////////////////////////////////////
// title
/////////////////////////////////////////////////////
const FInitTitle = props=>{
	return <div className = {styles.detail_title} {...props} />
}
const FInitOpt = props=>{
	return <div className = {styles.detail_title_opt} {...props} />
}
const FInitTitleRow = props=>{
	return <div className = {styles.detail_title_row} {...props} />
}
FInitTitleRow.Title = FInitTitle;
FInitTitleRow.Opt = FInitOpt;

/////////////////////////////////////////////////////
// row lable value
/////////////////////////////////////////////////////

const FInitDetailRow = props => {
	return <ZKRow {...props} />
}
FInitDetailRow.defaultProps = {
	gutter: 24,
	align: "bottom",
	className: styles.detail_row
}

const FInitDetailLabel = props => {
	return <ZKCol {...props} />
}
FInitDetailLabel.defaultProps = {
	span: 3,
	offset: 2,
	className: styles.detail_col_lable
}

const FInitDetailValue = props => {
	return <ZKCol {...props} />
}
FInitDetailValue.defaultProps = {
	span: 5,
	offset: 0,
	className: styles.detail_col_content
}

/////////////////////////////////////////////////////
// 
/////////////////////////////////////////////////////
class CInitDetailGrid extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { children, title, ...props } = this.props;

		return (
			<div {...props} >
				{title? (
					<FInitTitleRow>
						<FInitTitle><ZKIcon.Antd4Icon icon = "BarsOutlined" /> &nbsp; {title}</FInitTitle>
					</FInitTitleRow>
				):""}
				{children}
			</div>
		)
	}
}

CInitDetailGrid.defaultProps = {
	title: "",
	className: styles.detail_panel,
}

CInitDetailGrid.TitleRow = FInitTitleRow;
CInitDetailGrid.Row = FInitDetailRow;
CInitDetailGrid.ColLeft = FInitDetailLabel;
CInitDetailGrid.ColRight = FInitDetailValue;
CInitDetailGrid.ColLabel = FInitDetailLabel;
CInitDetailGrid.ColValue = FInitDetailValue;


export default CInitDetailGrid;

