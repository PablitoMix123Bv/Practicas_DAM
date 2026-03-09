// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react';

const App = () => {
  const [time, setTime] = useState(new Date());

  // Uso de useEffect()
  /*Efecto que se ejecuta cuando el componente se renderiza, actualiza el 
    cada SEGUNDO, la función se ejecuta una sola vez cuando el componente se 
    monta y se limpia el componente cuando se desmota que el intervalo siga
    ejecutándose.
  */
  useEffect( () => {
      const interval = setInterval (() => { 
        setTime(new Date());
      }, 1000);
    //Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
    }, []); // El array vacío [] índica que el efecto solo se ejecuta una vez

  // setInterval( () => {
  //   setTime(new Date());
  // }, 1000);

  const renderClock = (countryCode, TzIdentifier) => {
    const parts = new Intl.DateTimeFormat(countryCode, {
      timeZone: TzIdentifier,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).formatToParts(time);


    const hour = parts.find(p => p.type === 'hour').value;
    const minute = parts.find(p => p.type === 'minute').value;
    const period = parts.find(p => p.type === 'dayPeriod')?.value || "";

    return (
      <View style = {styles.clockContainer}>
        <Text style = {styles.txtStyle}>
          {hour}:{minute}
        </Text>
          <Text style = {[styles.txtStyle, {fontWeight: "normal", transform: [{scaleY: 1}]}]}>{period}</Text>        
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.clock}>Clock</Text>      
      <Text>Ciudad de México</Text>
      {renderClock('en-US', 'America/Mexico_City')}
      <Text>Dubai</Text>
      {renderClock('en-US', 'Asia/Dubai')}
      <Text>Madrid</Text>
      {renderClock('en-US', 'Europe/Madrid')}
      <Text>Dublin</Text>
      {renderClock('en-US', 'Europe/Dublin')}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  clockContainer: {
    width: "40%",
    aspectRatio: 1,
    backgroundColor: "black",
    borderRadius: "25%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  txtStyle: {
    fontSize: 30,
    color: "#ffffff",
    transform: [{scaleY: 4}],
    fontWeight: "bold",
  }
});
