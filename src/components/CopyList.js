import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet, View } from 'react-native';

import Copy from '../lib/models/Copy';
import { H3, Text, TouchableCard } from '../lib/components';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {},
  itemInfo: {
    flex: 1,
  },
});

export default class CopyList extends Component {
  static propTypes = {
    copies: PropTypes.arrayOf(PropTypes.instanceOf(Copy)).isRequired,
    openItem: PropTypes.func.isRequired,
  }

  getCopyKey = copy => copy.id

  renderRow = ({ item: copy }) => ((
    <TouchableCard
      data={copy}
      contentStyle={styles.card}
      hideIcon
      onPress={this.props.openItem}
    >
      <View style={styles.itemInfo}>
        <H3>{copy.item.name}</H3>
        <Text>{copy.item.editor}</Text>
        <Text>{copy.item.authorString}</Text>
      </View>
      <Text>{copy.price}$</Text>
    </TouchableCard>
  ))

  render() {
    return (
      <FlatList
        data={this.props.copies}
        keyExtractor={this.getCopyKey}
        renderItem={this.renderRow}
        style={styles.container}
      />
    );
  }
}
