import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TextInput} from 'react-native';
import Index from './wellcome/nav';
const App=()=> {
  return (
    <Index></Index>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});