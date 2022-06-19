/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:42:51
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-02 19:26:38
 */


import React from 'react';
import { Menu, Dropdown } from 'antd';
import { UserOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { injectIntl } from 'react-intl';

import ZKIcon from '../zk-icon';
import zkJsUtils from 'zkJsUtils';
import { zkToolsMsg } from '../../../tools';

import styles from "./styles.less";

/**
user
{
    img:,         // 头像
    username:,    // 登录名
    nickname:,    // 昵称
    newMsg:,      // 消息数量，点击这个会加调 onNewMsg
}

userDropObj props
{
    user:{},
    optKeys:[],
    callBack: , 回调函数；key, item
    onNewMsg:, 新消息回调；key='newMsg'
    onLogin:, 登录回调； key='login'
    onUser:,  点击用户名回调； key='user'
}
*/
const f_getUserOpt = (intl, user, callBack) => {
    user = user || {}
    if (zkJsUtils.isEmpty(user.username)) {
        return (
            <div onClick={() => {
                if (callBack instanceof Function) {
                    callBack('login')
                }
            }}>
                <UserOutlined />{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_login', null)}
            </div>
        )
    } else {
        return (
            <div onClick={() => {
                if (callBack instanceof Function) {
                    callBack('user')
                }
            }}>
                {user.img ? <img className={styles.avatar} src={user.img} /> : <UserOutlined className={styles.avatar} />}
                {user.nickname ? user.nickname : zkToolsMsg.msgFormatByIntl(intl, 'global.app.user.nickname', null)}
            </div>
        )
    }
}
const f_getUserMsg = (intl, user, callBack) => {
    user = user || {}
    if (!zkJsUtils.isEmpty(user.newMsg)) {
        return (
            <div onClick={() => {
                if (callBack instanceof Function) {
                    callBack('newMsg')
                }
            }} >
                <MailOutlined />{zkToolsMsg.msgFormatByIntl(intl, 'global.alert.name._key_newMsg', { num: user.newMsg ? user.newMsg : 0 })}
            </div>
        )
    } else {
        return ""
    }
}
const f_getOptMenu = (intl, keys, callBack) => {
    if (keys instanceof Array && keys.length > 0) {
        /*** 生成菜单1, <4.20.0 可用，>=4.20.0 时不推荐 ***/
        // let menuItem = []
        // for (let key of keys) {
        //     menuItem.push((<Menu.Item key={key}>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name." + key, null)}</Menu.Item>))
        // }
        // let menu = (<Menu onClick={({ item, key, keyPath }) => {
        //     if (callBack instanceof Function) {
        //         callBack(key, keyPath, item)
        //     }
        // }}>{menuItem}</Menu>)
        /*** 生成菜单2, >=4.20.0 可用，推荐的写法 ***/
        let menuItem = []
        for (let key of keys) {
            menuItem.push({
                'key': key,
                // 'icon': zkJsUtils.isEmpty(item.icon) ? '' : <ZKIcon.Antd4Icon icon = {item.icon} />,
                'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name." + key, null)}</span>,
                'title': zkToolsMsg.msgFormatByIntl(intl, "global.opt.name." + key, null)
            })
        }
        let menu = (
            <Menu items = {menuItem} onClick={({ item, key, keyPath }) => {
                if (callBack instanceof Function) {
                    callBack(key, keyPath, item)
                }
            }} />
        );

        return (
            <div>
                <Dropdown trigger={['click']} overlay={menu}>
                    <span>
                        <SettingOutlined />{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_settings", null)}
                    </span>
                </Dropdown>
            </div>
        )
    } else {
        return ""
    }
}

const FInitUserDropDown = ({ intl, user, optKeys, callBack, onNewMsg, onLogin, onUser }) => {

    user = user || {}
    optKeys = optKeys || {}
    callBack = callBack || null
    onNewMsg = onNewMsg || null
    onLogin = onLogin || null
    onUser = onUser || null

    const userCallClick = (key) => {
        if (key === 'newMsg') {
            if (onNewMsg instanceof Function) {
                onNewMsg.call(this, user)
            }
        } else if (key === 'login') {
            if (onLogin instanceof Function) {
                onLogin.call(this)
            }
        } else if (key === 'user') {
            if (onUser instanceof Function) {
                onUser.call(this, user)
            }
        }
    }
    const optCallBack = (key, keyPath, item) => {
        if (callBack instanceof Function) {
            callBack(key, item)
        }
    }

    const userBtn = f_getUserOpt(intl, user, userCallClick)
    const newMsgBtn = f_getUserMsg(intl, user, userCallClick)
    const optMenu = f_getOptMenu(intl, optKeys, optCallBack)

    return (
        <div className={styles.dropdown} >
            {userBtn}
            {newMsgBtn ? newMsgBtn : ""}
            {optMenu ? optMenu : ""}
        </div>
    )
}

export default injectIntl(FInitUserDropDown);


