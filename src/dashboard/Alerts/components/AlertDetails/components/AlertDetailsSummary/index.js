import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import { Icon, Tooltip, Button } from 'antd';
import { getSelectedAlertFromState } from '../../../../actions';
import AlertFieldItem from './components/AlertFieldItem';
import AlertDetailsDrawer from '../AlertDetailsDrawer';
import './styles.css';

const detailsKeys = [
  'headline',
  'reportedAt',
  'expectedAt',
  'expiredAt',
  'instruction',
  'source',
];

class AlertDetailsSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrwaerOpen: false,
    };
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  onClickClose = () => {
    const { history, close } = this.props;
    close();
    history.push('/alerts');
  };

  renderAlertField = keys => {
    const { selectedAlert } = this.props;
    return keys.map(key => (
      <AlertFieldItem
        key={key}
        property={key}
        value={get(selectedAlert, key)}
      />
    ));
  };

  openDrawer = () => {
    this.setState({ isDrwaerOpen: true });
  };

  closeDrawer = () => {
    this.onClickClose();
    this.setState({ isDrwaerOpen: false });
  };

  render() {
    const { selectedAlert } = this.props;
    const { isDrwaerOpen } = this.state;
    return selectedAlert ? (
      <div className="AlertDetailsSummary">
        <div className="Contents">
          {this.renderAlertField(detailsKeys)}
          <Button type="primary" onClick={this.openDrawer}>
            more details
            <Icon type="right" style={{ fontSize: 14 }} />
          </Button>
          <AlertDetailsDrawer
            visible={isDrwaerOpen}
            onCloseDrawer={this.closeDrawer}
          />
        </div>
        <div className="Close">
          <Tooltip placement="topLeft" title={<span>Close</span>}>
            <Icon type="close-square" onClick={this.onClickClose} />
          </Tooltip>
        </div>
      </div>
    ) : null;
  }
}

const mapDispatchToProps = {
  close: getSelectedAlertFromState,
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(AlertDetailsSummary));

AlertDetailsSummary.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  selectedAlert: PropTypes.shape({
    headline: PropTypes.string,
    reportedAt: PropTypes.string,
    expectedAt: PropTypes.string,
    expiredAt: PropTypes.string,
    instruction: PropTypes.string,
    source: PropTypes.string,
  }),
  close: PropTypes.func,
};

AlertDetailsSummary.defaultProps = {
  selectedAlert: null,
  close: () => {},
};
