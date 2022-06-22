import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';




const CustomButton = (props) => {


    return(
        <TouchableOpacity style={[styles.custom_button, {backgroundColor:props.bgcolor} ]}>
            <Text style={[styles.custom_button_title, {color:props.color} ]}>{props.title}</Text>
        </TouchableOpacity>
    );
};
export default CustomButton;

const styles = StyleSheet.create({
    custom_button:{
        // backgroundColor:"grey",
        textAlign:"center",
        height:55,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:10,
    },
    custom_button_title:{
        fontSize:21,
        fontWeight:"600",
    },

});