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
import { Block, Button, Text, theme } from 'galio-framework';
import { Input } from 'galio-framework';
const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { videoSite } from '../screens/webContent';
import { HeaderHeight } from '../constants/utils';

export default class Onboarding extends React.Component {
  componentDidMount() {
    console.log('Launched Successfully');
  }
  constructor(props) {
    super(props);
    this.registerCall = this.registerCall.bind(this);
    var { height, width } = Dimensions.get('window');
    this.state = {
      screenHeight: height,
      screenWidth: width,
      email: '',
      password: '',
      status: '',
      wholeResult: '',
      baseUrl: 'http://192.168.1.10:3333/zt/users/login',
    };
    this.headers = { 'Content-Type': 'application/json' };
  }

  onClickListener = (viewId) => {
    if (this.state.email || this.state.email != ' ') {
      if (this.state.email) {
        if (this.state.password) {
          this.registerCall();
        } else {
          Alert.alert('Please enter password');
        }
      } else {
        Alert.alert('Please enter email');
      }
    } else {
      Alert.alert("Fields can't be empty");
    }
  };

  registerCall() {
    var { navigation } = this.props;
    var that = this;
    var url = that.state.baseUrl;
    AsyncStorage.multiSet([
      ['email', userInfo.email],
      ['name', userInfo.name],
    ]);
    console.log(
      'url:' + url,
      JSON.stringify({ email: this.state.email, password: this.state.password })
    );

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email: this.state.email, password: this.state.password }),
      headers: this.headers,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (!result.error) {
          Alert.alert(result.message + ' ' + result.id);
          navigation.navigate('videoSite');
        } else {
          Alert.alert(result.message);
          console.log(result);
        }
      })
      .catch(function (error) {
        console.log('-------- error ------- ' + error);
        alert('Technical Issue:' + error);
      });
  }

  render() {
    const { navigation, shadowless, success, error, primary } = this.props;
    const inputStyles = [
      styles.input,
      !shadowless,
      success && styles.success,
      error && styles.error,
      primary && styles.primary,
      { ...this.props.style },
    ];
    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
          <ImageBackground
            source={Images.Onboarding}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>
              <Block middle>
                <Image
                  source={Images.NowLogo}
                  style={{ width: 225, height: 225, bottom: 200, position: 'absolute' }}
                />
              </Block>
              <Input
                placeholder="Enter E-mail ID or Mobile Number"
                placeholderTextColor={nowTheme.COLORS.MUTED}
                style={inputStyles}
                color={nowTheme.COLORS.HEADER}
                onChangeText={(email) => this.setState({ email })}
                // iconContent={
                //   <Icon size={14} color={nowTheme.COLORS.ICON} name="link" family="AntDesign" />
                // }
                {...this.props}
              />
              <Input
                placeholder="Enter Password"
                placeholderTextColor={nowTheme.COLORS.MUTED}
                style={inputStyles}
                color={nowTheme.COLORS.HEADER}
                onChangeText={(password) => this.setState({ password })}
                // iconContent={
                //   <Icon size={14} color={nowTheme.COLORS.ICON} name="link" family="AntDesign" />
                // }
                {...this.props}
              />
              <Block middle row style={{ marginTop: 15, marginBottom: 30 }}>
                <Text color="white" size={16} style={{ fontFamily: 'montserrat-regular' }}>
                  Coded by
                </Text>
                {/* <Image
                  source={Images.CreativeTimLogo}
                  style={{
                    height: 29,
                    width: 129,
                    marginLeft: theme.SIZES.BASE,
                  }}
                /> */}
              </Block>

              <Block
                row
                style={{
                  marginTop: theme.SIZES.BASE * 2.5,
                  marginBottom: theme.SIZES.BASE * 2,
                }}
              >
                <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() => this.onClickListener('sign_up')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    SIGNIN
                  </Text>
                </Button>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
  input: {
    borderRadius: 30,
    borderColor: nowTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: '#FFFFFF',
  },
  success: {
    borderColor: nowTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: nowTheme.COLORS.INPUT_ERROR,
  },
  primary: {
    borderColor: nowTheme.COLORS.PRIMARY,
  },
  shadow: {
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 0.5 },
    shadowRadius: 1,
    shadowOpacity: 0.13,
    elevation: 2,
  },
});
