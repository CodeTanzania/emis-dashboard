import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import SidebarSettings from '../SidebarSettings';
import {
  Button, Col, Input, Row,
  Layout, Checkbox, Icon, Modal
} from 'antd';

/* load styles */
import styles from './styles.css';
import IncidentType from '../SystemSettings/Components/IncidentTypeList';
import IncidentDetails from '../SystemSettings/Components/IncidentDetails';
import IncidentTypeForm from '../SystemSettings/Components/IncidentTypeForm';

/* local constants */
const { Header, Content } = Layout;
const { Search } = Input;
const cx = classnames.bind(styles);

class SettingsLayout extends React.Component {

  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this)
  }
  state = { visible: false, showEditProfile: false };

  handleOnClickEditProfile = () => {
    this.setState({ visible: true, showEditProfile: true });
  };

  handleOnClickAddNewIncidentType = () => {
    this.setState({ visible: true });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, showEditProfile } = this.state;

    return (
      <Layout
        style={{
          background: '#fff',
          borderTop: '1px solid #e6e6e6',

        }}
      >
        <Row>
          <Col span={4} className={cx('section')}>
            <Header className={cx('ContentHeader')}>
            </Header>
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
                    onSearch={value => console.log(value)}
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
                  <Icon style={{ cursor: "pointer" }} type="plus"
                    theme="outlined" onClick={this.handleOnClickAddNewIncidentType}
                  >
                  </Icon>
                </Col>
                <Col span={1}>
                  <Icon style={{ cursor: "pointer" }} type="edit"
                    theme="outlined" onClick={this.handleOnClickEditProfile}
                  >
                  </Icon>
                </Col>
                <Col span={21}>
                  <h3>
                    Basic Information
              </h3>
                </Col>
              </Row>
            </Header>
            <Content>
              <IncidentDetails />
            </Content>
          </Col>
        </Row>
        <Modal
          title={showEditProfile ? 'Settings: Edit Incident-Type' : ' Settings: Add New Incident-Type'}
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          width="50%"
        >
          <IncidentTypeForm handleCancelClick={this.handleCancel} />
        </Modal>
      </Layout>
    )
  }
}
const mapStateToProps = state => ({
  incidentsType: state.incidentsType.data,
});

export default connect(mapStateToProps)(SettingsLayout);

