/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 20:37:21
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 14:47:35
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
    }
}
