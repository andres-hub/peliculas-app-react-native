import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Image, View, StyleSheet, Dimensions, Text, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { useMoviesDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
 
const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DeatilScreen'>{};


export const DeatilScreen = ({route, navigation}:Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading, cast, movieFull}  = useMoviesDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
            <Image
            source={{uri}}
            style={styles.posterImage}
            />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
       {
        isLoading
        ?<ActivityIndicator size={30} color='grey' style={{marginTop:20}}/>
        : <MovieDetails movieFull={movieFull!} cast={cast}/>
       }

       <View style={styles.backBotton}>
        <TouchableOpacity onPress={()=> navigation.pop()}>
          <Icon color='withe' name='arrow-back-outline' size={60} />
        </TouchableOpacity>
       </View>

    </ScrollView>
   
  )
}

const styles = StyleSheet.create({
  imageContainer:{
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,
    elevation: 10,
    borderBottomEndRadius:25,
    borderBottomStartRadius:25
  },
  imageBorder:{
    flex:1,
    overflow: 'hidden',
    borderBottomEndRadius:25,
    borderBottomStartRadius:25
  },
  posterImage: {
    flex:1    
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop:20
  },
  subTitle:{
    color: 'grey',
    fontSize: 16,
    opacity: 0.8
  },
  title:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  backBotton:{
    position:'absolute',
    zIndex: 999,
    elevation: 9,
    top: 5,
    left: 5
  }
})