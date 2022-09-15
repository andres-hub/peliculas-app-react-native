import React, { useContext, useEffect } from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import ImageColors from 'react-native-image-colors';
import { GradientBackground } from '../components/GradientBackground';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviPoster } from '../components/MoviPoster';
import { useMovies } from '../hooks/useMovies';
import { getImageColors } from '../helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  
  const {NowPlaying, Popular, TopRated, Upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number)=>{
    const uri = `https://image.tmdb.org/t/p/w500${NowPlaying[index].poster_path}`;
    const {primary = 'green', secundary = 'orange'} = await getImageColors(uri);
    setMainColors({primary, secundary })
  }

  useEffect(() => {
    if(NowPlaying.length > 0){
      getPosterColors(0);
    }
  }, [NowPlaying])
  
  
  if(isLoading){
    return (
      <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
        <ActivityIndicator color='blue' size={100}/>
      </View>
    )
  }

  return (

    <GradientBackground>
         <ScrollView>

          <View style={{marginTop: top + 20}}>
            <View style={{height:415}}>
              <Carousel 
                data={NowPlaying}
                renderItem={({item}:any)=> (
                  <MoviPoster movie={item}/>
                  )}
                  sliderWidth={windowWidth}
                  itemWidth={300}
                  inactiveSlideOpacity={0.9}
                  onSnapToItem={index=> getPosterColors(index)}
              />
            </View>

            <HorizontalSlider movies={Popular} title={'Popular'}/>
            <HorizontalSlider movies={TopRated} title={'Top Rated'}/>
            <HorizontalSlider movies={Upcoming} title={'Upcoming'}/>

          </View>

        </ScrollView>  
    </GradientBackground>
 
  )
}
