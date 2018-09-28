import React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;


class IncidentType extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  render() {
      const { title, name } = this.props;
    return (
      <Tree
        showLine
        defaultExpandedKeys={['0-0-0']}
        onSelect={this.onSelect}
      >
          <TreeNode title={title} key="0-0-2">
            {name.map(({ name }) => <TreeNode title={name} key="0-0-2-0" />)}
          </TreeNode>
      </Tree>
    );
  }
}

export default IncidentType;