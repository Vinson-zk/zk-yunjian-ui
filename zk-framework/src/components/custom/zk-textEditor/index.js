/**
 * 富文本编辑框；还存在 BUG 需要多测试与修改；
 * 使用时，再完善上传下载 api 传入；上传下载前置处理；
 * @Author: Vinson
 * @Date: 2020-08-12 12:35:00
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-26 17:59:26
 */

import React from "react";
// import PropTypes from 'prop-types';
import BraftEditor, { EditorState } from "braft-editor";
import "braft-editor/dist/index.css";
import lodash from "lodash";

import styles from './styles.less'

const mediaItemsStorageName = "mediaItems";

const mimeTypes = {
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'png': 'image/png',
    'svg': 'image/svg',
    'gif': 'image/gif',
    'mp4': 'video/mp4',
    'mp3': 'audio/mp3'
}

// console.log("[^_^: 20240726-2209-009]: BraftEditor: ", BraftEditor);

class CInitTextEditor extends React.Component {

    static getDerivedStateFromProps(nextProps, prevState) {
        if ("value" in nextProps && nextProps.value !== prevState.value) {
            return {
                value: nextProps.value
            };
        }
        return null;
    }

    constructor(props) {
        super(props);

        // typeof props.value === "undefined"
        const value = zkJsUtils.isEmpty(props.value, false)?props.defaultValue:props.value;
            

        const localItems = this.getLocalMedias();
        const { defaultMediaItems = [] } = props
        const mediaItems = zkJsUtils.isEmpty(props.mediaItems, false)?[...defaultMediaItems, ...localItems]:props.mediaItems;

        this.state = {
            value,
            mediaItems
        };

        this.state.mediaItems.map((item, index) => {
            if (item.url) {
                if (!item.id) {
                    item.id = `${+new Date()}lodash${++index}`;
                }
                if (!item.type) {
                    const url = item.url.split('.')
                    const extname = url[url.length - 1]
                    item.type = mimeTypes[extname].split('/')[0].toUpperCase()
                }
            }
        })
        this.count = 0;
    }

    // shouldComponentUpdate(props){
    //     if(props.value==undefined&&this.state.value==undefined){
    //         return false
    //     }
    //     return true
    // }

    getLocalMedias = ()=>{
        const media = localStorage.getItem(mediaItemsStorageName);
        if (media && media.length) {
            try {
                return JSON.parse(media);
            } catch (err) {
                return [];
            }
        }
        return [];
    };

    setLocalMedias = (items)=>{
        if (items) {
            localStorage.setItem(mediaItemsStorageName, JSON.stringify(items));
        } else {
            localStorage.removeItem(mediaItemsStorageName);
        }
    };

    triggerChange = editorState=>{
        // console.log("[^_^: 20240726-2311-001]: triggerChange editorState: ", editorState);
        const { onChange } = this.props;
        if (onChange) {
            onChange(editorState);
        }
    };

    // 输入防抖
    handleChange = lodash.debounce(editorState => {
        // console.log("[^_^: 20240726-2209-001]: handleChange editorState: ", editorState);
        const html = editorState.toHTML()
        // console.log("[^_^: 20240726-2209-002]: handleChange editorState: ", html);

        if (html === '<p></p>' && this.state.value === undefined) {
            return false
        }
        if (html === '<p></p>') {
            // this.setState({value:editorState})
            this.triggerChange(editorState);
            return false
        }
        // console.log('in3',html,this.state.value.toHTML?this.state.value.toHTML():this.state.value,this.props.value.toHTML?this.props.value.toHTML():this.props.value)
        // this.setState({value:editorState})
        this.triggerChange(editorState);
    }, this.props.debounce || 500);

    handleMediaChange = (items = [])=>{
        if (items.length === 0 || (items[items.length - 1] && items[items.length - 1].url)) {
            const { defaultMediaItems } = this.props;
            let medias = items.map(item => {
                return { id: item.id, type: item.type, url: item.url };
            });

            if (defaultMediaItems && defaultMediaItems.length) {
                medias = medias.filter(item => {
                    return !defaultMediaItems.find(i => i.url === item.url);
                });
            }
            this.setLocalMedias(medias);
        }
    };

    defaultUpload = (param)=>{
        const { action } = this.props
        const serverURL = action || "/api/file/uploadImg";
        const xhr = new XMLHttpRequest();
        const fd = new FormData();
        const successFn = () => {
            const res = JSON.parse(xhr.responseText);
            param.success({
                url: `/api/file/getImg?name=${res.data[0]}`
            });
        };

        const progressFn = event => {
            // 上传进度发生变化时调用param.progress
            param.progress((event.loaded / event.total) * 100);
        };

        const errorFn = () => {
            // 上传发生错误时调用param.error
            param.error({
                msg: "unable to upload."
            });
        };

        xhr.upload.addEventListener("progress", progressFn, false);
        xhr.addEventListener("load", successFn, false);
        xhr.addEventListener("error", errorFn, false);
        xhr.addEventListener("abort", errorFn, false);

        fd.append("file", param.file);
        xhr.open("POST", serverURL, true);
        xhr.send(fd);
    }

    render() {
        const { value: defaultValue, onChange, onUpload, action, debounce = 1000, ...otherProps } = this.props;
        const { value, mediaItems } = this.state;
        // defaultValue&&defaultValue.toHTML?console.log('props editor',defaultValue.toHTML()):console.log('props',defaultValue)
        // value&&value.toHTML?console.log('state editor',value.toHTML()):console.log('state',value)
        // console.log("[^_^:20231008-2126-001] EditorState: ", value, zkJsUtils.assertObjType(value, EditorState));
        return (
            <BraftEditor
                className={styles.zk_text_editor}
                {...otherProps}
                value={
                    zkJsUtils.assertObjType(value, EditorState)?value:BraftEditor.createEditorState(value)
                }
                onChange={this.handleChange}
                media={{
                    uploadFn: onUpload || this.defaultUpload,
                    onChange: this.handleMediaChange,
                    items: mediaItems
                }}
            />
        );
    }
}

// // 定义属性
// CInitTextEditor.propTypes = {
// }
// // 定义属性默认值
// CInitTextEditor.defaultProps = { 
// }

export default CInitTextEditor;

