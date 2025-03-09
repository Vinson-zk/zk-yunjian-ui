/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-31 14:12:47
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:51
*/

import React, { Component } from 'react';
import { connect } from 'dva';
import { Image, Icon } from "antd";

import locales from "../../../../locales/index";
import { zkTools, ZKCustomComponents, ZKBusinessComponents, ZKOriginalComponents } from "zkFramework";        
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect, ZKButton, ZKUpload } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, ZKIcon, ZKSmartUpload } = ZKCustomComponents;
const { ZKDictSelect } = ZKBusinessComponents;
const { zkToolsAuth, zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkJsUtils from 'zkJsUtils';

import styles from './styles.less';

const photoUrlPrifix = '/' + globalAppConfig.apiPrefixSys + "/org/sysOrgCompany/n/certPhoto/";
// 单个文件允许的最大值，单位B
const maxSize = 20971520; // 20971520
// 支持的上传文件格式；[]-空数组时，支持所有；
const supportTypes = ['image/png', 'image/jpeg']; //'image/bmp', 'image/tiff'

const f_getUploadErrMsg = (intl, keys=[], msgs=[])=>{
    // console.log("[^_^:20250122-1459-001] f_getUploadErrMsg: ", keys, msgs);
    // _err_max_size: 上传内容超大；
    // _err_support_type: 不支持的文件格式；
    // 'zk.front.end.err.msg.cert.upload.type': '请上传 png、jpg、jpeg 格式照片', 
    // 'zk.front.end.err.msg.cert.upload.max': '上传内容超过 20MB',
    for(let k of keys){
        switch(k){
            case '_err_max_size': 
                msgs.push(zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.err.msg.cert.upload.max'));
                break;
            case '_err_support_type': 
                msgs.push(zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.err.msg.cert.upload.type'));
                break;
        }
    }
    return msgs;
}

// 取图片地址的初始化值
const f_getInitPhotoUrl = (rcOptEntity={})=>{
    let state = {
        '_p_legalCertPhotoFront': undefined,
        '_p_legalCertPhotoBack': undefined,
        '_p_companyCertPhoto': zkJsUtils.isEmpty(rcOptEntity.companyCertPhoto, true)?undefined:{url:photoUrlPrifix+'2?__tk=' + zkToolsAuth.getTicket()},
        '_p_logo': zkJsUtils.isEmpty(rcOptEntity.logo, true)?undefined:{url:photoUrlPrifix+'3?__tk=' + zkToolsAuth.getTicket()},
    }
    if(!zkJsUtils.isEmpty(rcOptEntity.legalCertPhoto, true)){
        state._p_legalCertPhotoFront = {url:photoUrlPrifix+'0?__tk=' + zkToolsAuth.getTicket()};
        state._p_legalCertPhotoBack = {url:photoUrlPrifix+'1?__tk=' + zkToolsAuth.getTicket()};
    }
    return state;
}

class CInitRegisterCompanyAuditInfo extends Component {

    formRef = React.createRef();

    // 1、构造函数
    constructor(props) {
        super(props);
        let { rcOptEntity } = props.mPublicApp;
        if(!zkJsUtils.isEmpty(rcOptEntity, true)){
            this.state = f_getInitPhotoUrl(rcOptEntity);
        }else{
            this.state = {};
        }
    };

    // 断言路由跳转
    f_assertToRouter = (rcOptEntity={})=>{
        if(!zkJsUtils.isEmpty(rcOptEntity, true)){
            let { history } = this.props; 
            if(rcOptEntity.status != 4){
                if(rcOptEntity.status == 3 || rcOptEntity.status == 2){
                    history.push("/_company_audit");
                }else{
                    history.push("/");
                }
            }
        }
    }
    
    /** 提交公司审核信息 */
    f_submitCompanyAuditInfo = (values)=>{
        let { mPublicApp, dispatch, history } = this.props; 
        let { rcOptEntity } = mPublicApp; 
        let companyData = { ...rcOptEntity, ...values };
        // 将 companyData 转为 json 字符串；
        companyData = zkJsUtils.objToStr(companyData);
        // console.log("[^_^:20250122-1515-001] f_submitCompanyAuditInfo.companyData: ", companyData);

        // 制作上传参数 
        let formData = new FormData();
        formData.append('company', new Blob([companyData], {type: 'application/json'})); // 将 company 参数转为 Blob 对象
        formData.append('_p_logo', this.state._p_logo.file);
        formData.append('_p_legalCertPhotoFront', this.state._p_legalCertPhotoFront.file);
        formData.append('_p_legalCertPhotoBack', this.state._p_legalCertPhotoBack.file);
        formData.append('_p_companyCertPhoto', this.state._p_companyCertPhoto.file);
        // console.log("[^_^:20250121-1039-002] f_submitCompanyAuditInfo: ", formData);

        // 提交
        dispatch({
            type: 'mPublicApp/rcSubmitAuditInfo', 
            formData: formData, 
            callbackOk: () => {
                history.push("/_company_audit");
            },
            callbackErr: (errors) => {
                if(errors){
                    this.formRef.current.setFields(errors);
                    this.formRef.current.scrollToField(errors[0].name);
                }
            },
        });
    }

    /** 返回 JSX 元素 */
    render() {

        let { location, mPublicApp, dispatch, intl, loading } = this.props; 

        let { rcOptEntity } = mPublicApp; 
        // console.log("[^_^:20250117-1744-001] render.rcOptEntity: ", rcOptEntity);
        
        this.f_assertToRouter(rcOptEntity);

        // ZKJson 自定义校验规则对象
        let f_makeObjRuls = required=>{
            let objRule = {};
            for(let index in locales){
                objRule[index] = zkToolsValidates.string(intl, 1, 128, required);
            }
            return objRule;
        }

        const f_previewBase64 = base64Data => {
            // 解码base64编码的数据。base64Data.split(',')[1]是提取真正的图像数据（移除了"data:image/jpeg;base64,"部分）
            const byteCharacters = atob(base64Data.split(',')[1]);
            // 创建一个数组，用于存储每个字符的ASCII码
            const byteNumbers = new Array(byteCharacters.length);
            // 遍历byteCharacters字符串，并将每个字符的ASCII码值存储在byteNumbers数组中
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            // 使用byteNumbers数组创建一个Uint8Array对象。Uint8Array是一个字节的数组。
            const byteArray = new Uint8Array(byteNumbers);
            // 用byteArray创建一个Blob对象。Blob对象代表一个不可变、原始数据的类文件对象。
            // Blob对象的内容是由选项type指定的MIME类型。
            const blob = new Blob([byteArray], {type: 'image/jpeg'});
            // 创建一个指向存储在Blob对象中的数据的URL。这个URL可以用于文件下载或者用在img标签的src属性中。
            const imageUrl = URL.createObjectURL(blob);
            // 在新的浏览器窗口或标签页中打开上面创建的URL，从而显示该图像
            window.open(imageUrl, '_blank');
        }

        const f_preview = file=>{
            if(file.url){
                window.open(file.url, '_blank');
            }else{
                f_previewBase64(file.thumbUrl);
            }
        }

        let spinning = !rcOptEntity || loading.effects['mPublicApp/rcSubmitAuditInfo'] 
                        || loading.effects['mPublicApp/rcCompanyInfo'];

        // console.log("[^_^:20250121-1022-001] submitCompanyAuditInfo.spinning: ", spinning);
        // console.log("[^_^:20250121-1022-001] submitCompanyAuditInfo.rcOptEntity: ", rcOptEntity);
        // console.log("[^_^:20250121-1022-001] submitCompanyAuditInfo.state: ", this.state);
        
        return <ZKSpin spinning={spinning === true} >{ rcOptEntity === undefined ? "":
            <ZKForm ref = { this.formRef } 
                initialValues = {{...rcOptEntity, 
                    _p_logo: rcOptEntity.logo,
                    _p_legalCertPhotoFront: rcOptEntity.legalCertPhoto, 
                    _p_legalCertPhotoBack: rcOptEntity.legalCertPhoto,
                    _p_companyCertPhoto: rcOptEntity.companyCertPhoto,
                }} 
                onFinish = {this.f_submitCompanyAuditInfo} 
            >
                <ZKEditForm.Item name = "name" 
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.name')} 
                    rules = {[
                        zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                    ]} 
                >
                    <ZKInputJson styleType="compact" primaryAttr={intl.locale} attrs={locales} />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "shortDesc" 
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.shortDesc')} 
                    rules = {[
                        zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
                    ]} 
                >
                    <ZKInputJson styleType="compact" style={{'width':'600px'}} primaryAttr={intl.locale} attrs={locales} />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "_p_logo" 
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.logo')}
                    rules = {[{
                        required: true, 
                        message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.err.msg.cert.logo')
                    }]}   
                >
                    <div className = {`${styles.zk_cert_upload} ${styles.zk_cert_logo_upload}`} >
                        <ZKSmartUpload.CardSmartUpload 
                            topics = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.cert.logo')} 
                            intl = {intl}
                            fileList = { this.state._p_logo?[this.state._p_logo]:[]}
                            maxCount = {1}
                            maxSize = { maxSize }
                            supportTypes = {supportTypes}
                            optOnClick = {key=>{
                                if(key == 'del'){
                                    this.setState({'_p_logo': undefined});
                                    this.formRef.current.setFieldValue('_p_logo', undefined);
                                }else if(key == 'preview'){
                                    f_preview(this.state._p_logo);
                                }
                            }}
                            onErr = {(keys, msgs)=>{
                                // console.log("[^_^:20250120-1122-001]: ", keys, msgs, this.formRef.current);
                                // errs: [{'name': 'fName', 'errors': 'error msg'}]
                                msgs = f_getUploadErrMsg(intl, keys, []);
                                // console.log("[^_^:20250120-1122-002]: ", keys, msgs);
                                this.formRef.current.setFields([{name:'_p_logo', errors: msgs}]);
                                return false;
                            }}
                            uploadProps = {{
                                beforeUpload: (file, fl) => {
                                    // console.log("[^_^:20241216-2125-001] _p_logo.file: ", file);
                                    // console.log("[^_^:20241216-2125-001] _p_logo.fl: ", fl);
                                    // let _this = this;
                                    ZKSmartUpload.getBase64(file, src=>{
                                        // console.log("[^_^:20241216-2125-002] ZKSmartUpload.getBase64: ", this.state);
                                        let _p_logo = {
                                            file: file,
                                            thumbUrl: src,
                                        }
                                        this.setState({'_p_logo': _p_logo});
                                        this.formRef.current.setFieldValue('_p_logo', '-1');

                                        // file.thumbUrl = src;
                                        // this.setState({'_p_logo': file});
                                        // this.formRef.current.setFieldValue('_p_logo', '-1');
                                    });
                                    return false;
                                }
                            }}
                        />
                    </div>
                    <div>
                        <span className="ant-upload-hint">{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.cert.upload')}</span>
                    </div>
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "legalPerson" 
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalPerson')} 
                    rules = {[
                        zkToolsValidates.string(intl, 0, 64, true), 
                    ]} 
                >
                    <ZKInput />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "legalCertType" 
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalCertType')}
                    rules = {[
                        zkToolsValidates.string(intl, 0, 64, true), 
                    ]} 
                >
                    <ZKDictSelect typeCode = "cert.type" />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "legalCertNum" 
                    label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalCertNum')} 
                    rules = {[
                        zkToolsValidates.string(intl, 0, 64, true), 
                    ]} 
                >
                    <ZKInput />
                </ZKEditForm.Item>
                <ZKRow>
                    <ZKCol span = {16} >
                        <ZKEditForm.Item name = "_p_legalCertPhotoFront" labelCol = {{span: 12}} wrapperCol = {{span:12}} 
                            label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalCertPhoto')} 
                            rules = {[ {
                                required: true, 
                                message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.err.msg.cert.personal.front')
                            } ]}  >
                            <div className = {`${styles.zk_cert_upload} ${styles.zk_cert_personal_upload}`} >
                                <ZKSmartUpload.CardSmartUpload 
                                    topics = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.cert.personal.front')}
                                    intl = {intl}
                                    fileList = { this.state._p_legalCertPhotoFront?[this.state._p_legalCertPhotoFront]:[]}
                                    maxCount = {1}
                                    maxSize = { maxSize }
                                    supportTypes = {supportTypes}
                                    optOnClick = {key=>{
                                        if(key == 'del'){
                                            this.setState({'_p_legalCertPhotoFront': undefined});
                                            this.formRef.current.setFieldValue('_p_legalCertPhotoFront', undefined);
                                        }else if(key == 'preview'){
                                            f_preview(this.state._p_legalCertPhotoFront);
                                        }
                                    }}
                                    onErr = {(keys, msgs)=>{
                                        msgs = f_getUploadErrMsg(intl, keys, []);
                                        this.formRef.current.setFields([{'name':'_p_legalCertPhotoFront', 'errors': msgs}]);
                                        return false;
                                    }}
                                    uploadProps = {{
                                        beforeUpload: (file, fl) => {
                                            // console.log("[^_^:20241216-2047-001] --- _p_legalCertPhotoFront ", file, fl);
                                            ZKSmartUpload.getBase64(file, src=>{
                                                let _p_legalCertPhotoFront = {
                                                    file: file,
                                                    thumbUrl: src,
                                                }
                                                this.setState({'_p_legalCertPhotoFront': _p_legalCertPhotoFront});
                                                this.formRef.current.setFieldValue('_p_legalCertPhotoFront', '-1');
                                            });
                                            return false;
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <span className="ant-upload-hint">{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.cert.upload')}</span>
                            </div>
                        </ZKEditForm.Item>
                    </ZKCol>
                    <ZKCol span = {8} >
                        <ZKEditForm.Item name = "_p_legalCertPhotoBack" labelCol = {{span: 0}} wrapperCol = {{span:24}} 
                            label = {null} 
                            rules = {[ {
                                required: true, 
                                message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.err.msg.cert.personal.back')
                            } ]}  >
                            <div className = {`${styles.zk_cert_upload} ${styles.zk_cert_personal_upload}`} >
                                <ZKSmartUpload.CardSmartUpload 
                                    topics = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.cert.personal.back')} 
                                    intl = {intl}
                                    fileList = { this.state._p_legalCertPhotoBack?[this.state._p_legalCertPhotoBack]:[]}
                                    maxCount = {1}
                                    maxSize = { maxSize }
                                    supportTypes = {supportTypes}
                                    optOnClick = {key=>{
                                        if(key == 'del'){
                                            this.setState({'_p_legalCertPhotoBack': undefined});
                                            this.formRef.current.setFieldValue('_p_legalCertPhotoBack', undefined);
                                        }else if(key == 'preview'){
                                            f_preview(this.state._p_legalCertPhotoBack);
                                        }
                                    }}
                                    onErr = {(keys, msgs)=>{
                                        msgs = f_getUploadErrMsg(intl, keys, []);
                                        this.formRef.current.setFields([{'name':'_p_legalCertPhotoBack', 'errors': msgs}]);
                                        return false;
                                    }}
                                    uploadProps = {{
                                        beforeUpload: (file, fl) => {
                                            // console.log("[^_^:20241216-2047-002] --- _p_legalCertPhotoBack ", file, fl);
                                            ZKSmartUpload.getBase64(file, src=>{
                                                let _p_legalCertPhotoBack = {
                                                    file: file,
                                                    thumbUrl: src,
                                                }
                                                this.setState({'_p_legalCertPhotoBack': _p_legalCertPhotoBack});
                                                this.formRef.current.setFieldValue('_p_legalCertPhotoBack', '-1');
                                            });
                                            return false;
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <span className="ant-upload-hint">&nbsp;</span>
                            </div>
                        </ZKEditForm.Item>
                    </ZKCol>
                </ZKRow>
                <ZKEditForm.Item name = "registerDate" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerDate')} 
                    rules = {[ {required: true,} ]} 
                >
                    <ZKDateFormatPicker format='YYYY-MM-DD' />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "companyCertType" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.companyCertType')}
                    rules = {[
                        zkToolsValidates.string(intl, 0, 64, true), 
                    ]} 
                >
                    <ZKDictSelect typeCode = "company.cert.type" />
                </ZKEditForm.Item>
                <ZKEditForm.Item name = "companyCertNum" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.companyCertNum')} 
                    rules = {[
                        zkToolsValidates.string(intl, 0, 64, true), 
                    ]} 
                >
                    <ZKInput />
                </ZKEditForm.Item>
                <ZKRow>
                    <ZKCol span = {24} >
                        <ZKEditForm.Item name = "_p_companyCertPhoto" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.companyCertPhoto')} 
                            rules = {[ {
                                required: true, 
                                message: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.err.msg.cert.company')
                            } ]}   
                        >
                            <div className = {`${styles.zk_cert_upload} ${styles.zk_cert_company_upload}`} >
                                <ZKSmartUpload.CardSmartUpload 
                                    topics = {zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.cert.company')} 
                                    intl = {intl}
                                    fileList = { this.state._p_companyCertPhoto?[this.state._p_companyCertPhoto]:[]}
                                    maxCount = {1}
                                    maxSize = { maxSize }
                                    supportTypes = {supportTypes}
                                    optOnClick = {key=>{
                                        if(key == 'del'){
                                            this.setState({'_p_companyCertPhoto': undefined});
                                            this.formRef.current.setFieldValue('_p_companyCertPhoto', undefined);
                                        }else if(key == 'preview'){
                                            f_preview(this.state._p_companyCertPhoto);
                                        }
                                    }}
                                    onErr = {(keys, msgs)=>{
                                        msgs = f_getUploadErrMsg(intl, keys, []);
                                        this.formRef.current.setFields([{'name':'_p_companyCertPhoto', 'errors': msgs}]);
                                        return false;
                                    }}
                                    uploadProps = {{
                                        beforeUpload: (file, fl) => {
                                            // console.log("[^_^:20241216-2125-001] --- _p_companyCertPhoto ", file, fl);
                                            ZKSmartUpload.getBase64(file, src=>{
                                                let _p_companyCertPhoto = {
                                                    file: file,
                                                    thumbUrl: src,
                                                }
                                                this.setState({'_p_companyCertPhoto': _p_companyCertPhoto});
                                                this.formRef.current.setFieldValue('_p_companyCertPhoto', '-1');
                                            });
                                            return false;
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <span className="ant-upload-hint">{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.cert.upload')}</span>
                            </div>
                        </ZKEditForm.Item>
                    </ZKCol>
                </ZKRow>
                <ZKRow>
                    <ZKCol span = {15} offset = {9} >
                        <ZKButton type="primary" htmlType="submit">{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_submit')}</ZKButton>
                    </ZKCol>
                </ZKRow>
            </ZKForm>}
            <div>&nbsp;</div>
        </ZKSpin>
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { mPublicApp, dispatch, history, match } = this.props; 
        let { rcOptEntity } = mPublicApp; 
        if(rcOptEntity === undefined){
            // 从令牌中取提交的公司信息
            dispatch({ 
                type: 'mPublicApp/getCompanyInfoByTk', 
                callbackOk: rcOptEntity=>{
                    this.setState(f_getInitPhotoUrl(rcOptEntity));
                },
                callbackErr: ()=>{
                    // 从令牌中取提交的公司信息失败
                    history.push("/");
                    zkToolsAuth.removeTicket();
                }
            });
        }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {

    }

}

// export default injectIntl(connect(({ mApp, mPublicApp, loading }) => ({ mApp, mPublicApp, loading }))(CInitRegisterCompanyAuditInfo));

export default CInitRegisterCompanyAuditInfo;





