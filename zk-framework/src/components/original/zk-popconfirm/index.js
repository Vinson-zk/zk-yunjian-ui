/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:07:43
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:06:43
 */

import React from 'react';
import { Popconfirm } from 'antd';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { zkToolsMsg } from '../../../tools';

const FWrapPopconfirm = ({ title, type, intl, ...props })=>{
    if (!title) {
        switch (type) {
            case 'delete': // 删除确认
                title = zkToolsMsg.msgFormatByIntl(intl, 'global.popconfirm.content.delete');
                break;
            default : 
                title = zkToolsMsg.msgFormatByIntl(intl, 'global.popconfirm.title.confirm');
        }
    }

    return (<Popconfirm {...props}
        title={title}   // 描述
        okText={zkToolsMsg.msgFormatByIntl(intl, 'global.popconfirm.name.okText')} // 确认按钮文字
        cancelText={zkToolsMsg.msgFormatByIntl(intl, 'global.popconfirm.name.cancelText')} // 取消按钮文字
    />)
}

// 定义属性
FWrapPopconfirm.propTypes = {
    ...Popconfirm.propTypes,
    type: PropTypes.string
}
// 默认属性
FWrapPopconfirm.defaultProps = {
    ...Popconfirm.defaultProps 
}

export default injectIntl(FWrapPopconfirm);


