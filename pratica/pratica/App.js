import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomModalScreen from './components/CustomModal';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: 'bold',
            }
          }}
          >
            <Tab.Screen name="Slide">
              {() => <CustomModalScreen animation="slide" themeColor="#2196f3" />}
            </Tab.Screen>
            <Tab.Screen name="Fade">
              {() => <CustomModalScreen animation="fade" themeColor="#4caf50" />}
            </Tab.Screen>
            <Tab.Screen name="None">
              {() => <CustomModalScreen animation="none" themeColor="#ff9800" />}
            </Tab.Screen>
          </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}