import { Button, Row } from 'antd';
import React from 'react';
import Information from './components/Information';
import PersonnelList from './components/Personnel';
import Responsibilities from './components/Responsibilities';
import SectionContent from './components/SectionContent';
import SectionHeader from './components/SectionHeader';

export default function Details() {
  return (
    <div className="content scrollable">
      {/* start contact detail section */}
      <Row>
        <SectionHeader title="Tanzania Red Cross Society" actions={<Button icon="edit" className="f-20 b-0" />} />
        <SectionContent>
          <Information />
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
