import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, Touchable, ScrollView, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton/CustomButton';
import Input from '../../components/Input/Input';
import { LOGIN } from '../../constants/routesName';


const SignUp = props =>{
    const navigator = useNavigation();
    const [text, onChangeText] = React.useState("");
    const [Password, onChangePassword] = React.useState("");
    const [FirstName, onChangeFirstName] = React.useState("");
    const [LastName, onChangeLastName] = React.useState("");
    const [email, onChangeemail] = React.useState("");
    const getError=()=>
    {
        if(text==""){
            return "This field is Required to fill";
        }
    }
    return(
            <ScrollView style={{flex:1}}>
                <View style={styles.SignUp_container}>
                    <View style={styles.image_container}>
                        <Image style={styles.imageIcon} source={require("../../assets/Images/siginIcon.png")}/>
                    </View>
                    <View style={styles.title_text}>
                        <Text style={styles.wellcome_text}> Wellcome to OsmContact</Text>
                        <Text style={styles.please_SignUp_text}>Please Sign Up Here</Text>
                    </View>
                    <Input
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Enter Username"
                        label = "Username"
                        error= {getError()}
                    />
                    <Input
                        onChangeText={onChangeFirstName}
                        value={FirstName}
                        placeholder="Enter First Name"
                        label = "First Name"
                        // icon="lock"
                    />
                    <Input
                        onChangeText={onChangeLastName}
                        value={LastName}
                        placeholder="Enter Last Name"
                        label = "Last Name"
                        // icon="lock"
                    />
                    <Input
                        onChangeText={onChangeemail}
                        value={email}
                        placeholder="example@example.com"
                        label = "Email"
                        // icon="lock"
                    />
                    <Input
                        onChangeText={onChangePassword}
                        value={Password}
                        placeholder="Enter Password"
                        label = "Password"
                        secureText={true}
                        // icon="lock"
                    />
                    <CustomButton title="Sign Up" bgcolor="#1b8cb5" color= "#fff" />
                    <View style={{flexDirection:"row"}}>
                        <Text >Already have an account?</Text>
                        <TouchableOpacity onPress={()=>{navigator.navigate(LOGIN);}}>
                            <Text style={{marginLeft:6, fontWeight:"bold", color:"#1b8cb5" }}>Login</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </ScrollView>
    );
}

export default SignUp ;
const styles = StyleSheet.create({
    SignUp_container:{
        padding:'4%',
        paddingBottom:100,

    },
    imageIcon:{
        width:170,
        height:170,
    },
    image_container:{
        height:"25%",
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
    please_SignUp_text:{
        fontSize:18,
        fontWeight:"700",
        color:"#7d7b7a",
    },
});