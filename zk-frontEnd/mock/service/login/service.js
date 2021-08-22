/*
* @Author: Vinson
* @Date:   2021-07-01 23:08:53
* @Last Modified by:   Vinson
* @Last Modified time: 2021-07-02 09:57:17
* 
* 
* 
*/

let sleepTime = 2000;

module.exports = {

	['POST /apiMock/sys/userLogin/getUser'](req, res) {

        // console.log("[^_^:20210701-2353-001] /apiMock/sys/userLogin/getUser, 取用户信息 req 为：", req);
        // console.log("[^_^:20210701-2353-001] /apiMock/sys/userLogin/getUser, 取用户信息 body 为：", req.body);
        console.log("[^_^:20210701-2353-001] /apiMock/sys/userLogin/getUser, 取用户信息 headers 为：", req.headers);

        let headers = req.headers;
        let resJsonData = { code: 'zk.0', msg: 'mock post /apiMock/sys/userLogin/getUser ok' }

        let tIDKey = "_tid";
        if (headers[tIDKey] == "apiMock-accountLogin") {
        	resJsonData.data = { 
    			user: { "pkId": "pkId", "username": "admin", "nickname": "Mock 账号", "newMsg": 2 } 
    		};
            
        } else if (headers[tIDKey] == "apiMock-phoneNumberLogin") {
        	resJsonData.data = { 
        		user: { "pkId": "pkId", "username": "13825659082", "nickname": "Mock 手机", "newMsg": 3 }
    		};
            
        }else{
            resJsonData.code = 'zk.security.000005';
            resJsonData.msg = '令牌过期!';
        }

        setTimeout(function () {
            console.log(`mock ----------- getUser 休息 ${sleepTime / 1000} 秒 完成`);
            res.json(resJsonData)
        }, sleepTime);
    },
 
    ['POST /apiMock/sys/userLogin/accountLogin'](req, res) {

        console.log("[^_^:20210701-2310-001] /apiMock/sys/userLogin/accountLogin, 登录参数 body 为：", req.body);

        let dataBody = req.body;
        let resJsonData = { code: 'zk.0', msg: 'mock post /apiMock/sys/userLogin/accountLogin ok' }

        if (dataBody.username == "admin") {
        	if (dataBody.pwd == "admin") {
        		resJsonData.data = { 
        			_tID: 'apiMock-accountLogin',
        			user: { "pkId": "pkId", "username": dataBody.username, "nickname": "Mock 账号", "newMsg": 6 } 
        		};
        	}else{
        		resJsonData.code = 'zk.security.000002';
            	resJsonData.msg = '密码错误';
        	}
            
        } else {
            resJsonData.code = 'zk.security.000001';
            resJsonData.msg = '用户[' + dataBody.username + ']不存在!';
        }

        setTimeout(function () {
            console.log(`mock ----------- accountLogin 休息 ${sleepTime / 1000} 秒 完成`);
            res.json(resJsonData)
        }, sleepTime);
    },

    ['POST /apiMock/sys/userLogin/phoneNumberLogin'](req, res) {

        console.log("[^_^:20210701-2310-002] /apiMock/sys/userLogin/phoneNumberLogin, 登录参数 body 为：", req.body);

        let dataBody = req.body;
        let resJsonData = { code: 'zk.0', msg: 'mock post /apiMock/sys/userLogin/phoneNumberLogin ok' }

        if (dataBody.phoneNumber == "13825659082") {
        	if (dataBody.validCode == "9527") {
        		resJsonData.data = { 
        			_tID: 'apiMock-phoneNumberLogin',
        			user: { "pkId": "pkId", "username": dataBody.phoneNumber, "nickname": "Mock 手机", "newMsg": 6 }
        		};
        	}else{
        		resJsonData.code = 'zk.security.000004';
            	resJsonData.msg = '手机验证码错误';
        	}
            
        } else {
            resJsonData.code = 'zk.security.000003';
            resJsonData.msg = '手机号[' + dataBody.phoneNumber + ']未注册!';
        }

        setTimeout(function () {
            console.log(`mock ----------- phoneNumberLogin 休息 ${sleepTime / 1000} 秒 完成`);
            res.json(resJsonData);
        }, sleepTime);
    }
}