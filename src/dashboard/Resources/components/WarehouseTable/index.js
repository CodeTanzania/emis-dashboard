import { connect } from 'react-redux';
import { getWarehouses, showWarehouseForm } from '../../actions';
import WarehouseTable from './WarehouseTable';

const mapStateToProps = state => ({
  loading: state.fetchingWarehouses,
  warehouses: state.warehouses,
});

const mapDispatchToProps = {
  getWarehouses,
  showWarehouseForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WarehouseTable);
