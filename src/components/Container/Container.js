import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';


const Container = ({children}) =>{
    return (
        <ScrollView style={styles.scroll}>
            {children}
        </ScrollView>
    );
}

export default Container;

const styles = StyleSheet.create({
    flex:1,
    paddinn:"10%",
});