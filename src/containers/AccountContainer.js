import { connect } from 'react-redux';

import Account from '../components/Account';
import { getMember } from '../actions/accountActions';
import { listCopies } from '../actions/copiesActions';

const mapStateToProps = ({ account }) => ({ ...account });
const mapDispatchToProps = dispatch => ({
  getMember: no => dispatch(getMember(no)),
  openCopiesList: copies => dispatch(listCopies(copies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
