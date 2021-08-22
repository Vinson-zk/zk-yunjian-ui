/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:37
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-08-21 22:45:47
 */

import funcModule from "./msg/func_module_en_US";

import msg_codeGenTestCodeGenTest from "./msg/test/codeGenTestCodeGenTest/en_US";

export default {
    projectName: "zkGodeGen",
    name: "English",
    locale: "en-US",
    messages: {
    	"zk.codeGen.opt._key_genCode": "生成代码",
    	"zk.codeGen.error.msg.sel.module": "请选择一个功能模块",
    	...funcModule, 
    	...msg_codeGenTestCodeGenTest
    }
}