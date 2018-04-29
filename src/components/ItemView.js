import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import I18n from '../lib/i18n';
import Item from '../lib/models/Item';
import { Barcode, Text } from '../lib/components';

const styles = StyleSheet.create({
  container: {},
});

export default class ItemView extends Component {
  static propTypes = {
    item: PropTypes.instanceOf(Item).isRequired,
  }

  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <Barcode code={item.ean13} />
        <Text>{I18n('item.author', { author: item.authorString })}</Text>
        <Text>{I18n('item.edition', { edition: item.edition })}</Text>
        <Text>{I18n('item.editor', { editor: item.editor })}</Text>
        <Text>{I18n('item.publication', { publication: item.publication })}</Text>
        <Text>{I18n('item.status', { status: item.getStatus() })}</Text>
        <Text>{I18n('item.inStock', { inStock: item.inStock })}</Text>
        <Text>{I18n('item.avgPrice', { avgPrice: item.averagePrice })}</Text>
      </View>
    );
  }
}
