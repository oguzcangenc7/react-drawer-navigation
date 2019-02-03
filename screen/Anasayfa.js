import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Icons from 'react-native-vector-icons'
import {Header,Left,Right,Icon} from 'native-base'

class Anasayfa extends Component{

    static navigationOptions={
        drawerIcon:({tintColor}) => (
            <Icon name="home" style={{fontSize:24, color:tintColor}} />
        )
    }
    render()
    {
        return(
            <View style={styles.container} >
            <Header>
            <Left>
            <Icon style={{marginLeft:10,}} name="menu" onPress={()=> this.props.navigation.openDrawer()}/>
            </Left>
            </Header>
            <View style={{flex:1,justifyContent: 'center',
            alignItems: 'center',}}>
            <Text>Anasayfa</Text>
            </View>
            
            </View>
        );
    }
}

export default Anasayfa;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'#fff'
        },
    }
)