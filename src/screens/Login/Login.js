import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton/CustomButton';
import Input from '../../components/Input/Input';
import { LOGIN, SIGNUP } from '../../constants/routesName';


const Login = props =>{
    const navigator = useNavigation();
    const [text, onChangeText] = React.useState("");
    const [Password, onChangePassword] = React.useState("");
    return(
        <View style={styles.login_container}>
            <View style={styles.image_container}>
                <Image style={styles.imageIcon} source={require("../../assets/Images/siginIcon.png")}/>
            </View>
            <View style={styles.title_text}>
                <Text style={styles.wellcome_text}> Wellcome to OsmContact</Text>
                <Text style={styles.please_login_text}>Please Login Here</Text>
            </View>
            <Input
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Username"
                label = "Username"
                // error="This field is Required"
            />
            <Input
                onChangeText={onChangePassword}
                value={text}
                placeholder="Enter Password"
                label = "Password"
                secureText={true}
                // icon="lock"
            />
            <CustomButton title="Login" bgcolor="#1b8cb5" color= "#fff" />
            <View style={{flexDirection:"row"}}>
                <Text >Not have an account?</Text>
                <TouchableOpacity onPress={()=>{navigator.navigate(SIGNUP);}}>
                    <Text style={{marginLeft:6, fontWeight:"bold", color:"#1b8cb5" }}>Register</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}

export default Login ;
const styles = StyleSheet.create({
    login_container:{
        padding:'4%',

    },
    imageIcon:{
        width:170,
        height:170,
    },
    image_container:{
        height:"35%",
        alignItems:"center",
        justifyContent:"center",
    },
    title_text:{
        justifyContent:"center",
        alignItems:"center",
        height:80,
    },
    wellcome_text:{
        fontSize:24,
        fontWeight:"800",
        marginBottom:10,
        color:"#7d7b7a",
    },
    please_login_text:{
        fontSize:18,
        fontWeight:"700",
        color:"#7d7b7a",
    },
});