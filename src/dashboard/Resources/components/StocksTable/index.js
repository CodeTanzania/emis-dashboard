import { connect } from 'react-redux';
import { getResourceStocks, showStockAdjustmentForm } from '../../actions';
import StocksTable from './StocksTable';

const mapStateToProps = state => ({
  stocks: state.resourceStocks,
  loadingStocks: state.fetchingResourceStocks,
});
const mapDispatchToProps = {
  getResourceStocks,
  showStockAdjustmentForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksTable);
