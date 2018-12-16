import { connect } from 'react-redux';
import { getResourceItems, showResourceItemForm } from '../../actions';
import ItemTable from './ItemTable';

const mapStateToProps = state => ({
  loadingItems: state.fetchingResourceItems,
  items: state.resourceItems,
});

const mapDispatchToProps = {
  getResourceItems,
  showResourceItemForm,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemTable);
