/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:42:51
 * @Last Modified by: runoob
 * @Last Modified time: 2023-10-08 18:01:23
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
                if (zkJsUtils.assertObjType(callBack, Function)) {
                    callBack('login')
                }
            }}>
                <UserOutlined />{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_login', null)}
            </div>
        )
    } else {
        return (
            <div onClick={() => {
                if (zkJsUtils.assertObjType(callBack, Function)) {
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
                if (zkJsUtils.assertObjType(callBack, Function)) {
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
    if (zkJsUtils.assertObjType(keys, Array) && keys.length > 0) {
        /*** 生成菜单1, <4.20.0 可用，>=4.20.0 时不推荐 ***/
        // let menuItem = []
        // for (let key of keys) {
        //     menuItem.push((<Menu.Item key={key}>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name." + key, null)}</Menu.Item>))
        // }
        // let menu = (<Menu onClick={({ item, key, keyPath }) => {
        //     if (callBack, Function)) {
        //         callBack(key, keyPath, item)
        //     }
        // }}>{menuItem}</Menu>)
        /*** 生成菜单2, >=4.20.0 可用，推荐的写法 ***/
        let menuItem = []
        for (let key of keys) {
            menuItem.push({
                'key': key,
                'label': <span>{zkToolsMsg.msgFormatByIntl(intl, "global.opt.name." + key, null)}</span>,
                'title': zkToolsMsg.msgFormatByIntl(intl, "global.opt.name." + key, null)
            })
        }

        return (
            <div>
                <Dropdown trigger={['click']} 
                    menu={{
                        'items': menuItem,
                        'onClick': ({ item, key, keyPath, domEvent }) => {
                            if (zkJsUtils.assertObjType(callBack, Function)) {
                                callBack(key, keyPath, item);
                            }
                        }
                    }}
                >
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
            if (zkJsUtils.assertObjType(onNewMsg, Function)) {
                onNewMsg.call(this, user)
            }
        } else if (key === 'login') {
            if (zkJsUtils.assertObjType(onLogin, Function)) {
                onLogin.call(this)
            }
        } else if (key === 'user') {
            if (zkJsUtils.assertObjType(onUser, Function)) {
                onUser.call(this, user)
            }
        }
    }
    const optCallBack = (key, keyPath, item) => {
        if (zkJsUtils.assertObjType(callBack, Function)) {
            callBack(key, item)
        }
    }

    const userBtn = f_getUserOpt(intl, user, userCallClick)
    const newMsgBtn = f_getUserMsg(intl, user, userCallClick)
    const optMenu = f_getOptMenu(intl, optKeys, optCallBack)

    return (
        <div className={styles.zk_dropdown} >
            {userBtn}
            {newMsgBtn ? newMsgBtn : ""}
            {optMenu ? optMenu : ""}
        </div>
    )
}

export default injectIntl(FInitUserDropDown);


