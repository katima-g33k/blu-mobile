import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import BarcodeBuilder from 'react-native-barcode-builder';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default class Barcode extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <BarcodeBuilder
          flat
          format="EAN13"
          value={this.props.code}
        />
        <Text style={styles.text}>{this.props.code}</Text>
      </View>
    );
  }
}
