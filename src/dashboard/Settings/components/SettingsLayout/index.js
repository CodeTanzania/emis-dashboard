import classnames from 'classnames';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Input, Row, Layout, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import SidebarSettings from '../SidebarSettings';
import ColHeader from '../../../../common/components/ColHeader';
import IncidentType from '../SystemSettings/Components/IncidentTypeList';
import IncidentDetails from '../SystemSettings/Components/IncidentDetails';
import AddNewIncidentType from '../SystemSettings/Components/IncidentTypeForm/AddNewIncidentType';
import EditIncidentTypeForm from '../SystemSettings/Components/IncidentTypeForm/EditIncidentTypeForm';

/* load styles */
import styles from './styles.css';

/* local constants */
const { Content } = Layout;
const { Search } = Input;
const cx = classnames.bind(styles);

/**
 * Settings layout display
 *
 * @function
 * @name SettingsLayout
 * @param {Object} props
 * @param {string} props.incidentType
 *
 * @version 0.1.0
 * @since 0.1.0
 */

const SettingsLayout = props => {
  const { incidentType } = props;
  return (
    <Fragment>
      <Layout
        style={{
          background: '#fff',
          borderTop: '1px solid #e6e6e6',
        }}
      >
        <Row>
          <Col span={4} className={cx('section')}>
            <ColHeader className={cx('ContentHeader')} />
            <Content className={cx('SettingLayoutContent')}>
              <SidebarSettings title="System" />
            </Content>
          </Col>
          <Col span={6} className={cx('section')}>
            <ColHeader className={cx('ContentHeader')}>
              <Row type="flex" justify="space-around">
                <Col span={1}>
                  <Checkbox />
                </Col>
                <Col span={19}>
                  <Search
                    placeholder="Search here"
                    style={{ width: '100%' }}
                    enterButton={<Button icon="search" />}
                  />
                </Col>
              </Row>
            </ColHeader>
            <Content className={cx('SettingLayoutContent')}>
              <IncidentType />
            </Content>
          </Col>
          <Col span={14} className={cx('section')}>
            <ColHeader className={cx('ContentHeader')}>
              <Row>
                <Col span={1}>
                  <AddNewIncidentType />
                </Col>
                <Col span={1}>
                  <EditIncidentTypeForm incidentType={incidentType[0]} />
                </Col>
                <Col span={21}>
                  <h3>Basic Information</h3>
                </Col>
              </Row>
            </ColHeader>
            <Content className={cx('SettingLayoutContent')}>
              <IncidentDetails incidentType={incidentType} />
            </Content>
          </Col>
        </Row>
      </Layout>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  incidentsType: state.incidentsType.data,
  incidentType: state.incidentsType.incidentType
    ? [state.incidentsType.incidentType]
    : [],
});
export default connect(mapStateToProps)(SettingsLayout);

/* props validations for SettingsLayout */
const incidentTypePropTypes = PropTypes.shape({
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

SettingsLayout.propTypes = {
  incidentType: PropTypes.arrayOf(incidentTypePropTypes),
};
SettingsLayout.defaultProps = {
  incidentType: null,
};
