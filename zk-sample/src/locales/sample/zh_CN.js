/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 20:40:26
 * @Last Modified by: vinson
 * @Last Modified time: 2024-12-18 14:59:24
 */

import zh_CN_messages from './msg/zh_CN';

export default {
    projectName: "样例",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
        ...zh_CN_messages, 
        'test.msg': "天光乍破遇，暮雪白头老。",
        "sample.framework.colors":"颜色定义",
        "sample.framework.theme":"主题定义",
        "sample.framework.components":"组件封装",
        "sample.framework.components.original":"原生组件封装",
        "sample.framework.components.custom":"自定义组件封装",
        "sample.framework.components.business":"业务组件封装",

        "zk.sample.tips.cert.upload":"请上传格式为：XXX；大小为：XXX",
        "zk.sample.tips.cert.front":"下面（如：XX）",
        
    }
}
