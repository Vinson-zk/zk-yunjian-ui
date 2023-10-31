/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 20:37:21
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-11-30 15:14:12
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
        "sample.framework.components":"Components",
        "sample.framework.components.original":"Original Components",
        "sample.framework.components.custom":"Custom Components",
    }
}
