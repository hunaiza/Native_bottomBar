import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Noti from '../src/screens/Noti';
import Home from '../src/screens/Home';
import Profile from '../src/screens/Profile';
import Request from '../src/screens/Request';
import {View, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import Services from '../src/screens/Services';
import Svg, {Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import DrawerRoute from './drawer';

const Tab = createBottomTabNavigator();

let screenWidth = Dimensions.get('window').width

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 60,
          backgroundColor: 'purple'
        },
      }}>
      <Tab.Screen
        name="Home"
        component={DrawerRoute}
        options={{
        headerShown: false,
          tabBarIcon: () => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                style={{height: 22, width: 22, tintColor: 'white'}}
                source={require('../assets/icons/bell.png')}
                resizeMode="contain"
              />
              <Text style={{fontSize: 13, color: 'white', bottom: 1}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Noti}
        options={{
          tabBarIcon: () => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                style={{height: 22, width: 22, tintColor: 'white'}}
                source={require('../assets/icons/bell.png')}
                resizeMode="contain"
              />
              <Text style={{fontSize: 13, color: 'white', bottom: 1}}>
                Notification
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                paddingVertical: 10,
                width: '100%',
                height: 80,
                bottom: -2,
                shadowColor: 'black',
                backgroundColor: 'white'
              }}>
              <LinearGradient
                start={{x: 0.7, y: 0.1}}
                end={{x: 0.1, y: 1.0}}
                locations={[0, 0.5, 0.4]}
                colors={['#542068', '#7B215E']}
                style={{
                  top: -35,
                  height: 55,
                  width: 55,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  backgroundColor: '#2b1136',
                  borderRadius: 40,
                }}>
                <TouchableOpacity
                  activeOpacity={1}>
                  <Image
                    source={require('../assets/icons/user.png')}
                    style={{
                      height: 40,
                      width: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </LinearGradient>

              <Svg
                // width={70}
                // height={83.90}
                viewBox={`0 0 75 ${
                  Platform.OS == 'android' ? (screenWidth >= 410 ? 65 : 59) : 54
                }`}
                style={{ top: -15, width: 75, height: 90}}>
                <Path
                  d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                  fill={'purple'}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Request"
        component={Request}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5, backgroundColor: 'purple'}}>
              <Image
                style={{height: 22, width: 22, tintColor: 'white'}}
                source={require('../assets/icons/people.png')}
                resizeMode="contain"
              />
              <Text style={{fontSize: 13, color: 'white', bottom: 1}}>
                Request
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                style={{height: 22, width: 22, tintColor: 'white'}}
                source={require('../assets/icons/user.png')}
                resizeMode="contain"
              />
              <Text style={{fontSize: 13, color: 'white', bottom: 1}}>
                People
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

