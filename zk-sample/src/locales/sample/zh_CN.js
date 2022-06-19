/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 20:40:26
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 22:42:02
 */

import zh_CN_messages from './msg/zh_CN';

export default {
    projectName: "样例",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
        ...zh_CN_messages, 
        'test.msg': "天光乍破遇，暮雪白头老。",
        "sample.framework.components":"组件封装",
        "sample.framework.components.original":"原生组件封装",
        "sample.framework.components.custom":"自定义组件封装",
        
    }
}
