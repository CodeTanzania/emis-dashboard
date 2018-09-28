import React from 'react';
import { Row, Col, Tree, Divider } from 'antd';

const TreeNode = Tree.TreeNode;

class SytemDetail extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  render() {
      const { title, name } = this.props;
    return (
      <Tree
        showLine
        defaultExpandAll
        onSelect={this.onSelect}

      >
          <TreeNode title={title} key="0-0-2">
            {name.map(({ name }) => <TreeNode title={name} key="0-0-2-0" />)}
          </TreeNode>
      </Tree>
    );
  }
}


const SystemSettings = ({ title }) => {
    const data = {
        systemSetting: [
            { name: 'Incident type' },
            { name: 'Alert' },
            { name: 'Warning' },
            { name: 'Active plan' },
            { name: 'Alert' },
            { name: 'Warning' },
            { name: 'Active plan' },
        ],
        generalSetting: [
            { name: 'User' },
            { name: 'Roles' },
            { name: 'COnfiguration/' },
            { name: 'Preference' },
            { name: 'Predefine' },
            
        ],

    };

    return (
        <div>
            <Row>
                <Col span={24} className="p-20">
                <div style={{ marginBottom:"15px"}}>
                   <SytemDetail title={title} name={data.systemSetting} />
                   </div>
                   <Divider/>
                   <SytemDetail title="General Settings" name={data.generalSetting} />

                </Col>
            </Row>
        </div>
    )
}

export default SystemSettings;