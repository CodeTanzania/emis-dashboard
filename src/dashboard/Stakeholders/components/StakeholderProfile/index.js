import React, { Fragment } from 'react';
import { Button, Row } from 'antd';
import { connect } from 'react-redux';
import ColHeader from 'ColHeader';
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
function StakeholderProfile(props) {
  const { stakeholder } = props;

  return stakeholder ? (
    <Fragment>
      {/* start header */}
      <ColHeader>
        <h3>
          Basic Information
            </h3>
      </ColHeader>
      {/* end header */}
      <div className="content scrollable">

        {/* start contact detail section */}
        <Row>
          <SectionHeader title={stakeholder.name} actions={<Button icon="edit" className="f-20 b-0" />} />
          <SectionContent>
            <Information stakeholder={stakeholder} />
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
    </Fragment>
  ) : ''
}

const mapStateToProps = state => ({
  stakeholder: state.stakeholders.selected,
});

export default connect(
  mapStateToProps,
)(StakeholderProfile);

