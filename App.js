import { Image, StyleSheet, Text, View } from 'react-native';
import Touch3Component from './src/components/Touch3Component';
import Touch2Component from './src/components/Touch2Component';
import Touch1Component from './src/components/Touch1Component';

export default function App() {
  return (
    <View style={styles.container}>

      <Touch1Component>
        <Image style={{ width: 150, height: 50 }} source={require('./src/assets/images/img.jpg')} />
      </Touch1Component>

      <Touch2Component>
        <Text style={[styles.text, { color: '#b8df10'}]}>Sign In</Text>
      </Touch2Component>

      <Touch3Component>
        <Text style={[styles.text, { color: 'pink'}]}>Log In</Text>
      </Touch3Component>

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

  text:{
    fontSize: 17,
    letterSpacing: 1,
    fontWeight: 500,
  }
});
