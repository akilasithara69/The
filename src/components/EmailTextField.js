import React from 'react'
import {TextInput,Text,StyleSheet,View} from 'react-native'
import Color from '../utils/Colors'
import Constants from '../const/Constants'

const EmailTextField=({term,placeHolder,onTermChange,onValidateEmailAddress,error})=>{
    return (
        <View>
            <Text style={styles.error}>{error}</Text>
            <View style={styles.TextFieldView}>

                <TextInput 
                    autoCorrect={false}
                    style={styles.TextFieldView}
                    placeholder={placeHolder}
                    value={term}
                    onChangeText={onTermChange}
                    onEndEditing={onValidateEmailAddress}
                
                />

            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    TextField:{
        fontSize:14,
        flex:1,
        marginHorizontal:20,

    },

    TextFieldView:{
        height:Constants.screenHeight * 0.06,
        width:Constants.screenwidth * 0.85,
        borderRadius:10,
        marginTop:5,
        marginBottom:0, // this part was put by me
        borderColor:Color.black,
        borderWidth:1,
        justifyContent:'center',
        backgroundColor:Color.smoke,
        marginTop:0  // this part i put
        
    },

    ErrorText:{
        fontSize:12,
        color:'red',
        marginBottom:-5,
        marginHorizontal:20


    }
})

export default EmailTextField // when we use default,then we Can use the all the features of this class
// in other classes