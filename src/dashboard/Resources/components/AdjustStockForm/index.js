import { connect } from 'react-redux';
import { cancelAdjustStock } from '../../actions';
import AdjustStockForm from './AdjustStockForm';

const mapStateToProps = state => ({
  stockToAdjust: state.stockToAdjust,
});

const mapDispatchToProps = {
  cancelAdjustStock,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdjustStockForm);
