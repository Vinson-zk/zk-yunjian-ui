/*
* @Author: Vinson
* @Date:   2022-11-30 15:09:35
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-05 11:46:42
*/

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper.js';

import styles from "../styles.less";
import { zkTools } from "zkFramework";
const { zkToolsMsg } = zkTools;

import colors from "./styles.less";

const FInitColorsIndex = ({ intl }) => {
    return (
        <div className={styles.sample_detail_panel}>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.colors')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section} >
            	风格颜色定义：<br />
                在 less 文件中如下使用定义的风格颜色值：<br />
                <div>
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "@import \"zkFramework/css/colors.less\";\n",
                            ".zk_c_1 {",
                            "  background-color: @primary-color-10;",
                            "}\n",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className={styles.sample_detail_section} >
                <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
                样例说明：<br />
                <div className = {colors.zk_c_div_table} >
                    <div className = {colors.zk_c_div_row} >
                        <div className={colors.zk_c_div_block} >
                            <div className={colors.zk_c_div_section} >
                                <div className={`${colors.zk_c_div_item} ${colors.zk_c_div_item_default}`}>zk_c_div_item_default</div>
                            </div>
                            <div className={colors.zk_c_div_section} >
                                <div className={`${colors.zk_c_div_item} ${colors.zk_c_div_item_hover}`}>zk_c_div_item_hover</div>
                            </div>
                            <div className={colors.zk_c_div_section} >
                                <div className={`${colors.zk_c_div_item} ${colors.zk_c_div_item_active}`}>zk_c_div_item_active</div>
                            </div>
                            <div className={colors.zk_c_div_section} >
                                <div className={`${colors.zk_c_div_item} ${colors.zk_c_div_item_outline}`}>zk_c_div_item_outline</div>
                            </div>
                        </div>
                    </div>
                    <div className = {colors.zk_c_div_row} >
                        <div className = {colors.zk_c_div_col}>
                            <div className={colors.zk_c}>@primary-color</div>
                            <div className={colors.zk_c_color_hover}>@primary-color-hover</div>
                            <div className={colors.zk_c_color_active}>@primary-color-active</div>
                            <div className={colors.zk_c_color_outline}>@primary-color-outline</div>
                        </div>
                        <div className = {colors.zk_c_div_col} >
                            <div className={colors.zk_c_p_bg}>@p-bg-color</div>
                            <div className={colors.zk_c_p_bg_color_hover}>@p-bg-color-hover</div>
                            <div className={colors.zk_c_p_bg_color_active}>@p-bg-color-active</div>
                            <div className={colors.zk_c_p_bg_color_outline}>@p-bg-color-outline</div>
                        </div>
                        <div className = {colors.zk_c_div_col} >
                            <div className={colors.zk_c_p_f_color}>@p-font-color</div>
                            <div className={colors.zk_c_p_f_color_hover}>@p-font-color-hover</div>
                            <div className={colors.zk_c_p_f_color_active}>@p-font-color-active</div>
                            <div className={colors.zk_c_p_f_color_outline}>@p-font-color-outline</div>
                        </div>
                        <div className = {colors.zk_c_div_col} >
                            <div className={colors.zk_c_p_b_color}>@p-border-color</div>
                            <div className={colors.zk_c_p_b_color_hover}>@p-border-color-hover</div>
                            <div className={colors.zk_c_p_b_color_active}>@p-border-color-active</div>
                            <div className={colors.zk_c_p_b_color_outline}>@p-border-color-outline</div>
                        </div>
                    </div>
                    <div className = {colors.zk_c_div_row} >
                        <div className = {colors.zk_c_div_col}>
                            <div className={colors.zk_c}>@primary-color</div>
                            <div className={colors.zk_c_01}>@primary-color-01</div>
                            <div className={colors.zk_c_02}>@primary-color-02</div>
                            <div className={colors.zk_c_03}>@primary-color-03</div>
                            <div className={colors.zk_c_04}>@primary-color-04</div>
                            <div className={colors.zk_c_05}>@primary-color-05</div>
                            <div className={colors.zk_c_06}>@primary-color-06</div>
                            <div className={colors.zk_c_07}>@primary-color-07</div>
                            <div className={colors.zk_c_08}>@primary-color-08</div>
                            <div className={colors.zk_c_09}>@primary-color-09</div>
                            <div className={colors.zk_c_10}>@primary-color-10</div>
                            <div className={colors.zk_c_20}>@primary-color-20</div>
                            <div className={colors.zk_c_30}>@primary-color-30</div>
                            <div className={colors.zk_c_40}>@primary-color-40</div>
                            <div className={colors.zk_c_50}>@primary-color-50</div>
                            <div className={colors.zk_c_60}>@primary-color-60</div>
                            <div className={colors.zk_c_70}>@primary-color-70</div>
                            <div className={colors.zk_c_80}>@primary-color-80</div>
                            <div className={colors.zk_c_90}>@primary-color-90</div>
                            <div className={colors.zk_c_100}>@primary-color-100</div>
                            <div className={colors.zk_c_105}>@primary-color-105</div>
                            <div className={colors.zk_c_110}>@primary-color-110</div>
                            <div className={colors.zk_c_115}>@primary-color-115</div>
                            <div className={colors.zk_c_120}>@primary-color-120</div>
                        </div>
                        <div className = {colors.zk_c_div_col} >
                            <div className={colors.zk_c_bg}>@background-color</div>
                            <div className={colors.zk_c_bg_01}>@background-color-01</div>
                            <div className={colors.zk_c_bg_02}>@background-color-02</div>
                            <div className={colors.zk_c_bg_03}>@background-color-03</div>
                            <div className={colors.zk_c_bg_04}>@background-color-04</div>
                            <div className={colors.zk_c_bg_05}>@background-color-05</div>
                            <div className={colors.zk_c_bg_06}>@background-color-06</div>
                            <div className={colors.zk_c_bg_07}>@background-color-07</div>
                            <div className={colors.zk_c_bg_08}>@background-color-08</div>
                            <div className={colors.zk_c_bg_09}>@background-color-09</div>
                            <div className={colors.zk_c_bg_10}>@background-color-10</div>
                            <div className={colors.zk_c_bg_20}>@background-color-20</div>
                            <div className={colors.zk_c_bg_30}>@background-color-30</div>
                            <div className={colors.zk_c_bg_40}>@background-color-40</div>
                            <div className={colors.zk_c_bg_50}>@background-color-50</div>
                            <div className={colors.zk_c_bg_60}>@background-color-60</div>
                            <div className={colors.zk_c_bg_70}>@background-color-70</div>
                            <div className={colors.zk_c_bg_80}>@background-color-80</div>
                            <div className={colors.zk_c_bg_90}>@background-color-90</div>
                            <div className={colors.zk_c_bg_100}>@background-color-100</div>
                            <div className={colors.zk_c_bg_105}>@background-color-105</div>
                            <div className={colors.zk_c_bg_110}>@background-color-110</div>
                            <div className={colors.zk_c_bg_115}>@background-color-115</div>
                            <div className={colors.zk_c_bg_120}>@background-color-120</div>
                        </div>
                        <div className = {colors.zk_c_div_col}>
                            <div className={colors.zk_c_hsl_18}>@primary-color-hsl-18</div>
                            <div className={colors.zk_c_hsl_63}>@primary-color-hsl-63</div>
                        </div>
                    </div>
                    <div className = {colors.zk_c_div_row} >
                        <div className = {colors.zk_c_div_col} >
                            <div className={colors.zk_c_color_info_deprecated_bg}>@info-color-deprecated-bg</div>
                            <div className={colors.zk_c_color_info_deprecated_border}>@info-color-deprecated-border</div>
                        </div>
                        <div className = {colors.zk_c_div_col}>
                            <div className={colors.zk_c_color_success_hover}>@success-color-hover</div>
                            <div className={colors.zk_c_color_success_active}>@success-color-active</div>
                            <div className={colors.zk_c_color_success_outline}>@success-color-outline</div>
                            <div className={colors.zk_c_color_success_deprecated_bg}>@success-color-deprecated-bg</div>
                            <div className={colors.zk_c_color_success_deprecated_border}>@success-color-deprecated-border</div>
                        </div>
                        <div className = {colors.zk_c_div_col}>
                            <div className={colors.zk_c_color_warning_hover}>@warning-color-hover</div>
                            <div className={colors.zk_c_color_warning_active}>@warning-color-active</div>
                            <div className={colors.zk_c_color_warning_outline}>@warning-color-outline</div>
                            <div className={colors.zk_c_color_warning_deprecated_bg}>@warning-color-deprecated-bg</div>
                            <div className={colors.zk_c_color_warning_deprecated_border}>@warning-color-deprecated-border</div>
                        </div>
                        <div className = {colors.zk_c_div_col}>
                            <div className={colors.zk_c_color_error_hover}>@error-color-hover</div>
                            <div className={colors.zk_c_color_error_active}>@error-color-active</div>
                            <div className={colors.zk_c_color_error_outline}>@error-color-outline</div>
                            <div className={colors.zk_c_color_error_deprecated_bg}>@error-color-deprecated-bg</div>
                            <div className={colors.zk_c_color_error_deprecated_border}>@error-color-deprecated-border</div>
                        </div>
                    </div>
                </div>

                <br /><br />
            </div>
        </div>
    );
}

export default injectIntl(FInitColorsIndex);

