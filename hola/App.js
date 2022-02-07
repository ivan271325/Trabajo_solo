import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListadoPantalla from './src/container/ListadoPantalla';
import InformacionPantalla from './src/container/InformacionPantalla';

const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({ 
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Listado') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Frutas') {
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'grey',
          tabBarInactiveBackgroundColor: 'blue',
          tabBarActiveBackgroundColor: 'blue',
        })}
      >


        <Tab.Screen options={{ headerShown: false }} name="Frutas" component={InformacionPantalla}
          options={{
            title: 'Frutas que tenemos',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
            
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoPantalla} 
          options={{
          title: 'Busqueda',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>


  )
}
export default App;