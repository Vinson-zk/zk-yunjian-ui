/*
* @Author: Vinson
* @Date:   2021-03-07 01:23:55
* @Last Modified by: runoob
* @Last Modified time: 2023-09-21 00:22:42
* 
* 
* 
*/

import React from 'react';
import { injectIntl } from 'react-intl';
import { Collapse } from 'antd';

import AntdIcon from './antdIcon.js';

import { zkToolsMsg } from '../../../tools';
import styles from "./styles.less";

// 方向性图标 Directional Icons
const getIconPanelDirectional = (f_onAntdIconClick) => {
  return (
    <div className={styles.zk_icon_panel}>
      <div onClick={() => f_onAntdIconClick("StepBackwardOutlined")} >
        <AntdIcon icon = "StepBackwardOutlined" />
        <br />
        <p>StepBackwardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("StepForwardOutlined")} >
        <AntdIcon icon = "StepForwardOutlined" />
        <br />
        <p>StepForwardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FastBackwardOutlined")} >
        <AntdIcon icon = "FastBackwardOutlined" />
        <br />
        <p>FastBackwardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FastForwardOutlined")} >
        <AntdIcon icon = "FastForwardOutlined" />
        <br />
        <p>FastForwardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ShrinkOutlined")} >
        <AntdIcon icon = "ShrinkOutlined" />
        <br />
        <p>ShrinkOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ArrowsAltOutlined")} >
        <AntdIcon icon = "ArrowsAltOutlined" />
        <br />
        <p>ArrowsAltOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DownOutlined")} >
        <AntdIcon icon = "DownOutlined" />
        <br />
        <p>DownOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UpOutlined")} >
        <AntdIcon icon = "UpOutlined" />
        <br />
        <p>UpOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LeftOutlined")} >
        <AntdIcon icon = "LeftOutlined" />
        <br />
        <p>LeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RightOutlined")} >
        <AntdIcon icon = "RightOutlined" />
        <br />
        <p>RightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CaretUpOutlined")} >
        <AntdIcon icon = "CaretUpOutlined" />
        <br />
        <p>CaretUpOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CaretDownOutlined")} >
        <AntdIcon icon = "CaretDownOutlined" />
        <br />
        <p>CaretDownOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CaretLeftOutlined")} >
        <AntdIcon icon = "CaretLeftOutlined" />
        <br />
        <p>CaretLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CaretRightOutlined")} >
        <AntdIcon icon = "CaretRightOutlined" />
        <br />
        <p>CaretRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UpCircleOutlined")} >
        <AntdIcon icon = "UpCircleOutlined" />
        <br />
        <p>UpCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DownCircleOutlined")} >
        <AntdIcon icon = "DownCircleOutlined" />
        <br />
        <p>DownCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LeftCircleOutlined")} >
        <AntdIcon icon = "LeftCircleOutlined" />
        <br />
        <p>LeftCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RightCircleOutlined")} >
        <AntdIcon icon = "RightCircleOutlined" />
        <br />
        <p>RightCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DoubleRightOutlined")} >
        <AntdIcon icon = "DoubleRightOutlined" />
        <br />
        <p>DoubleRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DoubleLeftOutlined")} >
        <AntdIcon icon = "DoubleLeftOutlined" />
        <br />
        <p>DoubleLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VerticalLeftOutlined")} >
        <AntdIcon icon = "VerticalLeftOutlined" />
        <br />
        <p>VerticalLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VerticalRightOutlined")} >
        <AntdIcon icon = "VerticalRightOutlined" />
        <br />
        <p>VerticalRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VerticalAlignTopOutlined")} >
        <AntdIcon icon = "VerticalAlignTopOutlined" />
        <br />
        <p>VerticalAlignTopOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VerticalAlignMiddleOutlined")} >
        <AntdIcon icon = "VerticalAlignMiddleOutlined" />
        <br />
        <p>VerticalAlignMiddleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VerticalAlignBottomOutlined")} >
        <AntdIcon icon = "VerticalAlignBottomOutlined" />
        <br />
        <p>VerticalAlignBottomOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ForwardOutlined")} >
        <AntdIcon icon = "ForwardOutlined" />
        <br />
        <p>ForwardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BackwardOutlined")} >
        <AntdIcon icon = "BackwardOutlined" />
        <br />
        <p>BackwardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RollbackOutlined")} >
        <AntdIcon icon = "RollbackOutlined" />
        <br />
        <p>RollbackOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("EnterOutlined")} >
        <AntdIcon icon = "EnterOutlined" />
        <br />
        <p>EnterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RetweetOutlined")} >
        <AntdIcon icon = "RetweetOutlined" />
        <br />
        <p>RetweetOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SwapOutlined")} >
        <AntdIcon icon = "SwapOutlined" />
        <br />
        <p>SwapOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SwapLeftOutlined")} >
        <AntdIcon icon = "SwapLeftOutlined" />
        <br />
        <p>SwapLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SwapRightOutlined")} >
        <AntdIcon icon = "SwapRightOutlined" />
        <br />
        <p>SwapRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ArrowUpOutlined")} >
        <AntdIcon icon = "ArrowUpOutlined" />
        <br />
        <p>ArrowUpOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ArrowDownOutlined")} >
        <AntdIcon icon = "ArrowDownOutlined" />
        <br />
        <p>ArrowDownOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ArrowLeftOutlined")} >
        <AntdIcon icon = "ArrowLeftOutlined" />
        <br />
        <p>ArrowLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ArrowRightOutlined")} >
        <AntdIcon icon = "ArrowRightOutlined" />
        <br />
        <p>ArrowRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PlayCircleOutlined")} >
        <AntdIcon icon = "PlayCircleOutlined" />
        <br />
        <p>PlayCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UpSquareOutlined")} >
        <AntdIcon icon = "UpSquareOutlined" />
        <br />
        <p>UpSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DownSquareOutlined")} >
        <AntdIcon icon = "DownSquareOutlined" />
        <br />
        <p>DownSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LeftSquareOutlined")} >
        <AntdIcon icon = "LeftSquareOutlined" />
        <br />
        <p>LeftSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RightSquareOutlined")} >
        <AntdIcon icon = "RightSquareOutlined" />
        <br />
        <p>RightSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LoginOutlined")} >
        <AntdIcon icon = "LoginOutlined" />
        <br />
        <p>LoginOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LogoutOutlined")} >
        <AntdIcon icon = "LogoutOutlined" />
        <br />
        <p>LogoutOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MenuFoldOutlined")} >
        <AntdIcon icon = "MenuFoldOutlined" />
        <br />
        <p>MenuFoldOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MenuUnfoldOutlined")} >
        <AntdIcon icon = "MenuUnfoldOutlined" />
        <br />
        <p>MenuUnfoldOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderBottomOutlined")} >
        <AntdIcon icon = "BorderBottomOutlined" />
        <br />
        <p>BorderBottomOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderHorizontalOutlined")} >
        <AntdIcon icon = "BorderHorizontalOutlined" />
        <br />
        <p>BorderHorizontalOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderInnerOutlined")} >
        <AntdIcon icon = "BorderInnerOutlined" />
        <br />
        <p>BorderInnerOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderOuterOutlined")} >
        <AntdIcon icon = "BorderOuterOutlined" />
        <br />
        <p>BorderOuterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderLeftOutlined")} >
        <AntdIcon icon = "BorderLeftOutlined" />
        <br />
        <p>BorderLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderRightOutlined")} >
        <AntdIcon icon = "BorderRightOutlined" />
        <br />
        <p>BorderRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderTopOutlined")} >
        <AntdIcon icon = "BorderTopOutlined" />
        <br />
        <p>BorderTopOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderVerticleOutlined")} >
        <AntdIcon icon = "BorderVerticleOutlined" />
        <br />
        <p>BorderVerticleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PicCenterOutlined")} >
        <AntdIcon icon = "PicCenterOutlined" />
        <br />
        <p>PicCenterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PicLeftOutlined")} >
        <AntdIcon icon = "PicLeftOutlined" />
        <br />
        <p>PicLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PicRightOutlined")} >
        <AntdIcon icon = "PicRightOutlined" />
        <br />
        <p>PicRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RadiusBottomleftOutlined")} >
        <AntdIcon icon = "RadiusBottomleftOutlined" />
        <br />
        <p>RadiusBottomleftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RadiusBottomrightOutlined")} >
        <AntdIcon icon = "RadiusBottomrightOutlined" />
        <br />
        <p>RadiusBottomrightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RadiusUpleftOutlined")} >
        <AntdIcon icon = "RadiusUpleftOutlined" />
        <br />
        <p>RadiusUpleftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RadiusUprightOutlined")} >
        <AntdIcon icon = "RadiusUprightOutlined" />
        <br />
        <p>RadiusUprightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FullscreenOutlined")} >
        <AntdIcon icon = "FullscreenOutlined" />
        <br />
        <p>FullscreenOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FullscreenExitOutlined")} >
        <AntdIcon icon = "FullscreenExitOutlined" />
        <br />
        <p>FullscreenExitOutlined</p>
      </div>
    </div>
  )
}

// 提示建议性图标 Suggested Icons
const getIconPanelSuggested = (f_onAntdIconClick) => {
  return (
    <div className={styles.zk_icon_panel}>
      <div onClick={() => f_onAntdIconClick("QuestionOutlined")} >
        <AntdIcon icon = "QuestionOutlined" />
        <br />
        <p>QuestionOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("QuestionCircleOutlined")} >
        <AntdIcon icon = "QuestionCircleOutlined" />
        <br />
        <p>QuestionCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PlusOutlined")} >
        <AntdIcon icon = "PlusOutlined" />
        <br />
        <p>PlusOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PlusCircleOutlined")} >
        <AntdIcon icon = "PlusCircleOutlined" />
        <br />
        <p>PlusCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PauseOutlined")} >
        <AntdIcon icon = "PauseOutlined" />
        <br />
        <p>PauseOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PauseCircleOutlined")} >
        <AntdIcon icon = "PauseCircleOutlined" />
        <br />
        <p>PauseCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MinusOutlined")} >
        <AntdIcon icon = "MinusOutlined" />
        <br />
        <p>MinusOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MinusCircleOutlined")} >
        <AntdIcon icon = "MinusCircleOutlined" />
        <br />
        <p>MinusCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PlusSquareOutlined")} >
        <AntdIcon icon = "PlusSquareOutlined" />
        <br />
        <p>PlusSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MinusSquareOutlined")} >
        <AntdIcon icon = "MinusSquareOutlined" />
        <br />
        <p>MinusSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InfoOutlined")} >
        <AntdIcon icon = "InfoOutlined" />
        <br />
        <p>InfoOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InfoCircleOutlined")} >
        <AntdIcon icon = "InfoCircleOutlined" />
        <br />
        <p>InfoCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ExclamationOutlined")} >
        <AntdIcon icon = "ExclamationOutlined" />
        <br />
        <p>ExclamationOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ExclamationCircleOutlined")} >
        <AntdIcon icon = "ExclamationCircleOutlined" />
        <br />
        <p>ExclamationCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloseOutlined")} >
        <AntdIcon icon = "CloseOutlined" />
        <br />
        <p>CloseOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloseCircleOutlined")} >
        <AntdIcon icon = "CloseCircleOutlined" />
        <br />
        <p>CloseCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloseSquareOutlined")} >
        <AntdIcon icon = "CloseSquareOutlined" />
        <br />
        <p>CloseSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CheckOutlined")} >
        <AntdIcon icon = "CheckOutlined" />
        <br />
        <p>CheckOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CheckCircleOutlined")} >
        <AntdIcon icon = "CheckCircleOutlined" />
        <br />
        <p>CheckCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CheckSquareOutlined")} >
        <AntdIcon icon = "CheckSquareOutlined" />
        <br />
        <p>CheckSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ClockCircleOutlined")} >
        <AntdIcon icon = "ClockCircleOutlined" />
        <br />
        <p>ClockCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WarningOutlined")} >
        <AntdIcon icon = "WarningOutlined" />
        <br />
        <p>WarningOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("IssuesCloseOutlined")} >
        <AntdIcon icon = "IssuesCloseOutlined" />
        <br />
        <p>IssuesCloseOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("StopOutlined")} >
        <AntdIcon icon = "StopOutlined" />
        <br />
        <p>StopOutlined</p>
      </div>
    </div>
  )
}

// 编辑类图标 Editor Icons
const getIconPanelEditor = (f_onAntdIconClick) => {
  return (
    <div className={styles.zk_icon_panel}>
      <div onClick={() => f_onAntdIconClick("EditOutlined")} >
        <AntdIcon icon = "EditOutlined" />
        <br />
        <p>EditOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FormOutlined")} >
        <AntdIcon icon = "FormOutlined" />
        <br />
        <p>FormOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CopyOutlined")} >
        <AntdIcon icon = "CopyOutlined" />
        <br />
        <p>CopyOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ScissorOutlined")} >
        <AntdIcon icon = "ScissorOutlined" />
        <br />
        <p>ScissorOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DeleteOutlined")} >
        <AntdIcon icon = "DeleteOutlined" />
        <br />
        <p>DeleteOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SnippetsOutlined")} >
        <AntdIcon icon = "SnippetsOutlined" />
        <br />
        <p>SnippetsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DiffOutlined")} >
        <AntdIcon icon = "DiffOutlined" />
        <br />
        <p>DiffOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("HighlightOutlined")} >
        <AntdIcon icon = "HighlightOutlined" />
        <br />
        <p>HighlightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AlignCenterOutlined")} >
        <AntdIcon icon = "AlignCenterOutlined" />
        <br />
        <p>AlignCenterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AlignLeftOutlined")} >
        <AntdIcon icon = "AlignLeftOutlined" />
        <br />
        <p>AlignLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AlignRightOutlined")} >
        <AntdIcon icon = "AlignRightOutlined" />
        <br />
        <p>AlignRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BgColorsOutlined")} >
        <AntdIcon icon = "BgColorsOutlined" />
        <br />
        <p>BgColorsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BoldOutlined")} >
        <AntdIcon icon = "BoldOutlined" />
        <br />
        <p>BoldOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ItalicOutlined")} >
        <AntdIcon icon = "ItalicOutlined" />
        <br />
        <p>ItalicOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UnderlineOutlined")} >
        <AntdIcon icon = "UnderlineOutlined" />
        <br />
        <p>UnderlineOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("StrikethroughOutlined")} >
        <AntdIcon icon = "StrikethroughOutlined" />
        <br />
        <p>StrikethroughOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RedoOutlined")} >
        <AntdIcon icon = "RedoOutlined" />
        <br />
        <p>RedoOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UndoOutlined")} >
        <AntdIcon icon = "UndoOutlined" />
        <br />
        <p>UndoOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ZoomInOutlined")} >
        <AntdIcon icon = "ZoomInOutlined" />
        <br />
        <p>ZoomInOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ZoomOutOutlined")} >
        <AntdIcon icon = "ZoomOutOutlined" />
        <br />
        <p>ZoomOutOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ColorsOutlined")} >
        <AntdIcon icon = "ColorsOutlined" />
        <br />
        <p>ColorsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SizeOutlined")} >
        <AntdIcon icon = "SizeOutlined" />
        <br />
        <p>SizeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LineHeightOutlined")} >
        <AntdIcon icon = "LineHeightOutlined" />
        <br />
        <p>LineHeightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DashOutlined")} >
        <AntdIcon icon = "DashOutlined" />
        <br />
        <p>DashOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SmallDashOutlined")} >
        <AntdIcon icon = "SmallDashOutlined" />
        <br />
        <p>SmallDashOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SortAscendingOutlined")} >
        <AntdIcon icon = "SortAscendingOutlined" />
        <br />
        <p>SortAscendingOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SortDescendingOutlined")} >
        <AntdIcon icon = "SortDescendingOutlined" />
        <br />
        <p>SortDescendingOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DragOutlined")} >
        <AntdIcon icon = "DragOutlined" />
        <br />
        <p>DragOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("OrderedListOutlined")} >
        <AntdIcon icon = "OrderedListOutlined" />
        <br />
        <p>OrderedListOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UnorderedListOutlined")} >
        <AntdIcon icon = "UnorderedListOutlined" />
        <br />
        <p>UnorderedListOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RadiusSettingOutlined")} >
        <AntdIcon icon = "RadiusSettingOutlined" />
        <br />
        <p>RadiusSettingOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ColumnWidthOutlined")} >
        <AntdIcon icon = "ColumnWidthOutlined" />
        <br />
        <p>ColumnWidthOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ColumnHeightOutlined")} >
        <AntdIcon icon = "ColumnHeightOutlined" />
        <br />
        <p>ColumnHeightOutlined</p>
      </div>
    </div>

  )
}

// 数据类图标 Data Icons
const getIconPanelData = (f_onAntdIconClick) => {
  return (
    <div className={styles.zk_icon_panel}>
      <div onClick={() => f_onAntdIconClick("AreaChartOutlined")} >
        <AntdIcon icon = "AreaChartOutlined" />
        <br />
        <p>AreaChartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PieChartOutlined")} >
        <AntdIcon icon = "PieChartOutlined" />
        <br />
        <p>PieChartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BarChartOutlined")} >
        <AntdIcon icon = "BarChartOutlined" />
        <br />
        <p>BarChartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DotChartOutlined")} >
        <AntdIcon icon = "DotChartOutlined" />
        <br />
        <p>DotChartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LineChartOutlined")} >
        <AntdIcon icon = "LineChartOutlined" />
        <br />
        <p>LineChartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RadarChartOutlined")} >
        <AntdIcon icon = "RadarChartOutlined" />
        <br />
        <p>RadarChartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("HeatMapOutlined")} >
        <AntdIcon icon = "HeatMapOutlined" />
        <br />
        <p>HeatMapOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FallOutlined")} >
        <AntdIcon icon = "FallOutlined" />
        <br />
        <p>FallOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RiseOutlined")} >
        <AntdIcon icon = "RiseOutlined" />
        <br />
        <p>RiseOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("StockOutlined")} >
        <AntdIcon icon = "StockOutlined" />
        <br />
        <p>StockOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BoxPlotOutlined")} >
        <AntdIcon icon = "BoxPlotOutlined" />
        <br />
        <p>BoxPlotOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FundOutlined")} >
        <AntdIcon icon = "FundOutlined" />
        <br />
        <p>FundOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SlidersOutlined")} >
        <AntdIcon icon = "SlidersOutlined" />
        <br />
        <p>SlidersOutlined</p>
      </div>
    </div>
  )
}

// 品牌和标识 Brand and Logos
const getIconPanelBrandAndLogos = (f_onAntdIconClick) => {
  return (
    <div className={styles.zk_icon_panel}>
      <div onClick={() => f_onAntdIconClick("AndroidOutlined")} >
        <AntdIcon icon = "AndroidOutlined" />
        <br />
        <p>AndroidOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AppleOutlined")} >
        <AntdIcon icon = "AppleOutlined" />
        <br />
        <p>AppleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WindowsOutlined")} >
        <AntdIcon icon = "WindowsOutlined" />
        <br />
        <p>WindowsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("IeOutlined")} >
        <AntdIcon icon = "IeOutlined" />
        <br />
        <p>IeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ChromeOutlined")} >
        <AntdIcon icon = "ChromeOutlined" />
        <br />
        <p>ChromeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GithubOutlined")} >
        <AntdIcon icon = "GithubOutlined" />
        <br />
        <p>GithubOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AliwangwangOutlined")} >
        <AntdIcon icon = "AliwangwangOutlined" />
        <br />
        <p>AliwangwangOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DingdingOutlined")} >
        <AntdIcon icon = "DingdingOutlined" />
        <br />
        <p>DingdingOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WeiboSquareOutlined")} >
        <AntdIcon icon = "WeiboSquareOutlined" />
        <br />
        <p>WeiboSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WeiboCircleOutlined")} >
        <AntdIcon icon = "WeiboCircleOutlined" />
        <br />
        <p>WeiboCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TaobaoCircleOutlined")} >
        <AntdIcon icon = "TaobaoCircleOutlined" />
        <br />
        <p>TaobaoCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("Html5Outlined")} >
        <AntdIcon icon = "Html5Outlined" />
        <br />
        <p>Html5Outlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WeiboOutlined")} >
        <AntdIcon icon = "WeiboOutlined" />
        <br />
        <p>WeiboOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TwitterOutlined")} >
        <AntdIcon icon = "TwitterOutlined" />
        <br />
        <p>TwitterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WechatOutlined")} >
        <AntdIcon icon = "WechatOutlined" />
        <br />
        <p>WechatOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("YoutubeOutlined")} >
        <AntdIcon icon = "YoutubeOutlined" />
        <br />
        <p>YoutubeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AlipayCircleOutlined")} >
        <AntdIcon icon = "AlipayCircleOutlined" />
        <br />
        <p>AlipayCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TaobaoOutlined")} >
        <AntdIcon icon = "TaobaoOutlined" />
        <br />
        <p>TaobaoOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SkypeOutlined")} >
        <AntdIcon icon = "SkypeOutlined" />
        <br />
        <p>SkypeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("QqOutlined")} >
        <AntdIcon icon = "QqOutlined" />
        <br />
        <p>QqOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MediumWorkmarkOutlined")} >
        <AntdIcon icon = "MediumWorkmarkOutlined" />
        <br />
        <p>MediumWorkmarkOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GitlabOutlined")} >
        <AntdIcon icon = "GitlabOutlined" />
        <br />
        <p>GitlabOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MediumOutlined")} >
        <AntdIcon icon = "MediumOutlined" />
        <br />
        <p>MediumOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LinkedinOutlined")} >
        <AntdIcon icon = "LinkedinOutlined" />
        <br />
        <p>LinkedinOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GooglePlusOutlined")} >
        <AntdIcon icon = "GooglePlusOutlined" />
        <br />
        <p>GooglePlusOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DropboxOutlined")} >
        <AntdIcon icon = "DropboxOutlined" />
        <br />
        <p>DropboxOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FacebookOutlined")} >
        <AntdIcon icon = "FacebookOutlined" />
        <br />
        <p>FacebookOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CodepenOutlined")} >
        <AntdIcon icon = "CodepenOutlined" />
        <br />
        <p>CodepenOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CodeSandboxOutlined")} >
        <AntdIcon icon = "CodeSandboxOutlined" />
        <br />
        <p>CodeSandboxOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AmazonOutlined")} >
        <AntdIcon icon = "AmazonOutlined" />
        <br />
        <p>AmazonOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GoogleOutlined")} >
        <AntdIcon icon = "GoogleOutlined" />
        <br />
        <p>GoogleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CodepenCircleOutlined")} >
        <AntdIcon icon = "CodepenCircleOutlined" />
        <br />
        <p>CodepenCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AlipayOutlined")} >
        <AntdIcon icon = "AlipayOutlined" />
        <br />
        <p>AlipayOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AntDesignOutlined")} >
        <AntdIcon icon = "AntDesignOutlined" />
        <br />
        <p>AntDesignOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AntCloudOutlined")} >
        <AntdIcon icon = "AntCloudOutlined" />
        <br />
        <p>AntCloudOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AliyunOutlined")} >
        <AntdIcon icon = "AliyunOutlined" />
        <br />
        <p>AliyunOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ZhihuOutlined")} >
        <AntdIcon icon = "ZhihuOutlined" />
        <br />
        <p>ZhihuOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SlackOutlined")} >
        <AntdIcon icon = "SlackOutlined" />
        <br />
        <p>SlackOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SlackSquareOutlined")} >
        <AntdIcon icon = "SlackSquareOutlined" />
        <br />
        <p>SlackSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BehanceOutlined")} >
        <AntdIcon icon = "BehanceOutlined" />
        <br />
        <p>BehanceOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BehanceSquareOutlined")} >
        <AntdIcon icon = "BehanceSquareOutlined" />
        <br />
        <p>BehanceSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DribbbleOutlined")} >
        <AntdIcon icon = "DribbbleOutlined" />
        <br />
        <p>DribbbleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DribbbleSquareOutlined")} >
        <AntdIcon icon = "DribbbleSquareOutlined" />
        <br />
        <p>DribbbleSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InstagramOutlined")} >
        <AntdIcon icon = "InstagramOutlined" />
        <br />
        <p>InstagramOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("YuqueOutlined")} >
        <AntdIcon icon = "YuqueOutlined" />
        <br />
        <p>YuqueOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AlibabaOutlined")} >
        <AntdIcon icon = "AlibabaOutlined" />
        <br />
        <p>AlibabaOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("YahooOutlined")} >
        <AntdIcon icon = "YahooOutlined" />
        <br />
        <p>YahooOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RedditOutlined")} >
        <AntdIcon icon = "RedditOutlined" />
        <br />
        <p>RedditOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SketchOutlined")} >
        <AntdIcon icon = "SketchOutlined" />
        <br />
        <p>SketchOutlined</p>
      </div>
    </div>
  )
}

// 网站通用图标 Application Icons
const getIconPanelApplication = (f_onAntdIconClick) => {
  return (
    <div className={styles.zk_icon_panel}>
      <div onClick={() => f_onAntdIconClick("AccountBookOutlined")} >
        <AntdIcon icon = "AccountBookOutlined" />
        <br />
        <p>AccountBookOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AimOutlined")} >
        <AntdIcon icon = "AimOutlined" />
        <br />
        <p>AimOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AlertOutlined")} >
        <AntdIcon icon = "AlertOutlined" />
        <br />
        <p>AlertOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ApartmentOutlined")} >
        <AntdIcon icon = "ApartmentOutlined" />
        <br />
        <p>ApartmentOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ApiOutlined")} >
        <AntdIcon icon = "ApiOutlined" />
        <br />
        <p>ApiOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AppstoreAddOutlined")} >
        <AntdIcon icon = "AppstoreAddOutlined" />
        <br />
        <p>AppstoreAddOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AppstoreOutlined")} >
        <AntdIcon icon = "AppstoreOutlined" />
        <br />
        <p>AppstoreOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AudioOutlined")} >
        <AntdIcon icon = "AudioOutlined" />
        <br />
        <p>AudioOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AudioMutedOutlined")} >
        <AntdIcon icon = "AudioMutedOutlined" />
        <br />
        <p>AudioMutedOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("AuditOutlined")} >
        <AntdIcon icon = "AuditOutlined" />
        <br />
        <p>AuditOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BankOutlined")} >
        <AntdIcon icon = "BankOutlined" />
        <br />
        <p>BankOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BarcodeOutlined")} >
        <AntdIcon icon = "BarcodeOutlined" />
        <br />
        <p>BarcodeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BarsOutlined")} >
        <AntdIcon icon = "BarsOutlined" />
        <br />
        <p>BarsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BellOutlined")} >
        <AntdIcon icon = "BellOutlined" />
        <br />
        <p>BellOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BlockOutlined")} >
        <AntdIcon icon = "BlockOutlined" />
        <br />
        <p>BlockOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BookOutlined")} >
        <AntdIcon icon = "BookOutlined" />
        <br />
        <p>BookOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderOutlined")} >
        <AntdIcon icon = "BorderOutlined" />
        <br />
        <p>BorderOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BorderlessTableOutlined")} >
        <AntdIcon icon = "BorderlessTableOutlined" />
        <br />
        <p>BorderlessTableOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BranchesOutlined")} >
        <AntdIcon icon = "BranchesOutlined" />
        <br />
        <p>BranchesOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BugOutlined")} >
        <AntdIcon icon = "BugOutlined" />
        <br />
        <p>BugOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BuildOutlined")} >
        <AntdIcon icon = "BuildOutlined" />
        <br />
        <p>BuildOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("BulbOutlined")} >
        <AntdIcon icon = "BulbOutlined" />
        <br />
        <p>BulbOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CalculatorOutlined")} >
        <AntdIcon icon = "CalculatorOutlined" />
        <br />
        <p>CalculatorOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CalendarOutlined")} >
        <AntdIcon icon = "CalendarOutlined" />
        <br />
        <p>CalendarOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CameraOutlined")} >
        <AntdIcon icon = "CameraOutlined" />
        <br />
        <p>CameraOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CarOutlined")} >
        <AntdIcon icon = "CarOutlined" />
        <br />
        <p>CarOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CarryOutOutlined")} >
        <AntdIcon icon = "CarryOutOutlined" />
        <br />
        <p>CarryOutOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CiCircleOutlined")} >
        <AntdIcon icon = "CiCircleOutlined" />
        <br />
        <p>CiCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CiOutlined")} >
        <AntdIcon icon = "CiOutlined" />
        <br />
        <p>CiOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ClearOutlined")} >
        <AntdIcon icon = "ClearOutlined" />
        <br />
        <p>ClearOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloudDownloadOutlined")} >
        <AntdIcon icon = "CloudDownloadOutlined" />
        <br />
        <p>CloudDownloadOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloudOutlined")} >
        <AntdIcon icon = "CloudOutlined" />
        <br />
        <p>CloudOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloudServerOutlined")} >
        <AntdIcon icon = "CloudServerOutlined" />
        <br />
        <p>CloudServerOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloudSyncOutlined")} >
        <AntdIcon icon = "CloudSyncOutlined" />
        <br />
        <p>CloudSyncOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CloudUploadOutlined")} >
        <AntdIcon icon = "CloudUploadOutlined" />
        <br />
        <p>CloudUploadOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ClusterOutlined")} >
        <AntdIcon icon = "ClusterOutlined" />
        <br />
        <p>ClusterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CodeOutlined")} >
        <AntdIcon icon = "CodeOutlined" />
        <br />
        <p>CodeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CoffeeOutlined")} >
        <AntdIcon icon = "CoffeeOutlined" />
        <br />
        <p>CoffeeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CommentOutlined")} >
        <AntdIcon icon = "CommentOutlined" />
        <br />
        <p>CommentOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CompassOutlined")} >
        <AntdIcon icon = "CompassOutlined" />
        <br />
        <p>CompassOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CompressOutlined")} >
        <AntdIcon icon = "CompressOutlined" />
        <br />
        <p>CompressOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ConsoleSqlOutlined")} >
        <AntdIcon icon = "ConsoleSqlOutlined" />
        <br />
        <p>ConsoleSqlOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ContactsOutlined")} >
        <AntdIcon icon = "ContactsOutlined" />
        <br />
        <p>ContactsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ContainerOutlined")} >
        <AntdIcon icon = "ContainerOutlined" />
        <br />
        <p>ContainerOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ControlOutlined")} >
        <AntdIcon icon = "ControlOutlined" />
        <br />
        <p>ControlOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CopyrightOutlined")} >
        <AntdIcon icon = "CopyrightOutlined" />
        <br />
        <p>CopyrightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CreditCardOutlined")} >
        <AntdIcon icon = "CreditCardOutlined" />
        <br />
        <p>CreditCardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CrownOutlined")} >
        <AntdIcon icon = "CrownOutlined" />
        <br />
        <p>CrownOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("CustomerServiceOutlined")} >
        <AntdIcon icon = "CustomerServiceOutlined" />
        <br />
        <p>CustomerServiceOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DashboardOutlined")} >
        <AntdIcon icon = "DashboardOutlined" />
        <br />
        <p>DashboardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DatabaseOutlined")} >
        <AntdIcon icon = "DatabaseOutlined" />
        <br />
        <p>DatabaseOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DeleteColumnOutlined")} >
        <AntdIcon icon = "DeleteColumnOutlined" />
        <br />
        <p>DeleteColumnOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DeleteRowOutlined")} >
        <AntdIcon icon = "DeleteRowOutlined" />
        <br />
        <p>DeleteRowOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DeliveredProcedureOutlined")} >
        <AntdIcon icon = "DeliveredProcedureOutlined" />
        <br />
        <p>DeliveredProcedureOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DeploymentUnitOutlined")} >
        <AntdIcon icon = "DeploymentUnitOutlined" />
        <br />
        <p>DeploymentUnitOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DesktopOutlined")} >
        <AntdIcon icon = "DesktopOutlined" />
        <br />
        <p>DesktopOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DingtalkOutlined")} >
        <AntdIcon icon = "DingtalkOutlined" />
        <br />
        <p>DingtalkOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DisconnectOutlined")} >
        <AntdIcon icon = "DisconnectOutlined" />
        <br />
        <p>DisconnectOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DislikeOutlined")} >
        <AntdIcon icon = "DislikeOutlined" />
        <br />
        <p>DislikeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DollarCircleOutlined")} >
        <AntdIcon icon = "DollarCircleOutlined" />
        <br />
        <p>DollarCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DollarOutlined")} >
        <AntdIcon icon = "DollarOutlined" />
        <br />
        <p>DollarOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("DownloadOutlined")} >
        <AntdIcon icon = "DownloadOutlined" />
        <br />
        <p>DownloadOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("EllipsisOutlined")} >
        <AntdIcon icon = "EllipsisOutlined" />
        <br />
        <p>EllipsisOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("EnvironmentOutlined")} >
        <AntdIcon icon = "EnvironmentOutlined" />
        <br />
        <p>EnvironmentOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("EuroCircleOutlined")} >
        <AntdIcon icon = "EuroCircleOutlined" />
        <br />
        <p>EuroCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("EuroOutlined")} >
        <AntdIcon icon = "EuroOutlined" />
        <br />
        <p>EuroOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ExceptionOutlined")} >
        <AntdIcon icon = "ExceptionOutlined" />
        <br />
        <p>ExceptionOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ExpandAltOutlined")} >
        <AntdIcon icon = "ExpandAltOutlined" />
        <br />
        <p>ExpandAltOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ExpandOutlined")} >
        <AntdIcon icon = "ExpandOutlined" />
        <br />
        <p>ExpandOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ExperimentOutlined")} >
        <AntdIcon icon = "ExperimentOutlined" />
        <br />
        <p>ExperimentOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ExportOutlined")} >
        <AntdIcon icon = "ExportOutlined" />
        <br />
        <p>ExportOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("EyeOutlined")} >
        <AntdIcon icon = "EyeOutlined" />
        <br />
        <p>EyeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("EyeInvisibleOutlined")} >
        <AntdIcon icon = "EyeInvisibleOutlined" />
        <br />
        <p>EyeInvisibleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FieldBinaryOutlined")} >
        <AntdIcon icon = "FieldBinaryOutlined" />
        <br />
        <p>FieldBinaryOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FieldNumberOutlined")} >
        <AntdIcon icon = "FieldNumberOutlined" />
        <br />
        <p>FieldNumberOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FieldStringOutlined")} >
        <AntdIcon icon = "FieldStringOutlined" />
        <br />
        <p>FieldStringOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FieldTimeOutlined")} >
        <AntdIcon icon = "FieldTimeOutlined" />
        <br />
        <p>FieldTimeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileAddOutlined")} >
        <AntdIcon icon = "FileAddOutlined" />
        <br />
        <p>FileAddOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileDoneOutlined")} >
        <AntdIcon icon = "FileDoneOutlined" />
        <br />
        <p>FileDoneOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileExcelOutlined")} >
        <AntdIcon icon = "FileExcelOutlined" />
        <br />
        <p>FileExcelOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileExclamationOutlined")} >
        <AntdIcon icon = "FileExclamationOutlined" />
        <br />
        <p>FileExclamationOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileOutlined")} >
        <AntdIcon icon = "FileOutlined" />
        <br />
        <p>FileOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileGifOutlined")} >
        <AntdIcon icon = "FileGifOutlined" />
        <br />
        <p>FileGifOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileImageOutlined")} >
        <AntdIcon icon = "FileImageOutlined" />
        <br />
        <p>FileImageOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileJpgOutlined")} >
        <AntdIcon icon = "FileJpgOutlined" />
        <br />
        <p>FileJpgOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileMarkdownOutlined")} >
        <AntdIcon icon = "FileMarkdownOutlined" />
        <br />
        <p>FileMarkdownOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FilePdfOutlined")} >
        <AntdIcon icon = "FilePdfOutlined" />
        <br />
        <p>FilePdfOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FilePptOutlined")} >
        <AntdIcon icon = "FilePptOutlined" />
        <br />
        <p>FilePptOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileProtectOutlined")} >
        <AntdIcon icon = "FileProtectOutlined" />
        <br />
        <p>FileProtectOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileSearchOutlined")} >
        <AntdIcon icon = "FileSearchOutlined" />
        <br />
        <p>FileSearchOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileSyncOutlined")} >
        <AntdIcon icon = "FileSyncOutlined" />
        <br />
        <p>FileSyncOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileTextOutlined")} >
        <AntdIcon icon = "FileTextOutlined" />
        <br />
        <p>FileTextOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileUnknownOutlined")} >
        <AntdIcon icon = "FileUnknownOutlined" />
        <br />
        <p>FileUnknownOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileWordOutlined")} >
        <AntdIcon icon = "FileWordOutlined" />
        <br />
        <p>FileWordOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FileZipOutlined")} >
        <AntdIcon icon = "FileZipOutlined" />
        <br />
        <p>FileZipOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FilterOutlined")} >
        <AntdIcon icon = "FilterOutlined" />
        <br />
        <p>FilterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FireOutlined")} >
        <AntdIcon icon = "FireOutlined" />
        <br />
        <p>FireOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FlagOutlined")} >
        <AntdIcon icon = "FlagOutlined" />
        <br />
        <p>FlagOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FolderAddOutlined")} >
        <AntdIcon icon = "FolderAddOutlined" />
        <br />
        <p>FolderAddOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FolderOutlined")} >
        <AntdIcon icon = "FolderOutlined" />
        <br />
        <p>FolderOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FolderOpenOutlined")} >
        <AntdIcon icon = "FolderOpenOutlined" />
        <br />
        <p>FolderOpenOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FolderViewOutlined")} >
        <AntdIcon icon = "FolderViewOutlined" />
        <br />
        <p>FolderViewOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ForkOutlined")} >
        <AntdIcon icon = "ForkOutlined" />
        <br />
        <p>ForkOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FormatPainterOutlined")} >
        <AntdIcon icon = "FormatPainterOutlined" />
        <br />
        <p>FormatPainterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FrownOutlined")} >
        <AntdIcon icon = "FrownOutlined" />
        <br />
        <p>FrownOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FunctionOutlined")} >
        <AntdIcon icon = "FunctionOutlined" />
        <br />
        <p>FunctionOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FundProjectionScreenOutlined")} >
        <AntdIcon icon = "FundProjectionScreenOutlined" />
        <br />
        <p>FundProjectionScreenOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FundViewOutlined")} >
        <AntdIcon icon = "FundViewOutlined" />
        <br />
        <p>FundViewOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("FunnelPlotOutlined")} >
        <AntdIcon icon = "FunnelPlotOutlined" />
        <br />
        <p>FunnelPlotOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GatewayOutlined")} >
        <AntdIcon icon = "GatewayOutlined" />
        <br />
        <p>GatewayOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GifOutlined")} >
        <AntdIcon icon = "GifOutlined" />
        <br />
        <p>GifOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GiftOutlined")} >
        <AntdIcon icon = "GiftOutlined" />
        <br />
        <p>GiftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GlobalOutlined")} >
        <AntdIcon icon = "GlobalOutlined" />
        <br />
        <p>GlobalOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GoldOutlined")} >
        <AntdIcon icon = "GoldOutlined" />
        <br />
        <p>GoldOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("GroupOutlined")} >
        <AntdIcon icon = "GroupOutlined" />
        <br />
        <p>GroupOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("HddOutlined")} >
        <AntdIcon icon = "HddOutlined" />
        <br />
        <p>HddOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("HeartOutlined")} >
        <AntdIcon icon = "HeartOutlined" />
        <br />
        <p>HeartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("HistoryOutlined")} >
        <AntdIcon icon = "HistoryOutlined" />
        <br />
        <p>HistoryOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("HomeOutlined")} >
        <AntdIcon icon = "HomeOutlined" />
        <br />
        <p>HomeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("HourglassOutlined")} >
        <AntdIcon icon = "HourglassOutlined" />
        <br />
        <p>HourglassOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("IdcardOutlined")} >
        <AntdIcon icon = "IdcardOutlined" />
        <br />
        <p>IdcardOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ImportOutlined")} >
        <AntdIcon icon = "ImportOutlined" />
        <br />
        <p>ImportOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InboxOutlined")} >
        <AntdIcon icon = "InboxOutlined" />
        <br />
        <p>InboxOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InsertRowAboveOutlined")} >
        <AntdIcon icon = "InsertRowAboveOutlined" />
        <br />
        <p>InsertRowAboveOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InsertRowBelowOutlined")} >
        <AntdIcon icon = "InsertRowBelowOutlined" />
        <br />
        <p>InsertRowBelowOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InsertRowLeftOutlined")} >
        <AntdIcon icon = "InsertRowLeftOutlined" />
        <br />
        <p>InsertRowLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InsertRowRightOutlined")} >
        <AntdIcon icon = "InsertRowRightOutlined" />
        <br />
        <p>InsertRowRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InsuranceOutlined")} >
        <AntdIcon icon = "InsuranceOutlined" />
        <br />
        <p>InsuranceOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("InteractionOutlined")} >
        <AntdIcon icon = "InteractionOutlined" />
        <br />
        <p>InteractionOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("KeyOutlined")} >
        <AntdIcon icon = "KeyOutlined" />
        <br />
        <p>KeyOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LaptopOutlined")} >
        <AntdIcon icon = "LaptopOutlined" />
        <br />
        <p>LaptopOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LayoutOutlined")} >
        <AntdIcon icon = "LayoutOutlined" />
        <br />
        <p>LayoutOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LikeOutlined")} >
        <AntdIcon icon = "LikeOutlined" />
        <br />
        <p>LikeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LineOutlined")} >
        <AntdIcon icon = "LineOutlined" />
        <br />
        <p>LineOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LinkOutlined")} >
        <AntdIcon icon = "LinkOutlined" />
        <br />
        <p>LinkOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("Loading3QuartersOutlined")} >
        <AntdIcon icon = "Loading3QuartersOutlined" />
        <br />
        <p>Loading3QuartersOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LoadingOutlined")} >
        <AntdIcon icon = "LoadingOutlined" />
        <br />
        <p>LoadingOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("LockOutlined")} >
        <AntdIcon icon = "LockOutlined" />
        <br />
        <p>LockOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MacCommandOutlined")} >
        <AntdIcon icon = "MacCommandOutlined" />
        <br />
        <p>MacCommandOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MailOutlined")} >
        <AntdIcon icon = "MailOutlined" />
        <br />
        <p>MailOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ManOutlined")} >
        <AntdIcon icon = "ManOutlined" />
        <br />
        <p>ManOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MedicineBoxOutlined")} >
        <AntdIcon icon = "MedicineBoxOutlined" />
        <br />
        <p>MedicineBoxOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MehOutlined")} >
        <AntdIcon icon = "MehOutlined" />
        <br />
        <p>MehOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MenuOutlined")} >
        <AntdIcon icon = "MenuOutlined" />
        <br />
        <p>MenuOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MergeCellsOutlined")} >
        <AntdIcon icon = "MergeCellsOutlined" />
        <br />
        <p>MergeCellsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MessageOutlined")} >
        <AntdIcon icon = "MessageOutlined" />
        <br />
        <p>MessageOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MobileOutlined")} >
        <AntdIcon icon = "MobileOutlined" />
        <br />
        <p>MobileOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MoneyCollectOutlined")} >
        <AntdIcon icon = "MoneyCollectOutlined" />
        <br />
        <p>MoneyCollectOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MonitorOutlined")} >
        <AntdIcon icon = "MonitorOutlined" />
        <br />
        <p>MonitorOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("MoreOutlined")} >
        <AntdIcon icon = "MoreOutlined" />
        <br />
        <p>MoreOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("NodeCollapseOutlined")} >
        <AntdIcon icon = "NodeCollapseOutlined" />
        <br />
        <p>NodeCollapseOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("NodeExpandOutlined")} >
        <AntdIcon icon = "NodeExpandOutlined" />
        <br />
        <p>NodeExpandOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("NodeIndexOutlined")} >
        <AntdIcon icon = "NodeIndexOutlined" />
        <br />
        <p>NodeIndexOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("NotificationOutlined")} >
        <AntdIcon icon = "NotificationOutlined" />
        <br />
        <p>NotificationOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("NumberOutlined")} >
        <AntdIcon icon = "NumberOutlined" />
        <br />
        <p>NumberOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("OneToOneOutlined")} >
        <AntdIcon icon = "OneToOneOutlined" />
        <br />
        <p>OneToOneOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PaperClipOutlined")} >
        <AntdIcon icon = "PaperClipOutlined" />
        <br />
        <p>PaperClipOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PartitionOutlined")} >
        <AntdIcon icon = "PartitionOutlined" />
        <br />
        <p>PartitionOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PayCircleOutlined")} >
        <AntdIcon icon = "PayCircleOutlined" />
        <br />
        <p>PayCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PercentageOutlined")} >
        <AntdIcon icon = "PercentageOutlined" />
        <br />
        <p>PercentageOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PhoneOutlined")} >
        <AntdIcon icon = "PhoneOutlined" />
        <br />
        <p>PhoneOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PictureOutlined")} >
        <AntdIcon icon = "PictureOutlined" />
        <br />
        <p>PictureOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PlaySquareOutlined")} >
        <AntdIcon icon = "PlaySquareOutlined" />
        <br />
        <p>PlaySquareOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PoundCircleOutlined")} >
        <AntdIcon icon = "PoundCircleOutlined" />
        <br />
        <p>PoundCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PoundOutlined")} >
        <AntdIcon icon = "PoundOutlined" />
        <br />
        <p>PoundOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PoweroffOutlined")} >
        <AntdIcon icon = "PoweroffOutlined" />
        <br />
        <p>PoweroffOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PrinterOutlined")} >
        <AntdIcon icon = "PrinterOutlined" />
        <br />
        <p>PrinterOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ProfileOutlined")} >
        <AntdIcon icon = "ProfileOutlined" />
        <br />
        <p>ProfileOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ProjectOutlined")} >
        <AntdIcon icon = "ProjectOutlined" />
        <br />
        <p>ProjectOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PropertySafetyOutlined")} >
        <AntdIcon icon = "PropertySafetyOutlined" />
        <br />
        <p>PropertySafetyOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PullRequestOutlined")} >
        <AntdIcon icon = "PullRequestOutlined" />
        <br />
        <p>PullRequestOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("PushpinOutlined")} >
        <AntdIcon icon = "PushpinOutlined" />
        <br />
        <p>PushpinOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("QrcodeOutlined")} >
        <AntdIcon icon = "QrcodeOutlined" />
        <br />
        <p>QrcodeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ReadOutlined")} >
        <AntdIcon icon = "ReadOutlined" />
        <br />
        <p>ReadOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ReconciliationOutlined")} >
        <AntdIcon icon = "ReconciliationOutlined" />
        <br />
        <p>ReconciliationOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RedEnvelopeOutlined")} >
        <AntdIcon icon = "RedEnvelopeOutlined" />
        <br />
        <p>RedEnvelopeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ReloadOutlined")} >
        <AntdIcon icon = "ReloadOutlined" />
        <br />
        <p>ReloadOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RestOutlined")} >
        <AntdIcon icon = "RestOutlined" />
        <br />
        <p>RestOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RobotOutlined")} >
        <AntdIcon icon = "RobotOutlined" />
        <br />
        <p>RobotOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RocketOutlined")} >
        <AntdIcon icon = "RocketOutlined" />
        <br />
        <p>RocketOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RotateLeftOutlined")} >
        <AntdIcon icon = "RotateLeftOutlined" />
        <br />
        <p>RotateLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("RotateRightOutlined")} >
        <AntdIcon icon = "RotateRightOutlined" />
        <br />
        <p>RotateRightOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SafetyCertificateOutlined")} >
        <AntdIcon icon = "SafetyCertificateOutlined" />
        <br />
        <p>SafetyCertificateOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SafetyOutlined")} >
        <AntdIcon icon = "SafetyOutlined" />
        <br />
        <p>SafetyOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SaveOutlined")} >
        <AntdIcon icon = "SaveOutlined" />
        <br />
        <p>SaveOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ScanOutlined")} >
        <AntdIcon icon = "ScanOutlined" />
        <br />
        <p>ScanOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ScheduleOutlined")} >
        <AntdIcon icon = "ScheduleOutlined" />
        <br />
        <p>ScheduleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SearchOutlined")} >
        <AntdIcon icon = "SearchOutlined" />
        <br />
        <p>SearchOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SecurityScanOutlined")} >
        <AntdIcon icon = "SecurityScanOutlined" />
        <br />
        <p>SecurityScanOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SelectOutlined")} >
        <AntdIcon icon = "SelectOutlined" />
        <br />
        <p>SelectOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SendOutlined")} >
        <AntdIcon icon = "SendOutlined" />
        <br />
        <p>SendOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SettingOutlined")} >
        <AntdIcon icon = "SettingOutlined" />
        <br />
        <p>SettingOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ShakeOutlined")} >
        <AntdIcon icon = "ShakeOutlined" />
        <br />
        <p>ShakeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ShareAltOutlined")} >
        <AntdIcon icon = "ShareAltOutlined" />
        <br />
        <p>ShareAltOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ShopOutlined")} >
        <AntdIcon icon = "ShopOutlined" />
        <br />
        <p>ShopOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ShoppingCartOutlined")} >
        <AntdIcon icon = "ShoppingCartOutlined" />
        <br />
        <p>ShoppingCartOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ShoppingOutlined")} >
        <AntdIcon icon = "ShoppingOutlined" />
        <br />
        <p>ShoppingOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SisternodeOutlined")} >
        <AntdIcon icon = "SisternodeOutlined" />
        <br />
        <p>SisternodeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SkinOutlined")} >
        <AntdIcon icon = "SkinOutlined" />
        <br />
        <p>SkinOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SmileOutlined")} >
        <AntdIcon icon = "SmileOutlined" />
        <br />
        <p>SmileOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SolutionOutlined")} >
        <AntdIcon icon = "SolutionOutlined" />
        <br />
        <p>SolutionOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SoundOutlined")} >
        <AntdIcon icon = "SoundOutlined" />
        <br />
        <p>SoundOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SplitCellsOutlined")} >
        <AntdIcon icon = "SplitCellsOutlined" />
        <br />
        <p>SplitCellsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("StarOutlined")} >
        <AntdIcon icon = "StarOutlined" />
        <br />
        <p>StarOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SubnodeOutlined")} >
        <AntdIcon icon = "SubnodeOutlined" />
        <br />
        <p>SubnodeOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SwitcherOutlined")} >
        <AntdIcon icon = "SwitcherOutlined" />
        <br />
        <p>SwitcherOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("SyncOutlined")} >
        <AntdIcon icon = "SyncOutlined" />
        <br />
        <p>SyncOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TableOutlined")} >
        <AntdIcon icon = "TableOutlined" />
        <br />
        <p>TableOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TabletOutlined")} >
        <AntdIcon icon = "TabletOutlined" />
        <br />
        <p>TabletOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TagOutlined")} >
        <AntdIcon icon = "TagOutlined" />
        <br />
        <p>TagOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TagsOutlined")} >
        <AntdIcon icon = "TagsOutlined" />
        <br />
        <p>TagsOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TeamOutlined")} >
        <AntdIcon icon = "TeamOutlined" />
        <br />
        <p>TeamOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ThunderboltOutlined")} >
        <AntdIcon icon = "ThunderboltOutlined" />
        <br />
        <p>ThunderboltOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ToTopOutlined")} >
        <AntdIcon icon = "ToTopOutlined" />
        <br />
        <p>ToTopOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("ToolOutlined")} >
        <AntdIcon icon = "ToolOutlined" />
        <br />
        <p>ToolOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TrademarkCircleOutlined")} >
        <AntdIcon icon = "TrademarkCircleOutlined" />
        <br />
        <p>TrademarkCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TrademarkOutlined")} >
        <AntdIcon icon = "TrademarkOutlined" />
        <br />
        <p>TrademarkOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TransactionOutlined")} >
        <AntdIcon icon = "TransactionOutlined" />
        <br />
        <p>TransactionOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TranslationOutlined")} >
        <AntdIcon icon = "TranslationOutlined" />
        <br />
        <p>TranslationOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("TrophyOutlined")} >
        <AntdIcon icon = "TrophyOutlined" />
        <br />
        <p>TrophyOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UngroupOutlined")} >
        <AntdIcon icon = "UngroupOutlined" />
        <br />
        <p>UngroupOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UnlockOutlined")} >
        <AntdIcon icon = "UnlockOutlined" />
        <br />
        <p>UnlockOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UploadOutlined")} >
        <AntdIcon icon = "UploadOutlined" />
        <br />
        <p>UploadOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UsbOutlined")} >
        <AntdIcon icon = "UsbOutlined" />
        <br />
        <p>UsbOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UserAddOutlined")} >
        <AntdIcon icon = "UserAddOutlined" />
        <br />
        <p>UserAddOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UserDeleteOutlined")} >
        <AntdIcon icon = "UserDeleteOutlined" />
        <br />
        <p>UserDeleteOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UserOutlined")} >
        <AntdIcon icon = "UserOutlined" />
        <br />
        <p>UserOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UserSwitchOutlined")} >
        <AntdIcon icon = "UserSwitchOutlined" />
        <br />
        <p>UserSwitchOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UsergroupAddOutlined")} >
        <AntdIcon icon = "UsergroupAddOutlined" />
        <br />
        <p>UsergroupAddOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("UsergroupDeleteOutlined")} >
        <AntdIcon icon = "UsergroupDeleteOutlined" />
        <br />
        <p>UsergroupDeleteOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VerifiedOutlined")} >
        <AntdIcon icon = "VerifiedOutlined" />
        <br />
        <p>VerifiedOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VideoCameraAddOutlined")} >
        <AntdIcon icon = "VideoCameraAddOutlined" />
        <br />
        <p>VideoCameraAddOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("VideoCameraOutlined")} >
        <AntdIcon icon = "VideoCameraOutlined" />
        <br />
        <p>VideoCameraOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WalletOutlined")} >
        <AntdIcon icon = "WalletOutlined" />
        <br />
        <p>WalletOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WhatsAppOutlined")} >
        <AntdIcon icon = "WhatsAppOutlined" />
        <br />
        <p>WhatsAppOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WifiOutlined")} >
        <AntdIcon icon = "WifiOutlined" />
        <br />
        <p>WifiOutlined</p>
      </div>
      <div onClick={() => f_onAntdIconClick("WomanOutlined")} >
        <AntdIcon icon = "WomanOutlined" />
        <br />
        <p>WomanOutlined</p>
      </div>
    </div>
  )
}

const FInitIconPanel = ({ intl, onSelect }) => {

  const f_onAntdIconClick = value => {
    if (onSelect) {
      onSelect(value);
    } else {
      value = "<AntdIcon icon=\"" + value + "\" />";
      f_copy(value);
    }
  }

  // 复制到剪贴版
  const f_copy = (value)=>{
    document.designMode = 'on';
    let bool = document.execCommand('copy');
    if (!bool) {
      zkToolsMsg.alertMsg(intl, null, {
        type: "error",
        msg: zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_copy") + ` ${value} ` + zkToolsMsg.msgFormatByIntl(intl, "global.app.msg.fail"),
      });
    } else {
      let inputEle = document.createElement('input');
      document.body.appendChild(inputEle);
      inputEle.setAttribute('value', value);
      inputEle.setAttribute('readonly', 'readonly');
      inputEle.select();
      document.execCommand('copy');
      document.body.removeChild(inputEle);

      zkToolsMsg.alertMsg(intl, null, {
        type: "success",
        msg: zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_copy") + ` ${value} ` + zkToolsMsg.msgFormatByIntl(intl, "global.app.msg.success"),
      });
    }
    document.designMode = 'off';
  }

  return (<div className={styles.zk_icon_panel_scroll}>
    <Collapse accordion={true} items = {[
      { 'key': '_zk_FInitIconPanel_1', 'label': zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.directional"), 'children': getIconPanelDirectional(f_onAntdIconClick) },
      { 'key': '_zk_FInitIconPanel_2', 'label': zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.suggested"), 'children': getIconPanelSuggested(f_onAntdIconClick) },
      { 'key': '_zk_FInitIconPanel_3', 'label': zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.editor"), 'children': getIconPanelEditor(f_onAntdIconClick) },
      { 'key': '_zk_FInitIconPanel_4', 'label': zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.data"), 'children': getIconPanelData(f_onAntdIconClick) },
      { 'key': '_zk_FInitIconPanel_5', 'label': zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.brandAndLogos"), 'children': getIconPanelBrandAndLogos(f_onAntdIconClick) }      ,
      { 'key': '_zk_FInitIconPanel_6', 'label': zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.application"), 'children': getIconPanelApplication(f_onAntdIconClick) }
    ]} />
  </div>);
}

export default injectIntl(FInitIconPanel);

