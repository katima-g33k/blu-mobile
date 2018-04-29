import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFF',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    keyboardType: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    returnKeyType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    style: PropTypes.shape(),
    value: PropTypes.node.isRequired,
  }

  static defaultProps = {
    keyboardType: 'default',
    returnKeyType: 'next',
    secureTextEntry: false,
    style: {},
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput
          keyboardType={this.props.keyboardType}
          onChangeText={this.props.onChange}
          returnKeyType={this.props.returnKeyType}
          secureTextEntry={this.props.secureTextEntry}
          style={styles.input}
          underlineColorAndroid="transparent"
          value={this.props.value}
        />
      </View>
    );
  }
}
