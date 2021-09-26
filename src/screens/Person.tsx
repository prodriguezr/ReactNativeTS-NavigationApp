import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { AppTheme } from '../themes'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{};

export const PersonScreen = ({ navigation, route }: Props) => {
    const parms = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: parms.name,
        });
    }, [])

    return (
        <View style={ AppTheme.margin }>
            <Text style={ AppTheme.title }>{ JSON.stringify(parms, null, 3) }</Text>
        </View>
    )
}
