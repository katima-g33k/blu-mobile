import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Banner, Button, H1, H2, Input } from '../lib/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorWrapper: {
    flex: 1,
  },
  fieldWrapper: {
    flex: 2,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2C6894',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    padding: 15,
  },
});

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    email: PropTypes.string,
    onInput: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    password: PropTypes.string,
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    loggedIn: PropTypes.bool,
  }

  static defaultProps = {
    email: '',
    password: '',
    isLoading: false,
    error: false,
    loggedIn: false,
  }

  componentDidMount() {
    this.handleLogin();
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      Actions.replace('account');
    }
  }

  handleLogin = () => this.props.onLogin(this.props.email, this.props.password)

  handleOnEmailInput = email => this.props.onInput({ email })

  handleOnPasswordInput = password => this.props.onInput({ password })

  renderErrorMessage = () => {
    if (this.props.error) {
      return (
        <Banner type={Banner.TYPES.ERROR}>Invalid email or password</Banner>
      );
    }

    return null;
  }

  render() {
    const { email, password, isLoading } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <H1>BLU</H1>
          <H2>Banque de Livres Usagés</H2>
        </View>
        <View style={styles.errorWrapper}>
          {this.renderErrorMessage()}
        </View>
        <View style={styles.fieldWrapper}>
          <Input
            keyboardType="email-address"
            label="Email"
            onChange={this.handleOnEmailInput}
            style={{ marginBottom: 10 }}
            value={email}
          />
          <Input
            label="Password"
            onChange={this.handleOnPasswordInput}
            returnKeyType="done"
            secureTextEntry
            value={password}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={this.handleLogin}
            disabled={isLoading}
            label={isLoading ? 'Logging In...' : 'Login'}
          />
        </View>
      </View>
    );
  }
}
