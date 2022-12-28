import React from 'react';
import {ScrollView, StyleSheet,View} from 'react-native';
import Topo from './Topo';
import Detalhes from './detalhes';
import Itens from './item';

export default function Cesta({topo,detalhes,itens}) {
    return <ScrollView>
    <Topo {...topo}/>
    <View style = {estilos.detalheFazenda}>
    <Detalhes {...detalhes}/>
    <Itens {...itens}></Itens>
    </View>
   
    
    </ScrollView>
}

const estilos = StyleSheet.create({
    detalheFazenda:{
        paddingVertical : 8,
        paddingHorizontal : 16
    },
})