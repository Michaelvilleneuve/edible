import React, { Component } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Alert, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { View } from 'native-base';
import Camera from 'react-native-camera';
import {} from '../actions';

export default class Scan extends Component {

  barCodeRead(e) {
    console.log(e);
    Actions.result({ code: e });
  }


  render() {
      return (
        <View style={s.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            onBarCodeRead={this.barCodeRead.bind(this)}
            style={{ flex: 1 }}
          />
          <View style={s.logoContainer}>
            <Text style={s.logo}>Edible</Text>
          </View>
        </View>
      );
  }
}

const s = {
  container: {
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: Dimensions.get('window').width,
  },
  logo: {
    color: '#50BEE2',
    fontSize: 50,
    fontWeight: '100',
    flex: 1,
    backgroundColor: 'transparent'
  }
};
