import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#2C6894',
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    padding: 15,
  },
});

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  }

  static defaultProps = {
    children: null,
    disabled: false,
    label: '',
  }

  renderContent = () => {
    if (this.props.children) {
      return this.props.children;
    }

    return (
      <Text style={styles.text}>
        {this.props.label}
      </Text>
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        {this.renderContent()}
      </TouchableOpacity>
    );
  }
}
