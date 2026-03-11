// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useEffect, useState} from 'react';

const App = () => {
  const [contador, setContador] = useState(0); //Almacenaremos el valor del estado de ánimo.
  const [mensajeActual, setMensajeActual] = useState("");
  const [imagenActual, setimagenActual] = useState("");
  const [sentimientActual, setSentimiento] = useState("");
  const sentimiento = ["Enojado", "Estresado", "Triste", "Reflexivo", "Feliz"]
  const mensajes = ["Estar enojado en ciertas ocaciones no ayuda en nada, piensa claramente y si es necesario platica con alguien el motivo",
    "Tranquilo, toma aire y respira el estrés puede ser un cámino a la desesparación caminar podría hacerte reflexionar",
    "Es normal sentirse triste, salir a caminar y tomar el aire podría ayudarte en momentos como estos.",
    "Acompañar la reflexión con una caminata siempre es una buena idea, sal, camina y observa el paisaje que el mundo te regala.",
    "La felicidad es un sentimiento que no ha diario se siente, aprovecha de este momento y vivelo al máximo, toma fotos y agradece."]

  const HandleIncrement = () => {
      if(contador < mensajes.length - 1){
        setContador((contadorPrev) => contadorPrev + 1)                
      }      
  }
  const HandleDecrement = () => {
    if (contador > 0){
      setContador((contadorPrev) => contadorPrev - 1);
    }
  }
  useEffect ( () => {
    const catalogoImagenes = [
      require("./assets/images/Enojado.jpg"),
      require("./assets/images/Estresado.jpg"),
      require("./assets/images/Triste.jpg"),
      require("./assets/images/Reflexivo.jpg"),
      require("./assets/images/Feliz.jpg")
    ];
    
      setMensajeActual(mensajes[contador]);
      setimagenActual(catalogoImagenes[contador]);
      setSentimiento(sentimiento[contador]);
    
    }, [contador]
  )
  return (
    <View style={styles.container}>
      <View style = {styles.animoContainer}>
        <Image style = {styles.imgContainer}
          source = {imagenActual}
        />
        <Text>{sentimientActual}</Text>
        <Text style = {{textAlign: "justify"}}>{mensajeActual}</Text>
        <Text>Nivel de ánimo: {contador}</Text>
        <View style = {styles.btnContainer}>
          <TouchableOpacity onPress = {HandleDecrement}>
            <Text style = {{fontSize: 30}}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {HandleIncrement}>
            <Text style = {{fontSize: 30}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeb4b4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animoContainer: {
    width: "66%",
    height: "50%",
    justifyContent: "space-evenly",
    borderWidth: 1,
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ff8d8d"
  },
  imgContainer: {
    width: "100%",
    aspectRatio: 1,
    height: "undefined",
    borderRadius: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around", 
    // margin: 10,
    width: 200
  }
});
