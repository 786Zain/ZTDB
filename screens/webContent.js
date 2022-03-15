import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
// import { createStackNavigator } from '@react-navigation/stack';
import { Block, Button, Text, theme } from 'galio-framework';
import { Input } from 'galio-framework';
import { WebView } from 'react-native-webview';

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const videoSite = (props) => {
  return (
    // <Text>Zain</Text>
    <Video src={{ uri: 'https://www.youtube.com/watch?v=qfdShSZZxlg' }} />
    //   <Video
    //     source={{ uri: 'https://www.youtube.com/watch?v=qfdShSZZxlg' }} // Can be a URL or a local file.
    //     ref={(ref) => {
    //       this.player = ref;
    //     }} // Store reference
    //     // onBuffer={this.onBuffer} // Callback when remote video is buffering
    //     // onError={this.videoError} // Callback when video cannot be loaded
    //     style={styles.backgroundVideo}
    //   />
  );
};
export default videoSite;
// const Stack = createStackNavigator();

// const videoSite = (props) => {
//   return (
//     <View style={{ width: '100%', height: 1000 }}>
//       <WebView source={{ uri: `http://192.168.1.10:3333` }} />
//     </View>
//   );
// };
// export default videoSite;
