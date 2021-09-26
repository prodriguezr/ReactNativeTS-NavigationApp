import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Page1Screen, Page2Screen, Page3Screen, PersonScreen } from "../screens";

export type RootStackParams = {
    Page1Screen: undefined,
    Page2Screen: undefined,
    Page3Screen: undefined,
    PersonScreen: { id: number, name: string, age: number } ,
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name="Page1Screen" options={{ title: "Page 1" }} component={ Page1Screen } />
            <Stack.Screen name="Page2Screen" options={{ title: "Page 2" }} component={ Page2Screen } />
            <Stack.Screen name="Page3Screen" options={{ title: "Page 3" }} component={ Page3Screen } />
            <Stack.Screen name="PersonScreen" component={ PersonScreen } />
        </Stack.Navigator>
    );
}

export default StackNavigator;