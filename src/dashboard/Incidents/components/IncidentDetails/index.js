import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { connect } from 'react-redux';
import { Button, Drawer } from 'antd';
import { convertIsoDate } from '../../../../common/lib/mapUtil';
import IncidentGeneralDetails from './components/index';
/**
 * Incident details Layout component
 * this component contain detailed
 * information of incident
 *
 * @class
 * @name IncidentDetails
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class IncidentDetails extends React.Component {
  static propTypes = {
    selected: PropTypes.shape({
      name: PropTypes.string.isRequired,
      incidentType: PropTypes.shape({
        name: PropTypes.string.isRequired,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }).isRequired,
      description: PropTypes.string.isRequired,
      startedAt: PropTypes.string.isRequired,
      endedAt: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { selected } = this.props;
    const { name, incidentType = [], startedAt, endedAt } = selected;

    const { name: type } = incidentType;
    return (
      <div className="IncidentDetails">
        <div className="IncidentName">
          <h3 className="p-l-10">{name}</h3>
        </div>
        <div className="IncidentDetail p-20">
          <span>
            <strong>Incident type:</strong>
          </span>{' '}
          {type} <br />
          <span>
            <strong>Reported date:</strong>
          </span>
          {convertIsoDate(startedAt)} <br />
          {endedAt ? (
            <div>
              <span>
                <strong>End date:</strong>
              </span>{' '}
              {convertIsoDate(endedAt)}
            </div>
          ) : null}
          <span>
            <strong>Source:</strong>
          </span>{' '}
          Heavy rainful <br />
          <span>
            <strong>Location:</strong>
          </span>
          <br />
          <div className="IncidentLocation p-l-10">
            <span>
              <strong>Region:</strong>
            </span>
            Dar es Salaam <br />
            <span>
              <strong>District:</strong>
            </span>
            Kinondoni District <br />
            <span>
              <strong>Ward:</strong>
            </span>
            Hananasif <br />
            <span>
              <strong>Street:</strong>
            </span>
            Mkunguni A <br />
          </div>
          <span>
            <strong>Impact:</strong>
          </span>
          <br />
          <div className="IncidentImpacIncidentDetailsDrawert p-l-10">
            <span>
              <strong>Death(s):</strong>
            </span>
            3 <br />
            <span>
              <strong>People affected:</strong>
            </span>
            4 <br />
            <span>
              <strong>Building destroyed:</strong>
            </span>
            5 <br />
            <span>
              <strong>Building Damaged:</strong>
            </span>
            12 <br />
          </div>
          <Button type="primary" onClick={this.showDrawer} className="ReadMore">
            Read more
          </Button>
          <Drawer
            title={name}
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            width="96%"
            className=""
          >
            <IncidentGeneralDetails style={{ overflow: 'hidden' }} />
          </Drawer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selectedIncident.incident
    ? state.selectedIncident.incident
    : {},
});

export default connect(
  mapStateToProps,
  ''
)(IncidentDetails);
