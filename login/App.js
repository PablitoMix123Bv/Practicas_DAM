import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);


  const handleLogin = () => {
    setMensaje("");


    if (email.trim() === "" || password.trim() === "") {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    if (!email.includes("@")) {
      setMensaje("El email debe incluir un @");
      return;
    }

    if (password.length < 6) {
      setMensaje("El password debe tener al menos 6 caracteres");
      return;
    }

    setCargando(true);

    setTimeout(() => {
      setCargando(false);
      
      if (email === "admin@test.com" && password === "123456") {
        setMensaje("¡Bienvenido!");
      } else {
        setMensaje("Credenciales incorrectas");
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="logo-facebook" size={60} color="white" style={{ marginTop: 100 }} />
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Iniciar sesión</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Email" 
            value={email} 
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
          />
          
          {cargando ? (
            <ActivityIndicator size="large" color="#0159f1" />
          ) : (
            <TouchableOpacity style = {styles.btn} onPress={handleLogin} ><Text style = {{color: "white"}}>Iniciar Sesión</Text></TouchableOpacity>
          )}

          {mensaje !== "" && (
            <Text style={[
              styles.mensaje, 
              mensaje === "¡Bienvenido!" ? styles.exito : styles.error
            ]}>
              {mensaje}
            </Text>
          )}
          <Text>¿Olvidaste tu contraseña?</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0159f1',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
  loginContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 25,
    gap: 10,
    height: "75%",
    width: "100%",
    paddingBlock: 100,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
  btn: {
    backgroundColor: '#0159f1',
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    width: "100%"
  },
  mensaje: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
  },
  error: { color: 'red' },
  exito: { color: 'green' }
});