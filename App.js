import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Home from './src/Componentes/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <StatusBar style="auto" />
      <Home/>
    </SafeAreaView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: 'white',
  },
});
