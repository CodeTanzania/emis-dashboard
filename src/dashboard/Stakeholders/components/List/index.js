import { List } from 'antd';
import React from 'react';
import { connect } from 'react-redux'
import ListFooter from './footer';
/* import component */
import Contact from './item';
import { getStakeholders } from '../../actions';


/**
 * Contacts list component
 *
 * @function
 * @name ContactsList
 *
 * @param {Object} props - data which is an array of contacts
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ContactsList extends React.Component {
  componentDidMount() {
    const { triggerGetStakeholders } = this.props;
    triggerGetStakeholders();
  }

  render() {
    const { stakeholders } = this.props;
    return (
      <React.Fragment>
        <div className="content scrollable">
          <List
            itemLayout="horizontal"
            dataSource={stakeholders}
            renderItem={item => (<Contact {...item} />)}
          />
        </div>
        <ListFooter />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ stakeholders: state.contacts.data });
const mapDispatchToProps = dispatch => ({ triggerGetStakeholders: () => dispatch(getStakeholders()) });


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsList);
