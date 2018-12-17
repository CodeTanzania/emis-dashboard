import { connect } from 'react-redux';
import {
  dismissWarehouseForm,
  setWarehouseSchema,
  getWarehouses,
} from '../../actions';
import WarehouseForm from './WarehouseForm';

const mapStateToProps = state => ({
  showForm: state.showWarehouseForm,
  warehouse: state.warehouseToEdit,
  warehouseSchema: state.warehouseSchema,
});

const mapDispatchToProps = {
  dismissWarehouseForm,
  setWarehouseSchema,
  getWarehouses,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WarehouseForm);
