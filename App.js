import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Touch3Component from './src/components/Touch3Component';
import Touch2Component from './src/components/Touch2Component';
import Touch1Component from './src/components/Touch1Component';

export default function App() {
  return (
    <View style={styles.container}>

      <Touch1Component>
        <Image style={{ width: 700, height: 150 }} source={require('./src/assets/images/img.jpg')} />
      </Touch1Component>

      <Touch1Component>
        <ImageBackground style={{ width: 700, height: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)' }} source={require('./src/assets/images/img.jpg')} >
          <View style={{ width: 700, height: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>  
            <Text style={[styles.text, { color: 'white'}]}>Button</Text>
          </View> 
        </ImageBackground>
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
    fontSize: 28,
    letterSpacing: 1,
    fontWeight: 500,
  }
});
