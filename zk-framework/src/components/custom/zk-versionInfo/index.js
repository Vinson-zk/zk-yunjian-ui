/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 12:44:33
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-09 10:29:28
 */

import React from "react";
// import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Tooltip, Icon, Collapse, Card } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';

const { Meta } = Card;

import { zkToolsMsg } from '../../../tools';
import styles from './styles.less';

/*** 制作项目的前端依赖信息行 ***/
const f_makeDependenceInfoLine = (packageJson = {}, detailPanel, index) => {

	if (!detailPanel) {
		detailPanel = (<div>
			author: {packageJson.author}&nbsp;&nbsp;<br />
			{/* license:{packageJson.license}<br /> */}
			{packageJson.description}
		</div>);
	}

	return (
		<div key={`_key_dependenceInfoLine_${index}`} className={styles.dependence_info_line}>
			<p>
				<span>{packageJson.name}&nbsp;&nbsp;(v{packageJson.version})</span>
				{detailPanel ? <span><Tooltip placement="right" title={detailPanel} ><InfoCircleOutlined /></Tooltip></span> : ""}
			</p>
		</div>
	)
}

/**
 * 制作依赖信息
 * @param {Array.of(object)} dependenceInfos
 * @return {object} 返回依赖信息节点数组； 
 */
const f_makeDependenceInfos = (dependenceInfos) => {
	if (dependenceInfos) {
		return dependenceInfos.map((item, index) => {
			return f_makeDependenceInfoLine(item, item.detailPanel, index);
		});
	}
	return "";
}

/**
 * 制作版本信息卡片
 * @param {object} packageJson 版本信息 package.json 对象；
 * @param {object} detailPanel 版本信息明细，可以外面传入，可以是字符串，dom 节点；或默认显示，拥有者和 package.json 的说明 description
 * @return {object} 制作版本信息卡片 对象节点；
 */
const f_makeVersionInfoCard = (packageJson = {}, detailPanel) => {
	if (!detailPanel) {
		detailPanel = (<div>
			author: {packageJson.author}&nbsp;&nbsp;<br />
			{/* license:{versionInfo.license}<br /> */}
			{packageJson.description}
		</div>);

	}
	return (
		<Card key="version_info_panel" className={styles.dependences_info_card}>
			<Meta title={`${packageJson.name} (V${packageJson.version});`}
				description={detailPanel}
			/>
		</Card>
	)
}

/**
 * 
 * @param {string} lang 当前国际化语言环境
 * @param {versionInfo} versionInfo 项目本身的版本信息
 * @param {Array.of(object)} dependenceInfos 项目的依赖信息
 */
const FInitVersionInfo = ({ versionInfo, dependenceInfos, intl }) => {

	let versionInfoCard = f_makeVersionInfoCard(versionInfo, versionInfo.detailPanel);
	let dependencePanel = f_makeDependenceInfos(dependenceInfos, intl);

	return (
		<div className={styles.version_info} >
			{versionInfoCard}
			<Collapse accordion={true} className={styles.dependences_info} >
				<Collapse.Panel key={`_key_Collapse.Panel_`} className={styles.dependences_info_panel}
					header={zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_dependenceInfos_info")} >
					{dependencePanel}
				</Collapse.Panel>
			</Collapse>
		</div>
	)
}

FInitVersionInfo.propTypes = {
	// lang: PropTypes.string,
	intl: PropTypes.object,
	versionInfo: PropTypes.object,
	// detailPanel: PropTypes.object,
	// detailPanel: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.string, undefined]),
	dependenceInfos: PropTypes.arrayOf(PropTypes.object)
}

FInitVersionInfo.defaultProps = {
	// lang: "en-US",
	intl: null,
	versionInfo: {},
	dependenceInfos: [],
}

export default FInitVersionInfo;