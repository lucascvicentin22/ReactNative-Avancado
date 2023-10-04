import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './components/Exemplo01';
import Exemplo02 from './components/Exemplo02';
import Exemplo03 from './components/Exemplo03';
import Exemplo04 from './components/Exemplo04';
import Exemplo05 from './components/Exemplo05';
import Exemplo06 from './components/Exemplo06';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo06 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
