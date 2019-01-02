import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getNavActive } from '../../../actions';

import IncidentDetailsContent from './IncidentDetailContents';
import IncidentAssessiment from './IncidentAssessiment';
import IncidentActionTaken from './IncidentAction';
import IncidentAgencies from './IncidentAgencies';

const { Content } = Layout;

class IncidentGeneralDetails extends React.Component {
  static propTypes = {
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
    const { currentMenu } = this.props;
    const showNavContent = currentNav => {
      switch (currentNav) {
        case 'list': {
          return <IncidentDetailsContent />;
        }
        case 'assessment': {
          return <IncidentAssessiment />;
        }
        case 'actions': {
          return <IncidentActionTaken />;
        }
        case 'agencies': {
          return <IncidentAgencies />;
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
        <Sider
          className="IncidentDetailSider"
          style={{ flex: '0 0 250px', width: '250px', maxWidth: '250px' }}
        >
          <Menu
            onClick={this.handleClick}
            mode="inline"
            selectedKeys={[currentMenu]}
            className="siderDetails"
          >
            <Menu.Item key="list">Situation Analysis</Menu.Item>
            <Menu.Item key="actions">Action Taken</Menu.Item>
            <Menu.Item key="agencies">Responding agencies</Menu.Item>
            <Menu.Item key="resource">Resource needed</Menu.Item>
            <Menu.Item key="assessment">Assessment</Menu.Item>
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
          <Content>
            <span style={{
              float: 'right',
              position: 'relative',
              right: '20px',
              top: '10px',
            }}>
           <Link to="/incidents/map">
              <Icon type="close" style={{
              fontSize:'20px',
              cursor:'pointer',
              color: '#333'
            }}
            />
            </Link>
            </span>
            {showNavContent(currentMenu)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentMenu: state.activeNav && state.activeNav.activeItem,
});

const mapDispachToProps = dispatch => ({
  activatedNav: bindActionCreators(getNavActive, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(IncidentGeneralDetails);
