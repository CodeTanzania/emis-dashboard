import React, { Component, Fragment } from 'react';
import { Button, Row, Col, Divider, AutoComplete, Input, Icon } from 'antd';
import './styles.css';


class AddPersonnelForm extends Component {
  state = { showAddPersonnelForm: false, dataSource: [], selected: null };

  onSelect = (value) => {
    console.log(value);
    this.setState({ selected: value });
  }

  handleSearch = (value) => {
    this.setState({ selected: null });
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { showAddPersonnelForm, dataSource, selected } = this.state;
    return (<Fragment>
      {
        showAddPersonnelForm ? '' : (
          <Row type="flex" align="middle" justify="center">
            <Col span={10}>
              <div>
                <div style={{ width: '100%' }}>
                  <AutoComplete
                    className="search-stakeholder"
                    style={{ width: '100%' }}
                    dataSource={dataSource}
                    onSelect={this.onSelect}
                    onSearch={this.handleSearch}
                    placeholder="Search stakeholder...."
                  >
                    <Input
                      suffix={selected ? (
                        <Button className="search-btn" type="primary">
                          <Icon type="plus" /> Add
                    </Button>
                      ) : (
                          <Button className="search-btn" type="primary" disabled>
                            <Icon type="plus" /> Add
                    </Button>
                        )}
                    />
                  </AutoComplete>
                </div>
                <Divider><div>OR</div></Divider>
                <Button type="primary" block className='block' >Create New Personnel</Button>
              </div>
            </Col>
          </Row>
        )
      }

    </Fragment>)
  }
}

export default AddPersonnelForm;