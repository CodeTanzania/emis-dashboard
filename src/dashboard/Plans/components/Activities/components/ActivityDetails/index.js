import React from 'react';
import { List, Avatar, Popover, Button } from 'antd';
import PropTypes from 'prop-types';

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
const tasks = [
  {
    name: 'Notify respective stakeholders on the upcoming cleanup',
  },
  {
    name: 'Make sure contractors are well organized and prepared',
  },
  {
    name: 'Notify Ward leaders about upcoming cleanup',
  },
  {
    name: 'Make sure the Municipal responsible is notified',
  },
];

/**
 * StakeholderDetails
 *
 * @function
 * @name StakeholderDetails
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.phone
 * @param {string} props.email
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function StakeholderDetails({ name, phone, email }) {
  return (
    <div>
      <p>
        <Avatar title={name} style={{ backgroundColor: '#7DAA92' }}>
          {
            String(name)
              .trim()
              .split('')[0]
          }
        </Avatar>{' '}
        {name}
      </p>
      <Button icon="mobile" style={{ border: 0, display: 'block' }}>
        {phone}
      </Button>
      <Button icon="mail" style={{ border: 0, display: 'block' }}>
        {email}
      </Button>
    </div>
  );
}

/**
 * ActionHeader
 *
 * @function
 * @name ActionHeader
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function ActionHeader() {
  return (
    <div>
      <h4>Community Organized cleanup</h4>
      <p
        style={{
          fontSize: '12px',
          lineHeight: '20px',
          color: '#909090',
          marginBottom: 0,
        }}
      >
        Dar es Salaam &gt; Floods &gt; Mitigation
      </p>
    </div>
  );
}

/**
 * ActionMembers
 *
 * @function
 * @name ActionMembers
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActionMembers() {
  const Members = members.map(member => (
    <Popover
      content={
        <StakeholderDetails
          name={member.name}
          phone={member.phone}
          email={member.email}
        />
      }
      placement="bottomLeft"
      trigger="click"
    >
      <Avatar title={member.name} style={{ backgroundColor: member.color }}>
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

/**
 * ActionDescription
 *
 * @function
 * @name ActionDescription
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActionDescription() {
  return (
    <div style={{ marginTop: 20 }}>
      <h4 style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 10 }}>
        Description{' '}
        <Button
          title="Edit Description"
          type="default"
          icon="edit"
          style={{ border: 0 }}
        />
      </h4>
      <p>
        This is description component it the long description about the tasks it
        is like a summary and it is supposed to be read by the people who will
        be reviewing the plan and see if it works
      </p>
    </div>
  );
}

/**
 * ActionTasks
 *
 * @function
 * @name ActionTasks
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActionTasks() {
  return (
    <div style={{ marginTop: 20 }}>
      <h4 style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 10 }}>
        Tasks (SOP)
        <Button
          title="Add new Task"
          type="default"
          icon="plus"
          style={{ border: 0 }}
        />
      </h4>
      <List dataSource={tasks} renderItem={task => <p>{task.name}</p>} />
    </div>
  );
}

/**
 * ActionBody
 *
 * @function
 * @name ActionBody
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function ActionBody() {
  return (
    <div>
      <ActionMembers />
      <ActionDescription />
      <ActionTasks />
    </div>
  );
}

/* Props validations */
StakeholderDetails.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
