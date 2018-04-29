import { connect } from 'react-redux';

import CopyList from '../components/CopyList';
import { getItem } from '../actions/itemActions';

const mapStateToProps = ({ copies }) => ({ ...copies });
const mapDispatchToProps = dispatch => ({
  openItem: copy => dispatch(getItem(copy.item.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CopyList);
