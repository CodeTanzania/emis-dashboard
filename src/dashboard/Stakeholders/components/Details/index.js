import { Button, Row } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Information from './components/Information';
import PersonnelList from './components/Personnel';
import Responsibilities from './components/Responsibilities';
import SectionContent from './components/SectionContent';
import SectionHeader from './components/SectionHeader';


/**
 * Contact detail view component
 *
 * @function
 * @name Detail
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Details(props) {
  const { selected } = props;
  return (
    <div className="content scrollable">
      {/* start contact detail section */}
      <Row>
        <SectionHeader title={selected.name} actions={<Button icon="edit" className="f-20 b-0" />} />
        <SectionContent>
          <Information stakeholder={selected} />
        </SectionContent>
      </Row>
      {/* end contact detail section */}
      {/* start key personnel section */}
      <Row>
        <SectionHeader title="Key Personnel" actions={<Button icon="plus" className="f-20 b-0" />} />
        <SectionContent>
          <PersonnelList />
        </SectionContent>
      </Row>
      {/* end key personnel section */}
      {/* start responsibilities section */}
      <Row>
        <SectionHeader title="Responsibilities" actions={<Button icon="plus" className="f-20 b-0" />} />
        <SectionContent>
          <Responsibilities />
        </SectionContent>
      </Row>
      {/* end responsibilities section */}
    </div>
  );
}

const mapStateToProps = state => (
  {
    selected: state.contacts.selected
      ? state.contacts.selected : state.contacts.data[0],
  });

export default connect(
  mapStateToProps,
)(Details);

Details.propTypes = {
  selected: PropTypes.object,
};

Details.defaultProps = {
  selected: {},
};
