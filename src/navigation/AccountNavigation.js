import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import AccountScreens from '../screens/Account';
const Stack = createStackNavigator();

export default function AccountNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Account" 
              component={AccountScreens} 
              options={{ title:"Account" }}
            />
        </Stack.Navigator>
     )
}
