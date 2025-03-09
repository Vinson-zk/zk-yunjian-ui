/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-26 23:32:49
* @Last Modified by: runoob
* @Last Modified time: 2024-07-30 17:33:11
*/

import React from 'react';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import resizeableTableStyles from './resizeableTableDemo.less';

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

class Demo extends React.Component {
  state = {
    columns: [
      {
        title: 'Date',
        dataIndex: 'date',
        ellipsis: true,
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        ellipsis: true,
        width: 100,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        ellipsis: true,
        width: 100,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        ellipsis: true,
        width: 100,
      },
      {
        title: 'Action',
        key: 'action',
        ellipsis: true,
        render: () => <a>Delete</a>,
      },
    ],
  };

  data = [
    {
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    },
    {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    },
  ];

  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  handleResize = index => (e, { size }) => {
    console.log("------ size: ", this.state.columns[index]);
    console.log("------ size: ", size);
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return <Table bordered 
      tableLayout={'fixed'}
      components={this.components} 
      columns={columns} 
      dataSource={this.data} 
    />;
  }
}

export default Demo;

