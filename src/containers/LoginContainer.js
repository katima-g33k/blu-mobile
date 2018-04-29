import { connect } from 'react-redux';

import { handleInput, handleLogin } from '../actions/loginActions';
import Login from '../components/Login';

const mapStateToProps = ({ login }) => ({ ...login });
const mapDispatchToProps = dispatch => ({
  onInput: input => dispatch(handleInput(input)),
  onLogin: (email, password) => dispatch(handleLogin(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
