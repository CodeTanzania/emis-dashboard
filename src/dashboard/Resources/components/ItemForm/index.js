import { connect } from 'react-redux';
import {
  dismissResourceItemForm,
  setResourceSchema,
  getResourceItems,
} from '../../actions';
import ItemForm from './ItemForm';

const mapStateToProps = state => ({
  showForm: state.showResourceItemForm,
  item: state.resourceItemToEdit,
  itemSchema: state.resourceItemSchema,
});

const mapDispatchToProps = {
  dismissItemForm: dismissResourceItemForm,
  setResourceSchema,
  getResourceItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm);
