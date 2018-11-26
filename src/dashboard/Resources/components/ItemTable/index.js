import { connect } from 'react-redux';
import { getResourceItems } from '../../actions';
import ItemTable from './ItemTable';

const mapStateToProps = state => ({
  loadingItems: state.fetchingResourceItems,
  items: state.resourceItems,
});

const mapDispatchToProps = {
  getResourceItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemTable);
