import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  textWrapper: {
    alignItems: 'center',
    padding: 20,
  },
});

const backgroundColors = {
  INFO: '#D4ECF8',
  SUCCESS: '#D4ECF8',
  WARN: '#FBFBE1',
  ERROR: '#F6DBDC',
}

const types = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARN: 'WARN',
  ERROR: 'ERROR',
}

export default class Banner extends Component {
  static TYPES = types

  static propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(Object.values(types)),
  }

  static defaultProps = {
    type: types.INFO,
  }

  render() {
    const backgroundColor = backgroundColors[this.props.type];

    return (
      <View style={styles.container}>
        <View style={[styles.textWrapper, { backgroundColor }]}>
          <Text>
            {this.props.children}
          </Text>
        </View>
      </View>
    );
  }
}
