import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';
import {} from '../actions';

class Scan extends Component {
    render() {
      return (
        <View>
          <Text>
            Cocuou
          </Text>
        </View>
      );
  }
}
const mapStateToProps = ({ ask }) => {
  const {} = ask;

  return {};
};

export default connect(mapStateToProps, {})(Scan);
