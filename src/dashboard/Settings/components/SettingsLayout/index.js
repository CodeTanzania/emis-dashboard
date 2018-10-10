import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Input, Row, Layout, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import SidebarSettings from '../SidebarSettings';

/* load styles */
import styles from './styles.css';
import IncidentType from '../SystemSettings/Components/IncidentTypeList';
import IncidentDetails from '../SystemSettings/Components/IncidentDetails';
import AddNewIncidentType from '../SystemSettings/Components/IncidentTypeForm/AddNewIncidentType';
import EditIncidentTypeForm from '../SystemSettings/Components/IncidentTypeForm/EditIncidentTypeForm';

/* local constants */
const { Header, Content } = Layout;
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
    <Layout
      style={{
        background: '#fff',
        borderTop: '1px solid #e6e6e6',
      }}
    >
      <Row>
        <Col span={4} className={cx('section')}>
          <Header className={cx('ContentHeader')} />
          <Content>
            <SidebarSettings title="System" />
          </Content>
        </Col>
        <Col span={6} className={cx('section')}>
          <Header className={cx('ContentHeader')}>
            <Row type="flex" justify="space-around">
              <Col span={2}>
                <Checkbox />
              </Col>
              <Col span={22}>
                <Search
                  placeholder="Search here"
                  style={{ width: '100%' }}
                  enterButton={<Button icon="search" />}
                />
              </Col>
            </Row>
          </Header>
          <Content>
            <IncidentType />
          </Content>
        </Col>
        <Col span={14} className={cx('section')}>
          <Header className={cx('ContentHeader')}>
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
          </Header>
          <Content>
            <IncidentDetails incidentType={incidentType} />
          </Content>
        </Col>
      </Row>
    </Layout>
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
SettingsLayout.propTypes = {
  incidentType: PropTypes.string.isRequired,
};
