/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-08 22:07:56
* @Last Modified by: runoob
* @Last Modified time: 2023-09-25 14:30:31
*/

import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { DownOutlined } from '@ant-design/icons';
import { 
  Dropdown, 
  Space,
  message,
  Upload,
  Tour,
  Input,
  Form,
  QRCode,
  Button,
  Calendar,
  // ConfigProvider,
  DatePicker,
  Modal,
  Pagination,
  Popconfirm,
  Radio,
  Select,
  Table,
  // theme,
  TimePicker,
  Transfer,
  Image,
  InputNumber,
  Divider,
} from 'antd';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKConfigProvider } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const cpTheme = {
    "default": {
        "base": { 
            "colorPrimary": '#00b96b'
        }, 
        "components": {
            "Button": {
                "colorPrimary": '#0f0',
                "algorithm": true, // 启用算法
            },
            "Div": {
                "colorPrimary": '#0f0',
            }
        },
    },
    "dark": {
        "base": {
            "colorPrimary": '#5b5655'
        },
    },
    "zk": {
        "base": {
            "colorPrimary": '#002ea6'
        },
    },
}

const items = [
    {label: 'Default', key: 'default', },
    {label: 'Dark', key: 'dark', },
    {label: 'zk', key: 'zk', },
]

import { theme } from 'antd/lib';
const { compactAlgorithm, darkAlgorithm, defaultAlgorithm, defaultConfig, defaultSeed, getDesignToken, useToken } = theme;
const mapToken = defaultAlgorithm(defaultSeed);

// console.log("[^_^:20230909-1733-001] ThemeConfig: ", ThemeConfig);
// console.log("[^_^:20230909-1733-001] configProvider theme: ", theme);
// console.log("[^_^:20230909-1733-001] configProvider theme.defaultSeed: ", defaultSeed);
// console.log("[^_^:20230909-1733-001] configProvider mapToken: ", mapToken);

function FInitZKConfigProvider({ intl, match }) {

    // let token = useToken();
    // console.log("[^_^:20230909-1733-002] f_cp_component token: ", token);
    let designToken = getDesignToken({token: cpTheme.zk.base});
    // console.log("[^_^:20230909-1733-002] f_cp_component designToken: ", designToken);
    let cpoken = getDesignToken({token: cpTheme.default.base});
    // console.log("[^_^:20230909-1733-002] f_cp_component cpoken: ", cpoken);

    const [themeFlag, setTtheme] = useState('default');
    const f_themeSel = (e)=>{
        // console.log('[^_^:20230909-0053-001] themeFlag: ', themeFlag);
        setTtheme(e.key);
    }

    // console.log('[^_^:20230909-0053-002] themeFlag: ', themeFlag);
    // console.log('[^_^:20230909-0053-002] themeFlag: ', cpTheme[themeFlag]);

    return (
        <ZKContentFormat className={styles.sample_detail_panel} >
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.configProvider')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
                <ZKConfigProvider theme = {{ "token": cpTheme[themeFlag].base }} >
                    <Dropdown menu={{ items, onClick: f_themeSel }}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            Theme: {themeFlag}
                            <DownOutlined />
                          </Space>
                        </a>
                    </Dropdown><br /><br />
                    <Space>
                        <Button>Button</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button type="primary">Button.primary</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button type="link">Button.link</Button>
                    </Space><br /><br />
                    <Space>
                        <Input />
                    </Space><br /><br />
                    <Space>
                        <Button onClick={e=>message.success('Success')}>Success</Button>
                        <Button onClick={e=>message.error('Error')}>Error</Button>
                        <Button onClick={e=>message.warning('Warning')}>Warning</Button>
                        <Button onClick={e=>message.info('Info')}>Info</Button>
                        <Button onClick={e=>message.loading('Loading')}>Loading</Button>
                    </Space><br /><br />
                    <div style={{ 'backgroundColor': designToken.colorPrimary }}>DIV: designToken.colorPrimary</div><br /><br />
                    <div style={{ 'backgroundColor': designToken.colorPrimary }}>DIV: components.Div, designToken.colorPrimary</div><br /><br />
                    <div style={{ 'backgroundColor': cpoken.colorPrimary, 'color': 'red' }}>DIV: components.Div</div><br /><br />
                </ZKConfigProvider>
            </ZKContentFormat>
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "ZKConfigProvider 组件: 封装只是设置了一些原生属性的默认值;",
                        "原生态封装，接受原生属性。"
                    ].join('\n')}
                </SyntaxHighlighter>
                <table className={styles.sample_detail_section_table}>
                    <thead>
                        <tr>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
                            <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>否</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </ZKContentFormat>
            <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "原生态封装;",
                        "样例原码"
                    ].join('\n')}
                </SyntaxHighlighter>
            </ZKContentFormat>
            <br />
        </ZKContentFormat>
    )
}

export default injectIntl(FInitZKConfigProvider);


