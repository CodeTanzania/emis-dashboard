import React from 'react';
import {
  Form,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  Divider,
  Select,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { createIncidentSuccess } from '../../actions';
import { causes } from '../../helpers';

import './styles.css';

/**
 * IncidentForm component
 * this component displays  form
 * for creating a new incident
 *
 * @class
 * @name IncidentForm
 *
 * @version 0.1.0
 * @since 0.1.0
 */

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;

class IncidentForm extends React.Component {
  static propTypes = {
    incidents: PropTypes.arrayOf(
      PropTypes.shape({
        event: PropTypes.string,
        incidentsTypeData: PropTypes.shape({
          name: PropTypes.string,
          nature: PropTypes.string.isRequired,
          family: PropTypes.string.isRequired,
          color: PropTypes.string,
          _id: PropTypes.string,
        }),
        description: PropTypes.string.isRequired,
        startedAt: PropTypes.string,
        endedAt: PropTypes.string,
        _id: PropTypes.string,
      }).isRequired
    ),
    polygonFeatures: PropTypes.arrayOf.isRequired,
  };

  static defaultProps = {
    incidents: [],
  };

  renderIncidentTypes = incidents =>
    incidents.map(incidentType => {
      const { type } = incidentType;
      const { _id: id } = type;
      return (
        <Option key={id} value={id}>
          {type.name}
        </Option>
      );
    });

  renderAreas = incidents =>
    incidents.map(({ areas }) =>
      areas.map(area => (
        <Option key={area} value={area}>
          {area}
        </Option>
      ))
    );

  renderCauses = incidentCauses =>
    incidentCauses.map(cause => (
      <Option key={cause} value={cause}>
        {cause}
      </Option>
    ));

  handleSubmit = e => {
    e.preventDefault();
    const { newIncidentAdded, polygonFeatures } = this.props;
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          affected: polygonFeatures,
          startedAt: fieldsValue.startedAt.toISOString(),
          endedAt: fieldsValue.endedAt.toISOString()
            ? fieldsValue.endedAt.toISOString()
            : null,
        };
        newIncidentAdded(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { incidents } = this.props;
    let children = [];
    let incidentCauses = [];
    children = this.renderAreas(incidents);
    incidentCauses = this.renderCauses(causes);

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const config = {
      rules: [
        { type: 'object', required: true, message: 'Please select time!' },
      ],
    };

    return (
      <Form onSubmit={this.handleSubmit} className="IncidentForm">
        <div className="IncidentFormHeader">
          <h3>Record new incident</h3>
        </div>
        <Divider />
        <div className="IncidentFormContent">
          <FormItem {...formItemLayout} label="Incident name">
            {getFieldDecorator('event', {
              rules: [
                {
                  required: true,
                  message: 'Please input incident name!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label="Incident type" {...formItemLayout}>
            {getFieldDecorator('type', {
              rules: [
                {
                  required: true,
                  message: 'Please select incident-type',
                },
              ],
            })(
              <Select placeholder="Select incidentType">
                {this.renderIncidentTypes(incidents)}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Location">
            {getFieldDecorator('areas', {
              rules: [
                {
                  required: true,
                  message: 'Please input location!',
                },
              ],
            })(
              <Select placeholder="Select area" mode="multiple">
                {children}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Date/Time initiated:">
            {getFieldDecorator('startedAt', config)(
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                style={{ width: '100%' }}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="End date:">
            {getFieldDecorator('endedAt')(
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                style={{ width: '100%' }}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Source">
            {getFieldDecorator('causes', {
              rules: [
                {
                  required: true,
                  message: 'Please input causes!',
                },
              ],
            })(
              <Select placeholder="Select causes" mode="multiple">
                {incidentCauses}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Incident Summary">
            {getFieldDecorator('description', {
              rules: [
                {
                  required: true,
                  message: 'Please input the summary you got!',
                },
              ],
            })(<TextArea rows={4} />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Row>
              <Col span={12}>
                <Button type="danger">
                  <Link to="/incidents/map">Cancel</Link>
                </Button>
              </Col>
              <Col span={12}>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
              </Col>
            </Row>
          </FormItem>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : [],
  polygonFeatures: state.featureCollection,
  incidentsAction: state.incidents.incidentActionsData
    ? state.incidents.incidentActionsData
    : [],
});

const mapDispatchToProps = dispatch => ({
  newIncidentAdded: bindActionCreators(createIncidentSuccess, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(IncidentForm));
