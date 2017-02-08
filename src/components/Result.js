import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';
import {} from '../actions';

export default class Result extends Component {
  render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#50BEE2', padding: 40 }}>
          <Text style={{ fontSize: 40, color: '#FFF' }}>Résultat</Text>
        </View>
      );
  }
}
