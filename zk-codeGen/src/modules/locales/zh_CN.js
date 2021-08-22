/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-08-21 22:46:23
 */

import funcModule from "./msg/func_module_zh_CN";
import gen from "./msg/gen_zh_CN";
import tablInfo from "./msg/table_info_zh_CN";
import colInfo from "./msg/col_info_zh_CN";


import msg_codeGenTestCodeGenTest from "./msg/test/codeGenTestCodeGenTest/zh_CN";

export default {
    projectName: "zk代码生成",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
    	"zk.codeGen.opt._key_genCode": "生成代码",
        "zk.codeGen.opt._key_batch_genCode": "批量生成",
    	"zk.codeGen.opt._key_update_tableInfo": "更新",
        "zk.codeGen.opt._key_view_colInfo": "字段",
        "zk.codeGen.opt._key_update_colInfo_add": "增量更新",
        "zk.codeGen.opt._key_update_colInfo_all": "全量更新",
        
        // EQ-等于；NEQ-不等于；GT-大于；GTE-大于等于；LT-小于；LTE-小于等于；IN-在其中；NIN-不在其中；LIKE-模糊查询；NLIKE；ISNULL-为空；ISNOTNULL-不为空；
        "zk.codeGen.QueryType.EQ": "EQ(等于)",
        "zk.codeGen.QueryType.NEQ": "NEQ(不等于)",
        "zk.codeGen.QueryType.GT": "GT(大于)",
        "zk.codeGen.QueryType.GTE": "GTE(大于等于)",
        "zk.codeGen.QueryType.LT": "LT(小于)",
        "zk.codeGen.QueryType.LTE": "LTE(小于等于)",
        "zk.codeGen.QueryType.IN": "IN(在其中)",
        "zk.codeGen.QueryType.LIKE": "LIKE(模糊查询)",
        "zk.codeGen.QueryType.NLIKE": "NLIKE(反向模糊查询)",
        "zk.codeGen.QueryType.ISNULL": "ISNULL(为空)",
        "zk.codeGen.QueryType.ISNOTNULL": "ISNOTNULL(不为空)",

    	"zk.codeGen.error.msg.sel.module": "请选择一个功能模块",
    	"zk.codeGen.msg.update_tableInfo": "确认更新表信息？会覆盖已生成的表信息",
    	"zk.codeGen.msg.update_colInfo_all": "确认更新表字段信息？会覆盖已生成的表字段信息",

    	...funcModule, ...gen, ...tablInfo, ...colInfo, 
        ...msg_codeGenTestCodeGenTest
    }
}