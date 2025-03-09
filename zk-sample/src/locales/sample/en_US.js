/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 20:37:21
 * @Last Modified by: vinson
 * @Last Modified time: 2024-12-18 14:59:22
 */

import en_US_messages from './msg/en_US';

export default {
    projectName: "sample",
    name: "English",
    locale: "en-US",
    messages: {
        ...en_US_messages, 
        'test.msg': "天光乍破遇，暮雪白头老。",
        "sample.framework.colors":"Definition of color",
        "sample.framework.theme":"Definition of theme",
        "sample.framework.components":"Components",
        "sample.framework.components.original":"Original Components",
        "sample.framework.components.custom":"Custom Components",
        "sample.framework.components.business":"Business Components",

        "zk.sample.tips.cert.upload":"Please upload the format: XXX; The size is XXX",
        "zk.sample.tips.cert.front":"The following (e.g. XX)",
    }
}
