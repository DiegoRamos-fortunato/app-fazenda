import React from "react";
import { Text,StyleSheet,View,Image,TouchableOpacity } from "react-native";
import logo from '../../../../assets/logo.png'

export default function  Detalhes({nome , logoFazenda, nomeFazenda , descricao, preco, tituloBotao}) {
    return <>
    

    <Text style = {estilos.detalheTitulo}>
    {nome}
    </Text>

    <View style = {estilos.NomeElogo}>
    <Image source = {logoFazenda} style = {estilos.logoFazenda}/>
    <Text style = {estilos.tituloFazenda}>{nomeFazenda}</Text>
    </View>

    <Text style = {estilos.DescricaoFazenda}>{descricao}</Text>

    <Text style = {estilos.preco}>{preco}</Text>

    <TouchableOpacity style = {estilos.botao}>
        <Text style = {estilos.textoBotao}>{tituloBotao}</Text>
    </TouchableOpacity>

    </>
}

const estilos = StyleSheet.create({
   
   
    detalheTitulo : {
        fontSize : 26,
        lineHeight : 42,
        color : '#464646',
       fontWeight : 'bold'
    },
    
    tituloFazenda : {
        fontSize : 16,
        lineHeight : 26,
        marginLeft : 8,
        fontWeight : "bold"
    },
    NomeElogo : {
    flexDirection :  'row',
    paddingVertical : 10
    
    },

    logoFazenda : {
        height : 32,
        width : 32
    },
    DescricaoFazenda : {
        color : '#A3A3A3',
        fontSize : 16,
        lineHeight : 26,
        fontFamily : "montsseratItalic"
        
      
    },
    preco : {
        color : '#2A9F85',
        fontSize : 26,
        lineHeight : 42,
        marginTop : 8,
        fontFamily : "montsseratNegrito"
    },
    botao : {
        marginTop : 16,
        backgroundColor : "#2A9F85",
        paddingVertical : 16,
        borderRadius : 6,
    },
    textoBotao : {
        textAlign : "center",
        color : "#ffffff",
        fontFamily : "montsseratNegrito",
        lineHeight : 26,
    }

    
})
