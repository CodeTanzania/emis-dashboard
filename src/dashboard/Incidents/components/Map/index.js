import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import 'leaflet-draw';
import MapNav from '../MapNav';

import './styles.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import RenderAllIncidents from './components/AllIncidents/index';
import RenderSingleIncident from './components/SingleIncident/index';
import IncidentBaseMap from './components/IncidentBaseMap';

/**
 * IncidentMap component
 * this component render incidents contents
 * on map
 *
 * @function
 * @name IncidentMap
 *
 * @version 0.1.0
 * @since 0.1.0
 */

function IncidentMap({ loading }) {
  const getSpinValue = () => {
    let spin = false;
    if (loading) {
      spin = loading;
    }
    return spin;
  };

  return (
    <div>
      <Spin
        spinning={getSpinValue()}
        tip="Loading..."
        size="large"
        className="IncidentMapSpin"
      >
        <IncidentBaseMap>
          <MapNav />
          <RenderAllIncidents />
          <RenderSingleIncident />
        </IncidentBaseMap>
      </Spin>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.incidents.isLoading,
});

export default connect(mapStateToProps)(IncidentMap);

IncidentMap.propTypes = {
  loading: PropTypes.bool.isRequired,
};
