import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CardView from 'react-native-cardview';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 25,
  },
  content: {},
});

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    contentStyle: PropTypes.oneOfType([PropTypes.shape(), PropTypes.number]),
    style: PropTypes.oneOfType([PropTypes.shape(), PropTypes.number]),
  }

  static defaultProps = {
    contentStyle: {},
    style: {},
  }

  render() {
    return (
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={[styles.container, this.props.style]}
      >
        <View style={[styles.content, this.props.contentStyle]}>
          {this.props.children}
        </View>
      </CardView>
    );
  }
}