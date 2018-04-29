import { connect } from 'react-redux';

import ItemView from '../components/ItemView';

const mapStateToProps = ({ item }) => ({ ...item });
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
