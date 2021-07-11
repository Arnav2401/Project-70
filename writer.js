import * as React from "react";
import { View,Text, TextInput, StyleSheet,TouchableOpacity, Touchable } from "react-native";


export default class Writer extends React.Component{

    constructor(){
        super()
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <TextInput
                style={styles.input}
                placeholder='Title'
                /> 
            
                 <TextInput
                style={[styles.input,{marginTop:30}]}
                placeholder='Author'
                /> 

                <TextInput
                style={[styles.input,{marginTop:30},{height:320}]}
                placeholder='Write Your Story'
                multiline={true}
                /> 

                </View>
                <TouchableOpacity>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    input:{
        justifyContent:'center',
        textAlign:'center',
        marginTop:80,
        borderWidth:3,
        width:380,
       height:50
    },
    button:{
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        color:'white',
        backgroundColor:'black',
        height:60,
        paddingTop:20,
        fontWeight:'bold',
        
    }
})