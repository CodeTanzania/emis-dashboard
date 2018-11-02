import React from 'react';
import PropTypes from 'prop-types';
import { BlockPicker } from 'react-color';

import { List, Avatar, Divider } from 'antd';
import './IncidentTypeDetails.css';

export default function IncidentDetails({ incidentType }) {
  return incidentType ? (
    <div className="content scrollable">
      <List
        itemLayout="horizontal"
        dataSource={incidentType}
        renderItem={({ name, code, family, description, color, nature }) => (
          <List.Item className="p-20">
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor: color,
                    verticalAlign: 'middle',
                  }}
                  size="large"
                >
                  {name.charAt(0)}
                </Avatar>
              }
              title={
                <div>
                  <h3 className="f-600 f-15">{name}</h3>
                  <Divider />
                </div>
              }
              description={
                <div>
                  <span className="IncidentTypeDetail">Nature:</span> {nature}{' '}
                  <br />
                  <span className="IncidentTypeDetail">Family:</span> {family}{' '}
                  <Divider />
                  <span className="IncidentTypeDetail">Code-Given:</span>{' '}
                  {code.given}
                  <br />
                  <span className="IncidentTypeDetail">Code-CAP:</span>{' '}
                  {code.cap}
                  <br />
                  <span className="IncidentTypeDetail">System: </span>
                  Version 1.2.0
                  <Divider />
                  <span className="IncidentTypeDetail">Description</span>
                  <p className="IncidentTypeDiscription">{description}</p>
                  <Divider />
                  <BlockPicker color={color} />
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  ) : (
    <h1> Waiting for data</h1>
  );
}

const incidentDetailPropTypes = PropTypes.shape({
  name: PropTypes.string,
  nature: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  code: PropTypes.shape({
    given: PropTypes.string,
    cap: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
  _id: PropTypes.string,
}).isRequired;

IncidentDetails.propTypes = {
  incidentType: PropTypes.arrayOf(incidentDetailPropTypes),
};

IncidentDetails.defaultProps = {
  incidentType: '',
};
