import React from 'react'
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviPoster } from '../components/MoviPoster';
import { useMovies } from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  
  const {NowPlaying, Popular, TopRated, Upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  
  if(isLoading){
    return (
      <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
        <ActivityIndicator color='blue' size={100}/>
      </View>
    )
  }

  return (
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
          />
        </View>

        <HorizontalSlider movies={Popular} title={'Popular'}/>
        <HorizontalSlider movies={TopRated} title={'Top Rated'}/>
        <HorizontalSlider movies={Upcoming} title={'Upcoming'}/>

      </View>
    </ScrollView>
  )
}
