import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image} from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation'
import Anasayfa from './screen/Anasayfa'
import Hakkimizda from './screen/Hakkimizda'

const {width} = Dimensions.get('window')


export default class App extends Component{
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent= (props) =>(
  <SafeAreaView style={{flex:1}}>
  <View style={{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
  <Image source={require('./src/kep.png')} style={{height:90,width:90,borderRadius:60}} />
  </View>
  <ScrollView>
  <DrawerItems {...props}/>
  </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
{
  Anasayfa: Anasayfa,
  Hakkımızda:Hakkimizda
},
{
  contentComponent:CustomDrawerComponent,
  drawerWidth: width,
  contentOptions:{
    activeTintColor:'orange'
  }
}
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
});
