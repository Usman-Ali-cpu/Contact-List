import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';

const SignUp = props =>{
    const [text, onChangeText] = React.useState("");
    return(
        <View style={styles.sign_up_container}>
            <Input
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter username"
                label = "Username"
                error="This field is Required"
            />
            <Input
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Password"
                label = "Password"
                icon="lock"
            />
        </View>
    );
}

export default SignUp ;
const styles = StyleSheet.create({
    sign_up_container:{
        padding:'4%',
    },
    

});