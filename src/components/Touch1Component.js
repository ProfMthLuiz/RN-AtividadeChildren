import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Touch1Component({children}) {
  return (
      <TouchableOpacity style={styles.btn} onPress={() => alert("Image!")}>
        {children}
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn:{                 // Largura do TouchableOpacity
    alignItems: 'center',        // Alinhamento dos itens no eixo transversal
    justifyContent: 'center',    // Alinhamento dos itens no eixo principal
    marginBottom: 20,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: '#000000',
    width: 700,                 // Largura do TouchableOpacity
    height: 150,                  // Altura do TouchableOpacity
  }
});
