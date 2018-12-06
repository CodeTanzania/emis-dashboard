import { connect } from 'react-redux';
import { getResourceStocks, showAdjustStockForm } from '../../actions';
import StocksTable from './StocksTable';

const mapStateToProps = state => ({
  stocks: state.resourceStocks,
  loadingStocks: state.fetchingResourceStocks,
});
const mapDispatchToProps = {
  getResourceStocks,
  showAdjustStockForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StocksTable);
