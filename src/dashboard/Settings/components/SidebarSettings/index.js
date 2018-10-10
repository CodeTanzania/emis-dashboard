import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col, Divider } from 'antd';

const SytemDetail = props => {
  const { title, names } = props;
  return (
    <div>
      {title}
      <Row>
        <Col span="24">
          {names.map(({ name, type, message }, i) => (
            <div
              className="p-10"
              style={{
                color: '#909090',
              }}
              key={i.toString()}
            >
              <h3
                style={{
                  color: '#909090',
                }}
              >
                {name}
              </h3>
              <p className="p-l-10"> {type}</p>
              <p className="p-l-10"> {message}</p>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};
SytemDetail.propTypes = {
  title: PropTypes.string,
  names: PropTypes.string,
};
SytemDetail.defaultProps = {
  title: '',
  names: '',
};

const SidebarSettings = ({ title }) => {
  const data = {
    systemSetting: [
      { name: 'Incident', type: 'Type', message: '' },
      { name: 'Alert', type: 'Category', message: 'Message type' },
      { name: 'Warning', type: 'Type', message: '' },
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
          <div style={{ marginBottom: '15px' }}>
            <SytemDetail
              className="p-a-md"
              title={title}
              names={data.systemSetting}
              type={data.systemSetting}
              message={data.systemSetting}
            />
          </div>
          <Divider />
          <SytemDetail title="General" names={data.generalSetting} />
        </Col>
      </Row>
    </div>
  );
};

export default SidebarSettings;
SidebarSettings.propTypes = {
  title: PropTypes.string,
};

SidebarSettings.defaultProps = {
  title: '',
};
