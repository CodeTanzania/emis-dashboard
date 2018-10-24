import PropTypes from 'prop-types';
import React from 'react';
import { Row, Col, Divider } from 'antd';

function SytemDetail({ title, names }) {
  return (
    <div>
      {title}
      <Row>
        <Col span="24">
          {names.map(({ name, message }, i) => (
            <div
              className="p-l-10"
              style={{
                color: '#909090',
                fontSize: '11px',
              }}
              key={i.toString()}
            >
              <p>{name}</p>
              <p className="p-l-10"> {message}</p>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}

/* props validation */
const dataPropTypes = PropTypes.shape({
  name: PropTypes.string,
  title: PropTypes.string,
}).isRequired;

SytemDetail.propTypes = {
  title: PropTypes.string,
  names: PropTypes.arrayOf(dataPropTypes),
};

SytemDetail.defaultProps = {
  title: null,
  names: null,
};

function SidebarSettings({ title }) {
  const data = {
    systemSetting: [
      { name: 'Incident Type', message: '' },
      { name: 'Alert Category', message: 'Message type' },
      { name: 'Warning Type', message: '' },
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
}

export default SidebarSettings;
SidebarSettings.propTypes = {
  title: PropTypes.string,
};

SidebarSettings.defaultProps = {
  title: '',
};
