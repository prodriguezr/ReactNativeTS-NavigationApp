import React from 'react'
import { Button, Text, View } from 'react-native'
import { AppTheme } from '../themes'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Page3Screen = ({navigation}:Props) => {
    return (
        <View style={ AppTheme.margin }>
            <Text style={ AppTheme.title }>Page 3 Screen</Text>
            <Button
                title="Go back"
                onPress={() => navigation.pop()}
            />
            <Button
                title="Go Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
