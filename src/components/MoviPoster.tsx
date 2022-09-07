import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props{
    movie:Movie;
    height?: number;
    width?: number;
}

export const MoviPoster = ({movie, height = 400, width = 300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={()=>{navigation.navigate('DeatilScreen',movie)}} 
        activeOpacity={0.8}
        style={{
            width,
            height,
            marginHorizontal: 8
        }}
    >
        <View style={styles.containerImage}>
            <Image source={{uri}} style={styles.image}/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius: 18,
    },
    containerImage:{
        flex:1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,

        elevation: 10,
    }
});