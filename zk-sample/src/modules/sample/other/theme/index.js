/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-11 12:39:26
* @Last Modified by: runoob
* @Last Modified time: 2023-09-26 09:54:34
*/

import React, {useState} from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { DownOutlined } from '@ant-design/icons';
import { 
    ConfigProvider, 
    Dropdown, 
    Space,
    Button,
    Input,
    Radio,
} from 'antd';

import { docco } from '../../helper.js';
import zkStyles from "zkFramework/style/zk.styles.less";
import styles from "../../styles.less";
import themeStyles from "./styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkTheme, { changeStyleCssVal } from "zkFramework/style/theme";
// console.log("[^_^:20230911-0601-001] zkTheme:", zkTheme);

const items = [
    {label: 'Default', key: 'default', },
    {label: 'Dark', key: 'dark',},
    {label: 'Antd', key: 'antd',},
    {label: 'zk', key: 'zk', },
]

const FInitTheme = ({ intl }) =>{

	const [themeFlag, setTtheme] = useState('default');

	const f_themeFlagSel = ({item, key, keyPath, domEvent})=>{
        // console.log('[^_^:20230909-0053-001] e: ', item, key, keyPath, domEvent);
        setTtheme(key);
        changeStyleCssVal(zkTheme[key]);
    }
    const f_getThemeSel = (key)=>{
        for(let o of items){
        	if(o.key == key){
        		return o;
        	}
        }
        return {};
    }

    console.log('[^_^:20230909-0053-001] themeFlag: ', themeFlag);

	// console.log("[^_^:20230911-2347-001] getDesignToken:", getDesignToken());

    const selTheme = zkTheme[themeFlag];

	return (
        <ZKContentFormat className={styles.sample_detail_panel} >
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.framework.theme')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
                <div className = {zkStyles.zk_f_div_table} >
                    <div className = {zkStyles.zk_f_div_row} >
                        <div className={`${zkStyles.zk_f_div_cell} ${themeStyles.theme_div_cell}`} >
                            <div className={themeStyles.theme_div_item} style = {{"borderBottom":"1px solid", 'margin': '0px 29px 6px 0px'}}>
                                <span style={{'fontSize': '16px', 'fontWeight': 'bold', 'color': ''}}>主题颜色效果：</span>
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.base.colorPrimary}}>
                                基础主题色: base.colorPrimary
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorPrimary}}>
                                主题色: colorPrimary
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorBgBase}}>
                                基础背景色: colorBgBase
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorTextBase, 'color': '#fff'}}>
                                基础文本色: colorTextBase
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorLink}}>
                                超链接色: colorLink
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorInfo}}>
                                提醒信息色: colorInfo
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorSuccess}}>
                                提醒成功色: colorSuccess
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorError}}>
                                提醒错误色: colorError
                            </div>
                            <div className={themeStyles.theme_div_item} style={{'backgroundColor': selTheme.map.colorWarning}}>
                                提醒警告色: colorWarning
                            </div>
                        </div>
                        <div className={zkStyles.zk_f_div_cell} >
                            <div className={themeStyles.theme_div_item} style = {{'width':'100%', "borderBottom":"1px solid", 'margin': '0px 29px 6px 0px'}}>
                                <span style={{'fontSize': '16px', 'fontWeight': 'bold', 'color': ''}}>ZK颜色效果：</span>
                            </div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimary}`} >@colorPrimary</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryActive}`} >@colorPrimaryActive</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryBg}`} >@colorPrimaryBg</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryBgHover}`} >@colorPrimaryBgHover</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryBorder}`} >@colorPrimaryBorder</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryBorderHover}`} >@colorPrimaryBorderHover</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryHover}`} >@colorPrimaryHover</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryText}`} >@colorPrimaryText</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryTextActive}`} >@colorPrimaryTextActive</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorPrimaryTextHover}`} >@colorPrimaryTextHover</div>
                        </div>
                        <div className={zkStyles.zk_f_div_cell} >
                            <div className={themeStyles.theme_div_item} style = {{'width':'100%', "borderBottom":"0px solid", 'margin': '0px 29px 6px 0px'}}>
                                <span style={{'fontSize': '16px', 'fontWeight': 'bold', 'color': ''}}>&nbsp;</span>
                            </div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorBgBase}`} >@colorBgBase</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorBgTextActive}`} >@colorBgTextActive</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorBgTextHover}`} >@colorBgTextHover</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorBorder}`} >@colorBorder</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorBorderBg}`} >@colorBorderBg</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorHighlight}`} >@colorHighlight</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorLink}`} >@colorLink</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorLinkActive}`} >@colorLinkActive</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorLinkHover}`} >@colorLinkHover</div>
                        </div>
                        <div className={zkStyles.zk_f_div_cell} >
                            <div className={themeStyles.theme_div_item} style = {{'width':'100%', "borderBottom":"0px solid", 'margin': '0px 29px 6px 0px'}}>
                                <span style={{'fontSize': '16px', 'fontWeight': 'bold', 'color': ''}}>&nbsp;</span>
                            </div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorText}`} style={{'color':'#fff'}} >@colorText</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorTextBase}` } style={{'color':'#fff'}} >@colorTextBase</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorTextDisabled}`} >@colorTextDisabled</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorTextLabel}`} >@colorTextLabel</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorWhite}`} >@colorWhite</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorError}`} >@colorError</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorInfo}`} >@colorInfo</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorSuccess}`} >@colorSuccess</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorWarning}`} >@colorWarning</div> 
                        </div>
                        <div className={zkStyles.zk_f_div_cell} >
                            <div className={themeStyles.theme_div_item} style = {{'width':'100%', "borderBottom":"0px solid", 'margin': '0px 29px 6px 0px'}}>
                                <span style={{'fontSize': '16px', 'fontWeight': 'bold', 'color': ''}}>&nbsp;</span>
                            </div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorFill}`} >@colorFill</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorFillAlter}` } >@colorFillAlter</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorFillContent}`} >@colorFillContent</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorFillContentHover}`} >@colorFillContentHover</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorFillQuaternary}`} >@colorFillQuaternary</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorFillSecondary}`} >@colorFillSecondary</div>
                            <div className={`${themeStyles.theme_div_item} ${themeStyles.c_colorFillTertiary}`} >@colorFillTertiary</div>
                        </div>
                    </div>
                    <br />
                    <div className = {zkStyles.zk_f_div_row} >
                        <div style = {{"borderBottom":"1px solid", 'marginBottom': '6px'}}>
                            <span style={{'fontSize': '16px', 'fontWeight': 'bold', 'color': ''}}>主题效果样例：</span><br />
                        </div>
                    </div>
                    <div className = {zkStyles.zk_f_div_row} >
                        <div className={zkStyles.zk_f_div_cell} >
                            <Dropdown menu={{ items: items, onClick: f_themeFlagSel }}>
                                <a>
                                  <Space>
                                    Theme: {f_getThemeSel(themeFlag).label}
                                    <DownOutlined />
                                  </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                    <div className = {zkStyles.zk_f_div_row} >
                        <div className={zkStyles.zk_f_div_cell} ><div className={themeStyles.theme_div_item}></div></div>
                        <div className={zkStyles.zk_f_div_cell} ><div className={themeStyles.theme_div_item}>normal</div></div>
                        <div className={zkStyles.zk_f_div_cell} ><div className={themeStyles.theme_div_item}>activate</div></div>
                        <div className={zkStyles.zk_f_div_cell} ><div className={themeStyles.theme_div_item}>hover</div></div>
                    </div>
                    <ConfigProvider theme = {{ "token": zkTheme[themeFlag].base }} >
                        <div className = {zkStyles.zk_f_div_row} >
                            <div className={zkStyles.zk_f_div_cell} >
                                <div className={themeStyles.theme_div_item}>Antd theme:</div>
                            </div>
                            <div className={zkStyles.zk_f_div_cell} >
                                <div className={themeStyles.theme_div_item}>
                                    <Button>Default Button</Button>
                                </div>
                                <div className={themeStyles.theme_div_item}>
                                    <Input />
                                </div>
                                <div className={themeStyles.theme_div_item}>
                                    <Radio>normal</Radio>
                                </div>
                            </div>
                            <div className={zkStyles.zk_f_div_cell} >
                                <div className={themeStyles.theme_div_item}>
                                    <Button type="primary">Primary Button</Button>
                                </div>
                                <div className={themeStyles.theme_div_item}>
                                    <Input type="primary" />
                                </div>
                                <div className={themeStyles.theme_div_item}>
                                    <Radio checked={true} >activate</Radio>
                                </div>
                            </div>
                        </div>
                        <div className = {zkStyles.zk_f_div_row} >
                            <div className={zkStyles.zk_f_div_cell} >
                                <div className={themeStyles.theme_div_item}>Custom theme:</div>
                            </div>
                            <div className={zkStyles.zk_f_div_cell} >
                                <input type="button" value="Custom Button " />
                            </div>
                            <div className={zkStyles.zk_f_div_cell} >
                                <input type="button" value="Custom Button activate" 
                                        style = {{
                                            'backgroundColor': selTheme.map.colorPrimary,
                                            'borderColor': selTheme.map.colorPrimary,
                                            'color': selTheme.map.colorWhite,
                                        }} 
                                    />
                            </div>
                        </div>
                    </ConfigProvider>
                </div>  
            </ZKContentFormat>
            <br />
        </ZKContentFormat>
	)
}


export default injectIntl(FInitTheme);


