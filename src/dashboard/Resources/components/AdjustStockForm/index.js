import { connect } from 'react-redux';
import {
  dismissStockAdjustmentForm,
  setResourceAdjustmentSchema,
} from '../../actions';
import AdjustStockForm from './AdjustStockForm';

const mapStateToProps = state => ({
  stockToAdjust: state.stockToAdjust,
  adjustmentSchema: state.resourceAdjustmentSchema,
});

const mapDispatchToProps = {
  dismissStockAdjustmentForm,
  setResourceAdjustmentSchema,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjustStockForm);
