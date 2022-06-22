import React from 'react';
import {View, Text,TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = props => {
    const [focused, setFocused] = useState(false);



    return(
        <View style={styles.outer_container}>
            {props.label && <Text style={styles.label}>{props.label}</Text>}
            <View style={[styles.input_outer_container, focused? {borderColor:"#1b8cb5"}: {borderColor:"grey"}]}>
                <TextInput
                    style={[styles.input]}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={props.placeholder}
                    onFocus={()=>{setFocused(true);}}
                    onBlur={()=>{setFocused(false);}}
                    placeholderTextColor={"grey"}
                    secureTextEntry={props.secureText}
                />
                {props.icon && <Icon name={props.icon} size={30} color="blue"/>}
            </View>
                {props.error && <Text style={styles.error}>{props.error}</Text>}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input:{
        height:50,
        // paddingHorizontal:2,
        width:"85%",
    },
    label:{
        fontSize:18,
        fontWeight:"700",
        padding:4,
    },
    error:{
        fontSize:15,
        fontWeight:'500',
        color:"red",
        padding:2,
    },
    outer_container:{
        marginVertical:10,
    },
    input_outer_container:{
        flexDirection:"row", 
        justifyContent:"space-evenly",
        alignItems:"center",
        borderColor:"grey",
        borderWidth:2,
        borderRadius:5, width:"100%"
    }

})