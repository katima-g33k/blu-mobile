import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

import I18n from '../lib/i18n';
import Member from '../lib/models/Member';
import { Card, H2, Text, TouchableCard } from '../lib/components';
import CopiesSummaryCard from './CopiesSummaryCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginBottom: 10,
  },
});

const formatPhoneNumber = number => number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
const formatDate = (date) => {
  if (!date) {
    return '';
  }

  if (date.format) {
    return date.format('YYYY-MM-DD');
  }

  return moment(date).format('YYYY-MM-DD');
};
const formatZip = zip => zip.replace(/(\w{3})(\w{3})/, '$1 $2');

export default class Account extends Component {
  static propTypes = {
    getMember: PropTypes.func.isRequired,
    member: PropTypes.instanceOf(Member),
    openCopiesList: PropTypes.func.isRequired,
  }

  static defaultProps = {
    member: new Member(),
  }

  componentDidMount() {
    this.props.getMember(200940964);
  }

  handleEditCoordinates = () => {
    alert('edit coordinates');
  }

  handleViewCopies = (copies) => {
    this.props.openCopiesList(copies);
    Actions.push('copyList');
  }

  renderPhone = ({ number, note }) => {
    if (number) {
      return (
        <Text key={number}>
          {formatPhoneNumber(number)}{note ? `(${note})` : ''}
        </Text>
      );
    }

    return null;
  }

  renderPhones = () => this.props.member.phone.map(this.renderPhone)

  render() {
    const { member } = this.props;

    const added = member.account.getAddedCopies();
    const sold = member.account.getSoldCopies();
    const paid = member.account.getPaidCopies();

    return (
      <View style={styles.container}>
        <Card>
          <H2>{I18n('account.state.title')}</H2>
          <Text>{I18n('account.state.registration', { date: formatDate(member.account.registration) })}</Text>
          <Text>{I18n('account.state.lastActivity', { date: formatDate(member.account.lastActivity) })}</Text>
          <Text>{I18n('account.state.deactivation', { date: formatDate(member.account.deactivationDate) })}</Text>
        </Card>
        <TouchableCard
          iconName="create"
          onPress={this.handleEditCoordinates}
        >
          <H2>{I18n('account.coordinates.title')}</H2>
          <Text>{member.address}</Text>
          <Text>{member.city.name}, {member.city.state.name}</Text>
          <Text>{formatZip(member.zip)}</Text>
          {this.renderPhones()}
          <Text>{member.email}</Text>
        </TouchableCard>
        <CopiesSummaryCard
          copies={added}
          labelKey="added"
          onPress={this.handleViewCopies}
        />
        <CopiesSummaryCard
          copies={sold}
          labelKey="sold"
          onPress={this.handleViewCopies}
        />
        <CopiesSummaryCard
          copies={paid}
          labelKey="paid"
          onPress={this.handleViewCopies}
        />
      </View>
    );
  }
}
