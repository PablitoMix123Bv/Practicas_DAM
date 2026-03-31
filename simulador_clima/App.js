import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, } from 'react-native';
import { useState, useEffect} from 'react';

const App = () => {
  const [mensaje, setMensaje] = useState("");
  const [clima, setClima] = useState('Soleado');
  const [image, setImg] = useState();
  const [ciudad, setCiudad] = useState("");
  const [colorFondo, setColorfondo] = useState("");
  const [temperatura, setTemperatura] = useState();

  useEffect(() => {
    let tempLocal, mensajeLocal, colorLocal, imagenLocal;
    
    switch (clima) {
      case 'Soleado':
        tempLocal = Math.floor(Math.random() * (40 - 28 + 1)) + 28;
        mensajeLocal = "Un día perfecto para salir";
        colorLocal = "#FFEB3B";
        imagenLocal = require("./assets/images/soleado.jpg");
        break;
      case 'Nublado':
        tempLocal = Math.floor(Math.random() * (25 - 18 + 1))+ 18;
        mensajeLocal = "El cielo estara gris.";
        colorLocal = "#BDBDBD";
        imagenLocal = require("./assets/images/Nublado.jpg");
        break;
      case 'Lluvioso':
        tempLocal = Math.floor(Math.random() * (18 - 12 + 1)) + 12;
        mensajeLocal = "No olvides llevar tu paraguas";
        colorLocal = "#2f71b3";
        imagenLocal = require("./assets/images/Lluvioso.jpg");
        break;
      case 'Tormenta':
        tempLocal = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
        mensajeLocal = "Quedaté en casa y lee un libro";
        colorLocal = "#1a3e61";
        imagenLocal = require("./assets/images/Tormenta.jpg");
        break;
      default:
        tempLocal = 20;
        mensajeLocal = "Selecciona un clima";
        colorLocal = "#ffff";
        imagenLocal = require("./assets/images/default.jpg");
    }
    setTemperatura(tempLocal);
    setMensaje(mensajeLocal);
    setColorfondo(colorLocal);
    setImg(imagenLocal);
  }, [clima]);

  return (
    <View style={[styles.container, { backgroundColor: colorFondo}]}>
      <TextInput
        style = {styles.input}
        placeholder = "Ciudad"
        value = {ciudad}
        onChangeText = {setCiudad}
      />
      <View style = {styles.datosClima}>
        <Image
          style = {styles.imgClima}
          source = {image}
        />
        <Text style = {{width: 110}}>{mensaje}</Text>
        <View style = {styles.tmpContainer}>
          <Text style = {styles.temperaturaTxt}>{temperatura} °C</Text>
          <Text>Temperatura</Text>
        </View>
      </View>
      <View style = {{flexDirection: "row", width: "100%", justifyContent: "space-around", marginBlock: 10}}>
        <TouchableOpacity style = {styles.btn} onPress = {() => setClima("Soleado")}>
          <Text>Soleado</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.btn} onPress = {() => setClima("Nublado")}>
          <Text>Nublado</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.btn} onPress = {() => setClima("Lluvioso")}>
          <Text>Lluvioso</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.btn} onPress = {() => setClima("Tormenta")}>
          <Text>Tormenta</Text>
        </TouchableOpacity>
      </View>
      <TextInput/>
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center"
  },
  datosClima: {
    flexDirection: "row",
    width: "90%",
    // backgroundColor: "purple",
    height: "20%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgClima:{
    height: "undefined",
    width: 150,
    aspectRatio: 1,
    borderRadius: 37,
  },
  btn: {
    // width: "10%",
    backgroundColor: "#85c2ff",
    padding: 10,
    borderRadius: 10
  },
  temperaturaTxt: {
    fontSize: 24, 
    transform: [{scaleY: 5}]
  },
  tmpContainer: {
    flexDirection: "column",
    alignItems: "center", 
    height: 150,
    // backgroundColor: "green", 
    gap: 20,
    justifyContent: "space-around"
  },
  input: {
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 50,
    padding: 10,
    width: "50%",
  }
});
