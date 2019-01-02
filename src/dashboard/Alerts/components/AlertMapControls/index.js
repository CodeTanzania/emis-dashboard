import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveDrawnGeometryOperation } from '../../actions';
import DrawControls from '../../../../common/components/DrawControls';

class AlertMapControls extends React.Component {
  constructor(props) {
    super(props);
    this.onDrawCreated = this.onDrawCreated.bind(this);
  }

  onDrawCreated = ({ geometry }) => {
    const { saveGeometry } = this.props;
    saveGeometry(geometry);
  };

  render() {
    return <DrawControls onDrawCreated={this.onDrawCreated} />;
  }
}

const mapDispatchToProps = {
  saveGeometry: saveDrawnGeometryOperation,
};
export default connect(
  null,
  mapDispatchToProps
)(AlertMapControls);

AlertMapControls.propTypes = {
  saveGeometry: PropTypes.func,
};

AlertMapControls.defaultProps = {
  saveGeometry: () => {},
};
