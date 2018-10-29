import { Avatar, Button, List, Popover } from 'antd';
import React from 'react';
import ActivityStakeholderRole from '../ActivityStakeholderRole';

/* local constants */
const members = [
  {
    name: 'Tanzania Red Cross Society',
    color: '#f56a00',
    phone: '+255 793 329 324',
    email: 'test@mail.com',
  },
  {
    name: 'Red Cross Society',
    color: '#726506',
    phone: '+255 793 329 324',
    email: 'test@mail.com',
  },
  {
    name: 'Tanzania Red Cross Society',
    color: '#ffbf00',
    phone: '+255 793 329 324',
    email: 'test@mail.com',
  },
  {
    name: 'Tanzania Red Cross Society',
    color: '#00a2ae',
    phone: '+255 793 329 324',
    email: 'test@mail.com',
  },
  {
    name: 'Tanzania Red Cross Society',
    color: '#7DAA92',
    phone: '+255 793 329 324',
    email: 'test@mail.com',
  },
  {
    name: 'Tanzania Red Cross Society',
    color: '#CACF85',
    phone: '+255 793 329 324',
    email: 'test@mail.com',
  },
];

/**
 * ActivityMembers
 *
 * @function
 * @name ActivityMembers
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ActivityMembers() {
  const Members = members.map(member => (
    <Popover
      content={
        <ActivityStakeholderRole
          name={member.name}
          phone={member.phone}
          email={member.email}
        />
      }
      placement="bottomLeft"
      trigger="hover"
    >
      <Avatar style={{ backgroundColor: member.color }}>
        {
          String(member.name)
            .trim()
            .split('')[0]
        }
      </Avatar>
    </Popover>
  ));
  const MembersComponents = [
    ...Members,
    <Button
      title="Add another Stakeholder"
      type="default"
      icon="plus"
      shape="circle"
      style={{ marginLeft: '5px', fontSize: '12px' }}
    />,
  ];

  return (
    <div>
      <h4 style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 10 }}>
        Stakeholders
      </h4>
      <List
        style={{ display: 'inline' }}
        dataSource={MembersComponents}
        renderItem={Member => Member}
      />
    </div>
  );
}
