import React from 'react'
import { Text, View,  } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';

import { Cast } from '../interfaces/creditsInterfaces';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props{
    movieFull: MovieFull;
    cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }:Props) => {
  return (
    <>
        {/* Detalles */}
        <View style={{ marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icon name='star-outline' color='grey' size={16}/>
                <Text style={{color:'grey'}}> { movieFull.vote_average }</Text>
                <Text style={{color:'grey', marginLeft: 5}} >
                    - { movieFull.genres.map(g=> g.name).join(', ') }
                </Text>
            </View>

            {/* Historia */}
            <Text style={{color: 'black', fontSize:23, marginTop: 10, fontWeight: 'bold'}}>
                Historia
            </Text>

            <Text style={{color:'black', fontSize:15}}>{ movieFull.overview }</Text>

            {/* Presupuesto */}
            <Text style={{color: 'black', fontSize:23, marginTop: 10, fontWeight: 'bold'}}>
                Presupuesto
            </Text>

            <Text style={{color:'black', fontSize:15}}>{ currencyFormatter.format(movieFull.budget, {code: 'USD'}) }</Text>

        </View>

        {/* Cansting */}
        <View style={{marginTop: 10, marginBottom: 100}}>
            <Text style={{color: 'black', fontSize:23, marginTop: 10, fontWeight: 'bold', marginHorizontal:20}}>
                Actores
            </Text>

            <FlatList
                data={cast}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=> <CastItem actor={item}/>}
                horizontal={ true }
                style={{marginTop:10, height:70, }}
            />
            
        </View>


    </>
  )
}
