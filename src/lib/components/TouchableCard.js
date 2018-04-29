import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Card from './Card';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default class TouchableCard extends Component {
  static propTypes = {
    data: PropTypes.shape(),
    children: PropTypes.node.isRequired,
    contentStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.number]),
    hideIcon: PropTypes.bool,
    iconName: PropTypes.string,
    onPress: PropTypes.func.isRequired,
  }

  static defaultProps = {
    contentStyle: {},
    data: undefined,
    hideIcon: false,
    iconName: 'chevron-right',
  }

  handlePress = () => this.props.onPress(this.props.data)

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Card contentStyle={styles.content}>
          <View style={this.props.contentStyle}>
            {this.props.children}
          </View>
          {!this.props.hideIcon ? (
            <Icon name={this.props.iconName} size={25} />
          ) : null}
        </Card>
      </TouchableOpacity>
    );
  }
}
