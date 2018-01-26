import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text style={{ position: 'absolute',fontSize: 0.8,
        fontWeight: '400', transform: [{translate: [0, 0, -6]}],
               layoutOrigin: [0.5, 0.5] }}
                   text='Office Lobby' >Welcome To VR</Text>
                   
        </View>
     
      );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
