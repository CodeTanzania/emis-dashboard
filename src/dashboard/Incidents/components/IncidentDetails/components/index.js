import React from 'react';
import { Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getNavActive } from '../../../actions';
import IncidentDetailsContent from './IncidentDetailContents';
import IncidentAssessiment from './IncidentAssessiment';
import IncidentActionTaken from './IncidentAction';

const { Content } = Layout;

class IncidentGeneralDetails extends React.Component {
  static propTypes = {
    incidentSelected: PropTypes.shape({
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
    activatedNav: PropTypes.func,
    currentMenu: PropTypes.string.isRequired,
  };

  static defaultProps = {
    activatedNav: null,
  };

  handleClick = data => {
    const { activatedNav } = this.props;
    activatedNav(data.key);
  };

  render() {
    const { currentMenu, incidentSelected } = this.props;
    const showNavContent = currentNav => {
      switch (currentNav) {
        case 'details': {
          return <IncidentDetailsContent selected={incidentSelected} />;
        }
        case 'assessment': {
          return <IncidentAssessiment />;
        }
        case 'actions': {
          return <IncidentActionTaken />;
        }
        case 'agencies': {
          return <h3>hello agencies</h3>;
        }
        case 'resource': {
          return <h3>resource</h3>;
        }
        case 'recomandation': {
          return <h3>recomandation</h3>;
        }
        default:
          return false;
      }
    };
    return (
      <Layout className="IncidentGeneralDetails">
        <Sider className="IncidentDetailSider">
          <Menu
            onClick={this.handleClick}
            mode="inline"
            selectedKeys={[currentMenu]}
            className="siderDetails"
          >
            <Menu.Item key="list">Situation Analysis</Menu.Item>
            <Menu.Item key="assessment">Assessment</Menu.Item>
            <Menu.Item key="actions">Action Taken</Menu.Item>
            <Menu.Item key="agencies">Responding agencies</Menu.Item>
            <Menu.Item key="resource">Resource needed</Menu.Item>
            <Menu.Item key="recomandation">Recomendation</Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            background: '#fff',
            borderTop: '1px solid #e6e6e6',
          }}
        >
          {' '}
          <Content>{showNavContent(currentMenu)}</Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentMenu: state.activeNav && state.activeNav.activeItem,
  incidentSelected: state.selectedIncident.incident
    ? state.selectedIncident.incident
    : [],
});

const mapDispachToProps = dispatch => ({
  activatedNav: bindActionCreators(getNavActive, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(IncidentGeneralDetails);
