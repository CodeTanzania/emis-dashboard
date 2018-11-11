import { Col, Row, Pagination } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchIncidentsTypeSuccess } from '../../../../../../../actions';

class IncidentTypeListFooter extends React.Component {
  static propTypes = {
    total: PropTypes.number,
    page: PropTypes.number,
    handlePagination: PropTypes.func,
  };

  static defaultProps = {
    total: 0,
    page: 1,
    handlePagination: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, page, handlePagination } = this.props;

    return (
      <div className="footer p-10">
        <Row type="flex" justify="space-between">
          <Col span={8}>
            <h3>
              Total : &nbsp;
              {total}
            </h3>
          </Col>
          <Col span={16}>
            <Pagination
              current={page}
              simple
              defaultCurrent={1}
              total={total}
              onChange={handlePagination}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.incidentsType.total,
  page: state.incidentsType.page,
});

const mapDispatchToProps = dispatch => ({
  handlePagination(page) {
    dispatch(fetchIncidentsTypeSuccess({ page }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentTypeListFooter);

IncidentTypeListFooter.propTypes = {
  total: PropTypes.number,
};

IncidentTypeListFooter.defaultProps = {
  total: 0,
};

// import { Col, Row, Pagination } from 'antd';
// import PropTypes from 'prop-types';
// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getNewPage } from '../../../../../../../actions';

// const onChange = props => {
//   const { page, handlePagination } = props;
//   handlePagination(page);
// };

// function IncidentTypeListFooter({ total, page }) {

//   return (
//     <div className="footer p-10">
//       <Row type="flex" justify="space-between">
//         <Col span={8}>
//           <h3>
//             Total : &nbsp;
//             {total}
//           </h3>
//         </Col>
//         <Col span={16}>
//           <Pagination
//             current={page}
//             simple
//             defaultCurrent={1}
//             total={total}
//             onChange={onChange}
//           />
//         </Col>
//       </Row>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   total: state.incidentsType.total,
//   page: state.incidentsType.page,
// });

// const mapDispatchToProps = dispatch => ({
//   handlePagination: bindActionCreators(getNewPage, dispatch),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(IncidentTypeListFooter);
