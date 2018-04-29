import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Copy from '../lib/models/Copy';
import { Text, TouchableCard } from '../lib/components';
import I18n from '../lib/i18n';

const getTotal = copies => copies.reduce((total, copy) => total + copy.price, 0);

export default class CopiesSummaryCard extends Component {
  static propTypes = {
    copies: PropTypes.arrayOf(PropTypes.instanceOf(Copy)).isRequired,
    labelKey: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  handlePress = () => this.props.onPress(this.props.copies)

  render() {
    const { copies, labelKey } = this.props;

    return (
      <TouchableCard onPress={this.handlePress}>
        <Text>
          {I18n(`account.stats.${labelKey}`, { quantity: copies.length, amount: getTotal(copies) })}
        </Text>
      </TouchableCard>
    );
  }
}
