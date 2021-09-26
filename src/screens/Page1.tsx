import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native'

import { AppTheme } from '../themes';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any>{};

export const Page1Screen = ({navigation}: Props) => {
    return (
        <View style={ AppTheme.margin }>
            <Text style={ AppTheme.largeButtonText }>Page 1 Screen</Text>

            <Button 
                title="Goto Page 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />

            <Text style={{ ...AppTheme.largeButtonText,  fontWeight: 'bold', marginBottom: 3 }}>Navigate with arguments</Text>

            <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                <TouchableOpacity
                    style={{ 
                        ...AppTheme.largeButton,
                        backgroundColor: 'blue'
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 239,
                        name: 'Pablo',
                        age: 46,
                    })}
                    >
                    <Text style={ AppTheme.largeButtonText }>Pablo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ 
                        ...AppTheme.largeButton,
                        backgroundColor: 'red'
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 734,
                        name: 'Hugo',
                        age: 75,
                    })}
                    >
                    <Text style={ AppTheme.largeButtonText }>Hugo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ 
                        ...AppTheme.largeButton,
                        backgroundColor: 'green'
                    }}
                    onPress={ () => navigation.navigate('PersonScreen', {
                        id: 8321,
                        name: 'Magdalena',
                        age: 74,
                    })}
                    >
                    <Text style={ AppTheme.largeButtonText }>Magdalena</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
