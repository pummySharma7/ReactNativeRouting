import { View, Text } from 'react-native'
import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Welcome = ({navigation}) => {
  return (
    <View style={styles.root}>
        <TouchableOpacity>
            <Text>welcome</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Signin")}>
            <View style={styles.element}>
            <Button title="Sign in " />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
            <View style={styles.element}>
            <Button title="Sign out"/>
            </View>
            </TouchableOpacity>
        </TouchableOpacity>
        
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    element: {
        marginVertical:4
    }
})