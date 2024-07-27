/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-30 17:30:31
* @Last Modified by: runoob
* @Last Modified time: 2024-01-15 00:22:28
*/
import React, { Component } from 'react';
import { connect } from 'dva';
import { Space, Breadcrumb, App } from 'antd';
import { injectIntl } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents, ZKCustomComponents } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;
const { ZKInput, ZKEmpty, ZKDropdown, ZKSpin } = ZKOriginalComponents;
const { ZKIcon, ZKOptRow } = ZKCustomComponents;
const { Search } = ZKInput;

import zkStyles from 'zkFramework/style/zk.styles.less';
import styles from './styles.less';

import CFileViewList from './fileViewList.js';
import CFileViewGrid from './fileViewGrid.js';
import CFileUpload from './fileUpload.js';

// 处理查询当前操作目录下子文件后的函数
class CInitFileView extends Component {
	constructor(props) { 
        super(props);
        this.state = {
            spinning: false,
            viewType: 'list', // list-列表；grid-网格；
            searchValue: undefined,
            uploadProgress: 0
        };
        let optDir = props.optDir || {};
        props.dispatch({ 
            type: 'mFile/findFilePage', 
            params: { parentId: optDir.pkId, parentIdIsEmpty: true }, 
        });
    };

    shouldComponentUpdate(nextProps, nextState){
        // console.log("[^_^:20231010-0005-001] shouldComponentUpdate.props: ", this.props, nextProps);
        // 当前操作目录有变化
        if (nextProps.optDir != this.props.optDir) {
            let { dispatch } = this.props;
            let optDir = nextProps.optDir || {};
            dispatch({ 
                type: 'mFile/findFilePage', 
                params: { parentId: optDir.pkId, parentIdIsEmpty: true }, 
            });
        }
        return true;
    }

    // 取 操作目录路径面包屑
    f_getDirBreadcrumb = optDir=>{
        if(zkJsUtils.isEmpty(optDir)){
            return [{
                title: '',
                path: undefined,
                pkId: undefined,
                separator: '/',
                obj: undefined
            }];
        }else{
            let result = this.f_getDirBreadcrumb(optDir.parent);
            result.push({
                title: optDir.name,
                path: optDir.code,
                pkId: optDir.pkId,
                separator: '',
                obj: optDir
            })
            return result;
        }
    }
    // 面包屑 render
    f_breadcrumbItemRender = (item, params, items, paths)=>{
      const last = items.indexOf(item) === items.length - 1;
      if(last){ // 最后一个面包屑节点
        return <span>{item.separator}{item.title}</span>;
      }else{
        return <a onClick={()=>{ this.f_breadcrumbItemClick(item) }}>{item.title}/&nbsp;</a>
      }
    }
    // 选择面包屑中其他目录
    f_breadcrumbItemClick = item=>{
        // console.log("[^_^:20231006-1616-001] dir item: ", item);
        // 选择节点
        let { onSelect } = this.props;
        if(onSelect){
            onSelect.call(this, item.obj);
        }
    }
    // 查询
    f_onSearch = filterValue=>{
        // console.log("[^_^:20231006-1230-001] filterValue: ", filterValue);
        this.setState({searchValue: filterValue});
        this.props.dispatch({ type: "mFile/findFilePage", params: { searchValue: filterValue } });
    }
    // 选择展示方式和点击了操作目录按钮
    f_viewTypeSel = ({item, key, keyPath, domEvent})=>{
        // console.log('[^_^:20231006-1608-001] e: ', item, key, keyPath, domEvent);
        if(key === '_key_upload'){
            // 上传交给了上传组件处理，这里不用处理
            return;
        }

        if(key === 'list' || key === 'grid'){
            this.setState({'viewType': key});
        }else{
            let currentOptFile = this.props.optDir;
            this.f_onOptDir(key, currentOptFile);
        }
    }
    // 操作目录
    f_onOptDir = (key, entity)=>{
        if(zkJsUtils.assertObjType(this.props.onDirOpt, Function)){
            let payload = {}
            switch(key){
                case '_key_add_dir':
                    payload['entity'] = {
                        parent: entity,
                        parentId: (entity?entity.pkId:undefined)
                    };
                    break;
                case '_key_edit_dir': 
                    payload['entity'] = entity;
                    break;
                case '_key_del_dir': 
                    payload['delIds'] = (entity?[entity.pkId]:undefined);
                    break;
            }
            this.props.onDirOpt.call(this, key, payload);
        }
    }

    // 选择文件或目录
    f_onSelect = (entity)=>{
        if(entity.type === 1){ // 目录
            if(zkJsUtils.assertObjType(this.props.onSelect, Function)){
                this.props.onSelect.call(this, entity);
            }
        }
    }

    render() {
        let { optDir, onSelect, filesPage, dispatch, intl, loading, eventCartridge } = this.props;

        let uploadProps = {
            dispatch: dispatch,
            eventCartridge: eventCartridge,
            setUploadProgress: percent=>{
                this.setState({uploadProgress: percent})
            }
        }

        let fileViewProps = {
            intl: intl,
            filesPage: filesPage,
            onOpt: this.f_onOptDir,
            onSelect: this.f_onSelect,
            uploadProps: uploadProps
        }
        
        let items = [{
            key: 'zk.file.view.type',
            label: zkToolsMsg.msgFormatByIntl(intl, `zk.file.view.type`),
            type: 'group',
            children:[
                {label: zkToolsMsg.msgFormatByIntl(intl, `zk.file.view.type.list`), key: 'list' },
                {label: zkToolsMsg.msgFormatByIntl(intl, `zk.file.view.type.grid`), key: 'grid' },
            ]
        },{
            key: 'global.opt.name._key_name',
            label: zkToolsMsg.msgFormatByIntl(intl, `global.opt.name._key_name`),
            type: 'group',
            children:[
                {label: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add'), key: '_key_add_dir', },
                {label: <CFileUpload {...uploadProps} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_upload')}</CFileUpload>, key: '_key_upload', },
                {label: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_download'), key: '_key_download', },
            ]
        }];
        
        let spinning = false;
        spinning = loading.effects['mFile/findFilePage']
            ||loading.effects['mFile/setCurrentOptFile']
            ||loading.effects['mFile/getFile']
            ||loading.effects['mFile/delFile']
            ||loading.effects['mFile/editFile'];
        let uploadSpinning = loading.effects['mFile/upload'];
        // uploadSpinning = true;
        // indicator={uploadSpinning===true?<div>.......</div>:undefined} tip={uploadSpinning===true?"上传中...":undefined}
        let uploadIndicatorRender = (
            <div className={styles.zk_file_upload_ing_desc}>
                <span>{zkToolsMsg.msgFormatByIntl(intl, 'zk.file.view.uploading.desc')}({this.state.uploadProgress/100}%)</span>
            </div>
        )

        // if(this.state.viewType == 'list')?<CFileViewList { ...fileViewProps } />:<CFileViewGrid { ...fileViewProps } />
        return (<div className = { `${styles.zk_file_view_div}` }>
            <ZKSpin spinning={(spinning||uploadSpinning) === true} indicator={uploadSpinning===true?uploadIndicatorRender:undefined}  >
                <div className = {styles.zk_file_view_head}>
                    <div className = {zkStyles.zk_f_display_flex_row}>
                        <div className = {`${zkStyles.zk_f_flex_auto_1} ${zkStyles.zk_f_div_vertical_middle}`} style = {{'padding':'0 12px 0 16px'}} >
                            <Breadcrumb separator={''} itemRender={this.f_breadcrumbItemRender} items={this.f_getDirBreadcrumb(optDir)} />
                        </div>
                        <div style = {{'flex': '0 0 auto', 'width':'290px', 'padding':'0 12px 0 2px', 'textAlign': 'right'}} >
                            <Search style = {{'width':'100%'}} onChange = {e=>{this.f_onSearch(e.target.value);}} />
                        </div>
                        <div className = {`${zkStyles.zk_f_div_vertical_middle}`} style = {{'flex': '0 0 auto', 'width':'80px', 'padding':'0 12px 0 12px'}} >
                            <ZKDropdown  menu = {{'items': items, onClick: this.f_viewTypeSel}} >
                                <a>
                                  <Space>
                                    {zkToolsMsg.msgFormatByIntl(intl, `zk.file.view.type.${this.state.viewType}`)}
                                    <ZKIcon icon='MoreOutlined' />
                                  </Space>
                                </a>
                            </ZKDropdown>
                        </div>
                    </div>
                </div>
                <Scrollbars>
                    {this.state.viewType === 'grid'?<CFileViewGrid {...fileViewProps} />:<CFileViewList {...fileViewProps} />}
                </Scrollbars>
            </ZKSpin>
        </div>)
    }

    f_refresh = ()=>{
        console.log("[^_^:20231211-0001-001] fileView.f_refresh: ");
        let { optDir={}, dispatch } = this.props;
        let { searchValue } = this.state;
        if(zkJsUtils.isEmpty(searchValue)){
            dispatch({ type: "mFile/findFilePage", params: { parentId: optDir.pkId, parentIdIsEmpty: true } });
        }else{
            dispatch({ type: "mFile/findFilePage", params: { searchValue: searchValue } });
        }
    }

    componentDidMount() {
        this.props.eventCartridge.saveUpdate.push(this.f_refresh);
        // zkJsEvent.eventEmitte();
    }

    componentWillUnmount(){
        // zkJsEvent.remove();
    }
}

export default CInitFileView;

// export default injectIntl(connect(({ mApp, mFile, loading }) => ({ mApp, mFile, loading }))(CInitFileView));


