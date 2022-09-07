import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DeatilScreen'>{};


export const DeatilScreen = ({route}:Props) => {
  const movie = route.params;
  console.log(movie.title)
  return (
    <View style={{backgroundColor:'red'}}>
        <Text>{movie.title}</Text>
    </View>
  )
}
