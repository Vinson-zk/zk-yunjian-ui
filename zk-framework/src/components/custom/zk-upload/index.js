/**
 * 上传文件；还存在 BUG 需要多测试与修改；
 * @Author: Vinson
 * @Date: 2020-08-12 12:42:07
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-06 20:05:32
 */

import React from 'react';
import { Upload, Modal, message } from 'antd'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

//初始状态
const initialState = {
  imgSrc: null,
  ratioCrop: {
    x: 0,
    y: 0,
    width: 100,
    height: 100
  },
  pixelCrop: {},
};

class CInitUpload extends React.Component {

  constructor(props) {
    super()
    const { defaultFileList = [], fileList = [], fileMaxNum = {} } = props
    this.state = {
      ...initialState,
      fileList: [...defaultFileList, ...fileList],
      amount: fileMaxNum && fileMaxNum.amount ? fileMaxNum.amount : 1,
      hidden: fileMaxNum && fileMaxNum.hidden ? fileMaxNum.hidden : false
    }
    const now = +new Date();
    let index = 0;
    this.state.fileList.map(file => {
      if (!file.uid) {
        file.uid = `uid-upload-${now}-${++index}`;
      }
      return file
    });
  }

  componentWillReceiveProps(next) {
    if (next.fileList) {
      const now = +new Date();
      let index = 0;
      this.setState({
        fileList: next.fileList.map(file => {
          if (!file.uid) {
            file.uid = `uid-upload-${now}-${++index}`;
          }
          return file
        })
      })
    }
  }

  //取消裁剪
  onCancel = ()=>{
    this.setState(initialState);
    this.reject('取消上传');
  }

  beforeUpload = (file, fileList)=>{
    const { crop = false, beforeUpload, limits = [] } = this.props
    //如果有限制条件，执行限制条件过滤文件
    if (limits.length) {
      let error = limits.find(item => {
        if (item.type) {
          let types = item.type.split(',')
          if (!types.find(type => type == file.type)) {
            return true
          }
        }
        if (item.size) {
          if (file.size / 1024 > item.size) {
            return true
          }
        }


        if (item.condition) {
          return item.condition(file, this.state.fileList)
        }

        if (this.state.amount < this.state.fileList.length + 1) {
          return true
        }
      })
      if (error) {
        file.status = 'error',
          file.response = { message: error.message }
        return false
      }

    }

    //如果支持裁剪，返回一个Promist
    if (crop) {
      return new Promise((resolve, reject) => {
        this.file = file
        this.resolve = resolve
        this.reject = reject
        this.setState({
          imgSrc: window.URL.createObjectURL(file)
        })
      })
    }
    if (!beforeUpload) {
      return true
    }

    var result = this.props.beforeUpload(file, fileList);
    return result
  }

  //执行裁剪
  handleCrop = ()=>{
    const { pixelCrop } = this.state;
    const { x, y, width, height } = pixelCrop;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this.image, x, y, width, height, 0, 0, width, height);
    const { name, type, uid } = this.file;
    canvas.toBlob(async (blob) => {
      const croppedFile = new File([blob], name, { type, lastModified: Date.now() });
      croppedFile.uid = uid;
      this.resolve(croppedFile);
      this.setState(initialState);
    })
  }

  //调整裁剪框时触发
  cropChang = (ratioCrop, pixelCrop)=>{
    const { width, height } = pixelCrop
    const { crop = {} } = this.props
    const { minWidth = 100, minHeight = 100 } = crop
    if (width > minWidth && height > minHeight) {
      this.setState({
        ratioCrop,
        pixelCrop
      })
    }
  }

  //点击预览的时候触发
  onPreview = (file)=>{
    const { onPreview } = this.props
    if (onPreview) {
      onPreview(file)
    } else {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }

  }

  //关闭预览视图
  previewCancel = ()=>{
    this.setState({ previewVisible: false })
  }

  //上传文件发生变化时触发
  uploadChange = ({ file, fileList })=>{
    if (this.props.onChange) {
      const results = [];
      fileList.map(fileData => {
        if (fileData.status == 'done') {
          const result = {
            uid: fileData.uid, name: fileData.response.data[0],
            status: fileData.status,
            url: ''
          }
          results.push(result);
        } else if (fileData.status == 'uploading') {
          const result = {
            uid: fileData.uid, name: undefined,
            status: fileData.status,
            url: ''
          }
          results.push(result);
        }
      });
      this.props.onChange(results)
    }

    if (file.status === 'error') {
      let msg = ''
      if (file.response) {
        msg = file.response.message
      } else {
        msg = 'zk uploading unknown error!';
      }
      message.error(msg)
      this.setState({ fileList: fileList.filter(item => item.status != 'error') })
      return;
    } else {
      this.setState({ fileList })
    }
    // if(file.status==='done'||file.status==='removed'){
    //   this.setState({fileList:fileList})
    // }

  }

  render() {

    const { crop = false, children, defaultFileList, ...otherProps } = this.props
    const { fileList, amount, hidden, previewVisible, previewImage } = this.state

    return (
      <div>
        <Upload {...otherProps} beforeUpload={this.beforeUpload} onCancel={this.handleChange} onChange={this.uploadChange} fileList={fileList} onPreview={this.onPreview}>
          {amount && hidden ? amount > fileList.length ? children : null : children}
        </Upload>
        {
          this.state.imgSrc && <Modal visible={true} bodyStyle={{ padding: 0, display: 'flex', justifyContent: 'center' }} onOk={this.handleCrop} onCancel={this.onCancel} closable={false}>
            <ReactCrop
              src={this.state.imgSrc}
              width={100}
              height={100}
              onChange={this.cropChang}
              onImageLoaded={(image, pixelCrop) => {
                this.image = image
                this.setState({ pixelCrop: pixelCrop })
              }}
              crop={{ ...this.state.ratioCrop, aspect: crop.aspect }}
            />
          </Modal>
        }{
          <Modal visible={previewVisible} footer={null} onCancel={this.previewCancel}>
            <img alt="preview" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        }
      </div>
    )
  }
}

export default CInitUpload