import * as React from "react"
import {Text,View} from "react-native"

export default class InScreen extends React.Component{
    render(){
        return(
            <View style={{ flex: 1 }}>
                <Text style={{backgroundColor:"red",marginTop:0,fontSize:30,alignSelf:"center"}}>BUZZ APP</Text>
                 <Text style={{color:"pink",fontSize:30,alignSelf:"center",marginTop:250}}>INSTAGRAM</Text> 
                 <a href="https://www.instagram.com/" alignSelf="center" color="blue">INSTAGRAM</a> 
                 </View>
        
        )
    }
}