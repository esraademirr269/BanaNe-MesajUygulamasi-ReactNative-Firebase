import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import MessagesCard from './pages/Messages';

import FlashMessage from "react-native-flash-message";
import colors from './styles/colors';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();

export default () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {//user verisinde değişiklik olursa kontrolü yapıyor
    auth().onAuthStateChanged(user => {
      setUserSession(!user);
    });
  }, [])

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  }
  const Messages = () => {
    return (
      <Stack.Navigator screenOptions={{
        title: 'dertler',
        headerTitleAlign: 'center',
        headerTintColor: colors.darkgreen
      }}  >
        <Stack.Screen name="MessagesPage" component={MessagesCard} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator  >

        {
          !userSession ?
            (
              <Stack.Screen
                name="Messages"
                component={MessagesCard}
                options={{
                  title: 'dertler',
                  headerTitleAlign: 'center',
                  headerTintColor: colors.darkgreen,
                  headerRight: () => <Icon name="logout" size={25} color={colors.darkgreen} onPress={()=>auth().signOut()} />,

                }} />
            )
            :
            (<Stack.Screen
              name="AuthStack"
              component={AuthStack} 
              options={{headerShown:false}}
              />
            )

        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}