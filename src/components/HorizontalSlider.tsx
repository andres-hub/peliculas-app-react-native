import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviPoster } from './MoviPoster';

interface Props{
    movies: Movie[];
    title?: string;
}

export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View style={{height: (title)? 260: 220}}>
        {
            title &&   <Text style={{fontSize: 30, fontWeight: 'bold', color:'black', marginLeft:10}}>{title}</Text>
        }
        <FlatList
            data={movies}
            renderItem={({item}:any)=> (
            <MoviPoster movie={item} width={140} height={200}/>
            )}
            keyExtractor={(item)=> item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
    </View>
  )
}
