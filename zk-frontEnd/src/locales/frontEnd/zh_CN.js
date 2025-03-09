/*
* @Author: Vinson
* @Date:   2021-03-29 16:03:03
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:53:32
* 
* 
* 
*/

import login_zh_CN_msg from "./login/zh_CN";

export default {
    // projectName: "zk-平台",
    projectName: "COMNECT 云平台",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
    	'zk.front.end.theme': '主题',
        ...login_zh_CN_msg,

        // 标签信息
        'zk.front.end.label.account': '账号',
        'zk.front.end.label.mail': '邮箱',
        'zk.front.end.label.phone': '手机',
        'zk.front.end.label.personal.user': '个人用户注册',
        'zk.front.end.label.company': '公司注册',
        'zk.front.end.label.register': '注册',
        'zk.front.end.label.password': '密码',
        'zk.front.end.label.password.again': '确认密码',
        'zk.front.end.label.audit.ing': '正在审核中 ......',
        'zk.front.end.label.verify.code.mail': '邮箱验证码',
        'zk.front.end.label.verify.code.phone': '手机验证码',
        "zk.front.end.label.personal.center":"个人中心",
        "zk.front.end.label.personal.base.info":"基础资料",
        "zk.front.end.label.personal.settings":"账号设置",
        "zk.front.end.label.change.password":"修改密码",
        'zk.front.end.label.change.account': '修改账号',
        'zk.front.end.label.change.mail': '修改邮箱',
        'zk.front.end.label.change.phone': '修改手机',
        'zk.front.end.label.change.mail.new': '新邮箱',
        'zk.front.end.label.change.phone.new': '新手机',
        'zk.front.end.label.forgot.password.company': '公司找回密码',
        'zk.front.end.label.forgot.password.personal.user': '个人用户找回密码',
        'zk.front.end.label.forgot.password.old.password': '旧密码',
        'zk.front.end.label.forgot.password.new.password': '新密码',
        'zk.front.end.label.forgot.password.new.password.again': '确认密码',

        'zk.front.end.label.register.company.step.base.info': '填写基本信息',
        'zk.front.end.label.register.company.step.verify.code': '输入验证码',
        'zk.front.end.label.register.company.step.audit.info': '填写主体信息',
        'zk.front.end.label.register.personal.user.step.input': '输入信息',
        'zk.front.end.label.register.personal.user.step.submit.verify.code': '提交验证码',
        'zk.front.end.label.forgot.password.step.input': '输入信息',
        'zk.front.end.label.forgot.password.step.submit.verify.code': '提交验证码',
        'zk.front.end.label.login.record': '登录记录',
        'zk.front.end.label.close.account': '注销账号',
        'zk.front.end.label.login.record.list': '查看登录记录',
        'zk.front.end.label.close.account.immediately': '立即注销',
        'zk.front.end.label.login.record.grid.col.date': '登录时间',
        'zk.front.end.label.login.record.grid.col.ip': '登录IP',

        // tips 提示信息
        'zk.front.end.tips.cert.upload': '请上传 png、jpg、jpeg 格式照片，大小 20MB 以内',
        'zk.front.end.tips.cert.personal.front': '证件正面(如：身份证国徽面)',
        'zk.front.end.tips.cert.personal.back': '证件背面(如：身份证人像面)',
        'zk.front.end.tips.cert.company': '公司证件',
        'zk.front.end.tips.cert.logo': '公司 Logo',
        'zk.front.end.tips.user.head.upload': '请上传 png、jpg、jpeg 格式照片，大小 10MB 以内',
        'zk.front.end.tips.change.account': '只能修改一次账号',
        'zk.front.end.tips.close.account.title': '账号注销则视为您主动放弃本站所有资产和权限，且同意以下条例：',
        'zk.front.end.tips.close.account.content.1': '1. 注销账号后，您将无法再登录本站，且不支持找回任何个人资料。',
        'zk.front.end.tips.close.account.content.2': '2. 注销账号后，该账号将解除与其他产品的绑定或授权关系，且不支持找回。',
        'zk.front.end.tips.login.record': '近3个月登录记录',

        // 数据验证提示信息
        "zk.front.end.vMsg.input.mail.new":"请输入新邮箱!",
        "zk.front.end.vMsg.input.phone.new":"请输入新手机号!",
        "zk.front.end.vMsg.input.password":"请输入您的密码!",
        "zk.front.end.vMsg.set.password":"请设置您的密码!",
        "zk.front.end.vMsg.set.password.again":"请再次输入您的密码!",
        "zk.front.end.vMsg.verify.code.mail":"输入邮箱验证码",
        "zk.front.end.vMsg.verify.code.phone":"输入手机验证码",
        "zk.front.end.vMsg.verify.code.alert":"验证码已发送到你的邮箱/手机，15分钟内输入有效，请勿泄漏!",
        "zk.front.end.vMsg.confirm.base.info":"确认提交公司基础信息？",
        "zk.front.end.vMsg.confirm.pwd.input":"两次输入密码不一致！",
        "zk.front.end.vMsg.confirm.user.info.finish.register":"确认提交验证码完成注册？",

        // 错误消息
        'zk.front.end.err.msg.cert.upload.type': '请上传 png、jpg、jpeg 格式照片', 
        'zk.front.end.err.msg.cert.upload.max': '上传内容超过 20MB',
        'zk.front.end.err.msg.user.head.upload.type': '请上传 png、jpg、jpeg 格式照片', 
        'zk.front.end.err.msg.user.head.upload.max': '上传内容超过 10MB',  
        'zk.front.end.err.msg.cert.personal.front': '请上传证件正面',
        'zk.front.end.err.msg.cert.personal.back': '请上传证件背面',
        'zk.front.end.err.msg.cert.company': '请上传公司证件',
        'zk.front.end.err.msg.cert.logo': '请上传公司 Logo',
        
        
    
    }
}



