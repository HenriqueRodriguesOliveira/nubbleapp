import { ActivityIndicator } from 'react-native'
import React from 'react'
import { Text } from '../Text/Text'
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';


interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
}
export function Button({ title, loading, ...TouchableOpacityBoxProps }: ButtonProps) {
    return (
        <TouchableOpacityBox
            backgroundColor='buttonPrimary'
            paddingHorizontal='s20'
            height={50}
            alignItems='center'
            justifyContent='center'
            borderRadius='s16'
            {...TouchableOpacityBoxProps}
        >
            {loading ? <ActivityIndicator /> :
                <Text preset="paragraphMedium" bold style={{ color: '#FFF', fontFamily: 'Satoshi-Bold' }}>{title}</Text>
            }
        </TouchableOpacityBox>
    )
}