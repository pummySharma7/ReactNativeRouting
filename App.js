import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {AppContextProvider} from "./src/Context/AppContextProvider";
import {RootApplication} from "./src/Stacks/MyRoutes";

export default function App() {
  return (
    <AppContextProvider>
    <NavigationContainer>
     <RootApplication/>
    </NavigationContainer>
    </AppContextProvider>
    
  );
}
