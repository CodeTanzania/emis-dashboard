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
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './styles.css';
import API from '../../../../common/API';
import { getIncidentsSuccess } from '../../actions';

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
    incidentsTypeData: PropTypes.arrayOf(
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
    getIncidentType: PropTypes.func,
  };

  static defaultProps = {
    incidentsTypeData: null,
    getIncidentType: null,
  };

  componentDidMount() {
    const { getIncidentType } = this.props;
    getIncidentType();
  }

  renderIncidentTypes = incidents =>
    incidents.map(({ incidentType, }) => (
      <Option key={incidentType._id} value={incidentType._id}>
        {incidentType.name}
      </Option>
    ));

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmitButton, area } = this.props;
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (!err) {
        const { geometry } = area;
        const values = {
          ...fieldsValue,
          epicentre: geometry,
          startedAt: fieldsValue.startedAt.toISOString(),
        };
        API.createIncident(values);
      }
      onSubmitButton();
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { onCancelButton, incidentsTypeData } = this.props;

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
        <div className="FormHeader">
          <h3>Record new incident</h3>
        </div>
        <Divider />
        <FormItem {...formItemLayout} label="Incident name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input incident name!',
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Incident type" {...formItemLayout}>
          {getFieldDecorator('incidentType', {
            rules: [
              {
                required: true,
                message: 'Please select incident-type',
              },
            ],
          })(
            <Select placeholder="Select incidentType">
              {this.renderIncidentTypes(incidentsTypeData)}
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
        <FormItem {...formItemLayout} label="Incident Summary">
          {getFieldDecorator('description', {
            rules: [
              { required: true, message: 'Please input the summary you got!' },
            ],
          })(<TextArea rows={4} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Row>
            <Col span={12}>
              <Button type="danger" onClick={onCancelButton}>
                Cancel
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  incidentsTypeData: state.incidents.data ? state.incidents.data : [],
});

const mapDispatchToProps = dispatch => ({
  getIncidentType: bindActionCreators( getIncidentsSuccess, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(IncidentForm));
