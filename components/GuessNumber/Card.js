import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = (props) => {
    return (
            <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

export default Card;


const styles = StyleSheet.create({
    card:{
        // width: 300,
        // maxWidth: '80%',
        // alignItems: 'center',   
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2}, 
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        //borderBottomLeftRadius: 18 // you can also target individual corners like this
        borderRadius: 10,
        padding: 20
    }
})