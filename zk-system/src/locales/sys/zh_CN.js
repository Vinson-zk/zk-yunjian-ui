/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-09 23:45:46
 */
// sysRes
import msg_sysResNav from "./msg/res/sysNav/zh_CN";
import msg_sysResMenu from "./msg/res/sysMenu/zh_CN";
import msg_sysResDictType from "./msg/res/sysResDictType/zh_CN";
import msg_sysResDict from "./msg/res/sysResDict/zh_CN";
import msg_sysResApplicationSystem from "./msg/res/sysResApplicationSystem/zh_CN";
import msg_sysResRequestChannel from "./msg/res/sysResRequestChannel/zh_CN";
import msg_sysResFuncApi from "./msg/res/sysResFuncApi/zh_CN";
// sysSettings
import msg_sysSetItem from "./msg/settings/sysSetItem/zh_CN";
import msg_sysSetCollection from "./msg/settings/sysSetCollection/zh_CN";
// sysOrg
import msg_sysOrgCompany from "./msg/org/sysOrgCompany/zh_CN";
import msg_sysOrgDept from "./msg/org/sysOrgDept/zh_CN";
import msg_sysOrgRank from "./msg/org/sysOrgRank/zh_CN";
import msg_sysOrgRole from "./msg/org/sysOrgRole/zh_CN";
import msg_sysOrgUser from "./msg/org/sysOrgUser/zh_CN";
import msg_sysOrgUserType from "./msg/org/sysOrgUserType/zh_CN";
// sysAuth
import msg_sysAuthDefined from "./msg/auth/sysAuthDefined/zh_CN";

export default {
    projectName: "zkSystem",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
        ...msg_sysResNav, ...msg_sysResMenu, ...msg_sysResDictType, ...msg_sysResDict, ...msg_sysResFuncApi, 
        ...msg_sysResApplicationSystem, ...msg_sysResRequestChannel, 

        ...msg_sysSetItem, ...msg_sysSetCollection,

        ...msg_sysOrgCompany, ...msg_sysOrgDept, ...msg_sysOrgRank, ...msg_sysOrgRole, ...msg_sysOrgUser, ...msg_sysOrgUserType,

        ...msg_sysAuthDefined
    }
}