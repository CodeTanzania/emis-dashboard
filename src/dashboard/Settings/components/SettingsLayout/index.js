import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Col, Input, Row, Layout } from 'antd';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { searchIncidentType } from '../../actions';
import SidebarSettings from './components/SidebarSettings';
import ColHeader from '../../../../common/components/ColHeader';
import IncidentType from './components/SystemSettings/Components/SettingsIncidentTypeList';
import IncidentDetails from './components/SystemSettings/Components/SettingsIncidentTypeDetails';
import IncidentTypeForm from './components/SystemSettings/Components/SettingsIncidentTypeForm/IncidentTypeForm';
import EditIncidentTypeForm from './components/SystemSettings/Components/SettingsIncidentTypeForm/EditIncidentTypeForm';

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

class SettingsLayout extends React.Component {
  /* props validations for SettingsLayout */
  static propTypes = {
    incidentType: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        cap: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }).isRequired
    ),
    searchIncidentTypeValue: PropTypes.func,
  };

  static defaultProps = {
    incidentType: null,
    searchIncidentTypeValue: null,
  };

  onSearch = searchValue => {
    const { searchIncidentTypeValue } = this.props;
    searchIncidentTypeValue(searchValue);
  };

  render() {
    const { incidentType } = this.props;

    return (
      <Layout
        style={{
          background: '#fff',
        }}
      >
        <Row>
          <Col span={4} className={cx('section')}>
            <ColHeader className={cx('SettingLayoutContentHeader')} />
            <Content className={cx('SettingLayoutContent')}>
              <SidebarSettings title="System" />
            </Content>
          </Col>
          <Col span={6} className={cx('section')}>
            <ColHeader className={cx('SettingLayoutContentHeader')}>
              <Row type="flex" justify="space-around">
                <Col span={19}>
                  <Search
                    placeholder="Search here"
                    style={{ width: '100%' }}
                    onSearch={value => this.onSearch(value)}
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
            <ColHeader className={cx('SettingLayoutContentHeader')}>
              <Row>
                <Col span={1}>
                  <IncidentTypeForm />
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
    );
  }
}

const mapStateToProps = state => ({
  incidentsType: state.incidentsType.data,
  incidentType: state.incidentsType.incidentType
    ? [state.incidentsType.incidentType]
    : [],
});

const mapDispatchToProps = dispatch => ({
  searchIncidentTypeValue: bindActionCreators(searchIncidentType, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsLayout);
