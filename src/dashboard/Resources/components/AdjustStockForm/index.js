import { connect } from 'react-redux';
import { cancelAdjustStock, setResourceAdjustmentSchema } from '../../actions';
import AdjustStockForm from './AdjustStockForm';

const mapStateToProps = state => ({
  stockToAdjust: state.stockToAdjust,
  adjustmentSchema: state.resourceAdjustmentSchema,
});

const mapDispatchToProps = {
  cancelAdjustStock,
  setResourceAdjustmentSchema,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjustStockForm);
