import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default class H1 extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <Text style={styles.container}>
        {this.props.children}
      </Text>
    );
  }
}
