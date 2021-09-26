import { CommonActions, useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { AppTheme } from '../themes'

export const Page2Screen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Hello, World!',
            headerBackTitle: 'a',
        });
    }, []);

    return (
        <View style={ AppTheme.margin }>
            <Text style={ AppTheme.title }>Page 2 Screen</Text>

            <Button 
                title="Goto Page 3"
                onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Page3Screen'}))}
            />
        </View>
    )
}
