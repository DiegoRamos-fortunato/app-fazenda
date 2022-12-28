import React from 'react';
import { StatusBar,SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta/componentes';
import { useFonts,Montserrat_400Regular,Montserrat_700Bold,Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
import mock from './src/telas/Cesta/mocks/cesta'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    "montserratRegular" : Montserrat_400Regular,
    "montsseratNegrito" : Montserrat_700Bold,
    "montsseratItalic" : Montserrat_400Regular_Italic
  })
  if(!fontsLoaded){
    return <AppLoading/>
  };
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}



