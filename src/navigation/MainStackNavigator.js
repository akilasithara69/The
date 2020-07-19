import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native' //<== chck the use of this
import { createStackNavigator } from '@react-navigation/stack'// chekc the use of this

// import Screens
import SignInScreen from '../screens/SignInScreen'
import ChatScreen from '../screens/ChatScreen'
import AddGroupScreen from '../screens/AddGroupScreen'
import GroupsScreen from '../screens/GroupsScreen'

const Stack=createStackNavigator()

function ChatFlow(){
    return(
        <NavigationContainer>
            <Stack.Navigator name="chat">
                 
                 <Stack.Screen 
                 name="Sign in Screen" 
                 component={SignInScreen} 
                options={{headerShown:false}}
                 />

                 <Stack.Screen name="Groups Screen"
                  component={GroupsScreen}
                   options={{title:"Groups"}}
                   />

                 <Stack.Screen name="Add Group Screen"
                  component={AddGroupScreen}
                   options={{title:"Add Group"}}
                   />

                <Stack.Screen name="Chat Screen"
                 component={ChatScreen} 
                options={{title:"Chats"}}
                 />


            </Stack.Navigator>
        </NavigationContainer>
    )
}


function MainStackNavigator(){
    return (
        ChatFlow()
    )
}

export default MainStackNavigator






