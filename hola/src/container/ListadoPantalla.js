import React, { useState } from 'react';
import { Text, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from '../styles/styles';

function ListadoPantalla() {

  const [fruit,setFruit]=useState(null);
  const [price,setPrice]=useState(null);
  
  const onPress = () => {
    if (isNaN(price)){
      Alert.alert("Introduce en el precio un numero")
    }else{
      fetch('http://10.0.2.2:8080/fruits', {
        method: 'POST', 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": fruit,
          "price": price
        }),   
      })
      .then((responseJson) => {
        console.log('getting data from fectch', responseJson);
        Alert.alert("Fruta añadida correctamente")
        setFruit(null);
        setPrice(null);
      })
      .catch(error => console.log(error));
      }
    }
  
  return (
    <View  style={styles.container}>
      <Text style={styles.informacion}> Agrega una fruta nueva </Text>
      <View style={styles.busqueda}>
        <Text style={styles.frutas}> Frutas </Text>
        <ModalDropdown style={styles.select} textStyle={styles.opciones} defaultValue='Listado' 
          dropdownStyle={styles.modal}
          options={['Pina', 'Manzana','Melocoton', 'Uvas','Naranja','Kiwi','Platano','Pera']}
          onSelect={(id, fruit) => setFruit(fruit)}/>
      </View>
      <View style={styles.busqueda}>
        <Text style={styles.frutas}> Precio </Text>
        <TextInput style={styles.input} onChangeText={price => setPrice(price)} keyboardType="numeric" />
      </View>  
      <View style={styles.boton}>
      <TouchableOpacity title='Añadir' onPress={onPress}>
      <Text style={styles.botonText}> Añadir </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default ListadoPantalla;