/*
* @Author: Vinson
* @Date:   2021-03-29 16:02:49
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:53:32
* 
* 
* 
*/

import login_en_US_msg from "./login/en_US";

export default {
    // projectName: "zk-Platform",
    projectName: "COMNECT Platform",
    name: "English",
    locale: "en-US",
    messages: {
    	'zk.front.end.theme': 'Theme',
        ...login_en_US_msg,

        // 标签信息
        'zk.front.end.label.account': 'en:账号',
        'zk.front.end.label.mail': 'en:邮箱',
        'zk.front.end.label.phone': 'en:手机',
        'zk.front.end.label.personal.user': 'en:个人用户注册',
        'zk.front.end.label.company': 'en:公司注册',
        'zk.front.end.label.register': 'en:注册',
        'zk.front.end.label.password': 'en:密码',
        'zk.front.end.label.password.again': 'en:确认密码',
        'zk.front.end.label.audit.ing': 'en:正在审核中 ......',
        'zk.front.end.label.verify.code.mail': 'Mail Verifiy Code',
        'zk.front.end.label.verify.code.phone': 'Phone Verifiy Code',
        "zk.front.end.label.personal.center":"Personal Center",
        "zk.front.end.label.personal.base.info":"en:基础资料",
        "zk.front.end.label.personal.settings":"en:账号设置",
        "zk.front.end.label.change.password":"en:修改密码",
        'zk.front.end.label.change.account': 'en:修改账号',
        'zk.front.end.label.change.mail': 'en:修改邮箱',
        'zk.front.end.label.change.phone': 'en:修改手机',
        'zk.front.end.label.change.mail.new': 'en:新邮箱',
        'zk.front.end.label.change.phone.new': 'en:新手机',
        'zk.front.end.label.forgot.password.company': 'en:公司找回密码',
        'zk.front.end.label.forgot.password.personal.user': 'en:个人用户找回密码',
        'zk.front.end.label.forgot.password.old.password': 'en:旧密码',
        'zk.front.end.label.forgot.password.new.password': 'en:新密码',
        'zk.front.end.label.forgot.password.new.password.again': 'en:确认密码',

        'zk.front.end.label.register.company.step.base.info': 'Input Base Info',
        'zk.front.end.label.register.company.step.verify.code': 'Input Verify Code',
        'zk.front.end.label.register.company.step.audit.info': 'Input Entity Info',
        'zk.front.end.label.register.personal.user.step.input': 'en:输入信息',
        'zk.front.end.label.register.personal.user.step.submit.verify.code': 'en:提交验证码',
        'zk.front.end.label.forgot.password.step.input': 'en:输入信息',
        'zk.front.end.label.forgot.password.step.submit.verify.code': 'en:提交验证码',
        'zk.front.end.label.login.record': 'en:登录记录',
        'zk.front.end.label.close.account': 'en:注销账号',
        'zk.front.end.label.login.record.list': 'en:查看登录记录',
        'zk.front.end.label.close.account.immediately': 'en:立即注销',
        'zk.front.end.label.login.record.grid.col.date': 'en: 登录时间',
        'zk.front.end.label.login.record.grid.col.ip': 'en: 登录IP',

        // tips 提示信息
        'zk.front.end.tips.cert.upload': 'en:请上传 png、jpg、jpeg 格式照片，大小 20MB 以内',
        'zk.front.end.tips.cert.personal.front': 'en:证件正面(如：身份证国徽面)',
        'zk.front.end.tips.cert.personal.back': 'en:证件背面(如：身份证人像面)',
        'zk.front.end.tips.cert.company': 'en:公司证件',
        'zk.front.end.tips.cert.logo': 'en:公司 Logo',
        'zk.front.end.tips.change.account': 'en:只能修改一次账号',
        'zk.front.end.tips.close.account.title': 'en:账号注销则视为您主动放弃本站所有资产和权限，且同意以下条例：',
        'zk.front.end.tips.close.account.content.1': 'en:1. 注销账号后，您将无法再登录本站，且不支持找回任何个人资料。',
        'zk.front.end.tips.close.account.content.2': 'en:2. 注销账号后，该账号将解除与其他产品的绑定或授权关系，且不支持找回。',
        'zk.front.end.tips.login.record': 'en:近3个月登录记录',

        // 数据验证提示信息
        "zk.front.end.vMsg.input.mail.new":"en:请输入新邮箱!",
        "zk.front.end.vMsg.input.phone.new":"en:请输入手机号!",
        "zk.front.end.vMsg.input.password":"en:请输入您的密码!",
        "zk.front.end.vMsg.set.password":"en:请设置您的密码!",
        "zk.front.end.vMsg.set.password.again":"en:请再次输入您的密码!",
        "zk.front.end.vMsg.verify.code.mail":"en:输入邮箱验证码",
        "zk.front.end.vMsg.verify.code.phone":"en:输入手机验证码",
        "zk.front.end.vMsg.verify.code.alert":"en:验证码已发送到你的邮箱/手机，15分钟内输入有效，请勿泄漏!",
        "zk.front.end.vMsg.confirm.base.info":"en:确认提交公司基础信息？",
        "zk.front.end.vMsg.confirm.pwd.input":"The new password that you entered do not match!",
        "zk.front.end.vMsg.confirm.user.info.finish.register":"en:确认提交验证码完成注册？",

        // 错误消息
        'zk.front.end.err.msg.cert.upload.type': 'en:请上传 png、jpg、jpeg 格式照片', 
        'zk.front.end.err.msg.cert.upload.max': 'en:上传内容超过 20MB',  
        'zk.front.end.err.msg.cert.personal.front': 'en:请上传证件正面',
        'zk.front.end.err.msg.cert.personal.back': 'en:请上传证件背面',
        'zk.front.end.err.msg.cert.company': 'en:请上传公司证件',
        'zk.front.end.err.msg.cert.logo': 'en:请上传公司 Logo',



    }
}






