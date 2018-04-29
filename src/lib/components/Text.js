import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text as ReactNativeText } from 'react-native';

const styles = StyleSheet.create({
  container: {},
});

export default class Text extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <ReactNativeText style={styles.container}>
        {this.props.children}
      </ReactNativeText>
    );
  }
}
