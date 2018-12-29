import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSelectedAlertFromState } from '../../actions';
import { get } from 'lodash';
import { Icon, Tooltip } from 'antd';
import AlertFieldItem from './components/AlertFieldItem';
import './styles.css';

const detailsKeys = [
  'headline',
  'reportedAt',
  'expectedAt',
  'expiredAt',
  'instruction',
  'source',
];
function AlertDetailsSummary({ selectedAlert, close }) {
  const onClickClose = () => close();
  const renderAlertField = keys =>
    keys.map(key => (
      <AlertFieldItem
        key={key}
        property={key}
        value={get(selectedAlert, key)}
      />
    ));
  return selectedAlert ? (
    <div className="AlertDetailsSummary">
      <div className="Contents">{renderAlertField(detailsKeys)}</div>
      <div className="Close">
        <Tooltip placement="topLeft" title={<span>Close</span>}>
          <Icon type="close-square" onClick={onClickClose} />
        </Tooltip>
      </div>
    </div>
  ) : null;
}

const mapDispatchToProps = {
  close: getSelectedAlertFromState,
};

export default connect(
  null,
  mapDispatchToProps
)(AlertDetailsSummary);

AlertDetailsSummary.propTypes = {
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
